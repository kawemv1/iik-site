import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Briefcase,
  Users,
  Globe,
  Sparkles,
  Scissors,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { createWhatsAppLink, whatsAppMessages, whatsAppMessagesKZ } from "@/utils/whatsapp";

const courses = [
  {
    icon: BookOpen,
    title: "General English",
    description: "Повседневное общение для всех уровней. Маленькие группы 4-8 человек.",
    levels: "Elementary → Advanced",
    color: "from-emerald-500 to-green-600",
    image: "/courses/general-english.jpg",
    logo: "https://cdn-icons-png.flaticon.com/512/2784/2784403.png",
    photo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
  },
  {
    icon: GraduationCap,
    title: "IELTS Preparation",
    description: "Подготовка ко всем модулям теста. Еженедельные пробные экзамены.",
    levels: "Target: 6.0 - 8.5",
    color: "from-blue-500 to-indigo-600",
    image: "/courses/ielts.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/IELTS_logo.svg/512px-IELTS_logo.svg.png",
    photo: "https://gtecqusais.com/wp-content/uploads/2023/08/ielts.jpg",
  },
  {
    icon: Briefcase,
    title: "Business English",
    description: "Корпоративное общение, презентации, переговоры, деловая переписка.",
    levels: "Intermediate+",
    color: "from-violet-500 to-purple-600",
    image: "/courses/business-english.jpg",
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    photo: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=400&fit=crop",
  },
  {
    icon: GraduationCap,
    title: "Academic English",
    description: "Подготовка к университету: эссе, исследования, критическое мышление.",
    levels: "Upper-Intermediate+",
    color: "from-amber-500 to-orange-600",
    image: "/courses/academic-english.jpg",
    logo: "https://cdn-icons-png.flaticon.com/512/3074/3074056.png",
    photo: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=400&fit=crop",
  },
  {
    icon: Users,
    title: "Everyday English",
    description: "Практические разговоры: путешествия, социальные ситуации.",
    levels: "All levels",
    color: "from-pink-500 to-rose-600",
    image: "/courses/everyday-english.jpg",
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
    photo: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop",
  },
  {
    icon: Globe,
    title: "English Grammar",
    description: "От основ до продвинутого уровня. Интерактивные упражнения.",
    levels: "Beginner → Advanced",
    color: "from-cyan-500 to-teal-600",
    image: "/courses/grammar.jpg",
    logo: "https://cdn-icons-png.flaticon.com/512/3135/3135810.png",
    photo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop",
  },
];

const specializedCourses = [
  { icon: Scissors, title: "English for Nail Technicians" },
  { icon: Scissors, title: "English for Hair Stylists" },
  { icon: Heart, title: "English for Beauty Industry" },
  { icon: Heart, title: "English for Wellness & Healthcare" },
];

export const Courses = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="courses" className="py-12 md:py-16 lg:py-24 bg-gradient-hero">
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
            <span className="text-sm font-medium text-primary">{t("courses.badge")}</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("courses.title")} <span className="text-gradient">{t("courses.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("courses.description")}
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative bg-card rounded-xl md:rounded-2xl p-4 md:p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              onClick={() => {
                const message = language === "kk" 
                  ? whatsAppMessagesKZ.course(course.title)
                  : whatsAppMessages.course(course.title);
                window.open(createWhatsAppLink(message), "_blank");
              }}
            >
              {/* Content */}
              {/* Course Photo */}
              {course.photo && (
                <div className="mb-3 md:mb-4 w-full h-32 md:h-40 rounded-lg md:rounded-xl overflow-hidden">
                  <img
                    src={course.photo}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">
                {course.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                {course.description}
              </p>

              {/* Level Badge */}
              <div className="inline-flex px-3 py-1.5 rounded-full bg-secondary text-sm font-medium text-secondary-foreground">
                {course.levels}
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specialized Courses */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 xl:p-12 border border-border"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4">
                {t("courses.specialized")}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground max-w-xl">
                {t("courses.specializedDesc")}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {specializedCourses.map((course) => (
                <div
                  key={course.title}
                  className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl bg-secondary border border-border hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <course.icon className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
                  <span className="text-xs md:text-sm font-medium text-foreground whitespace-nowrap">
                    {course.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Online vs Offline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mt-12"
        >
          {/* Online */}
          <div className="bg-card rounded-2xl p-8 border border-border group hover:border-primary/50 transition-colors">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-info/10 flex items-center justify-center mb-3 md:mb-4 lg:mb-5">
              <Globe className="w-5 h-5 md:w-6 md:h-6 text-info" />
            </div>
            <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">
              {t("courses.online")}
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {t("courses.online1")}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {t("courses.online2")}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {t("courses.online3")}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {t("courses.online4")}
              </li>
            </ul>
          </div>

          {/* Offline */}
          <div className="bg-card rounded-2xl p-8 border border-border group hover:border-primary/50 transition-colors">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-warning/10 flex items-center justify-center mb-3 md:mb-4 lg:mb-5">
              <Users className="w-5 h-5 md:w-6 md:h-6 text-warning" />
            </div>
            <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">
              {t("courses.offline")}
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {t("courses.offline1")}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {t("courses.offline2")}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {t("courses.offline3")}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {t("courses.offline4")}
              </li>
            </ul>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-all shadow-glow text-base px-8 h-14"
            onClick={() => {
              const message = language === "kk" 
                ? whatsAppMessagesKZ.general
                : whatsAppMessages.general;
              window.open(createWhatsAppLink(message), "_blank");
            }}
          >
            {t("courses.selectCourse")}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
