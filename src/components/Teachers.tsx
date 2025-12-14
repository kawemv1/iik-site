import { motion } from "framer-motion";
import { Star, Award, Users, GraduationCap, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const teachers = [
  {
    name: "Анаргул Эсеналиева",
    role: "Директор и основатель",
    university: "University College London",
    degree: "Information Science",
    experience: "Работала в NU, UCL, Coventry University",
    internship: "Стажировка в University of Illinois at Urbana Champaign, USA",
    specializations: ["IELTS", "Academic English", "Leadership"],
    years: "20+ лет",
    students: "500+",
    rating: 5.0,
    photo: "/teachers/anargul.jpg",
    isFounder: true,
  },
  {
    name: "Kashif Khan",
    role: "Преподаватель программирования",
    university: "Nazarbayev University",
    degree: "MSc Electrical & Computer Engineering (THE 401+)",
    experience: "Research Assistant, Nazarbayev University. Publications in IEEE journals/conferences, Best Paper Awards (ISNCC 2023, IMPACT 2022), PhD seeker",
    specializations: ["Python", "Machine Learning", "AI Agents", "Telegram Chatbots", "RF Devices Modeling"],
    years: "10+ лет",
    students: "80+",
    rating: 5.0,
    photo: "/teachers/kashif.jpg",
    isNative: true,
  },
  {
    name: "Farimoyo Bashirah Ayomide",
    role: "Преподаватель английского",
    university: "University of Ilorin",
    degree: "BSc Psychology (First Class Honours)",
    experience: "Lead British International School (LBIS), Osogbo. Private tutoring, speaking classes, lesson planning",
    specializations: ["Interactive English", "Kids/Teens", "British Curriculum", "Child Psychology", "TESOL", "IELTS 8.0"],
    years: "5+ лет",
    students: "120+",
    rating: 4.9,
    photo: "/teachers/farimoyo.jpg",
    isNative: true,
  },
  {
    name: "Cecilia Iwuoha",
    role: "Преподаватель английского",
    university: "TEF Professional Institute",
    degree: "TEFL Certified (120-hour Foreign Language Course, Distinction)",
    experience: "Oxford Online English Grammar course (Cursa.app). Interactive EFL instruction, lesson planning, student-focused language development",
    specializations: ["TEFL", "EFL Instruction", "Grammar", "Lesson Planning", "Student Development"],
    years: "5+ лет",
    students: "150+",
    rating: 4.9,
    photo: "/teachers/cecilia.jpg",
    isNative: true,
  },
  // Additional teachers (commented out, ready to use)
  // {
  //   name: "Michael Chen",
  //   role: "Преподаватель (Native Speaker)",
  //   university: "Oxford University",
  //   degree: "Modern Languages",
  //   experience: "Преподаватель в престижных университетах",
  //   specializations: ["Advanced English", "Literature", "Creative Writing"],
  //   years: "10 лет",
  //   students: "300+",
  //   rating: 5.0,
  //   photo: "/teachers/michael.jpg",
  //   isNative: true,
  // },
  // {
  //   name: "Елена Петрова",
  //   role: "Преподаватель",
  //   university: "МГУ им. Ломоносова",
  //   degree: "Лингвистика",
  //   experience: "Специалист по подготовке к международным экзаменам",
  //   specializations: ["IELTS", "TOEFL", "Cambridge Exams"],
  //   years: "7 лет",
  //   students: "250+",
  //   rating: 4.9,
  //   photo: "/teachers/elena.jpg",
  // },
  // {
  //   name: "James Wilson",
  //   role: "Преподаватель (Native Speaker)",
  //   university: "Harvard University",
  //   degree: "Education",
  //   experience: "Опыт работы в корпоративном обучении",
  //   specializations: ["Business English", "Corporate Training", "Presentation Skills"],
  //   years: "9 лет",
  //   students: "180+",
  //   rating: 4.9,
  //   photo: "/teachers/james.jpg",
  //   isNative: true,
  // },
  // {
  //   name: "Мадина Касымова",
  //   role: "Преподаватель",
  //   university: "КазНУ им. аль-Фараби",
  //   degree: "Английская филология",
  //   experience: "Специалист по онлайн обучению",
  //   specializations: ["Online Teaching", "General English", "Test Preparation"],
  //   years: "5 лет",
  //   students: "120+",
  //   rating: 4.8,
  //   photo: "/teachers/madina.jpg",
  // },
];

export const Teachers = () => {
  const { t } = useLanguage();
  
  return (
    <section id="teachers" className="py-12 md:py-16 lg:py-24 bg-gradient-hero">
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
            <span className="text-sm font-medium text-primary">{t("teachers.badge")}</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("teachers.title")} <span className="text-gradient">{t("teachers.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("teachers.description")}
          </p>
        </motion.div>

        {/* Teachers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`relative bg-card rounded-xl md:rounded-2xl overflow-hidden border transition-all duration-300 ${
                teacher.isFounder
                  ? "border-primary/50 shadow-glow"
                  : "border-border hover:border-primary/30"
              }`}
            >
              {/* Badges */}
              {teacher.isFounder && (
                <div className="absolute top-2 md:top-4 right-2 md:right-4 z-10">
                  <div className="px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-primary text-primary-foreground text-[10px] md:text-xs font-bold">
                    Основатель
                  </div>
                </div>
              )}
              {teacher.isNative && (
                <div className="absolute top-2 md:top-4 right-2 md:right-4 z-10">
                  <div className="px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-info text-white text-[10px] md:text-xs font-bold">
                    Native
                  </div>
                </div>
              )}

              {/* Teacher Photo */}
              <motion.div 
                className="h-40 md:h-44 lg:h-48 bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={teacher.photo || "/placeholder.svg"}
                  alt={teacher.name}
                  className={`w-full h-full object-cover ${teacher.name === "Farimoyo Bashirah Ayomide" ? "scale-125 object-top" : ""}`}
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-24 h-24 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center">
                          <span class="text-4xl font-heading font-bold text-primary">${teacher.name.charAt(0)}</span>
                        </div>
                      `;
                    }
                  }}
                />
              </motion.div>

              {/* Content */}
              <div className="p-4 md:p-5 lg:p-6">
                <h3 className="font-heading text-base md:text-lg font-bold text-foreground mb-1">
                  {teacher.name}
                </h3>
                <p className="text-xs md:text-sm text-primary font-medium mb-2 md:mb-3">{teacher.role}</p>
                
                {/* University & Degree */}
                <div className="space-y-1 mb-3 md:mb-4">
                  <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                    <GraduationCap className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                    <span className="font-medium line-clamp-2">{teacher.university}</span>
                  </div>
                  {teacher.degree && (
                    <p className="text-[10px] md:text-xs text-muted-foreground ml-5 md:ml-6 line-clamp-2">{teacher.degree}</p>
                  )}
                  {teacher.experience && (
                    <p className="text-[10px] md:text-xs text-muted-foreground ml-5 md:ml-6 line-clamp-2">{teacher.experience}</p>
                  )}
                  {teacher.internship && (
                    <p className="text-[10px] md:text-xs text-primary ml-5 md:ml-6 line-clamp-2">{teacher.internship}</p>
                  )}
                </div>

                {/* Specializations */}
                <div className="flex flex-wrap gap-1 md:gap-1.5 mb-3 md:mb-4">
                  {teacher.specializations.map((spec) => (
                    <span
                      key={spec}
                      className="px-1.5 md:px-2 py-0.5 md:py-1 rounded-md bg-secondary text-[10px] md:text-xs font-medium text-secondary-foreground"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-border">
                  <div className="flex items-center gap-0.5 md:gap-1">
                    <Star className="w-3 h-3 md:w-4 md:h-4 text-warning fill-warning" />
                    <span className="text-xs md:text-sm font-semibold text-foreground">
                      {teacher.rating}
                    </span>
                  </div>
                  <div className="flex items-center gap-0.5 md:gap-1 text-xs md:text-sm text-muted-foreground">
                    <Users className="w-3 h-3 md:w-4 md:h-4" />
                    <span>{teacher.students}</span>
                  </div>
                  <div className="flex items-center gap-0.5 md:gap-1 text-xs md:text-sm text-muted-foreground">
                    <Award className="w-3 h-3 md:w-4 md:h-4" />
                    <span>{teacher.years}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 md:mt-12 lg:mt-16 bg-gradient-to-r from-primary/10 via-accent to-primary/10 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 xl:p-12 text-center"
        >
          <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4">
            {t("teachers.certified")}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 max-w-2xl mx-auto">
            {t("teachers.certifiedDesc")}
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4">
            {["CELTA", "TESOL", "DELTA", "IELTS Examiner"].map((cert) => (
              <div
                key={cert}
                className="px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full bg-background border border-border font-heading font-semibold text-xs md:text-sm lg:text-base text-foreground"
              >
                {cert}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
