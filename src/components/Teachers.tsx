import { motion } from "framer-motion";
import { Star, Award, Users, GraduationCap, Sparkles } from "lucide-react";

const teachers = [
  {
    name: "Анаргуль Есеналиева",
    role: "Директор и основатель",
    university: "Nazarbayev University",
    specializations: ["IELTS", "Academic English", "Leadership"],
    experience: "5+ лет",
    students: "500+",
    rating: 5.0,
    isFounder: true,
  },
  {
    name: "David Thompson",
    role: "Преподаватель (Native Speaker)",
    university: "University of London",
    specializations: ["Business English", "IELTS Speaking"],
    experience: "8 лет",
    students: "200+",
    rating: 4.9,
    isNative: true,
  },
  {
    name: "Sarah Mitchell",
    role: "Преподаватель (Native Speaker)",
    university: "Cambridge University",
    specializations: ["General English", "Kids Programs"],
    experience: "6 лет",
    students: "150+",
    rating: 4.9,
    isNative: true,
  },
  {
    name: "Айгерим Нурланова",
    role: "Преподаватель",
    university: "КазУМОиМЯ",
    specializations: ["Grammar", "IELTS Writing"],
    experience: "4 года",
    students: "100+",
    rating: 4.8,
  },
];

export const Teachers = () => {
  return (
    <section id="teachers" className="py-24 bg-background">
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
            <span className="text-sm font-medium text-primary">Наша команда</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Учитесь у <span className="text-gradient">лучших</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Наши преподаватели — сертифицированные специалисты и носители языка с международным опытом преподавания.
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative bg-card rounded-2xl overflow-hidden border transition-all duration-300 ${
                teacher.isFounder
                  ? "border-primary/50 shadow-glow"
                  : "border-border hover:border-primary/30"
              }`}
            >
              {/* Badges */}
              {teacher.isFounder && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    Основатель
                  </div>
                </div>
              )}
              {teacher.isNative && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 rounded-full bg-info text-white text-xs font-bold">
                    Native
                  </div>
                </div>
              )}

              {/* Avatar Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center">
                  <span className="text-4xl font-heading font-bold text-primary">
                    {teacher.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                  {teacher.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">{teacher.role}</p>
                
                {/* University */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <GraduationCap className="w-4 h-4" />
                  <span>{teacher.university}</span>
                </div>

                {/* Specializations */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {teacher.specializations.map((spec) => (
                    <span
                      key={spec}
                      className="px-2 py-1 rounded-md bg-secondary text-xs font-medium text-secondary-foreground"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-warning fill-warning" />
                    <span className="text-sm font-semibold text-foreground">
                      {teacher.rating}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{teacher.students}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Award className="w-4 h-4" />
                    <span>{teacher.experience}</span>
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
          className="mt-16 bg-gradient-to-r from-primary/10 via-accent to-primary/10 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Сертифицированные преподаватели
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Все наши преподаватели имеют международные сертификаты CELTA, TESOL или DELTA и регулярно проходят повышение квалификации.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["CELTA", "TESOL", "DELTA", "IELTS Examiner"].map((cert) => (
              <div
                key={cert}
                className="px-6 py-3 rounded-full bg-background border border-border font-heading font-semibold text-foreground"
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
