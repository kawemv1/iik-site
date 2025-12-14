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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
