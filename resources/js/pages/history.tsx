import candies from '@/assets/images/candies.webp';
import commercial from '@/assets/images/commercial.webp';
import composition from '@/assets/images/composition.webp';
import iso from '@/assets/images/iso.webp';
import pastoLogo from '@/assets/images/macoa-logo-small.svg';
import showcase from '@/assets/images/showcasing.webp';
import ContactSection from '@/components/contactUs';
import SEO from '@/components/seo';
import { Container } from '@/components/ui';
import { GuestLayout } from '@/layouts';
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
          <div className="absolute inset-0 bg-red-500/10 group-hover:bg-red-500/0 transition-colors duration-300 rounded-lg" />
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
            <motion.img
              src={pastoLogo}
              alt="Logo Pastor Macao"
              className="w-24 h-24 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />

            {/* Title with decorative underline */}
            <div className="relative mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
              <div className="h-1 w-20 bg-red-500 rounded-full" />
            </div>

            {/* Content with enhanced typography */}
            <p className="text-lg leading-relaxed text-gray-700 space-y-4">
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

      <motion.div
        ref={scrollRef}
        style={{
          opacity: headerOpacity,
          y: headerY,
          scale: headerScale
        }}
        className="relative overflow-hidden bg-gradient-to-r from-red-400 to-red-500"
      >
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${candies || '/placeholder.svg'})`,
              opacity: '0.20'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 to-transparent" />
        </div>

        <div className="container relative mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex min-h-[500px] items-center justify-center py-20"
          >
            <div className="text-center mt-28">
              <motion.h1 variants={fadeInUp} className="mb-6 text-4xl font-bold text-white md:text-6xl">
                Notre Héritage Gourmand
              </motion.h1>
              <motion.p variants={fadeInUp} className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                Depuis 1948, PASTOR MACAO transforme la passion et l’excellence en douceurs inoubliables, devenant le
                leader marocain en confiserie, chocolat et pâtisserie.{' '}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Blocks */}
      <div className="bg-white py-12">
        <ContentBlock
          imageOnLeft={true}
          title="PASTOR MACAO SAVOUREZ LA VIE !"
          content="Fondé en 1954, PASTOR MACAO est le leader marocain en confiserie-chocolaterie, offrant une large gamme de produits de qualité pour satisfaire tous les goûts au meilleur prix.La satisfaction de nos clients est au cœur de nos préoccupations. Nous avons développé une large gamme de produits Halal, conçus avec les meilleurs ingrédients et répondant aux normes de qualité les plus strictes pour satisfaire tous les goûts. La qualité de nos produits est reconnue au-delà des frontières du Maroc et ne cesse de faire de nouveaux adeptes.Nos sites, à la pointe de la technologie, nous permettent de répondre à toutes les demandes du marché et de continuer d’innover pour satisfaire nos clients."
          imageSrc={commercial}
        />

        <ContentBlock
          imageOnLeft={false}
          title="L'historique"
          content="PASTOR MACAO a démarré en 1948 comme une petite unité de production. Elle est graduellement devenue une société de confiserie-chocolaterie en plein essor en 1954.L’amour de notre métier, l’exigence de sélectionner les meilleurs ingrédients et notre recherche constante de l’excellence ont fait de nous le leader au Maroc de la confiserie- chocolaterie. Au-delà de ce positionnement, ce qui nous inspire c’est la confiance de nos consommateurs. Nos bonbons, chocolats, gaufrettes, produits pâtissiers, pâtes à tartiner et autres friandises, ont fait partie du quotidien de millions de marocains, toutes générations confondues.L’éléphant blanc sur fond rouge, logo emblématique de notre marque, est reconnaissable par tous les marocains de tous les âges.Aujourd’hui, nos produits sont appréciés dans plusieurs pays. Notre savoir-faire et le large choix de nos produits, élaborés selon les normes de qualité les plus strictes, nous permettent de répondre aux demandes de tous les marchés de la confiserie-chocolaterie aux meilleurs prix."
          imageSrc={composition}
        />

        <ContentBlock
          imageOnLeft={true}
          title="Une qualité supérieure constante"
          content="La confiance, la satisfaction et la santé de nos consommateurs sont au sommet de nos priorités. Pour cela, tous nos produits sont conçus selon les normes de qualité les plus strictes et avec des matières premières premium pour garantir goût et excellence.Nos processus sophistiqués nous permettent une traçabilité de chaque élément, assurant ainsi la qualité et la sécurité de chaque produit.Nos sites de productions sont à la pointe de la technologie. Nos équipes qui élaborent nos produits sont tous animées par la même philosophie d’offrir les produits de la plus hautequalité aux consommateurs. Nos collaborateurs sont constamment formés et encadrés pour donner le meilleur d’eux-mêmes."
          imageSrc={showcase}
        />

        <ContentBlock
          imageOnLeft={false}
          title="Un partenaire fiable et responsable"
          content="PASTOR MACAO place la sécurité alimentaire au cœur de ses priorités. Nous effectuons des contrôles de qualité quotidiennement sur nos sites afin de veiller au respect des normes alimentaires et d’hygiène en vigueur au Maroc et à l’étranger.Notre société est certifiée ISO 9001 et peut exporter ses produits à l’étranger en vertu d’une autorisation de l’Office National de Sécurité Sanitaire au Maroc (ONSSA). Elle est aussi certifiée IFS. Les certifications HACCP et BRC Global Standards sont en cours d’obtention.PASTOR MACAO dispose d’un laboratoire de Recherche & Développement lui permettant de développer de nouveaux produits en réponses à toutes les nouveautés.C’est ainsi que notre gamme de produits ne cesse de s’étoffer. De nouveaux produits, telle notre gamme de chocolat sans sucre ont été conçus en réponse à un segment très largement sous-servi au Maroc.Notre succès, aujourd’hui incontesté, est le fruit de longues années de travail, de passion et de sérieux. En choisissant de travailler avec nous, vous avez la garantie d’un partenaire fiable et capable de garantir des produits premiums de qualité supérieure."
          imageSrc={iso}
        />
      </div>
      <Container>
        <ContactSection />
      </Container>
    </div>
  );
}

export default History;
History.layout = (page: any) => <GuestLayout children={page} />;
