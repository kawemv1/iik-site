import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BookOpen, GraduationCap, Award, Star, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const testLevels = [
  {
    id: "elementary",
    name: "Elementary Test",
    level: "A1-A2",
    description: "Для начинающих",
    descriptionKz: "Бастаушыларға арналған",
    icon: BookOpen,
    color: "from-emerald-500 to-green-600",
  },
  {
    id: "pre-intermediate",
    name: "Pre-Intermediate Test",
    level: "A2-B1",
    description: "Базовый уровень",
    descriptionKz: "Негізгі деңгей",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "intermediate",
    name: "Intermediate Test",
    level: "B1-B2",
    description: "Средний уровень",
    descriptionKz: "Орташа деңгей",
    icon: Award,
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "advanced",
    name: "Advanced Test",
    level: "B2-C1+",
    description: "Продвинутый уровень",
    descriptionKz: "Жоғары деңгей",
    icon: Star,
    color: "from-amber-500 to-orange-600",
  },
];

const TestLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Тест уровня</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Проверь свой уровень <span className="text-gradient">английского языка</span>
            </h1>
            
            {/* Prominent CTA Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-r from-destructive/20 via-destructive/30 to-destructive/20 rounded-3xl p-8 md:p-12 mb-12 border-2 border-destructive/40"
            >
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-destructive mb-4">
                ПРОЙДИ ТЕСТ И ПОЛУЧИ БЕСПЛАТНЫЙ УРОК АНГЛИЙСКОГО С НОСИТЕЛЕМ!
              </h2>
              <p className="text-lg text-foreground">
                Точное определение уровня • Персональные рекомендации • Гарантированный бесплатный урок
              </p>
            </motion.div>

            <p className="text-lg text-muted-foreground mb-8">
              Выберите уровень теста, который соответствует вашему текущему знанию английского языка.
              Не уверены? Начните с Elementary теста — вы сможете перейти на следующий уровень, если он покажется легким.
            </p>
          </motion.div>

          {/* Level Selection Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {testLevels.map((level, index) => (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
                onClick={() => navigate(`/test/${level.id}`)}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${level.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <level.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {level.name}
                </h3>
                <p className="text-sm text-primary font-semibold mb-3">
                  {level.level}
                </p>
                <p className="text-muted-foreground mb-6">
                  {level.description}
                </p>

                {/* Button */}
                <Button
                  className="w-full bg-gradient-primary hover:opacity-90"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/test/${level.id}`);
                  }}
                >
                  Начать тест
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card rounded-3xl p-8 md:p-12 border border-border"
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
              Что включает тест?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-bold text-foreground mb-2">Grammar</h4>
                <p className="text-sm text-muted-foreground">10 вопросов по грамматике</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-bold text-foreground mb-2">Reading</h4>
                <p className="text-sm text-muted-foreground">5-7 вопросов на понимание текста</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-bold text-foreground mb-2">Listening</h4>
                <p className="text-sm text-muted-foreground">5-7 вопросов на аудирование</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                ⏱ Время прохождения: 15-20 минут
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TestLanding;


