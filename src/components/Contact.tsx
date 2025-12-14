import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { createWhatsAppLink, whatsAppMessages, whatsAppMessagesKZ } from "@/utils/whatsapp";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export const Contact = () => {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t("contact.badge")}</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("contact.title")} <span className="text-gradient">{t("contact.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("contact.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 lg:p-6 bg-card rounded-xl md:rounded-2xl border border-border">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm md:text-base text-foreground mb-1">{t("contact.address")}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    ул. Сыганак, 4, вход 1<br />
                    г. Астана, Казахстан
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 lg:p-6 bg-card rounded-xl md:rounded-2xl border border-border">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm md:text-base text-foreground mb-1">{t("contact.phone")}</h3>
                  <a
                    href="tel:+77081486845"
                    className="text-sm md:text-base text-primary font-semibold hover:underline"
                  >
                    +7 708 148 68 45
                  </a>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">{t("contact.whatsapp")}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 lg:p-6 bg-card rounded-xl md:rounded-2xl border border-border">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm md:text-base text-foreground mb-1">{t("contact.hours")}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {t("contact.hoursWeekdays")}<br />
                    {t("contact.hoursSaturday")}<br />
                    {t("contact.hoursSunday")}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href={createWhatsAppLink(language === "kk" ? whatsAppMessagesKZ.contact : whatsAppMessages.contact)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-[#25D366]/10 rounded-lg md:rounded-xl border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors group"
              >
                <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6 text-[#25D366]" />
                <span className="text-sm md:text-base font-medium text-foreground">WhatsApp</span>
              </a>
              <a
                href="https://instagram.com/investinkidskz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-[#E4405F]/10 rounded-lg md:rounded-xl border border-[#E4405F]/30 hover:bg-[#E4405F]/20 transition-colors group"
              >
                <Instagram className="w-5 h-5 md:w-6 md:h-6 text-[#E4405F]" />
                <span className="text-sm md:text-base font-medium text-foreground">Instagram</span>
              </a>
            </div>

            {/* 2GIS Button */}
            <Button
              className="w-full bg-gradient-primary hover:opacity-90 h-12 md:h-14 text-sm md:text-base"
              onClick={() => {
                window.open("https://2gis.kz/astana/firm/70000001087013430?m=71.367774%2C51.130056%2F16.47", "_blank");
              }}
            >
              <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              {t("contact.open2gis")}
            </Button>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-xl md:rounded-2xl lg:rounded-3xl p-0 border border-border shadow-card overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.8097009390385!2d71.3670964!3d51.1304181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4245866e23f9b5dd%3A0xabd59b3789b9634f!2z0YPQuy4g0KHRi9Cz0LDQvdCw0LogNCwg0JDRgdGC0LDQvdCwIDAyMDAwMA!5e0!3m2!1sru!2skz!4v1765628477432!5m2!1sru!2skz"
                width="100%"
                height="300"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full md:h-[400px] lg:h-[450px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
