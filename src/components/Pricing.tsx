import { motion } from "framer-motion";
import { Check, Sparkles, Star, ArrowRight, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Групповые занятия",
    subtitle: "Взрослые",
    price: "50 000",
    period: "₸/месяц",
    frequency: "5 раз в неделю",
    features: [
      "Группы 4-8 человек",
      "60 минут урок",
      "Носители языка",
      "Учебные материалы",
      "Speaking Club бесплатно",
    ],
    popular: false,
  },
  {
    name: "IELTS Preparation",
    subtitle: "Интенсив",
    price: "280 000",
    period: "₸/4 месяца",
    frequency: "5 раз в неделю",
    features: [
      "Все 4 модуля IELTS",
      "Еженедельные mock-тесты",
      "Индивидуальный feedback",
      "Target score: 6.0-8.5",
      "Стратегии и техники",
      "Гарантия результата",
    ],
    popular: true,
  },
  {
    name: "Индивидуально",
    subtitle: "VIP обучение",
    price: "100 000",
    period: "₸/месяц",
    frequency: "Гибкий график",
    features: [
      "1-на-1 с преподавателем",
      "Персональная программа",
      "Любое время",
      "Ваши цели в приоритете",
      "Быстрый прогресс",
    ],
    popular: false,
  },
];

const discounts = [
  { icon: "👨‍👩‍👧‍👦", text: "Скидка до 40% для многодетных семей" },
  { icon: "💳", text: "Скидка 10-20% при оплате за 3+ месяцев" },
  { icon: "🎁", text: "Приведи друга — получи бонус" },
  { icon: "🛒", text: "Рассрочка через YAYA" },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
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
            <span className="text-sm font-medium text-primary">Цены</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Прозрачные цены — <span className="text-gradient">инвестируйте в себя</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Выберите подходящий формат обучения. Первый пробный урок — бесплатно!
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-card rounded-3xl overflow-hidden border transition-all duration-300 ${
                plan.popular
                  ? "border-primary shadow-glow scale-105 z-10"
                  : "border-border hover:border-primary/30"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-primary py-2 text-center">
                  <div className="flex items-center justify-center gap-2 text-primary-foreground text-sm font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    ПОПУЛЯРНЫЙ ВЫБОР
                  </div>
                </div>
              )}

              <div className={`p-8 ${plan.popular ? "pt-14" : ""}`}>
                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-primary font-medium mt-2">
                    {plan.frequency}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className={`w-full h-12 ${
                    plan.popular
                      ? "bg-gradient-primary hover:opacity-90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  Записаться
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {/* Kids Pricing */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">👧</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground">Детские курсы</h3>
                <p className="text-sm text-muted-foreground">От 6 лет</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-foreground">5 раз в неделю</span>
                <span className="font-heading font-bold text-primary">40 000 ₸/мес</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-foreground">3 раза в неделю</span>
                <span className="font-heading font-bold text-primary">30 000 ₸/мес</span>
              </div>
            </div>
          </div>

          {/* Additional Programs */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-info/10 flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground">Дополнительно</h3>
                <p className="text-sm text-muted-foreground">Специальные программы</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-foreground">SAT Math (3 мес)</span>
                <span className="font-heading font-bold text-primary">180 000 ₸</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-foreground">Programming + AI</span>
                <span className="font-heading font-bold text-primary">36 000 ₸/мес</span>
              </div>
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
              Специальные предложения
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {discounts.map((discount) => (
              <div
                key={discount.text}
                className="flex items-center gap-3 bg-background rounded-xl p-4 border border-border"
              >
                <span className="text-2xl">{discount.icon}</span>
                <span className="text-sm text-foreground font-medium">{discount.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
