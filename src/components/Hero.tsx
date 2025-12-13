import { motion } from "framer-motion";
import { Play, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Носители языка",
  "24 урока в месяц",
  "Онлайн и оффлайн",
  "Все уровни",
];

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-primary/5 blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-primary/5 blur-3xl"
        />
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[15%] w-16 h-16 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-[10%] w-12 h-12 rounded-full bg-accent border border-primary/20"
        />
        <motion.div
          animate={{ y: [-15, 15, -15], x: [10, -10, 10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-[20%] w-8 h-8 rounded-lg bg-primary/20"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Языковой центр №1 в Астане
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              Трансформируйте своё будущее с{" "}
              <span className="text-gradient">носителями английского языка</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl"
            >
              Профессиональное обучение английскому языку для детей и взрослых. 
              IELTS, Business English, разговорный английский — достигайте своих целей с нами.
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-all shadow-glow text-base px-8 h-14"
              >
                Записаться на бесплатный урок
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-accent text-base px-8 h-14"
              >
                <Play className="w-5 h-5 mr-2" />
                Смотреть видео
              </Button>
            </motion.div>

            {/* Free Trial Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-destructive/10 border border-destructive/20"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-destructive text-destructive-foreground font-bold text-sm animate-pulse">
                FREE
              </div>
              <div>
                <p className="font-heading font-bold text-destructive">
                  ПРОБНЫЙ УРОК БЕСПЛАТНО!
                </p>
                <p className="text-sm text-muted-foreground">
                  Speaking Club — бесплатно каждую субботу
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 transform rotate-6" />
              <div className="relative bg-gradient-card rounded-3xl p-8 border border-border shadow-card">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 rounded-2xl bg-secondary">
                    <div className="font-heading text-4xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground mt-1">Студентов</div>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-secondary">
                    <div className="font-heading text-4xl font-bold text-primary">8.0</div>
                    <div className="text-sm text-muted-foreground mt-1">Средний IELTS</div>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-secondary">
                    <div className="font-heading text-4xl font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground mt-1">Довольных</div>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-secondary">
                    <div className="font-heading text-4xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground mt-1">Лет опыта</div>
                  </div>
                </div>

                {/* Floating Card */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-4 shadow-lg border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <div className="font-heading font-bold text-foreground">IELTS 8.5</div>
                      <div className="text-sm text-muted-foreground">Максимальный балл</div>
                    </div>
                  </div>
                </motion.div>

                {/* Another Floating Card */}
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-background rounded-2xl p-4 shadow-lg border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-foreground text-sm">50+ стипендий</div>
                      <div className="text-xs text-muted-foreground">Bolashak, Erasmus...</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
