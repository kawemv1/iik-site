import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { useLanguage } from "@/contexts/LanguageContext";
import { createWhatsAppLink, whatsAppMessages, whatsAppMessagesKZ } from "@/utils/whatsapp";

const navLinks = [
  { href: "#home", labelKey: "nav.home" },
  { href: "#courses", labelKey: "nav.courses" },
  { href: "#teachers", labelKey: "nav.teachers" },
  { href: "#pricing", labelKey: "nav.pricing" },
  { href: "#contact", labelKey: "nav.contact" },
];

const languages = [
  { code: "ru" as const, label: "RU", flag: "🇷🇺" },
  { code: "kk" as const, label: "KZ", flag: "🇰🇿" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          {isHomePage ? (
            <a href="#home" className="flex items-center gap-2">
              <img 
                src="/logo.jpg" 
                alt="InvestInKids Logo" 
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
              />
              <span className="font-heading font-bold text-lg md:text-xl text-foreground hidden sm:block">
                Invest<span className="text-primary">InKids</span>
              </span>
            </a>
          ) : (
            <a href="/#home" className="flex items-center gap-2">
              <img 
                src="/logo.jpg" 
                alt="InvestInKids Logo" 
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
              />
              <span className="font-heading font-bold text-lg md:text-xl text-foreground hidden sm:block">
                Invest<span className="text-primary">InKids</span>
              </span>
            </a>
          )}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              isHomePage ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {t(link.labelKey)}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={`/${link.href}`}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {t(link.labelKey)}
                </a>
              )
            ))}
            <Link
              to="/test"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {t("nav.test")}
            </Link>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    language === lang.code
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow"
              onClick={() => {
                const message = language === "kk" ? whatsAppMessagesKZ.general : whatsAppMessages.general;
                window.open(createWhatsAppLink(message), "_blank");
              }}
            >
              <WhatsAppIcon className="w-4 h-4 mr-2" />
              {t("common.writeWhatsApp")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                isHomePage ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    {t(link.labelKey)}
                  </a>
                ) : (
                  <a
                    key={link.href}
                    href={`/${link.href}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    {t(link.labelKey)}
                  </a>
                )
              ))}
              <Link
                to="/test"
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {t("nav.test")}
              </Link>
              
              <div className="flex items-center gap-2 pt-2">
                <ThemeToggle />
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      language === lang.code
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
              
              <Button 
                className="w-full bg-gradient-primary mt-4"
                onClick={() => {
                  setIsOpen(false);
                  const message = language === "kk" ? whatsAppMessagesKZ.general : whatsAppMessages.general;
                  window.open(createWhatsAppLink(message), "_blank");
                }}
              >
                <WhatsAppIcon className="w-4 h-4 mr-2" />
                {t("common.writeWhatsApp")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
