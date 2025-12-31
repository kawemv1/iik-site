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

const getSessionId = (): string => {
  const STORAGE_KEY = "ai_chat_session_id";
  let sessionId = localStorage.getItem(STORAGE_KEY);
  if (!sessionId) {
    sessionId = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
    localStorage.setItem(STORAGE_KEY, sessionId);
  }
  return sessionId;
};

const DAILY_LIMIT = 50;
const REQUESTS_STORAGE_KEY = "ai_chat_daily_requests";
const REQUESTS_DATE_KEY = "ai_chat_requests_date";

const getDailyRequests = (): { count: number; date: string } => {
  const today = new Date().toDateString();
  const stored = localStorage.getItem(REQUESTS_STORAGE_KEY);
  const storedDate = localStorage.getItem(REQUESTS_DATE_KEY);
  if (storedDate !== today) {
    localStorage.setItem(REQUESTS_STORAGE_KEY, "0");
    localStorage.setItem(REQUESTS_DATE_KEY, today);
    return { count: 0, date: today };
  }
  return { count: stored ? parseInt(stored, 10) : 0, date: today };
};

const incrementRequestCount = (): boolean => {
  const today = new Date().toDateString();
  const current = getDailyRequests();
  if (current.count >= DAILY_LIMIT) return false;
  const newCount = current.count + 1;
  localStorage.setItem(REQUESTS_STORAGE_KEY, newCount.toString());
  localStorage.setItem(REQUESTS_DATE_KEY, today);
  return true;
};

const parseMarkdown = (text: string): string => {
  if (!text) return "";
  const escapeHtml = (str: string) => {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  };
  let html = escapeHtml(text);
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__(.+?)__/g, '<strong>$1</strong>');
  html = html.replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, '<em>$1</em>');
  html = html.replace(/(?<!_)_([^_]+?)_(?!_)/g, '<em>$1</em>');
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
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

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
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    try {
      const webhook = webhookUrl || import.meta.env.VITE_N8N_WEBHOOK_URL;
      if (!webhook) throw new Error("Webhook URL not configured");
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage.text,
          timestamp: userMessage.timestamp.toISOString(),
          sessionId: sessionIdRef.current,
        }),
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const contentType = response.headers.get("content-type");
      let responseText = "";
      let rawData: any = null;
      if (contentType && contentType.includes("application/json")) {
        rawData = await response.json();
        if (typeof rawData === "string") {
          responseText = rawData;
        } else if (Array.isArray(rawData) && rawData.length > 0) {
          const firstItem = rawData[0];
          responseText = firstItem?.json?.response || firstItem?.json?.message || firstItem?.response || firstItem?.message || firstItem?.text || (typeof firstItem === "string" ? firstItem : "");
        } else if (typeof rawData === "object" && rawData !== null) {
          responseText = rawData.response || rawData.message || rawData.text || rawData.output?.message || rawData.data?.message || "";
        }
      } else {
        responseText = await response.text();
      }
      if (!responseText || responseText.trim() === "") responseText = t("chat.errorProcessing");
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: t("chat.error"),
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
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
      {/* Mobile Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <Card className="relative w-full max-w-[360px] h-[calc(100vh-2rem)] max-h-[600px] flex flex-col shadow-2xl border-2 rounded-2xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 border-b px-4 pt-4">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                <CardTitle className="text-base">{t("chat.assistant")}</CardTitle>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
              <ScrollArea className="flex-1 px-3 py-4" ref={scrollAreaRef}>
                <div className="space-y-3">
                  {messages.map((message) => (
                    <div key={message.id} className={cn("flex gap-2", message.sender === "user" ? "justify-end" : "justify-start")}>
                      {message.sender === "ai" && (
                        <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                      )}
                      <div className={cn("max-w-[75%] rounded-xl px-3 py-2", message.sender === "user" ? "bg-primary text-primary-foreground" : isDark ? "bg-muted text-white" : "bg-muted text-foreground")}>
                        <p className={cn("text-[13px] leading-relaxed whitespace-pre-wrap break-words", message.sender === "user" ? "text-primary-foreground" : isDark ? "text-white" : "text-foreground")} dangerouslySetInnerHTML={{ __html: parseMarkdown(message.text) }} />
                        <span className={cn("text-[10px] opacity-70 mt-1 block", message.sender === "user" ? "text-primary-foreground" : isDark ? "text-white" : "text-foreground")}>
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </span>
                      </div>
                      {message.sender === "user" && (
                        <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center">
                          <User className="h-4 w-4 text-primary" />
                        </div>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-2 justify-start">
                      <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                      <div className={cn("bg-muted rounded-xl px-3 py-2", isDark ? "text-white" : "text-foreground")}>
                        <div className="flex gap-1">
                          <span className="h-1.5 w-1.5 bg-current rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                          <span className="h-1.5 w-1.5 bg-current rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                          <span className="h-1.5 w-1.5 bg-current rounded-full animate-bounce"></span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
              <div className="border-t p-3 flex gap-2">
                <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={handleKeyPress} placeholder={t("chat.placeholder")} disabled={isLoading} className="flex-1 text-sm h-10" />
                <Button onClick={sendMessage} disabled={!inputValue.trim() || isLoading} size="icon" className="h-10 w-10 flex-shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Desktop Chat Window */}
      {isOpen && (
        <div className="hidden md:block fixed bottom-24 right-6 z-50">
          <Card className="w-[400px] h-[550px] flex flex-col shadow-2xl border-2 rounded-2xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 border-b px-5 pt-5">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">{t("chat.assistant")}</CardTitle>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 hover:bg-destructive/10">
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
              <ScrollArea className="flex-1 px-4 py-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={cn("flex gap-3", message.sender === "user" ? "justify-end" : "justify-start")}>
                      {message.sender === "ai" && (
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                      )}
                      <div className={cn("max-w-[75%] rounded-xl px-4 py-2.5", message.sender === "user" ? "bg-primary text-primary-foreground" : isDark ? "bg-muted text-white" : "bg-muted text-foreground")}>
                        <p className={cn("text-sm leading-relaxed whitespace-pre-wrap break-words", message.sender === "user" ? "text-primary-foreground" : isDark ? "text-white" : "text-foreground")} dangerouslySetInnerHTML={{ __html: parseMarkdown(message.text) }} />
                        <span className={cn("text-xs opacity-70 mt-1 block", message.sender === "user" ? "text-primary-foreground" : isDark ? "text-white" : "text-foreground")}>
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
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
                      <div className={cn("bg-muted rounded-xl px-4 py-2.5", isDark ? "text-white" : "text-foreground")}>
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
                <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={handleKeyPress} placeholder={t("chat.placeholder")} disabled={isLoading} className="flex-1 text-sm h-11" />
                <Button onClick={sendMessage} disabled={!inputValue.trim() || isLoading} size="icon" className="h-11 w-11 flex-shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      
      {/* Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <div className="hidden md:block absolute bottom-full right-0 mb-3 bg-card/95 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-md animate-in fade-in slide-in-from-right-2 duration-300">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <p className="text-sm font-medium text-foreground whitespace-nowrap">{t("chat.askAI")}</p>
            </div>
          </div>
        )}
        <Button onClick={() => setIsOpen(!isOpen)} size="lg" className={cn("h-14 w-14 rounded-full shadow-xl hover:shadow-2xl transition-all", isJumping && !isOpen && "animate-jump")} aria-label="Toggle AI Chat">
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>
    </>
  );
};

export default AIChatWidget;