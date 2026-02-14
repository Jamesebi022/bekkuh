import { useState } from 'react';
import { Heart, Smile, Star, Sun, Moon, Coffee } from 'lucide-react';

const messages = [
  {
    icon: Heart,
    title: 'Open when you miss me',
    message: 'Wait a minute, first ni enaya miss panuviya di???..ithu vara enaya ni miss panenu sonathey illaila 🥲. ',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Smile,
    title: 'Open when you need a smile',
    message: 'Hey karuvachiii,onaya intha text la laam epdi sirika vaikurathunu therla,ni nerla iruntha sirika vaipe..ippa epdi sirika vaikurathunu therla,so sootha mooditu itha close panniru 😊✨',
    color: 'from-yellow-400 to-orange-400',
  },
  {
    icon: Star,
    title: 'Open when you need encouragement',
    message: 'Ennayave yaarachum tha encourage pannanum,ithula enkutu onaya encourage panrathu...mooditu podi kannuu',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Sun,
    title: 'Open when you\'re feeling down',
    message: 'Eii bekkuh sundhari, onakandi naa eppavu irupe..onaku yaaru irukangalo ilayo,naa eppayume irupe 🌞💖',
    color: 'from-orange-400 to-red-400',
  },
  {
    icon: Moon,
    title: 'Open before you sleep',
    message: 'Good night, Ennoda thookatha keduthutu ni mattu thooonga poriya di vennamavaley🌙💫',
    color: 'from-indigo-400 to-blue-400',
  },
  {
    icon: Coffee,
    title: 'Open when you need motivation',
    message: 'Ennadi kannuh motivations kaandi vanthingala,Ni motivate aagi ennatha saathika pora apdinu naa sonna ni summa irupiya illaila atheymari yaaru enna sonalum kandukama,o velaya mattu paaru,ni kandipa one day cheika maata 💪⭐',
    color: 'from-amber-600 to-yellow-500',
  },
];

export default function OpenWhenButtons() {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);

  return (
    <section className="mb-20 animate-slide-up">
      <h2 className="text-4xl font-bold text-red-600 text-center mb-8" style={{ fontFamily: 'Georgia, serif' }}>
        🎁 Open When...
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-8">
        {messages.map((msg, index) => {
          const Icon = msg.icon;
          return (
            <button
              key={index}
              onClick={() => setSelectedMessage(index)}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 p-6"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${msg.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

              <div className="relative flex flex-col items-center text-center gap-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${msg.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>
                  {msg.title}
                </h3>
              </div>
            </button>
          );
        })}
      </div>

      {selectedMessage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setSelectedMessage(null)}
        >
          <div
            className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl mx-auto shadow-2xl transform animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center text-center">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${messages[selectedMessage].color} flex items-center justify-center shadow-lg mb-6`}>
                {(() => {
                  const Icon = messages[selectedMessage].icon;
                  return <Icon size={40} className="text-white" />;
                })()}
              </div>

              <h3 className="text-3xl font-bold text-red-600 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                {messages[selectedMessage].title}
              </h3>

              <p className="text-xl text-gray-700 leading-relaxed mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                {messages[selectedMessage].message}
              </p>

              <button
                onClick={() => setSelectedMessage(null)}
                className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold text-lg transition-colors shadow-lg"
              >
                Close 💖
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
