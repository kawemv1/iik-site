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
      className="relative min-h-screen flex items-center pt-16 pb-8 overflow-hidden bg-gradient-hero"
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
        
        {/* Floating Elements - optimized for mobile */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[10%] w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20 hidden xs:block"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-[8%] w-8 h-8 md:w-12 md:h-12 rounded-full bg-accent border border-primary/20 hidden xs:block"
        />
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-center justify-items-center lg:justify-items-start">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 text-center lg:text-left w-full max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start w-full"
            >
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-accent border border-primary/20">
                <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-primary" />
                <span className="text-[10px] sm:text-xs font-medium text-primary">
                  {t("hero.badge")}
                </span>
              </div>
            </motion.div>

            {/* Heading - 360px optimized */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-[24px] leading-[1.2] xs:text-[28px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground w-full text-center lg:text-left px-2 sm:px-0"
            >
              {t("hero.title")}{" "}
              <span className="text-gradient">{t("hero.titleHighlight")}</span>
            </motion.h1>

            {/* Description - 360px optimized */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[13px] leading-[1.5] xs:text-[15px] sm:text-base md:text-lg lg:text-xl text-muted-foreground w-full text-center lg:text-left px-2 sm:px-0"
            >
              {t("hero.description")}
            </motion.p>

            {/* Benefits - 360px optimized grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-1.5 sm:gap-2 w-full max-w-[280px] xs:max-w-sm"
            >
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center justify-center lg:justify-start gap-1 sm:gap-1.5 text-[11px] xs:text-[13px] text-foreground"
                >
                  <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-primary flex-shrink-0" />
                  <span className="whitespace-nowrap">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons - 360px optimized */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-2 sm:gap-2.5 w-full max-w-[280px] xs:max-w-sm sm:flex-row items-center justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-all shadow-glow text-[13px] sm:text-[14px] px-4 sm:px-6 h-11 sm:h-12 w-full sm:w-auto"
                onClick={() => {
                  const message = language === "kk" ? whatsAppMessagesKZ.general : whatsAppMessages.general;
                  window.open(createWhatsAppLink(message), "_blank");
                }}
              >
                <WhatsAppIcon className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-1.5 sm:mr-2" />
                {t("common.writeWhatsApp")}
                <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 ml-1.5 sm:ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-accent text-[13px] sm:text-[14px] px-4 sm:px-6 h-11 sm:h-12 w-full sm:w-auto"
                onClick={() => {
                  window.open("https://www.instagram.com/p/DRbcMspCGAr/", "_blank");
                }}
              >
                <Play className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-1.5 sm:mr-2" />
                {t("common.watchVideo")}
              </Button>
            </motion.div>

            {/* Test Banner - 360px optimized */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full max-w-[280px] xs:max-w-sm"
            >
              <Link to="/test">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 transition-all text-[13px] sm:text-[14px] px-4 sm:px-6 h-11 sm:h-12 border-2 border-amber-400/60 hover:border-amber-300 hover:shadow-[0_0_30px_hsl(38_92%_50%/0.6)] relative overflow-hidden group shadow-lg"
                >
                  <span className="relative z-10 flex items-center text-white font-bold justify-center w-full">
                    {t("hero.testButton")}
                    <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Button>
              </Link>
            </motion.div>

            {/* Free Trial Banner - 360px optimized */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-destructive/10 border border-destructive/20 w-full max-w-[280px] xs:max-w-sm"
            >
              <div className="flex items-center justify-center w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-destructive text-destructive-foreground font-bold text-[10px] sm:text-xs animate-pulse flex-shrink-0">
                FREE
              </div>
              <div className="flex-1 text-left">
                <p className="font-heading font-bold text-destructive text-[11px] sm:text-[13px] leading-tight">
                  {t("hero.freeTrial")}
                </p>
                <p className="text-[10px] sm:text-[11px] text-muted-foreground leading-tight">
                  {t("hero.freeTrialDesc")}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Stats Card - 360px optimized */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-6 sm:mt-8 lg:mt-0 w-full max-w-[280px] xs:max-w-sm"
          >
            {/* Main Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20 transform rotate-6 hidden md:block" />
              <div className="relative bg-gradient-card rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 border border-border shadow-card">
                {/* Stats - 360px optimized grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="text-center p-2 sm:p-3 rounded-xl bg-secondary">
                    <div className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">1000+</div>
                    <div className="text-[10px] sm:text-[11px] md:text-sm text-muted-foreground mt-0.5 sm:mt-1">Студентов</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 rounded-xl bg-secondary">
                    <div className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">6.5-7.5</div>
                    <div className="text-[10px] sm:text-[11px] md:text-sm text-muted-foreground mt-0.5 sm:mt-1">Средний IELTS</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 rounded-xl bg-secondary">
                    <div className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">95%</div>
                    <div className="text-[10px] sm:text-[11px] md:text-sm text-muted-foreground mt-0.5 sm:mt-1">Довольных</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 rounded-xl bg-secondary">
                    <div className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">20+</div>
                    <div className="text-[10px] sm:text-[11px] md:text-sm text-muted-foreground mt-0.5 sm:mt-1">Лет опыта</div>
                  </div>
                </div>

                {/* Floating Card - optimized positioning for 360px */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 bg-background rounded-xl p-2 sm:p-2.5 shadow-lg border border-border hidden xs:block"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-7 sm:w-9 h-7 sm:h-9 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-base sm:text-lg">🎯</span>
                    </div>
                    <div>
                      <div className="font-heading font-bold text-foreground text-[10px] sm:text-xs">IELTS 8.0</div>
                      <div className="text-[9px] sm:text-[10px] text-muted-foreground">Макс. балл</div>
                    </div>
                  </div>
                </motion.div>

                {/* Another Floating Card - optimized for 360px */}
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-background rounded-xl p-2 sm:p-2.5 shadow-lg border border-border hidden xs:block"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-7 sm:w-9 h-7 sm:h-9 rounded-full bg-success/10 flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-success" />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-foreground text-[10px] sm:text-xs">50+ стипендий</div>
                      <div className="text-[9px] sm:text-[10px] text-muted-foreground">Bolashak</div>
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
