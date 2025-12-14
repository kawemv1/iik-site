import { motion } from "framer-motion";
import { Play, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { useLanguage } from "@/contexts/LanguageContext";
import { createWhatsAppLink, whatsAppMessages, whatsAppMessagesKZ } from "@/utils/whatsapp";

const benefits = [
  "Носители языка",
  "24 урока в месяц",
  "Онлайн и оффлайн",
  "Все уровни",
];

export const Hero = () => {
  const { t, language } = useLanguage();
  
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 md:pt-20 pb-12 md:pb-0 overflow-hidden bg-gradient-hero"
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
          className="absolute top-1/4 right-[15%] w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20 hidden sm:block"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-[10%] w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent border border-primary/20 hidden sm:block"
        />
        <motion.div
          animate={{ y: [-15, 15, -15], x: [10, -10, 10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-[20%] w-6 h-6 md:w-8 md:h-8 rounded-lg bg-primary/20 hidden sm:block"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {t("hero.badge")}
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              {t("hero.title")}{" "}
              <span className="text-gradient">{t("hero.titleHighlight")}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl"
            >
              {t("hero.description")}
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3 lg:gap-4"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-foreground"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                  <span className="whitespace-nowrap">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-all shadow-glow text-xs sm:text-sm md:text-base px-5 sm:px-6 md:px-8 h-11 sm:h-12 md:h-14 w-full sm:w-auto"
                onClick={() => {
                  const message = language === "kk" ? whatsAppMessagesKZ.general : whatsAppMessages.general;
                  window.open(createWhatsAppLink(message), "_blank");
                }}
              >
                <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2" />
                {t("common.writeWhatsApp")}
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1.5 sm:ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-accent text-xs sm:text-sm md:text-base px-5 sm:px-6 md:px-8 h-11 sm:h-12 md:h-14 w-full sm:w-auto"
                onClick={() => {
                  // You can add a video URL here or open a modal
                  window.open("https://www.instagram.com/p/DRbcMspCGAr/", "_blank");
                }}
              >
                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 sm:mr-2" />
                {t("common.watchVideo")}
              </Button>
            </motion.div>

            {/* Test Banner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-3 sm:mt-4 md:mt-6"
            >
              <Link to="/test">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 transition-all text-xs sm:text-sm md:text-base px-5 sm:px-6 md:px-8 h-11 sm:h-12 md:h-14 border-2 border-amber-400/60 hover:border-amber-300 hover:shadow-[0_0_30px_hsl(38_92%_50%/0.6)] relative overflow-hidden group shadow-lg"
                >
                  <span className="relative z-10 flex items-center text-white font-bold">
                    {t("hero.testButton")}
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Button>
              </Link>
            </motion.div>

            {/* Free Trial Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-flex items-center gap-2 sm:gap-2.5 md:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl bg-destructive/10 border border-destructive/20 w-full sm:w-auto"
            >
              <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-destructive text-destructive-foreground font-bold text-[10px] sm:text-xs md:text-sm animate-pulse flex-shrink-0">
                FREE
              </div>
              <div className="flex-1 sm:flex-initial">
                <p className="font-heading font-bold text-destructive text-xs sm:text-sm md:text-base">
                  {t("hero.freeTrial")}
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
                  {t("hero.freeTrialDesc")}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-6 sm:mt-8 lg:mt-0"
          >
            {/* Main Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 transform rotate-6 hidden md:block" />
              <div className="relative bg-gradient-card rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl p-2.5 sm:p-3 md:p-4 lg:p-6 xl:p-8 border border-border shadow-card">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5 md:gap-4 lg:gap-6 mb-3 sm:mb-4 md:mb-6 lg:mb-8">
                  <div className="text-center p-2 sm:p-2.5 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl bg-secondary">
                    <div className="font-heading text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-primary">1000+</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-0.5 sm:mt-1">Студентов</div>
                  </div>
                  <div className="text-center p-2 sm:p-2.5 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl bg-secondary">
                    <div className="font-heading text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-primary">6.5-7.5</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-0.5 sm:mt-1">Средний IELTS</div>
                  </div>
                  <div className="text-center p-2 sm:p-2.5 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl bg-secondary">
                    <div className="font-heading text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-primary">95%</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-0.5 sm:mt-1">Довольных</div>
                  </div>
                  <div className="text-center p-2 sm:p-2.5 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl bg-secondary">
                    <div className="font-heading text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-primary">20+</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-0.5 sm:mt-1">Лет опыта</div>
                  </div>
                </div>

                {/* Floating Card */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-background rounded-xl md:rounded-2xl p-2 md:p-3 lg:p-4 shadow-lg border border-border hidden sm:block"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 lg:w-12 md:h-10 lg:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl md:text-2xl">🎯</span>
                    </div>
                    <div>
                      <div className="font-heading font-bold text-foreground text-xs md:text-sm lg:text-base">IELTS 8.0</div>
                      <div className="text-xs md:text-sm text-muted-foreground hidden md:block">Максимальный балл</div>
                    </div>
                  </div>
                </motion.div>

                {/* Another Floating Card */}
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 md:-top-4 -right-3 md:-right-4 bg-background rounded-xl md:rounded-2xl p-2 md:p-3 lg:p-4 shadow-lg border border-border hidden sm:block"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 lg:h-10 rounded-full bg-success/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-success" />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-foreground text-xs md:text-sm">50+ стипендий</div>
                      <div className="text-xs text-muted-foreground hidden md:block">Bolashak, Erasmus...</div>
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
