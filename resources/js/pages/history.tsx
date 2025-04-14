import banner from '@/assets/images/25.webp';
// import commercial from '@/assets/images/commercial.webp';
// import composition from '@/assets/images/composition.webp';
// import iso from '@/assets/images/iso.jpg';
// import showcase from '@/assets/images/showcasing.webp';
import bgimage2 from '@/assets/images/history.webp';
import bgimage from '@/assets/images/history_1.png';
import bgimage3 from '@/assets/images/history_3.png';
import bgimage4 from '@/assets/images/history_4.png';

import logored from '@/assets/images/LOGO-MACAO.svg';

import SEO from '@/components/seo';
import { NewLayout } from '@/layouts/new-layout';
import { Head } from '@inertiajs/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut'
    }
  }
};

const ContentBlock = ({ imageOnLeft, title, content, imageSrc }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="container mx-auto px-4 py-24"
    >
      <div
        className={`flex flex-col ${imageOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 relative`}
      >
        {/* Image Container with hover effect and subtle border */}
        <motion.div
          className="w-full md:w-1/2 relative group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* <div className="absolute inset-0 bg-red-500/10 group-hover:bg-red-500/0 transition-colors duration-300 rounded-lg" /> */}
          <div className="absolute inset-0 border-2 border-red-500/20 rounded-lg transform -rotate-1" />
          <div className="absolute inset-0 border-2 border-gray-900/10 rounded-lg transform rotate-1" />
          <img
            src={imageSrc || '/api/placeholder/600/400'}
            alt={title}
            className="w-full rounded-lg object-cover shadow-xl relative z-10"
          />
        </motion.div>

        {/* Content Container with sophisticated styling */}
        <div className="w-full md:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, x: imageOnLeft ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-red-500/10 rounded-full" />
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gray-100 rounded-full" />

            {/* Logo */}
            {/* <motion.img
              src={pastoLogo}
              alt="Logo Pastor Macao"
              className="w-24 h-24 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            /> */}

            {/* Title with decorative underline */}
            <div className="relative mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
              <div className="h-1 w-20 bg-red-500 rounded-full" />
            </div>

            {/* Content with enhanced typography */}
            <p className="text-lg leading-relaxed text-gray-700 space-y-4 text-justify">
              {content.split('.').map(
                (sentence, index) =>
                  sentence.trim() && (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="block mb-4"
                    >
                      {sentence.trim() + '.'}
                    </motion.span>
                  )
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
const FlexibleSection = ({
  imagePosition = 'left', // 'left' or 'right'
  bgImage,
  logo,
  title,
  tagline,
  foundedYear,
  brandName,
  paragraphs
}) => {
  // Common classes
  const containerClasses =
    'min-h-[400px] sm:min-h-[450px] md:h-[600px] lg:h-[650px] max-w-[90%] mx-auto relative overflow-hidden';

  // Classes that change based on image position
  const getContainerRoundedClasses = () => {
    if (imagePosition === 'left') {
      return 'rounded-l-[200px] rounded-br-[200px]';
    } else {
      return 'rounded-r-[200px] rounded-bl-[200px]';
    }
  };

  const getContentRoundedClasses = () => {
    if (imagePosition === 'left') {
      return 'rounded-l-[200px]';
    } else {
      return 'rounded-r-[200px]';
    }
  };

  const getContentPositionClasses = () => {
    if (imagePosition === 'left') {
      return 'ml-auto';
    } else {
      return 'mr-auto';
    }
  };

  const getBorderClasses = () => {
    if (imagePosition === 'left') {
      return 'border-t-2 border-b-2 border-r-2';
    } else {
      return 'border-t-2 border-b-2 border-l-2';
    }
  };

  const getLogoPosition = () => {
    if (imagePosition === 'left') {
      return 'top-4 right-4';
    } else {
      return 'top-4 left-4';
    }
  };

  const getImagePositionClasses = () => {
    if (imagePosition === 'left') {
      return 'left-0';
    } else {
      return 'right-0';
    }
  };

  return (
    <div className={`bg-gray-500 ${getContainerRoundedClasses()} ${containerClasses}`}>
      {/* Background image section */}
      <div className={`absolute inset-0 ${getImagePositionClasses()} w-[60%] z-0`}>
        <img src={bgImage} alt="Background image" className="object-fill absolute h-full w-full" />
      </div>

      {/* Content section */}
      <div
        className={`bg-white ${getBorderClasses()} border-red-700 ${getContentRoundedClasses()} h-full w-[52%] ${getContentPositionClasses()} relative`}
      >
        {/* Logo */}
        <div className={`absolute ${getLogoPosition()}`}>
          <div className="flex items-center justify-center w-12 h-12">
            <img src={logo} alt="Brand logo" />
          </div>
        </div>

        {/* Content */}
        <div className="pt-20 pb-28 px-20 flex flex-col justify-center h-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-2 leading-tight">
            {title}
            <br />
            <span className="block">{tagline}</span>
          </h1>

          <div className="mt-6">
            <p className="text-gray-800 mb-6 text-base">
              <strong>Founded in {foundedYear},</strong> {brandName}
            </p>

            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4 text-sm md:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function History() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end start']
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const headerScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  return (
    <div className="relative min-h-screen">
      <SEO title="Macao" description="Welcome to our amazing website" keywords="keyword1, keyword2, keyword3" />
      <Head title="Macao" />
      <motion.div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${banner || '/placeholder.svg'})`
            }}
          />
        </div>

        <div className="relative mx-auto px-4  ml-10 ">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex min-h-[350px] flex-col text-center md:text-left justify-center pt-36 pb-12 text-white"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl uppercase  font-bold font-banner tracking-wide md:text-[65px] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%),_0_2px_15px_rgb(255_255_255_/_30%)] leading-tight"
            >
              <span className="inline-block"> DERRIÉRE CHAQUE BOUCHÉE,</span>{' '}
              <span className="inline-block">IL Y A UNE </span>{' '}
              <span className="inline-block">HISTOIRE, VOICI LA NÔTRE.</span>
            </motion.h1>
          </motion.div>
        </div>
      </motion.div>
      {/* Content Blocks */}
      <div className="bg-white py-8 md:py-12 font-custom">
        {/* First Section */}
        <motion.div
          className="mb-8 md:mb-16 bg-gray-500 rounded-l-[50px] sm:rounded-l-[100px] md:rounded-l-[150px] lg:rounded-l-[200px] rounded-br-[50px] sm:rounded-br-[100px] md:rounded-br-[150px] lg:rounded-br-[200px] min-h-[300px] sm:min-h-[400px] md:h-[500px] lg:h-[700px] max-w-[95%] sm:max-w-[90%] mx-auto relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="absolute inset-0 left-0 w-1/2 sm:w-[55%] md:w-[60%] z-0">
            <img
              src={bgimage}
              alt="Chocolatier preparing gourmet chocolates"
              className="object-cover sm:object-fill absolute h-full w-full"
            />
          </div>
          <div className="bg-white border-t-2 border-b-2 border-r-2 border-red-700 rounded-l-[50px] sm:rounded-l-[100px] md:rounded-l-[150px] lg:rounded-l-[200px] h-full w-[60%] sm:w-[55%] md:w-[52%] ml-auto relative">
            {/* Small logo top right */}
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
              <div className="flex items-center justify-center w-8 h-8 md:w-14 md:h-14">
                <img src={logored} alt="pastore macao logo" />
              </div>
            </div>

            <div className="pt-10 sm:pt-16 md:pt-20 pb-10 sm:pb-16 md:pb-28 px-4 sm:px-10 md:px-16 lg:px-20 flex flex-col justify-center h-full">
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-red-600 mb-2 leading-tight">
                PASTOR MACAO SAVOUREZ LA VIE
              </h1>

              <div className="mt-3 sm:mt-6">
                <h2 className="text-red-600 font-bold mb-2 sm:mb-4 md:mb-6 uppercase text-lg sm:text-lg md:text-2xl">
                  <span className="text-black">Fondé en</span> 1954, PASTOR MACAO
                </h2>
                <p className="text-gray-700 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base text-justify">
                  est le leader marocain en confiserie-chocolaterie, offrant des produits de qualité pour tous les goûts
                  aux meilleurs prix.
                </p>
                <p className="text-gray-700 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base text-justify">
                  Notre gamme de produits Halal, conçue avec les meilleurs ingrédients, répond aux normes de qualité les
                  plus strictes et est reconnue internationalement.
                </p>
                <p className="text-gray-700 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base text-justify">
                  Nos sites technologiques innovants répondent à toutes les demandes du marché.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Second Section - Mirror of first section with right alignment */}
        <motion.div
          className="my-8 md:my-16 bg-gray-500 rounded-r-[50px] sm:rounded-r-[100px] md:rounded-r-[150px] lg:rounded-r-[200px] rounded-bl-[50px] sm:rounded-bl-[100px] md:rounded-bl-[150px] lg:rounded-bl-[200px] min-h-[300px] sm:min-h-[400px] md:h-[500px] lg:h-[700px] max-w-[95%] sm:max-w-[90%] mx-auto relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="absolute inset-0 right-0 w-1/2 sm:w-[55%] md:w-[60%] ml-auto z-0">
            <img
              src={bgimage2}
              alt="Chocolatier preparing gourmet chocolates"
              className="object-cover sm:object-fill absolute h-full w-full"
            />
          </div>
          <div className="bg-white border-t-2 border-b-2 border-l-2 border-red-700 rounded-r-[50px] sm:rounded-r-[100px] md:rounded-r-[150px] lg:rounded-r-[200px] h-full w-[60%] sm:w-[55%] md:w-[52%] mr-auto relative">
            {/* Small logo top left */}
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
              <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12">
                <img src={logored} alt="pastore macao logo" />
              </div>
            </div>

            <div className="pt-10 sm:pt-16 md:pt-20 pb-10 sm:pb-16 md:pb-28 px-4 sm:px-10 md:px-16 lg:px-20 flex flex-col justify-center h-full">
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase font-bold text-red-600 mb-2 leading-tight">
                L'historique
              </h1>

              <div className="mt-3 sm:mt-6">
                <h2 className="text-black font-bold mb-2 sm:mb-4 md:mb-6 uppercase text-base sm:text-lg md:text-2xl text-justify">
                  <span className="text-red-600">PASTOR MACAO</span> a démarré en{' '}
                  <span className="text-red-600 text-lg sm:text-lg md:text-2xl">1948</span>
                </h2>
                <p className="text-gray-700 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base text-justify">
                  Devenue société de confiserie-chocolaterie en 1954, notre exigence d'excellence a fait de nous le
                  leader marocain du secteur.
                </p>
                <p className="text-gray-700 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base text-justify">
                  Nos produits font partie du quotidien de millions de marocains et notre éléphant blanc sur fond rouge
                  est reconnu par tous.
                </p>
                <p className="text-gray-700 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base text-justify">
                  Aujourd'hui, notre savoir-faire et notre gamme élaborée selon les normes strictes sont appréciés dans
                  plusieurs pays.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Third Section - Same pattern as first */}
        <motion.div
          className="my-8 md:my-16 bg-gray-500 rounded-l-[50px] sm:rounded-l-[100px] md:rounded-l-[150px] lg:rounded-l-[200px] rounded-br-[50px] sm:rounded-br-[100px] md:rounded-br-[150px] lg:rounded-br-[200px] min-h-[300px] sm:min-h-[400px] md:h-[500px] lg:h-[700px] max-w-[95%] sm:max-w-[90%] mx-auto relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="absolute inset-0 left-0 w-1/2 sm:w-[55%] md:w-[60%] z-0">
            <img
              src={bgimage3}
              alt="Chocolatier preparing gourmet chocolates"
              className="object-cover sm:object-fill absolute h-full w-full"
            />
          </div>
          <div className="bg-white border-t-2 border-b-2 border-r-2 border-red-700 rounded-l-[50px] sm:rounded-l-[100px] md:rounded-l-[150px] lg:rounded-l-[200px] h-full w-[60%] sm:w-[55%] md:w-[52%] ml-auto relative">
            {/* Small logo top right */}
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
              <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12">
                <img src={logored} alt="pastore macao logo" />
              </div>
            </div>

            <div className="pt-10 sm:pt-16 md:pt-20 pb-10 sm:pb-16 md:pb-28 px-4 sm:px-10 md:px-16 lg:px-20 flex flex-col justify-center h-full">
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase font-bold text-red-600 mb-2 leading-tight text-start">
                Une qualité supérieure constante
              </h1>

              <div className="mt-3 sm:mt-6">
                <p className="text-gray-800 mb-2 sm:mb-4 md:mb-6 text-sm md:text-base font-bold uppercase text-justify">
                  La confiance, la satisfaction et <span className="text-red-600">la santé</span>
                </p>

                <p className="text-gray-700 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base text-justify">
                  de nos consommateurs sont au sommet de nos priorités.
                </p>

                <p className="text-gray-700 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base text-justify">
                  Tous nos produits suivent les normes les plus strictes et utilisent des matières premières premium
                  pour garantir goût et excellence.
                </p>

                <p className="text-gray-700 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base text-justify">
                  Nos processus sophistiqués et sites technologiques assurent traçabilité, qualité et sécurité, avec des
                  équipes formées et encadrées pour l'excellence.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Fourth Section - Same pattern as second */}
        <motion.div
          className="my-8 md:my-16 bg-gray-500 rounded-r-[50px] sm:rounded-r-[100px] md:rounded-r-[150px] lg:rounded-r-[200px] rounded-bl-[50px] sm:rounded-bl-[100px] md:rounded-bl-[150px] lg:rounded-bl-[200px] min-h-[300px] sm:min-h-[400px] md:h-[500px] lg:h-[700px] max-w-[95%] sm:max-w-[90%] mx-auto relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          <div className="absolute inset-0 right-0 w-1/2 sm:w-[55%] md:w-[60%] ml-auto z-0">
            <img
              src={bgimage4}
              alt="Chocolatier preparing gourmet chocolates"
              className="object-cover sm:object-fill absolute h-full w-full"
            />
          </div>
          <div className="bg-white border-t-2 border-b-2 border-l-2 border-red-700 rounded-r-[50px] sm:rounded-r-[100px] md:rounded-r-[150px] lg:rounded-r-[200px] h-full w-[60%] sm:w-[55%] md:w-[52%] mr-auto relative">
            {/* Small logo top left */}
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
              <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12">
                <img src={logored} alt="pastore macao logo" />
              </div>
            </div>

            <div className="pt-10 sm:pt-16 md:pt-20 pb-10 sm:pb-16 md:pb-28 px-4 sm:px-10 md:px-16 lg:px-20 flex flex-col justify-center h-full">
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase font-bold text-red-600 mb-2 leading-tight text-start">
                Un partenaire fiable et responsable
              </h1>

              <div className="mt-3 sm:mt-6">
                <p className="text-gray-800 mb-2 sm:mb-4 md:mb-6 text-sm md:text-base font-bold uppercase text-justify">
                  <strong className="text-red-600">PASTOR MACAO</strong> place la sécurité alimentaire au cœur de ses
                  priorités.
                </p>

                <p className="text-gray-700 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base text-justify">
                  Nous effectuons des contrôles rigoureux pour respecter les normes marocaines et internationales.
                  Certifiée ISO 9001 et autorisée par l'ONSSA à exporter.
                </p>

                <p className="text-gray-700 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base text-justify">
                  Notre laboratoire R&D développe constamment de nouveaux produits, comme notre gamme de chocolat sans
                  sucre.
                </p>

                <p className="text-gray-700 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base text-justify">
                  En choisissant PASTOR MACAO, vous avez la garantie d'un partenaire fiable offrant des produits
                  premiums de qualité supérieure.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* <Container>
        <ContactSection id="contact" />
      </Container> */}
    </div>
  );
}

export default History;
History.layout = (page: any) => <NewLayout children={page} />;
