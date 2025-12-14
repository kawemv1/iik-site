import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Star, ArrowRight, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { useLanguage } from "@/contexts/LanguageContext";
import { createWhatsAppLink, whatsAppMessages, whatsAppMessagesKZ } from "@/utils/whatsapp";

export const Pricing = () => {
  const { t, language } = useLanguage();
  const [groupFrequency, setGroupFrequency] = useState<"3" | "5">("5");
  
  const groupPrice = groupFrequency === "5" ? "40 000" : "30 000";

  const discounts = [
    { icon: "👨‍👩‍👧‍👦", text: "Скидка до 40% для многодетных семей" },
    { icon: "💳", text: "Скидка 10-20% при оплате за 3+ месяцев" },
    { icon: "🎁", text: "Приведи друга — получи бонус" },
    { icon: "🛒", text: "Интеграция с YAYA" },
  ];

  return (
    <section id="pricing" className="py-12 md:py-16 lg:py-24 bg-gradient-hero">
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
            <span className="text-sm font-medium text-primary">{t("pricing.badge")}</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("pricing.title")} <span className="text-gradient">{t("pricing.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("pricing.description")}
          </p>
        </motion.div>

        {/* Main Pricing Cards - 3 columns */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Left: Programming + AI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="relative bg-card rounded-2xl md:rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300"
          >
            {/* Programming + AI Photo */}
            <div className="w-full h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop"
                alt="Programming + AI"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-6 lg:p-8">
              <div className="mb-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                  Programming + AI
                </h3>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                    36 000
                  </span>
                  <span className="text-muted-foreground">₸/мес</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">Python, ML, AI Agents</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">Telegram Chatbots</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">Практические проекты</span>
                </li>
              </ul>
              <Button
                className="w-full h-12 bg-secondary text-secondary-foreground hover:bg-secondary/80"
                onClick={() => {
                  const message = language === "kk" 
                    ? whatsAppMessagesKZ.pricing("Programming + AI")
                    : whatsAppMessages.pricing("Programming + AI");
                  window.open(createWhatsAppLink(message), "_blank");
                }}
              >
                <WhatsAppIcon className="w-4 h-4 mr-2" />
                {t("pricing.signUp")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* Center: Group Classes with Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative bg-card rounded-2xl md:rounded-3xl overflow-hidden border border-primary shadow-glow md:scale-105 z-10"
          >
            <div className="absolute top-0 left-0 right-0 bg-gradient-primary py-2 text-center z-20">
              <div className="flex items-center justify-center gap-2 text-primary-foreground text-sm font-bold">
                <Star className="w-4 h-4 fill-current" />
                ПОПУЛЯРНЫЙ ВЫБОР
              </div>
            </div>
            {/* Children's Courses Photo */}
            <div className="w-full h-40 overflow-hidden relative">
              <img
                src="https://codakid.com/wp-content/uploads/2022/08/iStock-846189922-1.jpg"
                alt="Детские курсы"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-6 lg:p-8 pt-12 md:pt-14">
              <div className="mb-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                  Детские курсы
                </h3>
                <p className="text-sm text-muted-foreground mt-2">Дети</p>
              </div>
              
              {/* Frequency Toggle */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4 bg-secondary rounded-lg p-1">
                  <button
                    onClick={() => setGroupFrequency("3")}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                      groupFrequency === "3"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    3 раза
                  </button>
                  <button
                    onClick={() => setGroupFrequency("5")}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                      groupFrequency === "5"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    5 раз
                  </button>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                    {groupPrice}
                  </span>
                  <span className="text-muted-foreground">₸/мес</span>
                </div>
                <p className="text-sm text-primary font-medium mt-2">
                  {groupFrequency === "5" ? "5 раз в неделю" : "3 раза в неделю"}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">Группы 4-8 человек</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">60 минут урок</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">Носители языка</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">Speaking Club бесплатно</span>
                </li>
              </ul>
              <Button
                className="w-full h-12 bg-gradient-primary hover:opacity-90"
                onClick={() => {
                  const message = language === "kk" 
                    ? whatsAppMessagesKZ.pricing("Групповые занятия")
                    : whatsAppMessages.pricing("Групповые занятия");
                  window.open(createWhatsAppLink(message), "_blank");
                }}
              >
                <WhatsAppIcon className="w-4 h-4 mr-2" />
                {t("pricing.signUp")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>

          {/* Right: IELTS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="relative bg-card rounded-2xl md:rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300"
          >
            {/* IELTS Photo */}
            <div className="w-full h-40 overflow-hidden">
              <img
                src="https://gtecqusais.com/wp-content/uploads/2023/08/ielts.jpg"
                alt="IELTS Preparation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 md:p-6 lg:p-8">
              <div className="mb-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                  IELTS Preparation
                </h3>
                <p className="text-sm text-muted-foreground">Интенсив</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                    280 000
                  </span>
                  <span className="text-muted-foreground">₸/4 месяца</span>
                </div>
                <p className="text-sm text-primary font-medium mt-2">
                  5 раз в неделю
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">Все 4 модуля IELTS</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">Еженедельные mock-тесты</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">Индивидуальный feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">Target score: 6.0-8.5</span>
                </li>
              </ul>
              <Button
                className="w-full h-12 bg-secondary text-secondary-foreground hover:bg-secondary/80"
                onClick={() => {
                  const message = language === "kk" 
                    ? whatsAppMessagesKZ.pricing("IELTS Preparation")
                    : whatsAppMessages.pricing("IELTS Preparation");
                  window.open(createWhatsAppLink(message), "_blank");
                }}
              >
                <WhatsAppIcon className="w-4 h-4 mr-2" />
                {t("pricing.signUp")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-4 md:p-6 lg:p-8 border border-border mb-8 md:mb-12 lg:mb-16"
        >
          <h3 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
            Дополнительные услуги
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h4 className="font-heading font-bold text-foreground mb-2">SAT</h4>
              <p className="text-sm text-muted-foreground mb-3">Подготовка к экзамену</p>
              <p className="font-heading font-bold text-primary">180 000 ₸ (3 мес)</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👤</span>
              </div>
              <h4 className="font-heading font-bold text-foreground mb-2">Индивидуальные уроки</h4>
              <p className="text-sm text-muted-foreground mb-3">1-на-1 с преподавателем</p>
              <p className="font-heading font-bold text-primary">100 000 ₸/мес</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h4 className="font-heading font-bold text-foreground mb-2">Корпоративные уроки</h4>
              <p className="text-sm text-muted-foreground mb-3">Для компаний</p>
              <p className="font-heading font-bold text-primary">По договоренности</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h4 className="font-heading font-bold text-foreground mb-2">Онлайн</h4>
              <p className="text-sm text-muted-foreground mb-3">Такие же цены</p>
              <p className="font-heading font-bold text-primary">Как оффлайн</p>
            </div>
          </div>
        </motion.div>

        {/* Discounts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-primary/10 via-accent to-primary/10 rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Percent className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground">
              {t("pricing.discounts")}
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {discounts.map((discount) => (
              <div
                key={discount.text}
                className="flex items-center gap-2 md:gap-3 bg-background rounded-lg md:rounded-xl p-3 md:p-4 border border-border"
              >
                <span className="text-xl md:text-2xl flex-shrink-0">{discount.icon}</span>
                <span className="text-xs md:text-sm text-foreground font-medium break-words">{discount.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
