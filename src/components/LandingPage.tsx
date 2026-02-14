import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface LandingPageProps {
  onYesClick: () => void;
}

export default function LandingPage({ onYesClick }: LandingPageProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isNoButtonCentered, setIsNoButtonCentered] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleNoButtonHover = () => {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 60;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    setNoButtonPosition({ x: randomX, y: randomY });
    setIsNoButtonCentered(false);
  };

  const handleYesClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      onYesClick();
    }, 1500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-200 via-red-200 to-pink-300">
      <FloatingHearts />

      {showConfetti && <Confetti />}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 text-red-600 animate-pulse" style={{ fontFamily: 'Georgia, serif' }}>
          Heyy Kodhakuhh,Will U be my life partner?
        </h1>

        <p className="text-xl md:text-2xl text-red-500 mb-12 text-center" style={{ fontFamily: 'Georgia, serif' }}>
          If u chose "yes" then u shouldn't go back in ur words...
        </p>

        <div className="flex gap-6 items-center relative" style={{ minHeight: '100px', minWidth: '400px' }}>
          <button
            onClick={handleYesClick}
            className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white text-2xl font-bold rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-2xl"
          >
            Yes 💕
          </button>

          <button
            onMouseEnter={handleNoButtonHover}
            onTouchStart={handleNoButtonHover}
            style={
              !isNoButtonCentered
                ? {
                    position: 'fixed',
                    left: `${noButtonPosition.x}px`,
                    top: `${noButtonPosition.y}px`,
                  }
                : {}
            }
            className="px-8 py-4 bg-gray-400 hover:bg-gray-500 text-white text-2xl font-bold rounded-full shadow-lg transition-all duration-200"
          >
            No 😢
          </button>
        </div>
      </div>
    </div>
  );
}

function FloatingHearts() {
  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: 20 + Math.random() * 30,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float opacity-30"
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
            className="drop-shadow-lg"
          />
        </div>
      ))}
    </div>
  );
}

function Confetti() {
  const confetti = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 1 + Math.random() * 1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            top: '-20px',
          }}
        >
          <Heart
            fill="#ef4444"
            color="#ec4899"
            size={24}
            className="animate-spin"
          />
        </div>
      ))}
    </div>
  );
}
