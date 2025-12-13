import { Phone, MapPin, Mail, Instagram, MessageCircle } from "lucide-react";

const quickLinks = [
  { label: "Главная", href: "#home" },
  { label: "Курсы", href: "#courses" },
  { label: "Преподаватели", href: "#teachers" },
  { label: "Цены", href: "#pricing" },
  { label: "Контакты", href: "#contact" },
];

const courses = [
  { label: "General English", href: "#courses" },
  { label: "IELTS Preparation", href: "#courses" },
  { label: "Business English", href: "#courses" },
  { label: "Детские курсы", href: "#courses" },
  { label: "Специализированные", href: "#courses" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">IK</span>
              </div>
              <span className="font-heading font-bold text-xl text-background">
                InvestInKids
              </span>
            </a>
            <p className="text-background/70 mb-6 leading-relaxed">
              Профессиональное обучение английскому языку с носителями языка в Астане. 
              Инвестируйте в будущее ваших детей!
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/77081486845"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/investinkidskz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Навигация</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Курсы</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.label}>
                  <a
                    href={course.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {course.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  ул. Сыганак, 4, вход 1<br />
                  г. Астана, Казахстан
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+77081486845"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  +7 708 148 68 45
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@investinkids.kz"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  info@investinkids.kz
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-background/5 rounded-xl">
              <p className="text-sm text-background/70">
                <span className="font-semibold text-background">Пн-Пт:</span> 10:00 - 21:00
              </p>
              <p className="text-sm text-background/70">
                <span className="font-semibold text-background">Сб:</span> 10:00 - 18:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} InvestInKids. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/50 hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-background/50 hover:text-primary transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
