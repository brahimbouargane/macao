import banner from '@/assets/images/25.webp';
import bgimage2 from '@/assets/images/history.webp';
import bgimage from '@/assets/images/history_1.png';
import bgimage3 from '@/assets/images/history_3.png';
import bgimage4 from '@/assets/images/history_4.png';

import SEO from '@/components/seo';
import { NewLayout } from '@/layouts/new-layout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
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

// Timeline step component to match the image design
const TimelineStep = ({ title, subtitle, description, imageSrc, step, isLast = false }) => {
  const isEven = step % 2 === 0;

  return (
    <div className="relative mb-24">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-1/2 top-0 w-0.5 h-[60rem] bg-gradient-to-b from-primary to-primary transform -translate-x-0.5 z-0" />
      )}

      {/* Timeline circle */}
      <div className="absolute left-1/2 top-[51%] w-6 h-6 bg-primary rounded-full transform -translate-x-1/2 z-10 border-4 border-white shadow-lg" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 pt-8`}
      >
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative group">
            <img
              src={imageSrc}
              alt={title}
              className="w-auto h-72 object-cover shadow-xl transition-transform duration-300"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" /> */}
          </div>
        </div>

        {/* Text content */}
        <div className={`w-full md:w-1/2 flex ${isEven ? 'flex-row-reverse' : 'flex-row'} gap-4 items-center`}>
          <div className="h-0.5 w-44 bg-primary rounded-full" />
          <div className="space-y-3">
            <h3 className="text-4xl text-primary leading-tight font-custom uppercase">{title}</h3>
            <p className="text-lg text-black font-medium leading-relaxed">{subtitle}</p>
            <p className="text-gray-700 leading-relaxed text-justify text-sm">{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

function History() {
  const scrollRef = useRef(null);

  return (
    <div className="relative min-h-screen bg-white">
      <SEO
        title="Macao - Notre Histoire"
        description="Découvrez l'histoire de Pastor Macao"
        keywords="histoire, chocolat, confiserie, macao"
      />
      <Head title="Histoire" />

      {/* Hero Section */}
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
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex min-h-[470px] flex-col text-center justify-center pt-20 pb-12 text-white"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-custom uppercase font-bold tracking-wide md:text-[55px] text-white leading-tight"
            >
              NOTRE HISTOIRE
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-300 text-sm md:text-sm">
              DERRIÉRE CHAQUE BOUCHÉE, IL Y A UNE HISTOIRE, VOICI LA NÔTRE.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
      {/* Content Blocks */}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex flex-col gap-10 mb-32">
          <motion.div variants={fadeInUp} className="flex flex-col items-center gap-3">
            <motion.p
              variants={fadeInUp}
              className="text-primary text-sm md:text-sm uppercase flex items-center gap-8 "
            >
              <div className="w-16 h-0.5 bg-primary" />
              Explorer notre histoire
              <div className="w-16 h-0.5 bg-primary" />
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-custom uppercase font-bold text-black tracking-wide leading-tight"
            >
              PASTOR MACAO SAVOUREZ LA VIE
            </motion.h2>
          </motion.div>
        </div>
        {/* Timeline Section */}
        <div className="relative">
          <TimelineStep
            title={<>PASTOR MACAO <br/> SAVOUREZ LA VIE</>}
            subtitle={
              <>
                Fondé en <span className="text-primary">1954, PASTOR MACAO</span>
              </>
            }
            description={
              <>
                <p className="mb-3">
                  est le leader marocain en confiserie-chocolaterie, offrant des produits de qualité pour tous les goûts
                  aux meilleurs prix.
                </p>
                <p className="mb-3">
                  Notre gamme de produits Halal, conçue avec les meilleurs ingrédients, répond aux normes de qualité les
                  plus strictes et est reconnue internationalement.
                </p>
                <p>Nos sites technologiques innovants répondent à toutes les demandes du marché.</p>
              </>
            }
            imageSrc={bgimage}
            step={1}
          />

          <TimelineStep
            title="L'HISTORIQUE"
            subtitle={
              <>
                PASTOR MACAO a démarré en <span className="text-primary">1948</span>
              </>
            }
            description={
              <>
                <p className="mb-3">
                  Devenue société de confiserie-chocolaterie en 1954, notre exigence d'excellence a fait de nous le
                  leader marocain du secteur.
                </p>
                <p className="mb-3">
                  Nos produits font partie du quotidien de millions de marocains et notre éléphant blanc sur fond rouge
                  est reconnu par tous.
                </p>
                <p>
                  Aujourd'hui, notre savoir-faire et notre gamme élaborée selon les normes strictes sont appréciés dans
                  plusieurs pays.
                </p>
              </>
            }
            imageSrc={bgimage2}
            step={2}
          />

          <TimelineStep
            title="UNE QUALITÉ SUPÉRIEURE CONSTANTE"
            subtitle={
              <>
                La confiance, la satisfaction et <span className="text-primary">la santé</span>
              </>
            }
            description={
              <>
                <p className="mb-3">de nos consommateurs sont au sommet de nos priorités.</p>
                <p className="mb-3">
                  Tous nos produits suivent les normes les plus strictes et utilisent des matières premières premium
                  pour garantir goût et excellence.
                </p>
                <p className="mb-3">
                  Nos processus sophistiqués et sites technologiques assurent traçabilité, qualité et sécurité, avec des
                  équipes formées et encadrées pour l'excellence.
                </p>
              </>
            }
            imageSrc={bgimage3}
            step={3}
          />

          <TimelineStep
            title="UN PARTENAIRE FIABLE ET RESPONSABLE"
            subtitle={
              <>
                <span className="text-primary">PASTOR MACAO</span> place la sécurité alimentaire au cœur de ses
                priorités
              </>
            }
            description={
              <>
                <p className="mb-3">
                  Nous effectuons des contrôles rigoureux pour respecter les normes marocaines et internationales.
                  Certifiée ISO 9001 et autorisée par l'ONSSA à exporter.
                </p>
                <p className="mb-3">
                  Notre laboratoire R&D développe constamment de nouveaux produits, comme notre gamme de chocolat sans
                  sucre.
                </p>
                <p>
                  En choisissant PASTOR MACAO, vous avez la garantie d'un partenaire fiable offrant des produits
                  premiums de qualité supérieure.
                </p>
              </>
            }
            imageSrc={bgimage4}
            step={4}
            isLast={true}
          />
        </div>
      </div>
    </div>
  );
}

export default History;
History.layout = (page: any) => <NewLayout children={page} />;
