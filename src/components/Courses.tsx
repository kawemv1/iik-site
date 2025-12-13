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

const courses = [
  {
    icon: BookOpen,
    title: "General English",
    description: "Повседневное общение для всех уровней. Маленькие группы 4-8 человек.",
    levels: "Elementary → Advanced",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: GraduationCap,
    title: "IELTS Preparation",
    description: "Подготовка ко всем модулям теста. Еженедельные пробные экзамены.",
    levels: "Target: 6.0 - 8.5",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Briefcase,
    title: "Business English",
    description: "Корпоративное общение, презентации, переговоры, деловая переписка.",
    levels: "Intermediate+",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: GraduationCap,
    title: "Academic English",
    description: "Подготовка к университету: эссе, исследования, критическое мышление.",
    levels: "Upper-Intermediate+",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Users,
    title: "Everyday English",
    description: "Практические разговоры: путешествия, социальные ситуации.",
    levels: "All levels",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Globe,
    title: "English Grammar",
    description: "От основ до продвинутого уровня. Интерактивные упражнения.",
    levels: "Beginner → Advanced",
    color: "from-cyan-500 to-teal-600",
  },
];

const specializedCourses = [
  { icon: Scissors, title: "English for Nail Technicians" },
  { icon: Scissors, title: "English for Hair Stylists" },
  { icon: Heart, title: "English for Beauty Industry" },
  { icon: Heart, title: "English for Wellness & Healthcare" },
];

export const Courses = () => {
  return (
    <section id="courses" className="py-24 bg-secondary/30">
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
            <span className="text-sm font-medium text-primary">Наши курсы</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Выберите свой путь к <span className="text-gradient">успеху</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Широкий выбор курсов для достижения любых целей — от повседневного общения до подготовки к международным экзаменам.
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
              className="group relative bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <course.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {course.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
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
          className="bg-card rounded-3xl p-8 md:p-12 border border-border"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Специализированные курсы
              </h3>
              <p className="text-muted-foreground max-w-xl">
                Английский для вашей профессии — мы подготовим вас к работе с международными клиентами.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {specializedCourses.map((course) => (
                <div
                  key={course.title}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary border border-border hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <course.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">
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
            <div className="w-12 h-12 rounded-xl bg-info/10 flex items-center justify-center mb-5">
              <Globe className="w-6 h-6 text-info" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">
              Онлайн обучение
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Учитесь из любой точки мира
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Гибкое расписание
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Записи уроков доступны 24/7
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Те же преподаватели и методики
              </li>
            </ul>
          </div>

          {/* Offline */}
          <div className="bg-card rounded-2xl p-8 border border-border group hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center mb-5">
              <Users className="w-6 h-6 text-warning" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">
              Оффлайн обучение
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Живое общение с носителями
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Speaking Club каждую субботу
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Бесплатные пикники и мероприятия
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Современный учебный центр
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
          >
            Подобрать курс
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
