import { useState, useEffect } from 'react';
import { Calendar, Heart } from 'lucide-react';

interface DaysCounterProps {
  // we don’t need startDate from props now, we’ll fix it to Aug 4, 2025
}

export default function DaysCounter(_: DaysCounterProps) {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date('2025-08-04T00:00:00').getTime(); // FIXED start date
      const now = new Date().getTime();
      const difference = now - start;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []); // empty dependency because we don’t need props now

  return (
    <section className="mb-20 animate-slide-up">
      <h2 className="text-4xl font-bold text-red-600 text-center mb-8" style={{ fontFamily: 'Georgia, serif' }}>
        ⏰ Time We've Been Together
      </h2>

      <div className="max-w-5xl mx-auto bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Calendar size={40} className="text-white" />
          <p className="text-white text-2xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>
            Since August 04, 2025
          </p>
          <Heart size={40} className="text-white" fill="white" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <TimeUnit value={timeElapsed.days} label="Days" />
          <TimeUnit value={timeElapsed.hours} label="Hours" />
          <TimeUnit value={timeElapsed.minutes} label="Minutes" />
          <TimeUnit value={timeElapsed.seconds} label="Seconds" />
        </div>

        <p className="text-center text-white text-xl mt-8 font-bold" style={{ fontFamily: 'Georgia, serif' }}>
          And counting every precious moment with you! 💕
        </p>
      </div>
    </section>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
      <div className="text-5xl md:text-6xl font-bold text-white mb-2 animate-pulse">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-white text-lg font-semibold" style={{ fontFamily: 'Georgia, serif' }}>
        {label}
      </div>
    </div>
  );
}
