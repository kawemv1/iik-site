import { motion } from "framer-motion";
import { Star, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

// Sample reviews - in production, these would come from 2GIS API
const reviews = [
  {
    id: 1,
    name: "Асет (мама Мадины)",
    rating: 5,
    text: "Дочь на Pre-IELTS у Анаргуль значительно улучшила английский и получила грант 75% в VCU (Катар) с Qatar Foundation. Полное сопровождение поступления с 2021 года. Профессионалы! Вторая дочь продолжает ездить из Туран. ЖК Кулагер, Астана. Рекомендую!",
    date: "1 декабря 2025",
  },
  {
    id: 2,
    name: "Жанна (мама Расула)",
    rating: 5,
    text: "Огромная благодарность Invest in Kids в ЖК Кулагер! Сын сдал IELTS на 7.5 и поступил в филиал Coventry University. Профессиональные преподаватели, индивидуальный подход, дружественная атмосфера. Анаргуль, спасибо за вклад в будущее детей! Очень рекомендую.",
    date: "13 декабря 2025",
  },
  {
    id: 3,
    name: "Баглан Шаймерденова",
    rating: 5,
    text: "Оку орны керемет, балама унайды. Кенес беремин.",
    date: "​19 февраля 2025",
  },
  {
    id: 4,
    name: "Мээрим",
    rating: 5,
    text: "Дочь 9 лет занимается онлайн английским языком из Москвы. За 2 месяца уже хорошо читает, произношение лучше стало. Иногда занятия проходят в игровой форме, дочке это очень понравилось. И оплата не дорогая за обучение с носителем языка по сравнению с ценами России.",
    date: "​21 октября 2024",
  },
];

export const Reviews = () => {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-12 md:py-16 lg:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t("reviews.badge")}</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("reviews.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("reviews.subtitle")}
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 border border-border shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">
                    {review.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? "text-warning fill-warning"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{review.text}</p>
            </motion.div>
          ))}
        </div>

        {/* 2GIS Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:bg-accent"
            onClick={() => {
              window.open(
                "https://2gis.kz/astana/firm/70000001087013430?m=71.367774%2C51.130056%2F16.47",
                "_blank"
              );
            }}
          >
            {t("reviews.viewAll")}
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};


