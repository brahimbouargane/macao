import { motion, useInView } from 'framer-motion';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useRef, useState } from 'react';
import LeafletMap from './mapBox';
function ContactHome() {
  const [selectedDepartment, setSelectedDepartment] = useState('commercial');
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: 'easeOut'
      }
    }
  };
  const staggerChildren = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const departments = {
    commercial: {
      title: 'Service Commercial',
      email: 'commercial@pastor-macao.com'
    },
    export: {
      title: 'Service Export',
      email: 'export@pastor-macao.com'
    },
    support: {
      title: 'Service Technique',
      email: 'support@pastor-macao.com'
    }
  };
  return (
    <motion.section
      className="max-w-[90rem] mx-auto px-4 py-16 md:pb-14"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        ref={headerRef}
        className="text-center mb-12"
        initial="hidden"
        animate={headerInView ? 'visible' : 'hidden'}
        variants={staggerChildren}
      >
        <motion.h1
          variants={fadeInUp}
          className=" text-red-600 mb-8 uppercase text-3xl md:text-5xl lg:text-5xl font-custom font-bold  "
        >
          INFORMATIONS <br /> DE CONTACT
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Information Cards */}
          <motion.div className="relative space-y-8" variants={itemVariants}>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
              <div className="w-full flex justify-center  ">
                <iframe
                  className="h-auto lg:h-44"
                  src="https://lottie.host/embed/c9e29a29-f842-4cb2-a9fa-3a06c146797b/S1h2hUYs2W.lottie"
                ></iframe>
              </div>
              <motion.div className="bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-center items-center gap-3">
                  <div className="text-red-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm !text-gray-500">Téléphone</p>
                    <p className="font-medium text-black">+212 (5) 22 79 10 00</p>
                  </div>
                </div>
              </motion.div>
              <motion.div className="bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row  md:justify-center   items-center gap-3">
                  <div className="text-red-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm !text-gray-500">Email</p>
                    <p className="font-medium text-black">{departments[selectedDepartment].email}</p>
                  </div>
                </div>
              </motion.div>
              <motion.div className="bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row  md:justify-center   items-center gap-3">
                  <div className="text-red-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm !text-gray-500">Adresse</p>
                    <p className="font-medium text-black">49 rue Ennasrine Beausejour Casablanca 20200 Maroc</p>
                  </div>
                </div>
              </motion.div>
              <motion.div className="bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row  md:justify-center  items-center gap-3">
                  <div className="text-red-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm !text-gray-500">Horaires</p>
                    <p className="font-medium text-black">Lun-Ven : 9:00 - 18:00</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="mt-12 relative h-[500px] md:h-[500px] overflow-hidden" variants={itemVariants}>
            <motion.div
              className="absolute inset-0 bg-red-900/90 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1661.9232125861787!2d-7.649992323583578!3d33.56785337807974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2d6cdf894dd%3A0xcef3758880cfd48a!2sPASTOR%20S.A.!5e0!3m2!1sen!2sma!4v1703893456789!5m2!1sen!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            /> */}
              <LeafletMap />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default ContactHome;
