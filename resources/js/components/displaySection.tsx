import video from '@/assets/images/VIDEO-2023-01-06-12-46-20.mp4';
import { motion } from 'framer-motion';
import { Globe2, History, MapPin, Package } from 'lucide-react';
import { useState } from 'react';
import StatsDashboard from './counter';
import { Container } from './ui';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/shadcn-dailog';
const stats = [
  {
    number: 70,
    label: "ans d'expertise",
    subtext: 'depuis 1954',
    icon: <History className="stroke-primary w-12 h-12" />,
    formatter: (value) => `${value}+`
  },
  {
    number: 20,
    label: 'pays',
    subtext: 'à travers le monde',
    icon: <Globe2 className="stroke-primary w-12 h-12" />,
    formatter: (value) => `${value}+`
  },
  {
    number: 3,
    label: 'continents',
    subtext: 'Afrique, Europe, Asie',
    icon: <MapPin className="stroke-primary w-12 h-12" />
  },
  {
    number: 300,
    label: 'produits',
    subtext: 'diversifiés',
    icon: <Package className="stroke-primary w-12 h-12" />,
    formatter: (value) => `${value}+`
  }
];
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function DisplaySection() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);

  return (
    <section className="relative py-8 sm:py-12 lg:py-16 ">
      <motion.div className="text-center " initial="hidden" animate="visible" variants={staggerChildren}>
        <motion.h2
          variants={fadeInUp}
          className="text-red-500 font-medium tracking-wide uppercase mb-3 sm:mb-4
                text-sm sm:text-lg"
        >
          Découvrez notre parcours artisanal
        </motion.h2>
        <motion.h1 variants={fadeInUp} className="text-gray-700 text-4xl md:text-5xl lg:text-6xl font-medium mb-12">
          Expérimentez le mélange parfait
        </motion.h1>
      </motion.div>

      {/* Video Section with Enhanced Styling */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden group">
        <div className="absolute inset-0 w-full h-full">
          {/* <img
            src={videoPlay}
            alt="Behind the scenes of our chocolate crafting"
            className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" /> */}
          <video autoPlay loop muted playsInline className="object-cover w-full h-full ">
            <source src={video} type="video/mp4" />
          </video>
        </div>

        {/* Enhanced Play Button */}
        {/* <button
          onClick={() => setIsOpen(true)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-20 h-20 md:w-24 md:h-24 bg-white/95 rounded-full
          flex items-center justify-center
          transform transition-all duration-500
          hover:scale-110 hover:bg-white focus:outline-none
          focus:ring-4 focus:ring-red-500 focus:ring-offset-2
          group/btn cursor-pointer z-10 shadow-lg"
          aria-label="Watch our story"
        >
          <Play className="w-10 h-10 md:w-12 md:h-12 text-red-500 ml-1 group-hover/btn:text-red-600 transition-colors" />
          <div className="absolute w-24 h-24 md:w-28 md:h-28 border-2 border-white/80 rounded-full animate-ping opacity-75" />
        </button> */}

        {/* Video Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-white text-center text-lg md:text-xl font-light">
            Discover the artistry behind our creations
          </p>
        </div>
      </div>

      {/* Enhanced Video Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden rounded-xl">
          <DialogHeader>
            <DialogTitle className="sr-only">Our Story</DialogTitle>
          </DialogHeader>
          <div className="relative w-full h-full pt-[56.25%] bg-black">
            <iframe
              src={video}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute w-full top-0 left-0  h-full border-0"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Enhanced Stats Section */}
      <Container>
        <StatsDashboard />
      </Container>
    </section>
  );
}
