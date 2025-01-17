import first from '@/assets/images/4.png';
import chocolateImg from '@/assets/images/aboutuspic.webp';
import pastoLogo from '@/assets/images/macao_logo.png';
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
      <div className="absolute top-0 right-0 w-[21rem] h-72 overflow-hidden -rotate-12">
        {/* Image container */}
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
      </div>
      <motion.div className="text-center py-8 sm:py-12" initial="hidden" animate="visible" variants={staggerChildren}>
        <motion.h1
          variants={fadeInUp}
          className="text-red-500 font-medium tracking-wide uppercase mb-3 sm:mb-4
          text-sm sm:text-lg"
        >
          À propos de nous
        </motion.h1>
        <motion.h2
          variants={fadeInUp}
          className="text-gray-700 lowercase text-4xl md:text-5xl lg:text-6xl font-medium mb-2"
        >
          PASTOR MACAO
        </motion.h2>
        <motion.h2 variants={fadeInUp} className="text-gray-700 lowercase text-2xl md:text-3xl lg:text-4xl mb-12">
          SAVOUREZ LA VIE !
        </motion.h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-200px)]">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[50vh] lg:h-full"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${chocolateImg})`
            }}
          />
          <div className="absolute inset-0 " />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="flex items-center px-6 py-12 lg:px-16 lg:py-0"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <div className="max-w-2xl mx-auto lg:mx-0">
            <motion.div variants={fadeInUp} className="mb-8">
              <img src={pastoLogo} alt="Logo Pastor Macao" className="w-28 h-28 mb-6" />
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6 text-gray-600 text-xl font-semibold">
              <p className="leading-relaxed">
                Fondé en 1954, PASTOR MACAO est le leader marocain en confiserie-chocolaterie, offrant une large gamme
                de produits de qualité pour satisfaire tous les goûts au meilleur prix.
              </p>
              <p className="leading-relaxed">
                La satisfaction de nos clients est au cœur de nos préoccupations. Nous vous proposons une large gamme de
                produits halal, conçus avec les meilleurs ingrédients répondant aux normes de qualité les plus strictes
                pour satisfaire tous les goûts.
              </p>
              <p className="leading-relaxed">
                La qualité de nos produits est reconnue au-delà des frontières du Maroc et nécessite de faire de
                nouveaux adeptes.
              </p>

              <motion.div variants={fadeInUp} className="pt-4">
                <button
                  className="group relative px-8 py-3 bg-red-600 text-white text-lg
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
