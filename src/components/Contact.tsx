import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send, MessageCircle, Instagram, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 24 часов.",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-background">
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
            <span className="text-sm font-medium text-primary">Контакты</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Начните свой путь <span className="text-gradient">сегодня</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Свяжитесь с нами любым удобным способом или оставьте заявку — мы перезвоним в течение часа.
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
              <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">Наш адрес</h3>
                  <p className="text-muted-foreground">
                    ул. Сыганак, 4, вход 1<br />
                    г. Астана, Казахстан
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">Телефон</h3>
                  <a
                    href="tel:+77081486845"
                    className="text-primary font-semibold hover:underline"
                  >
                    +7 708 148 68 45
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">WhatsApp доступен</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">Часы работы</h3>
                  <p className="text-muted-foreground">
                    Пн-Пт: 10:00 - 21:00<br />
                    Сб: 10:00 - 18:00<br />
                    Вс: По записи
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://wa.me/77081486845"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-[#25D366]/10 rounded-xl border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors group"
              >
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
                <span className="font-medium text-foreground">WhatsApp</span>
              </a>
              <a
                href="https://instagram.com/investinkidskz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-[#E4405F]/10 rounded-xl border border-[#E4405F]/30 hover:bg-[#E4405F]/20 transition-colors group"
              >
                <Instagram className="w-6 h-6 text-[#E4405F]" />
                <span className="font-medium text-foreground">Instagram</span>
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden border border-border h-64 bg-secondary flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                <p className="text-muted-foreground">
                  Интерактивная карта 2GIS
                </p>
                <a
                  href="https://2gis.kz/astana/search/%D1%83%D0%BB.%20%D0%A1%D1%8B%D0%B3%D0%B0%D0%BD%D0%B0%D0%BA%2C%204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline mt-2 inline-block"
                >
                  Открыть в 2GIS →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-card">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                Оставьте заявку
              </h3>
              <p className="text-muted-foreground mb-8">
                Заполните форму — мы свяжемся с вами в течение часа
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Ваше имя *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введите ваше имя"
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Телефон *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email (необязательно)
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Сообщение *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Расскажите о ваших целях изучения английского..."
                    required
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary hover:opacity-90 h-14 text-base"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Отправить заявку
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
