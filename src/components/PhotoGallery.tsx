import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  {
    url: 'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Our first adventure together 💕',
  },
  {
    url: 'https://images.pexels.com/photos/1024969/pexels-photo-1024969.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Sunset walks with you are my favorite 🌅',
  },
  {
    url: 'https://images.pexels.com/photos/1024970/pexels-photo-1024970.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Every moment is special with you ✨',
  },
  {
    url: 'https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Making memories that last forever 💖',
  },
];

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="mb-20 animate-slide-up">
      <h2 className="text-4xl font-bold text-red-600 text-center mb-8" style={{ fontFamily: 'Georgia, serif' }}>
        ✨ Our Memories
      </h2>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative">
          <img
            src={photos[currentIndex].url}
            alt={photos[currentIndex].caption}
            className="w-full h-96 object-cover transition-all duration-500"
          />

          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full shadow-lg transform hover:scale-110 transition-all"
          >
            <ChevronLeft size={28} className="text-red-600" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full shadow-lg transform hover:scale-110 transition-all"
          >
            <ChevronRight size={28} className="text-red-600" />
          </button>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <p className="text-white text-2xl text-center" style={{ fontFamily: 'Georgia, serif' }}>
              {photos[currentIndex].caption}
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-2 py-6">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-red-500 w-8' : 'bg-red-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
