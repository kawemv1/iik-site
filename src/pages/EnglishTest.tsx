import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, XCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { createWhatsAppLink, whatsAppMessages, whatsAppMessagesKZ } from "@/utils/whatsapp";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Choose the correct answer: I ___ from Kazakhstan.",
    options: ["am", "is", "are", "be"],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "She ___ coffee every morning.",
    options: ["drink", "drinks", "drinking", "drinked"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "They ___ to the cinema yesterday.",
    options: ["go", "goes", "went", "going"],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "___ you like pizza?",
    options: ["Do", "Does", "Are", "Is"],
    correctAnswer: 0,
  },
  {
    id: 5,
    question: "I ___ English for three years.",
    options: ["learn", "am learning", "have learned", "learned"],
    correctAnswer: 2,
  },
  {
    id: 6,
    question: "If I ___ time, I will call you.",
    options: ["have", "will have", "had", "would have"],
    correctAnswer: 0,
  },
];

const getLevel = (score: number, lang: "ru" | "kk" = "ru"): { level: string; description: string } => {
  if (score <= 2) {
    return {
      level: "Elementary (A1-A2)",
      description: lang === "kk" 
        ? "Бастапқы деңгей. Біз Elementary курсынан бастауды ұсынамыз."
        : "Beginner level. We recommend starting with our Elementary course.",
    };
  } else if (score <= 4) {
    return {
      level: "Pre-Intermediate (A2-B1)",
      description: lang === "kk"
        ? "Негізгі деңгей. Сізге Pre-Intermediate курсы керемет болады."
        : "Basic level. Our Pre-Intermediate course would be perfect for you.",
    };
  } else {
    return {
      level: "Intermediate+ (B1-C1)",
      description: lang === "kk"
        ? "Жақсы деңгей! Сіз Intermediate немесе Advanced курстарына қосыла аласыз."
        : "Good level! You can join our Intermediate or Advanced courses.",
    };
  }
};

const EnglishTest = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [testLevel, setTestLevel] = useState<string>("");

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      // Calculate score
      let correct = 0;
      questions.forEach((q, idx) => {
        if (newAnswers[idx] === q.correctAnswer) correct++;
      });
      setScore(correct);
      const level = getLevel(correct, language);
      setTestLevel(level.level);
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  if (showResult) {
    const level = getLevel(score, language);
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-24 pb-16 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-card">
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {t("test.result")}
                  </h2>
                  <div className="text-5xl font-bold text-primary mb-2">
                    {score}/{questions.length}
                  </div>
                  <p className="text-muted-foreground">
                    {Math.round((score / questions.length) * 100)}% {t("test.correct")}
                  </p>
                </div>

                <div className="bg-secondary rounded-2xl p-6 mb-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {t("test.level")}: {level.level}
                  </h3>
                  <p className="text-muted-foreground">{level.description}</p>
                </div>

                {/* Free Lesson Offer */}
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 mb-8 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎁</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading font-bold text-foreground mb-2">
                        Поздравляем! Вы прошли тест на {level.level} уровень
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Мы дарим вам бесплатный 1 урок с носителем! Если вы пройдете урок здесь, вы получите скидку -10% от суммы.
                      </p>
                      <p className="text-sm font-semibold text-primary">
                        После успешного урока есть возможность получить дополнительно 10% скидку, если запишетесь сразу на этот месяц!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="flex-1 bg-gradient-primary hover:opacity-90"
                    onClick={() => {
                      const message = language === "kk" 
                        ? `Сәлеметсіз бе! Мен InvestInKids сайтында тест тапсырдым. Менің нәтижем: ${score}/${questions.length} балл, деңгейім: ${testLevel}. Мен тегін сабаққа жазылғым келеді.`
                        : `Здравствуйте! Я прошел(ла) тест на сайте InvestInKids. Мой результат: ${score}/${questions.length} баллов, уровень: ${testLevel}. Я хочу записаться на бесплатный урок с носителем.`;
                      window.open(createWhatsAppLink(message), "_blank");
                    }}
                  >
                    {t("common.freeLesson")}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1"
                    onClick={handleRestart}
                  >
                    {t("test.restart")}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">{language === "kk" ? "Деңгей тесті" : "Тест уровня"}</span>
              </div>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {t("test.title")}
              </h1>
              <div className="w-full bg-secondary rounded-full h-2 mb-4">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                {t("test.question")} {currentQuestion + 1} {language === "ru" ? "из" : "/"} {questions.length}
              </p>
            </motion.div>

            {/* Question Card */}
            <div className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-card">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
                {question.question}
              </h2>

              <div className="space-y-3 mb-8">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      selectedAnswer === index
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedAnswer === index
                            ? "border-primary bg-primary"
                            : "border-border"
                        }`}
                      >
                        {selectedAnswer === index && (
                          <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                        )}
                      </div>
                      <span className="font-medium text-foreground">{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              <Button
                size="lg"
                className="w-full bg-gradient-primary hover:opacity-90"
                onClick={handleNext}
                disabled={selectedAnswer === null}
              >
                {currentQuestion < questions.length - 1 ? t("test.next") : t("test.submit")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EnglishTest;


