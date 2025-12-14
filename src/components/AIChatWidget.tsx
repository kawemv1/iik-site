import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

interface AIChatWidgetProps {
  webhookUrl?: string;
}

// Generate or retrieve session ID
const getSessionId = (): string => {
  const STORAGE_KEY = "ai_chat_session_id";
  let sessionId = localStorage.getItem(STORAGE_KEY);
  
  if (!sessionId) {
    // Generate a unique session ID
    sessionId = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
    localStorage.setItem(STORAGE_KEY, sessionId);
    console.log("🆕 [AI Chat] New session ID generated:", sessionId);
  } else {
    console.log("🔄 [AI Chat] Using existing session ID:", sessionId);
  }
  
  return sessionId;
};

// Daily request limit management
const DAILY_LIMIT = 50;
const REQUESTS_STORAGE_KEY = "ai_chat_daily_requests";
const REQUESTS_DATE_KEY = "ai_chat_requests_date";

const getDailyRequests = (): { count: number; date: string } => {
  const today = new Date().toDateString();
  const stored = localStorage.getItem(REQUESTS_STORAGE_KEY);
  const storedDate = localStorage.getItem(REQUESTS_DATE_KEY);
  
  // Reset if it's a new day
  if (storedDate !== today) {
    localStorage.setItem(REQUESTS_STORAGE_KEY, "0");
    localStorage.setItem(REQUESTS_DATE_KEY, today);
    return { count: 0, date: today };
  }
  
  return {
    count: stored ? parseInt(stored, 10) : 0,
    date: today,
  };
};

const incrementRequestCount = (): boolean => {
  const today = new Date().toDateString();
  const current = getDailyRequests();
  
  if (current.count >= DAILY_LIMIT) {
    return false; // Limit reached
  }
  
  const newCount = current.count + 1;
  localStorage.setItem(REQUESTS_STORAGE_KEY, newCount.toString());
  localStorage.setItem(REQUESTS_DATE_KEY, today);
  console.log(`📊 [AI Chat] Request count: ${newCount}/${DAILY_LIMIT}`);
  return true;
};

// Parse markdown to HTML (supports **bold** and *italic*)
const parseMarkdown = (text: string): string => {
  if (!text) return "";
  
  // Escape HTML to prevent XSS
  const escapeHtml = (str: string) => {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  };
  
  let html = escapeHtml(text);
  
  // First parse bold **text** (must be done before italic to avoid conflicts)
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__(.+?)__/g, '<strong>$1</strong>');
  
  // Then parse italic *text* (single asterisk, not part of **)
  // Match *text* but not **text** by using negative lookahead/lookbehind
  html = html.replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, '<em>$1</em>');
  html = html.replace(/(?<!_)_([^_]+?)_(?!_)/g, '<em>$1</em>');
  
  // Parse line breaks
  html = html.replace(/\n/g, '<br />');
  
  return html;
};

