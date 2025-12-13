import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "Главная" },
  { href: "#courses", label: "Курсы" },
  { href: "#teachers", label: "Преподаватели" },
  { href: "#pricing", label: "Цены" },
  { href: "#contact", label: "Контакты" },
];

const languages = [
  { code: "ru", label: "RU", flag: "🇷🇺" },
  { code: "kk", label: "KZ", flag: "🇰🇿" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("ru");

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
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">IK</span>
            </div>
            <span className="font-heading font-bold text-lg md:text-xl text-foreground">
              Invest<span className="text-primary">InKids</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setCurrentLang(lang.code)}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    currentLang === lang.code
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
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow">
              <Phone className="w-4 h-4 mr-2" />
              Записаться
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
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              
              <div className="flex items-center gap-2 pt-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      currentLang === lang.code
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
              
              <Button className="w-full bg-gradient-primary mt-4">
                <Phone className="w-4 h-4 mr-2" />
                Записаться на урок
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
