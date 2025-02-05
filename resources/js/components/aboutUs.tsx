// import first from '@/assets/images/4.png';
// import chocolateImg from '@/assets/images/aboutuspic.webp';
import pastoLogo from '@/assets/images/macao_logo.png';
import first from '@/assets/images/pic1.png';
import second from '@/assets/images/pic9.png';
import { motion } from 'framer-motion';

export default function PastorMacaoHero() {
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

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* <div className="absolute top-0 right-0 w-[21rem] h-72 overflow-hidden -rotate-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-12 -right-14 w-full h-full"
        >
          <img
            src={first}
            alt="Decorative corner element"
            className="w-full h-full object-cover"
            style={{ filter: 'sepia(100%) saturate(100%) hue-rotate(300deg)' }}
          />
        </motion.div>
      </div> */}
      <div className=" mx-auto ">
        {/* Header Text */}
        <motion.div className="text-center py-8 sm:py-12" initial="hidden" animate="visible" variants={staggerChildren}>
          <motion.h1
            variants={fadeInUp}
            className="text-red-500 font-medium tracking-wide uppercase mb-3 sm:mb-4 text-sm sm:text-lg"
          >
            À propos de nous
          </motion.h1>
          <motion.h2
            variants={fadeInUp}
            className="text-gray-700 uppercase text-4xl md:text-5xl lg:text-6xl font-medium mb-2"
          >
            PASTOR MACAO
          </motion.h2>
          <motion.h2 variants={fadeInUp} className="text-gray-700 uppercase text-2xl md:text-3xl lg:text-4xl mb-12">
            SAVOUREZ LA VIE !
          </motion.h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-[calc(100vh-300px)] z-40">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[80%]   rounded-2xl lg:rounded-l-none overflow-hidden"
          >
            <img src={first} alt="Chocolate making process" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          {/* Center Content */}
          <motion.div
            className="flex flex-col items-center justify-start px-6 lg:px-8 lg:mb-24 z-40"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <img src={pastoLogo} alt="Logo Pastor Macao" className="w-28 h-28 mb-6" />
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6 text-gray-600 text-lg text-center">
              <div className="text-justify ">
                <p className="leading-relaxed mb-4">
                  Fondé en 1954, PASTOR MACAO est le leader marocain en confiserie-chocolaterie, offrant une large gamme
                  de produits de qualité pour satisfaire tous les goûts au meilleur prix.
                </p>
                <p className="leading-relaxed mb-4">
                  La satisfaction de nos clients est au cœur de nos préoccupations. Nous vous proposons une large gamme
                  de produits halal, conçus avec les meilleurs ingrédients répondant aux normes de qualité les plus
                  strictes pour satisfaire tous les goûts.
                </p>
                <p className="leading-relaxed mb-4">
                  La qualité de nos produits est reconnue au-delà des frontières du Maroc et nécessite de faire de
                  nouveaux adeptes.
                </p>
              </div>

              <motion.div variants={fadeInUp} className="pt-4 text-center z-40">
                <button
                  className="group relative px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white text-lg
                    overflow-hidden rounded-md transition-transform hover:scale-105"
                  onClick={() => (window.location.href = '/history')}
                >
                  <span className="relative z-10">En savoir plus</span>
                  <div
                    className="absolute inset-0 bg-red-700 translate-y-full transition-transform
                      group-hover:translate-y-0 duration-300"
                  />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[80%]  rounded-2xl lg:rounded-r-none overflow-hidden z-40"
          >
            <img src={second} alt="Finished chocolate products" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
