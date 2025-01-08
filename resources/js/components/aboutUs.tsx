import chocolateImg from '@/assets/images/aboutuspic.png';
import pastoLogo from '@/assets/images/macoa-logo-small.svg';
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
      {/* <div className="absolute right-0 -bottom-40 w-68 h-[24rem] translate-x-[40%] -translate-y-[200%]">
        <img src={first} alt="Decorative right candy" className="w-full h-full object-cover opacity-50" />
      </div> */}
      <motion.div className="text-center py-8 sm:py-12" initial="hidden" animate="visible" variants={staggerChildren}>
        <motion.h2
          variants={fadeInUp}
          className="text-red-500 font-medium tracking-wide uppercase mb-3 sm:mb-4
          text-sm sm:text-base"
        >
          À propos de nous
        </motion.h2>
        <motion.h1 variants={fadeInUp} className="text-gray-700 text-4xl md:text-5xl lg:text-6xl font-medium mb-2">
          PASTOR MACAO
        </motion.h1>
        <motion.h2 variants={fadeInUp} className="text-gray-700 text-2xl md:text-3xl lg:text-4xl mb-12">
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
          <div className="absolute inset-0 bg-black/10" />
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
                >
                  <span className="relative z-10">En Savoir Plus</span>
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
