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

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start space-y-4 md:space-y-6 lg:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent border border-primary/20">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-primary">
                  {t("hero.badge")}
                </span>
              </div>
            </motion.div>

            {/* Heading - iPhone 13 optimized */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-[28px] leading-[1.2] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground w-full"
            >
              {t("hero.title")}{" "}
              <span className="text-gradient">{t("hero.titleHighlight")}</span>
            </motion.h1>

            {/* Description - iPhone 13 optimized */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[15px] leading-[1.5] sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
            >
              {t("hero.description")}
            </motion.p>

            {/* Benefits - iPhone 13 grid layout */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-2 max-w-sm mx-auto lg:max-w-none lg:mx-0"
            >
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-1.5 text-[13px] text-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="whitespace-nowrap">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons - iPhone 13 full width on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-2.5 w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 sm:flex-row"
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-all shadow-glow text-[14px] px-6 h-12 w-full sm:w-auto"
                onClick={() => {
                  const message = language === "kk" ? whatsAppMessagesKZ.general : whatsAppMessages.general;
                  window.open(createWhatsAppLink(message), "_blank");
                }}
              >
                <WhatsAppIcon className="w-4 h-4 mr-2" />
                {t("common.writeWhatsApp")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-accent text-[14px] px-6 h-12 w-full sm:w-auto"
                onClick={() => {
                  window.open("https://www.instagram.com/p/DRbcMspCGAr/", "_blank");
                }}
              >
                <Play className="w-4 h-4 mr-2" />
                {t("common.watchVideo")}
              </Button>
            </motion.div>

            {/* Test Banner - iPhone 13 optimized */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full max-w-sm mx-auto lg:max-w-none lg:mx-0"
            >
              <Link to="/test">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 transition-all text-[14px] px-6 h-12 border-2 border-amber-400/60 hover:border-amber-300 hover:shadow-[0_0_30px_hsl(38_92%_50%/0.6)] relative overflow-hidden group shadow-lg"
                >
                  <span className="relative z-10 flex items-center text-white font-bold mx-auto lg:mx-0">
                    {t("hero.testButton")}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Button>
              </Link>
            </motion.div>

            {/* Free Trial Banner - iPhone 13 optimized */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-destructive/10 border border-destructive/20 w-full max-w-sm mx-auto lg:max-w-none lg:mx-0"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-destructive text-destructive-foreground font-bold text-xs animate-pulse flex-shrink-0">
                FREE
              </div>
              <div className="flex-1 text-left">
                <p className="font-heading font-bold text-destructive text-[13px] leading-tight">
                  {t("hero.freeTrial")}
                </p>
                <p className="text-[11px] text-muted-foreground leading-tight">
                  {t("hero.freeTrialDesc")}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Stats Card - iPhone 13 optimized */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-8 lg:mt-0"
          >
            {/* Main Card */}
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20 transform rotate-6 hidden md:block" />
              <div className="relative bg-gradient-card rounded-2xl p-4 md:p-6 lg:p-8 border border-border shadow-card">
                {/* Stats - iPhone 13 optimized grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-3 rounded-xl bg-secondary">
                    <div className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-primary">1000+</div>
                    <div className="text-[11px] md:text-sm text-muted-foreground mt-1">Студентов</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-secondary">
                    <div className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-primary">6.5-7.5</div>
                    <div className="text-[11px] md:text-sm text-muted-foreground mt-1">Средний IELTS</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-secondary">
                    <div className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-primary">95%</div>
                    <div className="text-[11px] md:text-sm text-muted-foreground mt-1">Довольных</div>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-secondary">
                    <div className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-primary">20+</div>
                    <div className="text-[11px] md:text-sm text-muted-foreground mt-1">Лет опыта</div>
                  </div>
                </div>

                {/* Floating Card - optimized positioning for iPhone 13 */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-3 -left-3 bg-background rounded-xl p-2.5 shadow-lg border border-border hidden xs:block"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg">🎯</span>
                    </div>
                    <div>
                      <div className="font-heading font-bold text-foreground text-xs">IELTS 8.0</div>
                      <div className="text-[10px] text-muted-foreground">Макс. балл</div>
                    </div>
                  </div>
                </motion.div>

                {/* Another Floating Card - optimized for iPhone 13 */}
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 -right-3 bg-background rounded-xl p-2.5 shadow-lg border border-border hidden xs:block"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-success/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-foreground text-xs">50+ стипендий</div>
                      <div className="text-[10px] text-muted-foreground">Bolashak</div>
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
