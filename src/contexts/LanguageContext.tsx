import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ru" | "kk";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("ru");

  const translations: Record<Language, Record<string, string>> = {
    ru: {
      // Navigation
      "nav.home": "Главная",
      "nav.courses": "Курсы",
      "nav.teachers": "Преподаватели",
      "nav.pricing": "Цены",
      "nav.contact": "Контакты",
      "nav.test": "Тест",
      // Common
      "common.writeWhatsApp": "Написать в WhatsApp",
      "common.signUp": "Записаться",
      "common.freeLesson": "Получить бесплатный урок",
      "common.watchVideo": "Смотреть видео",
      // Hero
      "hero.badge": "Языковой центр №1 в Астане",
      "hero.title": "Твое будущее начинается здесь",
      "hero.titleHighlight": "английский с носителями",
      "hero.description": "Профессиональное обучение английскому языку для детей и взрослых. IELTS, Business English, разговорный английский — достигайте своих целей с нами.",
      "hero.benefit1": "Носители языка",
      "hero.benefit2": "24 урока в месяц",
      "hero.benefit3": "Онлайн и оффлайн",
      "hero.benefit4": "Все уровни",
      "hero.testButton": "Пройди тест и получи бесплатный урок с носителем",
      "hero.freeTrial": "ПРОБНЫЙ УРОК БЕСПЛАТНО!",
      "hero.freeTrialDesc": "Speaking Club — бесплатно каждую субботу",
      // Courses
      "courses.badge": "Наши курсы",
      "courses.title": "Выберите свой путь к",
      "courses.titleHighlight": "успеху",
      "courses.description": "Широкий выбор курсов для достижения любых целей — от повседневного общения до подготовки к международным экзаменам.",
      "courses.specialized": "Специализированные курсы",
      "courses.specializedDesc": "Английский для вашей профессии — мы подготовим вас к работе с международными клиентами.",
      "courses.online": "Онлайн обучение",
      "courses.online1": "Учитесь из любой точки мира",
      "courses.online2": "Гибкое расписание",
      "courses.online3": "Записи уроков доступны 24/7",
      "courses.online4": "Те же преподаватели и методики",
      "courses.offline": "Оффлайн обучение",
      "courses.offline1": "Живое общение с носителями",
      "courses.offline2": "Speaking Club каждую субботу",
      "courses.offline3": "Бесплатные пикники и мероприятия",
      "courses.offline4": "Современный учебный центр",
      "courses.selectCourse": "Подобрать курс",
      // Teachers
      "teachers.badge": "Наша команда",
      "teachers.title": "Учитесь у",
      "teachers.titleHighlight": "лучших",
      "teachers.description": "Наши преподаватели — сертифицированные специалисты и носители языка с международным опытом преподавания.",
      "teachers.certified": "Сертифицированные преподаватели",
      "teachers.certifiedDesc": "Все наши преподаватели имеют международные сертификаты CELTA, TESOL или DELTA и регулярно проходят повышение квалификации.",
      // Pricing
      "pricing.badge": "Цены",
      "pricing.title": "Прозрачные цены —",
      "pricing.titleHighlight": "инвестируйте в себя",
      "pricing.description": "Выберите подходящий формат обучения. Первый пробный урок — бесплатно!",
      "pricing.signUp": "Записаться",
      "pricing.kids": "Детские курсы",
      "pricing.kidsDesc": "От 6 лет",
      "pricing.additional": "Дополнительно",
      "pricing.additionalDesc": "Специальные программы",
      "pricing.discounts": "Специальные предложения",
      // Contact
      "contact.badge": "Контакты",
      "contact.title": "Начните свой путь",
      "contact.titleHighlight": "сегодня",
      "contact.description": "Свяжитесь с нами любым удобным способом или оставьте заявку — мы перезвоним в течение часа.",
      "contact.address": "Наш адрес",
      "contact.phone": "Телефон",
      "contact.whatsapp": "WhatsApp доступен",
      "contact.hours": "Часы работы",
      "contact.hoursWeekdays": "Пн-Пт: 10:00 - 21:00",
      "contact.hoursSaturday": "Сб: 10:00 - 18:00",
      "contact.hoursSunday": "Вс: По записи",
      "contact.open2gis": "Открыть в 2GIS",
      // Footer
      "footer.description": "Профессиональное обучение английскому языку с носителями языка в Астане. Инвестируйте в будущее ваших детей!",
      "footer.navigation": "Навигация",
      "footer.courses": "Курсы",
      "footer.kidsCourses": "Детские курсы",
      "footer.specialized": "Специализированные",
      "footer.contacts": "Контакты",
      "footer.copyright": "Все права защищены",
      "footer.privacy": "Политика конфиденциальности",
      "footer.terms": "Условия использования",
      // Test
      "test.title": "Проверь свой уровень английского",
      "test.start": "Начать тест",
      "test.question": "Вопрос",
      "test.next": "Далее",
      "test.submit": "Отправить",
      "test.result": "Ваш результат",
      "test.level": "Уровень",
      "test.correct": "правильных ответов",
      "test.restart": "Пройти тест снова",
      // Gallery
      "gallery.title": "Наш центр в фотографиях",
      "gallery.subtitle": "Мы учим, играем, создаём и вдохновляем",
      "gallery.badge": "Фотогалерея",
      // Reviews
      "reviews.title": "Отзывы о нас",
      "reviews.subtitle": "Что говорят наши ученики",
      "reviews.viewAll": "Посмотреть все отзывы",
      "reviews.badge": "Отзывы",
      // AI Chat
      "chat.askAI": "Спросите у AI ✨",
      "chat.assistant": "AI Помощник",
      "chat.placeholder": "Введите ваше сообщение...",
      "chat.error": "Извините, у меня проблемы с подключением. Пожалуйста, попробуйте позже.",
      "chat.errorProcessing": "Я получил ваше сообщение, но не смог его правильно обработать.",
      "chat.dailyLimitReached": "Извините, вы достигли дневного лимита в 50 запросов. Пожалуйста, попробуйте завтра или свяжитесь с нами напрямую по телефону +7 708 148 68 45.",
    },
    kk: {
      // Navigation
      "nav.home": "Басты",
      "nav.courses": "Курстар",
      "nav.teachers": "Мұғалімдер",
      "nav.pricing": "Бағалар",
      "nav.contact": "Байланыс",
      "nav.test": "Тест",
      // Common
      "common.writeWhatsApp": "WhatsApp-та жазу",
      "common.signUp": "Жазылу",
      "common.freeLesson": "Тегін сабақ алу",
      "common.watchVideo": "Бейнені көру",
      // Hero
      "hero.badge": "Астанадағы №1 тіл орталығы",
      "hero.title": "Сіздің болашағыңыз осы жерден басталады",
      "hero.titleHighlight": "тегі тілде ағылшын",
      "hero.description": "Балалар мен ересектерге арналған кәсіби ағылшын тілін оқыту. IELTS, Business English, сөйлеу ағылшыны — мақсаттарыңызға бізбен жетіңіз.",
      "hero.benefit1": "Тегі тіл",
      "hero.benefit2": "Айына 24 сабақ",
      "hero.benefit3": "Онлайн және офлайн",
      "hero.benefit4": "Барлық деңгейлер",
      "hero.testButton": "Тест тапсырып, тегі тілде тегін сабақ алыңыз",
      "hero.freeTrial": "ТЕГІН СЫНАҚ САБАҚ!",
      "hero.freeTrialDesc": "Speaking Club — әр сенбі тегін",
      // Courses
      "courses.badge": "Біздің курстар",
      "courses.title": "Өз жолыңызды таңдаңыз",
      "courses.titleHighlight": "табысқа",
      "courses.description": "Күнделікті сөйлеуден халықаралық емтиханға дайындыққа дейін кез келген мақсаттарға жету үшін кең курстар таңдауы.",
      "courses.specialized": "Мамандандырылған курстар",
      "courses.specializedDesc": "Сіздің мамандығыңызға арналған ағылшын — біз сізді халықаралық клиенттермен жұмыс істеуге дайындаймыз.",
      "courses.online": "Онлайн оқыту",
      "courses.online1": "Әлемнің кез келген жерінен оқыңыз",
      "courses.online2": "Икемді кесте",
      "courses.online3": "Сабақ жазбалары 24/7 қолжетімді",
      "courses.online4": "Сол мұғалімдер мен әдістер",
      "courses.offline": "Офлайн оқыту",
      "courses.offline1": "Тегі тілмен тікелей қарым-қатынас",
      "courses.offline2": "Әр сенбі Speaking Club",
      "courses.offline3": "Тегін пикниктер мен іс-шаралар",
      "courses.offline4": "Заманауи оқу орталығы",
      "courses.selectCourse": "Курс таңдау",
      // Teachers
      "teachers.badge": "Біздің команда",
      "teachers.title": "Ең",
      "teachers.titleHighlight": "жақсылардан",
      "teachers.description": "Біздің мұғалімдер — халықаралық тәжірибесі бар сертификатталған мамандар және тегі тіл.",
      "teachers.certified": "Сертификатталған мұғалімдер",
      "teachers.certifiedDesc": "Біздің барлық мұғалімдерімізде CELTA, TESOL немесе DELTA халықаралық сертификаттары бар және олар біліктілікті арттыру курстарынан тұрақты түрде өтеді.",
      // Pricing
      "pricing.badge": "Бағалар",
      "pricing.title": "Ашық бағалар —",
      "pricing.titleHighlight": "өзіңізге инвестиция салыңыз",
      "pricing.description": "Сізге ыңғайлы оқыту форматын таңдаңыз. Бірінші сынақ сабағы — тегін!",
      "pricing.signUp": "Жазылу",
      "pricing.kids": "Балалар курстары",
      "pricing.kidsDesc": "6 жастан бастап",
      "pricing.additional": "Қосымша",
      "pricing.additionalDesc": "Арнайы бағдарламалар",
      "pricing.discounts": "Арнайы ұсыныстар",
      // Contact
      "contact.badge": "Байланыс",
      "contact.title": "Жолыңызды бастаңыз",
      "contact.titleHighlight": "бүгін",
      "contact.description": "Бізбен кез келген ыңғайлы тәсілмен байланысыңыз немесе өтініш қалдырыңыз — біз бір сағат ішінде қайта қоңырау шаламыз.",
      "contact.address": "Біздің мекенжайымыз",
      "contact.phone": "Телефон",
      "contact.whatsapp": "WhatsApp қолжетімді",
      "contact.hours": "Жұмыс уақыты",
      "contact.hoursWeekdays": "Дүйсенбі-Жұма: 10:00 - 21:00",
      "contact.hoursSaturday": "Сенбі: 10:00 - 18:00",
      "contact.hoursSunday": "Жексенбі: Жазылым бойынша",
      "contact.open2gis": "2GIS-те ашу",
      // Footer
      "footer.description": "Астанада тегі тілмен ағылшын тілін кәсіби оқыту. Балаларыңыздың болашағына инвестиция салыңыз!",
      "footer.navigation": "Навигация",
      "footer.courses": "Курстар",
      "footer.kidsCourses": "Балалар курстары",
      "footer.specialized": "Мамандандырылған",
      "footer.contacts": "Байланыс",
      "footer.copyright": "Барлық құқықтар қорғалған",
      "footer.privacy": "Құпиялылық саясаты",
      "footer.terms": "Пайдалану ережелері",
      // Test
      "test.title": "Ағылшын тілі деңгейіңізді тексеріңіз",
      "test.start": "Тестті бастау",
      "test.question": "Сұрақ",
      "test.next": "Келесі",
      "test.submit": "Жіберу",
      "test.result": "Сіздің нәтижеңіз",
      "test.level": "Деңгей",
      "test.correct": "дұрыс жауап",
      "test.restart": "Тестті қайта тапсыру",
      // Gallery
      "gallery.title": "Біздің орталық фотосуреттерде",
      "gallery.subtitle": "Біз оқытамыз, ойнаймыз, жасаймыз және шабыттандырамыз",
      "gallery.badge": "Фотогалерея",
      // Reviews
      "reviews.title": "Біз туралы пікірлер",
      "reviews.subtitle": "Біздің оқушылар не дейді",
      "reviews.viewAll": "Барлық пікірлерді көру",
      "reviews.badge": "Пікірлер",
      // AI Chat
      "chat.askAI": "AI-дан сұраңыз✨",
      "chat.assistant": "AI Көмекші",
      "chat.placeholder": "Хабарламаңызды енгізіңіз...",
      "chat.error": "Кешіріңіз, маған қосылуда қиындықтар туындады. Кейінірек қайталап көріңіз.",
      "chat.errorProcessing": "Мен сіздің хабарламаңызды алдым, бірақ оны дұрыс өңдей алмадым.",
      "chat.dailyLimitReached": "Кешіріңіз, сіз күнделікті 50 сұрау лимитіне жеттіңіз. Ертең қайта көріңіз немесе бізбен тікелей +7 708 148 68 45 нөмірі бойынша байланысыңыз.",
    },
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
