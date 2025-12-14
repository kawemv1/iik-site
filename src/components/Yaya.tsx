import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const Yaya = () => {
  const { t, language } = useLanguage();

  return (
    <section 
      id="yaya" 
      className="relative py-12 md:py-16 lg:py-24 overflow-hidden bg-gradient-hero"
    >

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start lg:items-center">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <motion.div 
              className="bg-card rounded-xl md:rounded-2xl lg:rounded-3xl p-4 md:p-6 lg:p-8 border border-border shadow-card hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="flex items-center gap-3 mb-4 md:mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center overflow-hidden flex-shrink-0 p-2"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <img 
                    src="https://static.tildacdn.pro/tild6139-3432-4337-a264-376130306432/4165.svg" 
                    alt="YAYA" 
                    className="w-full h-full object-contain" 
                  />
                </motion.div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                  {language === "kk" ? "YAYA" : "YAYA"}
                </h3>
              </motion.div>
              <motion.p 
                className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {language === "kk" 
                  ? "Біріктірілген абонемент барлық балаларға арналған белсенділіктерге арналған. Бір абонементпен бірнеше бағытта оқуға мүмкіндік алыңыз."
                  : "Единый абонемент на все виды детских активностей. Один абонемент — множество возможностей для развития вашего ребенка."}
              </motion.p>
              <motion.ul 
                className="space-y-3 text-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {[
                  language === "kk" ? "Бір абонемент — бірнеше бағыт" : "Один абонемент — несколько направлений",
                  language === "kk" ? "Инглиз тілі, спорт, өнер және басқалар" : "Английский язык, спорт, творчество и многое другое",
                  language === "kk" ? "Ыңғайлы төлем және бағдарлама" : "Удобная оплата и гибкий график"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* Center: Logo and Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 text-center"
          >
            <motion.div 
              className="bg-card rounded-xl md:rounded-2xl lg:rounded-3xl p-4 md:p-6 lg:p-8 border border-border shadow-card hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* YAYA Logo */}
              <motion.div 
                className="mb-4 md:mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="flex items-center justify-center mb-3 md:mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <img 
                    src="https://static.tildacdn.pro/tild6139-3432-4337-a264-376130306432/4165.svg" 
                    alt="YAYA" 
                    className="h-12 md:h-16 lg:h-20 w-auto object-contain" 
                  />
                </motion.div>
                <motion.h2 
                  className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {language === "kk" ? "БІРІКТІРІЛГЕН АБОНЕМЕНТ" : "ЕДИНЫЙ АБОНЕМЕНТ"}
                </motion.h2>
                <motion.p 
                  className="text-muted-foreground text-xs md:text-sm lg:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {language === "kk" 
                    ? "БАРЛЫҚ БАЛАЛАРҒА АРНАЛҒАН БЕЛСЕНДІЛІКТЕРГЕ"
                    : "НА ВСЕ ВИДЫ ДЕТСКИХ АКТИВНОСТЕЙ"}
                </motion.p>
              </motion.div>
              
              {/* INVEST IN KIDS Logo */}
              <motion.div 
                className="pt-4 md:pt-6 border-t border-border flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <img 
                  src="/logo.jpg" 
                  alt="Invest In Kids" 
                  className="h-10 md:h-12 lg:h-14 w-auto object-contain rounded-lg" 
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <motion.div 
              className="bg-card rounded-xl md:rounded-2xl lg:rounded-3xl p-4 md:p-6 lg:p-8 border border-border shadow-card text-center lg:text-left hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="flex items-center justify-center lg:justify-start gap-3 mb-4 md:mb-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </motion.div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-foreground">
                  {language === "kk" ? "Қосылыңыз" : "Присоединяйтесь"}
                </h3>
              </motion.div>
              <motion.p 
                className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {language === "kk"
                  ? "YAYA арқылы Invest In Kids-ке қосылып, балаңызға кең мүмкіндіктер ашыңыз."
                  : "Присоединяйтесь к Invest In Kids через YAYA и откройте широкие возможности для вашего ребенка."}
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#FF6B5D] via-[#FF8C7F] to-[#FF6B5D] hover:from-[#FF7A6B] hover:via-[#FF9A8B] hover:to-[#FF7A6B] text-white font-bold text-sm md:text-base px-6 md:px-8 h-12 md:h-14 shadow-xl transition-all"
                  onClick={() => {
                    // Add YAYA link here
                    window.open("https://yayakz.onelink.me/hCj9?screen=center&centerId=1783", "_blank");
                  }}
                >
                  {language === "kk" ? "YAYA-ға өту" : "Перейти в YAYA"}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

