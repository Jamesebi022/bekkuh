import { Music, Play } from 'lucide-react';

const songs = [
  {
    title: 'Perfect',
    artist: 'Ed Sheeran',
    link: 'https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v',
    color: 'from-red-400 to-pink-400',
  },
  {
    title: 'Lover',
    artist: 'Taylor Swift',
    link: 'https://open.spotify.com/track/1dGr1c8CrMLDpV6mPbImSI',
    color: 'from-pink-400 to-red-300',
  },
  {
    title: 'All of Me',
    artist: 'John Legend',
    link: 'https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a',
    color: 'from-red-300 to-pink-500',
  },
  {
    title: 'Thinking Out Loud',
    artist: 'Ed Sheeran',
    link: 'https://open.spotify.com/track/4WNcduiCmDNfmTEz7JvmLv',
    color: 'from-pink-500 to-red-400',
  },
];

export default function FavoriteSongs() {
  return (
    <section className="mb-20 animate-slide-up">
      <h2 className="text-4xl font-bold text-red-600 text-center mb-8" style={{ fontFamily: 'Georgia, serif' }}>
        🎵 Our Favorite Songs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {songs.map((song, index) => (
          <a
            key={index}
            href={song.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${song.color} opacity-10 group-hover:opacity-20 transition-opacity`} />

            <div className="relative p-8 flex items-center gap-6">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Music size={32} className="text-white" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-red-600 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                  {song.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {song.artist}
                </p>
              </div>

              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play size={24} className="text-white ml-1" fill="white" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
