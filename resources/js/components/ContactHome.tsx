import bgcontact from '@/assets/images/contactbg.png';
import logo from '@/assets/images/logo_large.png';
import { motion, useInView } from 'framer-motion';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useRef } from 'react';
import LeafletMap from './mapBox';

function ContactHome() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Simplified animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="max-w-[92rem] mx-auto px-4 py-10 md:py-16"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={staggerContainer}
    >
      <motion.h1
        variants={fadeIn}
        className="text-center text-red-600 mb-12 uppercase text-3xl md:text-5xl font-custom font-bold"
      >
        INFORMATIONS <span className="block md:inline">DE CONTACT</span>
      </motion.h1>

      <div className="grid lg:grid-cols-2 items-center">
        {/* Map Column */}
        <motion.div
          className="h-[350px] md:h-[500px] w-full rounded-[40px] overflow-hidden order-1 md:order-1"
          variants={fadeIn}
        >
          <div className="w-full h-full bg-red-900/90 text-white relative">
            <LeafletMap />
          </div>
        </motion.div>

        {/* Contact Info Column - More compact and full width */}
        <motion.div className="order-2 md:order-1 flex items-center justify-center w-full" variants={fadeIn}>
          <div className="relative overflow-hidden rounded-r-[40px] md:rounded-r-[80px] rounded-bl-[40px] md:rounded-bl-[80px] shadow-xl max-h-[300px] md:max-h-[350px] w-full">
            {/* Logo */}
            <div className="absolute -top-2 md:-top-4 left-6 md:left-8 z-30">
              <div className="w-16 md:w-24 h-16 md:h-24 flex items-center justify-center">
                <img src={logo} alt="Macao logo" className="w-12 md:w-16 h-12 md:h-16 object-contain" />
              </div>
            </div>

            {/* Background with overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${bgcontact || '/placeholder.svg'})`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/95 via-red-800/90 to-black/95"></div>

            {/* Content - More condensed */}
            <div className="relative z-10 p-6 pt-12 md:p-10 md:pt-16 text-white">
              <div className="space-y-3 md:space-y-4">
                {/* Company name and address - More compact */}
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-2 tracking-wide">PASTOR S.A.</h2>
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 md:h-5 w-4 md:w-5 text-red-300 mt-1 flex-shrink-0" />
                    <div>
                      <p className="uppercase font-medium text-sm md:text-base">49 RUE ENNASRINE BEAUSEJOUR</p>
                      <p className="uppercase font-medium text-sm md:text-base mb-1">CASABLANCA 20200 MAROC</p>
                    </div>
                  </div>
                </div>

                {/* Contact details with consistent styling */}
                <div className="space-y-2 md:space-y-3 mt-2 md:mt-3">
                  {/* Phone */}
                  <div className="flex items-center space-x-2 md:space-x-3 border-b border-white/20 pb-2">
                    <div className="bg-red-800/50 p-1 md:p-2 rounded-full">
                      <Phone className="h-3 md:h-4 w-3 md:w-4 text-white flex-shrink-0" />
                    </div>
                    <a href="tel:+212522791000" className="text-sm md:text-base hover:underline">
                      +212 (5) 22 79 10 00
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-2 md:space-x-3 border-b border-white/20 pb-2">
                    <div className="bg-red-800/50 p-1 md:p-2 rounded-full">
                      <Mail className="h-3 md:h-4 w-3 md:w-4 text-white flex-shrink-0" />
                    </div>
                    <a href="mailto:commercial@pastor-macao.com" className="text-sm md:text-base hover:underline">
                      commercial@pastor-macao.com
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="bg-red-800/50 p-1 md:p-2 rounded-full">
                      <Clock className="h-3 md:h-4 w-3 md:w-4 text-white flex-shrink-0" />
                    </div>
                    <p className="text-sm md:text-base">Lun-Ven : 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ContactHome;
