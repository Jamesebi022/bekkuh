import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="mb-20 animate-slide-up">
      <h2 className="text-4xl font-bold text-red-600 text-center mb-8" style={{ fontFamily: 'Georgia, serif' }}>
        💌 A Love Letter for You
      </h2>

      <div className="max-w-3xl mx-auto">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="w-full group relative bg-gradient-to-br from-red-100 to-pink-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-12 transform hover:scale-105"
          >
            <div className="flex flex-col items-center gap-6">
              <Mail size={80} className="text-red-500 group-hover:scale-110 transition-transform animate-pulse" />
              <p className="text-2xl font-bold text-red-600" style={{ fontFamily: 'Georgia, serif' }}>
                Click to open your love letter 💕
              </p>
            </div>
          </button>
        ) : (
          <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-3xl shadow-2xl p-12 animate-scale-in border-4 border-red-200">
            <div className="text-center mb-8">
              <Mail size={60} className="text-red-500 inline-block mb-4" />
              <h3 className="text-3xl font-bold text-red-600" style={{ fontFamily: 'Georgia, serif' }}>
                To My Kodhakuhh
              </h3>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              <p>
                Adiye kannnuhhhh,
              </p>

              <p>
                From the moment I met you, my world changed in the most beautiful way.
                I not even thought about that one day i'll gonna love u so much.
                And ippo onayavida enaku yaarume important illangra alavuku onaya love panite.
              </p>

              <p>
                Naa evlovo onaya kasta paduthiruke,but ippa vara nee enaya vitu ponathum illa,
                enaya veruthathum illa,enakandi ni onayave neraya time maathikita.
                enakandi ni neraya paniruka,enkuda ithana naal irunthathuku thanks di kannnuh.
              </p>

              <p>
                Enaya epayu ni vittu pogamatanu enaku theriyum and naanum pogamate,
                itha ni read pannupothu siripa nu enaku theriyu 😅,
                Itha cringe nu laa solitu vanthuratha,romba kasta pattu create paniruke.
              </p>

              <p>
                Intha day kaandi tha ithana naal wait panitu irunthe, dailyu olunga thoongama,
                onaya pathi mattuthaa yosichute irunthe,and ippo naa ithananaal ethukandi wait pannenu
                athu kedachruchu 💞💞.
                I love you more than words can express,
                and I'm so grateful to call you mine.
              </p>

              <p className="text-right font-bold text-red-600 text-xl mt-8">
                Forever yours,<br />
                Your KANNA 💕
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
