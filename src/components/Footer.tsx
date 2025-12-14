import { Phone, MapPin, Mail, Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { useLanguage } from "@/contexts/LanguageContext";
import { createWhatsAppLink, whatsAppMessages, whatsAppMessagesKZ } from "@/utils/whatsapp";

export const Footer = () => {
  const { t, language } = useLanguage();
  
  const quickLinks = [
    { labelKey: "nav.home", href: "#home" },
    { labelKey: "nav.courses", href: "#courses" },
    { labelKey: "nav.teachers", href: "#teachers" },
    { labelKey: "nav.pricing", href: "#pricing" },
    { labelKey: "nav.contact", href: "#contact" },
  ];

  const courses = [
    { label: "General English", href: "#courses" },
    { label: "IELTS Preparation", href: "#courses" },
    { label: "Business English", href: "#courses" },
    { labelKey: "footer.kidsCourses", href: "#courses" },
    { labelKey: "footer.specialized", href: "#courses" },
  ];

  return (
    <footer className="bg-foreground text-background py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10 lg:mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <img 
                src="/logo.jpg" 
                alt="InvestInKids Logo" 
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
              />
              <span className="font-heading font-bold text-lg md:text-xl text-background">
                InvestInKids
              </span>
            </a>
            <p className="text-sm md:text-base text-background/70 mb-4 md:mb-6 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              <a
                href={createWhatsAppLink(language === "kk" ? whatsAppMessagesKZ.general : whatsAppMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
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
            <h4 className="font-heading font-bold text-base md:text-lg mb-4 md:mb-6">{t("footer.navigation")}</h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.labelKey}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-heading font-bold text-base md:text-lg mb-4 md:mb-6">{t("footer.courses")}</h4>
            <ul className="space-y-2 md:space-y-3">
              {courses.map((course, idx) => (
                <li key={idx}>
                  <a
                    href={course.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {"labelKey" in course ? t(course.labelKey) : course.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-base md:text-lg mb-4 md:mb-6">{t("footer.contacts")}</h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-background/70">
                  ул. Сыганак, 4, вход 1<br />
                  г. Астана, Казахстан
                </span>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+77081486845"
                  className="text-sm md:text-base text-background/70 hover:text-primary transition-colors"
                >
                  +7 708 148 68 45
                </a>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@investinkids.kz"
                  className="text-sm md:text-base text-background/70 hover:text-primary transition-colors break-all"
                >
                  aessenaliyeva@nu.edu.kz
                </a>
              </li>
            </ul>
            <div className="mt-4 md:mt-6 p-3 md:p-4 bg-background/5 rounded-lg md:rounded-xl">
              <p className="text-xs md:text-sm text-background/70">
                <span className="font-semibold text-background">Пн-Пт:</span> 10:00 - 21:00
              </p>
              <p className="text-xs md:text-sm text-background/70">
                <span className="font-semibold text-background">Сб:</span> 10:00 - 18:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-xs md:text-sm text-background/50 text-center md:text-left">
              © {new Date().getFullYear()} InvestInKids. {t("footer.copyright")}.
            </p>
            <div className="flex gap-4 md:gap-6 text-xs md:text-sm">
              <a href="#" className="text-background/50 hover:text-primary transition-colors">
                {t("footer.privacy")}
              </a>
              <a href="#" className="text-background/50 hover:text-primary transition-colors">
                {t("footer.terms")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
