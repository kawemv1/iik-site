import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Courses } from "@/components/Courses";
import { Teachers } from "@/components/Teachers";
import { Pricing } from "@/components/Pricing";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Reviews } from "@/components/Reviews";
import { Yaya } from "@/components/Yaya";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      <main>
        <Hero />
        <Teachers />
        <Courses />
        <PhotoGallery />
        <Reviews />
        <Pricing />
        <Yaya />
        <Contact />
        {/* SEO текстовый блок (RU + KZ) */}
        <section id="seo" className="py-12 md:py-16 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl space-y-8">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                Курсы английского языка в Астане — Invest In Kids
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Invest In Kids — языковой центр в Астане, который специализируется на обучении английскому языку для детей,
                подростков и взрослых. Мы готовим к IELTS, SAT, академическому английскому и развиваем разговорные навыки
                с носителями языка. Небольшие группы, индивидуальные программы, корпоративное обучение и онлайн-формат позволяют
                подобрать оптимальный формат занятий под ваши цели: учеба за рубежом, работа в международной компании или свободное
                общение на английском языке. Наш центр находится в удобном районе Астаны, а первый пробный урок — бесплатно.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                Астанадағы ағылшын тілі курстары — Invest In Kids
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Invest In Kids — Астанадағы балаларға, жасөспірімдерге және ересектерге арналған ағылшын тілі орталығы.
                Біз IELTS, SAT, академиялық ағылшын және сөйлесу дағдыларын тәжірибелі мұғалімдермен және native speaker-лермен
                дамытамыз. Кіші топтар, жеке сабақтар, корпоративтік оқыту және онлайн формат сіздің мақсатыңызға сай ыңғайлы
                бағдарламаны таңдауға мүмкіндік береді: шетелде оқу, халықаралық компанияда жұмыс істеу немесе еркін ағылшын тілінде
                сөйлеу. Орталық Астананың ыңғайлы ауданында орналасқан, алғашқы сынақ сабағы — тегін.
              </p>
            </div>
            {/* Короткий SEO-блок именно про детский центр / курсы для детей */}
            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">
                Детский центр английского языка в Астане
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Invest In Kids — детский центр английского языка, где дети изучают английский в игровой форме,
                с носителями языка и опытными преподавателями. Мы помогаем школьникам повысить успеваемость,
                подготовиться к экзаменам и почувствовать себя уверенно при общении на английском языке.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">
                Балаларға арналған ағылшын тілі курстары
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Invest In Kids — балаларға арналған ағылшын тілі курстары бар орталық. Сабақтар ойын арқылы,
                заманауи материалдармен және native speaker-лермен өтеді. Біз мектеп бағдарламасын жеңіл түсінуге,
                емтихандарға дайындалуға және ағылшын тілінде сенімді сөйлеуге көмектесеміз.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
