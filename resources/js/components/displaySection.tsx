import videoPlay from '@/assets/images/video.jpg';
import { Play } from 'lucide-react';
import { useState } from 'react';
import { Counter } from './counter';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/shadcn-dailog';

const stats = [
  { number: 98, label: 'Satisfied Clients' },
  { number: 65, label: 'Products' },
  { number: 10, label: 'Years Experience' },
  { number: 12, label: 'Awards' }
];

const contactInfo = {
  address: 'Rue 123, Quartier Industrial, Casablanca',
  phone: '+212 123-456789',
  email: 'contact@pastormacao.com',
  coordinates: {
    lat: 33.5731,
    lng: -7.5898
  }
};

export default function DisplaySection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative py-8 sm:py-12 lg:py-16">
      {/* Hero Image Container */}
      <div className="relative h-[400px] md:h-[450px] lg:h-[450px] w-full overflow-hidden group">
        {/* Image with proper sizing */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={videoPlay}
            alt="Chocolate pouring"
            className="w-full h-full object-fill object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Play Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full
            flex items-center justify-center
            transform transition-all duration-300
            hover:scale-110 hover:bg-white focus:outline-none
            focus:ring-2 focus:ring-red-500 focus:ring-offset-2
            group cursor-pointer z-10"
          aria-label="Play video"
        >
          <Play className="w-8 h-8 md:w-10 md:h-10 text-red-500 ml-1" />
          <div
            className="absolute w-20 h-20 md:w-24 md:h-24 border-2 border-white rounded-full
              animate-ping opacity-75"
          />
        </button>
      </div>

      {/* Video Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <DialogHeader>
            <DialogTitle className="sr-only">Product Video</DialogTitle>
          </DialogHeader>
          <div className="relative pt-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/your-video-id?autoplay=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
            />
          </div>
        </DialogContent>
      </Dialog>

      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="relative -mt-20 mx-4 bg-white rounded-lg shadow-xl p-6 md:p-8 mb-16">
          <h2 className="text-center text-xl md:text-2xl mb-6 md:mb-8">The best confectionery for your enjoyment</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat) => (
              <Counter key={stat.label} end={stat.number} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
