import bgimage from '@/assets/images/h1-background-img1.jpg';
import second from '@/assets/images/pic9.jpg';
import { motion } from 'framer-motion';

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

const PralineAdvertisement = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Header Section */}
      <motion.div
        className="container mx-auto px-4 py-8 md:py-12"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-red-500 font-medium tracking-wide uppercase mb-3 text-sm md:text-base text-center"
        >
          À propos de nous
        </motion.h2>
        <motion.h1
          variants={fadeInUp}
          className="text-gray-700 uppercase text-3xl md:text-5xl lg:text-6xl font-medium mb-2 text-center"
        >
          PASTOR MACAO
        </motion.h1>
        <motion.h2
          variants={fadeInUp}
          className="text-gray-700 uppercase text-xl md:text-3xl lg:text-4xl mb-8 md:mb-12 text-center"
        >
          SAVOUREZ LA VIE !
        </motion.h2>
      </motion.div>

      {/* Main Content Section */}
      <div className="relative w-full">
        {/* Background Pattern - Responsive width */}
        <div
          className="absolute inset-0 w-full lg:w-1/2 h-full bg-cover bg-center bg-no-repeat opacity-20 lg:opacity-100"
          style={{
            backgroundImage: `url(${bgimage})`
          }}
        />

        {/* Content Container */}
        <div className="relative container mx-auto px-4 py-8 md:py-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-28">
            {/* Image Gallery Section */}
            <div className="w-full lg:w-1/2 relative h-96 md:h-[600px]">
              {/* First Image */}
              <div className="absolute top-0 left-0 w-48 md:w-72 lg:w-96 aspect-square z-10">
                <img src={second} alt="Store front" className="w-full h-full object-cover rounded shadow-xl" />
              </div>
              {/* Second Image */}
              <div className="absolute bottom-0 right-0 w-48 md:w-72 lg:w-96 aspect-square">
                <img src={second} alt="Historical photo" className="w-full h-full object-cover rounded shadow-xl" />
              </div>
            </div>

            {/* Text Content Section */}
            <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
              <h2 className="text-red-500 uppercase tracking-wider text-sm md:text-base">Plaisir Gourmand</h2>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-wide leading-tight">
                LES MEILLEURES
                <br />
                PRALINES
                <br />
                DU MAROC !
              </h2>

              <p className="text-black text-sm md:text-base leading-relaxed max-w-2xl">
                Fondé en 1954, PASTOR MACAO est le leader marocain en confiserie-chocolaterie, offrant une large gamme
                de produits de qualité pour satisfaire tous les goûts au meilleur prix. La satisfaction de nos clients
                est au cœur de nos préoccupations. Nous vous proposons une large gamme de produits halal, conçus avec
                les meilleurs ingrédients répondant aux normes de qualité les plus strictes pour satisfaire tous les
                goûts. La qualité de nos produits est reconnue au-delà des frontières du Maroc et nécessite de faire de
                nouveaux adeptes.
              </p>

              <button
                className="group bg-white text-red-800 px-6 py-3  border-2 border-red-800
                          inline-flex items-center gap-2 text-sm md:text-base
                          hover:bg-red-100 transition-all duration-300"
              >
                READ MORE
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PralineAdvertisement;
