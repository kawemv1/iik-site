import { motion } from "framer-motion";
import { useState } from "react";
import { X, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const photos = [
  { id: 1, src: "/photos/photo1.jpg", alt: "Наш центр - фото 1" },
  { id: 2, src: "/photos/photo2.jpg", alt: "Наш центр - фото 2" },
  { id: 3, src: "/photos/photo3.jpg", alt: "Наш центр - фото 3" },
  { id: 4, src: "/photos/photo4.jpg", alt: "Наш центр - фото 4" },
  { id: 5, src: "/photos/photo5.jpg", alt: "Наш центр - фото 5" },
  { id: 6, src: "/photos/photo6.jpg", alt: "Наш центр - фото 6" },
  { id: 7, src: "/photos/photo7.jpg", alt: "Наш центр - фото 7" },
  { id: 8, src: "/photos/photo8.jpg", alt: "Наш центр - фото 8" },
];

export const PhotoGallery = () => {
  const { t } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-12 md:py-16 lg:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t("gallery.badge")}</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t("gallery.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("gallery.subtitle")}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl cursor-pointer group"
              onClick={() => setSelectedPhoto(photo.id)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
            onClick={() => setSelectedPhoto(null)}
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={photos.find((p) => p.id === selectedPhoto)?.src}
            alt="Selected photo"
            className="max-w-full max-h-[85vh] md:max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