const AIChatWidget = ({ webhookUrl = "" }: AIChatWidgetProps) => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sessionIdRef = useRef<string>(getSessionId());
  
  const isDark = theme === "dark";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Jump animation every 10 seconds when chat is closed
  useEffect(() => {
    if (isOpen) return;

    const jumpInterval = setInterval(() => {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 600);
    }, 10000);

    return () => clearInterval(jumpInterval);
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    // Check daily request limit
    if (!incrementRequestCount()) {
      const limitMessage: Message = {
        id: Date.now().toString(),
        text: t("chat.dailyLimitReached"),
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, limitMessage]);
      setInputValue("");
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    console.log("📤 [AI Chat] Sending message:", {
      id: userMessage.id,
      text: userMessage.text,
      timestamp: userMessage.timestamp,
    });

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Get webhook URL from props or environment variable
      const webhook = webhookUrl || import.meta.env.VITE_N8N_WEBHOOK_URL;
      
      if (!webhook) {
        throw new Error("Webhook URL is not configured. Please set VITE_N8N_WEBHOOK_URL in your .env file.");
      }

      console.log("🔗 [AI Chat] Webhook URL:", webhook);
      console.log("🆔 [AI Chat] Session ID:", sessionIdRef.current);

      const requestBody = {
        message: userMessage.text,
        timestamp: userMessage.timestamp.toISOString(),
        sessionId: sessionIdRef.current,
      };

      console.log("📦 [AI Chat] Request body:", JSON.stringify(requestBody, null, 2));

      // Send message to n8n webhook
      const response = await fetch(webhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      console.log("📥 [AI Chat] Response status:", response.status, response.statusText);
      console.log("📥 [AI Chat] Response headers:", Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text().catch(() => "No error details");
        console.error("❌ [AI Chat] HTTP error response:", errorText);
        throw new Error(`HTTP error! status: ${response.status}, details: ${errorText}`);
      }

      // Handle different response types from n8n
      const contentType = response.headers.get("content-type");
      console.log("📋 [AI Chat] Content-Type:", contentType);

      let responseText = "";
      let rawData: any = null;

      if (contentType && contentType.includes("application/json")) {
        rawData = await response.json();
        console.log("📦 [AI Chat] Raw JSON response:", JSON.stringify(rawData, null, 2));
        console.log("📦 [AI Chat] Response type:", Array.isArray(rawData) ? "Array" : typeof rawData);
        
        // Try various possible response formats from n8n
        if (typeof rawData === "string") {
          responseText = rawData;
          console.log("✅ [AI Chat] Found response as string:", responseText);
        } else if (Array.isArray(rawData)) {
          console.log("📊 [AI Chat] Response is array, length:", rawData.length);
          if (rawData.length > 0) {
            const firstItem = rawData[0];
            console.log("📊 [AI Chat] First item:", JSON.stringify(firstItem, null, 2));
            responseText = 
              firstItem?.json?.response ||
              firstItem?.json?.message ||
              firstItem?.json?.text ||
              firstItem?.response ||
              firstItem?.message ||
              firstItem?.text ||
              (typeof firstItem === "string" ? firstItem : "");
            console.log("✅ [AI Chat] Found response in array:", responseText);
          }
        } else if (typeof rawData === "object" && rawData !== null) {
          // Try direct properties
          responseText = 
            rawData.response || 
            rawData.message || 
            rawData.text ||
            rawData.answer ||
            rawData.reply ||
            "";
          console.log("✅ [AI Chat] Found response in object (direct):", responseText);
          
          // Try nested properties
          if (!responseText) {
            responseText = 
              rawData.output?.message ||
              rawData.output?.response ||
              rawData.output?.text ||
              rawData.data?.message ||
              rawData.data?.response ||
              rawData.data?.text ||
              rawData.result?.message ||
              rawData.result?.response ||
              rawData.result?.text ||
              "";
            console.log("✅ [AI Chat] Found response in object (nested):", responseText);
          }
        }
      } else {
        // If response is plain text
        responseText = await response.text();
        console.log("📝 [AI Chat] Plain text response:", responseText);
      }

      // If we still don't have a response, log the full data for debugging
      if (!responseText || responseText.trim() === "") {
        console.warn("⚠️ [AI Chat] No response text found. Full response data:", rawData);
        responseText = t("chat.errorProcessing");
      }

      console.log("✅ [AI Chat] Final response text:", responseText);

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: "ai",
        timestamp: new Date(),
      };

      console.log("💬 [AI Chat] Adding AI response to messages:", aiResponse);
      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error("❌ [AI Chat] Error sending message:", error);
      console.error("❌ [AI Chat] Error details:", {
        name: error instanceof Error ? error.name : "Unknown",
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      });
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: t("chat.error"),
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      console.log("🏁 [AI Chat] Request completed");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Window - Centered on mobile, positioned on desktop */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4 md:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <Card className="relative w-full max-w-[380px] h-[calc(100vh-3rem)] max-h-[600px] flex flex-col shadow-lg border-2 rounded-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 sm:pb-3 border-b px-3 sm:px-6 pt-3 sm:pt-6">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <CardTitle className="text-base sm:text-lg">{t("chat.assistant")}</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-7 w-7 sm:h-8 sm:w-8"
              >
                <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Button>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
              <ScrollArea className="flex-1 px-2.5 sm:px-4 py-3 sm:py-4" ref={scrollAreaRef}>
                <div className="space-y-3 sm:space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex gap-2 sm:gap-3",
                        message.sender === "user" ? "justify-end" : "justify-start"
                      )}
                    >
                      {message.sender === "ai" && (
                        <div className="flex-shrink-0 h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Bot className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                        </div>
                      )}
                      <div
                        className={cn(
                          "max-w-[85%] sm:max-w-[80%] rounded-lg px-3 sm:px-4 py-1.5 sm:py-2",
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground"
                            : isDark 
                              ? "bg-muted text-white" 
                              : "bg-muted text-foreground"
                        )}
                      >
                        <p 
                          className={cn(
                            "text-xs sm:text-sm whitespace-pre-wrap break-words",
                            message.sender === "user"
                              ? "text-primary-foreground"
                              : isDark 
                                ? "text-white" 
                                : "text-foreground"
                          )}
                          dangerouslySetInnerHTML={{ 
                            __html: parseMarkdown(message.text) 
                          }}
                        />
                        <span className={cn(
                          "text-[10px] sm:text-xs opacity-70 mt-0.5 sm:mt-1 block",
                          message.sender === "user"
                            ? "text-primary-foreground"
                            : isDark 
                              ? "text-white" 
                              : "text-foreground"
                        )}>
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                      {message.sender === "user" && (
                        <div className="flex-shrink-0 h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <User className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                        </div>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-2 sm:gap-3 justify-start">
                      <div className="flex-shrink-0 h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Bot className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                      </div>
                      <div className={cn(
                        "bg-muted rounded-lg px-3 sm:px-4 py-1.5 sm:py-2",
                        isDark ? "text-white" : "text-foreground"
                      )}>
                        <div className="flex gap-1">
                          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-current rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-current rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-current rounded-full animate-bounce"></span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
              <div className="border-t p-2.5 sm:p-3 md:p-4 flex gap-1.5 sm:gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t("chat.placeholder")}
                  disabled={isLoading}
                  className="flex-1 text-xs sm:text-sm h-9 sm:h-10"
                />
                <Button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  size="icon"
                  className="h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0"
                >
                  <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      {/* Desktop Chat Window */}
      {isOpen && (
        <div className="hidden md:block fixed bottom-10 right-6 z-50">
          <Card className="w-[380px] h-[500px] max-h-[600px] flex flex-col shadow-lg border-2 rounded-xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 border-b px-6 pt-6">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">{t("chat.assistant")}</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
            <ScrollArea className="flex-1 px-4 py-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "flex gap-3",
                      message.sender === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    {message.sender === "ai" && (
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg px-4 py-2",
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : isDark 
                            ? "bg-muted text-white" 
                            : "bg-muted text-foreground"
                      )}
                    >
                      <p 
                        className={cn(
                          "text-sm whitespace-pre-wrap break-words",
                          message.sender === "user"
                            ? "text-primary-foreground"
                            : isDark 
                              ? "text-white" 
                              : "text-foreground"
                        )}
                        dangerouslySetInnerHTML={{ 
                          __html: parseMarkdown(message.text) 
                        }}
                      />
                      <span className={cn(
                        "text-xs opacity-70 mt-1 block",
                        message.sender === "user"
                          ? "text-primary-foreground"
                          : isDark 
                            ? "text-white" 
                            : "text-foreground"
                      )}>
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    {message.sender === "user" && (
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3 justify-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className={cn(
                      "bg-muted rounded-lg px-4 py-2",
                      isDark ? "text-white" : "text-foreground"
                    )}>
                      <div className="flex gap-1">
                        <span className="h-2 w-2 bg-current rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="h-2 w-2 bg-current rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="h-2 w-2 bg-current rounded-full animate-bounce"></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
            <div className="border-t p-4 flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t("chat.placeholder")}
                disabled={isLoading}
                  className="flex-1 text-sm h-10"
                />
                <Button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  size="icon"
                  className="h-10 w-10 flex-shrink-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      
      {/* Button Container */}
      <div className="fixed bottom-6 right-3 sm:bottom-8 sm:right-4 md:bottom-10 md:right-6 z-50 flex items-end md:items-center gap-2 md:gap-3 flex-col-reverse md:flex-row">
        {/* Text Label - shown when chat is closed */}
        {!isOpen && (
          <div className="bg-card/95 backdrop-blur-sm border border-border rounded-lg px-2 md:px-3 py-1.5 md:py-2 shadow-md animate-in fade-in slide-in-from-right-2 duration-300 flex items-center gap-1.5 md:gap-2 hidden sm:flex">
            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-primary animate-pulse" />
            <p className="text-xs md:text-sm font-medium text-foreground whitespace-nowrap">
              {t("chat.askAI")}
            </p>
          </div>
        )}

        {/* Toggle Button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className={cn(
            "h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full shadow-lg hover:shadow-xl transition-all flex-shrink-0",
            isJumping && !isOpen && "animate-jump"
          )}
          aria-label="Open AI Chat"
        >
          {isOpen ? (
            <X className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          ) : (
            <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          )}
        </Button>
      </div>
    </>
  );
};

export default AIChatWidget;

