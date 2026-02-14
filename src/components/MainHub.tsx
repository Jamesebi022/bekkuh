import { useState } from 'react';
import { Heart, Music, VolumeX } from 'lucide-react';
import PhotoGallery from './PhotoGallery';
import FavoriteSongs from './FavoriteSongs';
import LoveLetter from './LoveLetter';
import OpenWhenButtons from './OpenWhenButtons';
import DaysCounter from './DaysCounter';

export default function MainHub() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [showSecret, setShowSecret] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-pink-100 relative overflow-hidden">
      <FloatingHearts />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold text-red-600 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Our Love Story 💕
          </h1>
          <p className="text-2xl text-red-400" style={{ fontFamily: 'Georgia, serif' }}>
            Every moment with you is magical
          </p>
        </header>

        <DaysCounter startDate="2025-08-04" />

        <PhotoGallery />

        <FavoriteSongs />

        <LoveLetter />

        <OpenWhenButtons />

        <div className="text-center mt-16">
          <Heart
            size={60}
            fill="#ef4444"
            color="#ef4444"
            className="inline-block cursor-pointer transform hover:scale-125 transition-transform duration-300 animate-pulse"
            onClick={() => setShowSecret(true)}
          />
          <p className="text-sm text-red-300 mt-2" style={{ fontFamily: 'Georgia, serif' }}>
            mela iruka heart ah thodu 💖
          </p>
        </div>

        {showSecret && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in" onClick={() => setShowSecret(false)}>
            <div className="bg-white rounded-3xl p-12 max-w-2xl mx-4 shadow-2xl transform animate-scale-in" onClick={(e) => e.stopPropagation()}>
              <h2 className="text-4xl font-bold text-red-600 mb-6 text-center" style={{ fontFamily: 'Georgia, serif' }}>
                Secret Message 💌
              </h2>
              <p className="text-2xl text-gray-700 text-center leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                You found the secret! Secret ennnana, ni oru loosu di 🫂 thangoo
                
                Forever and always. 💕
              </p>
              <button
                onClick={() => setShowSecret(false)}
                className="mt-8 w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold text-lg transition-colors"
              >
                Close 💖
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsMusicPlaying(!isMusicPlaying)}
          className="fixed bottom-8 right-8 p-4 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 z-40"
        >
          {isMusicPlaying ? <Music size={28} /> : <VolumeX size={28} />}
        </button>
      </div>
    </div>
  );
}

function FloatingHearts() {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 4,
    size: 20 + Math.random() * 25,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float opacity-20"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            bottom: '-50px',
          }}
        >
          <Heart
            fill="#ef4444"
            color="#ef4444"
            size={heart.size}
          />
        </div>
      ))}
    </div>
  );
}
