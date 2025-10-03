import banner from '@/assets/images/24.webp';
import contact from '@/assets/images/aboutuspic.webp';
import LeafletMap from '@/components/mapBox';
import { Button } from '@/components/ui/shadcn-button';
import { Label } from '@/components/ui/shadcn-label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/shadcn-select';
import { NewLayout } from '@/layouts/new-layout';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react';
import { useState } from 'react';

// Animation variants
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

export default function Contact() {
  const [selectedDepartment, setSelectedDepartment] = useState('commercial');

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
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
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
            className="flex min-h-[470px] flex-col text-center justify-center pt-10 text-white"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl uppercase font-bold font-custom tracking-wide md:text-[65px] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%),_0_2px_15px_rgb(255_255_255_/_30%)] whitespace-pre-line leading-tight"
            >
              UNE QUESTION ? UNE ENVIE DE CHOCOLAT ?<br /> PARLONS-EN
            </motion.h1>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Contact Section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 py-12 md:py-24"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="w-full h-[600px] rounded-[40px] overflow-hidden">
            <img src={contact} alt="Contact" className="w-full h-full object-cover" />
          </div>
          {/* Contact Information Cards */}
          <motion.div className="relative" variants={itemVariants}>
            {/* Header Section */}
            <div className="text-center mb-12">
              <motion.p
                className="text-primary text-sm font-medium tracking-wide uppercase mb-2 font-banner"
                variants={itemVariants}
              >
                OUR CONTACTS
              </motion.p>
              <motion.h2 className="text-4xl font-bold font-custom text-gray-900 mb-2 uppercase" variants={itemVariants}>
                Besoin de gourmandises ?
                <br />
                Contactez-nous
              </motion.h2>
              <motion.p className="text-gray-500 text-lg max-w-md mx-auto font-banner" variants={itemVariants}>
                S'il vous plaît appelez-nous, envoyez-nous un e-mail.
              </motion.p>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 font-banner ml-10">
              <motion.div className="flex items-start gap-4" variants={itemVariants}>
                <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center mt-1">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">Localisation</h3>
                  <p className="text-gray-600 ">49 rue Ennasrine Beausejour Casablanca 20200 Maroc</p>
                </div>
              </motion.div>

              <motion.div className="flex items-start gap-4" variants={itemVariants}>
                <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center mt-1">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">Téléphone</h3>
                  <p className="text-gray-600">+212 (5) 22 79 10 00</p>
                </div>
              </motion.div>

              <motion.div className="flex items-start gap-4" variants={itemVariants}>
                <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center mt-1">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">Email</h3>
                  <p className="text-gray-600">{departments[selectedDepartment].email}</p>
                </div>
              </motion.div>
            </div>

            {/* Social Icons */}
            <motion.div className="flex gap-4 mt-12 ml-10" variants={itemVariants}>
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary text-primary hover:text-white transition-colors cursor-pointer">
                <Send className="w-5 h-5" />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary text-primary hover:text-white transition-colors cursor-pointer">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary text-primary hover:text-white transition-colors cursor-pointer">
                <Phone className="w-5 h-5" />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary text-primary hover:text-white transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Section at the bottom */}
        <motion.div className="mt-12" variants={itemVariants}>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Form */}
            <motion.div className="space-y-8 text-black" variants={itemVariants}>
              <motion.div className="space-y-3 text-center" variants={itemVariants}>
                <motion.p
                  className="text-primary text-sm font-medium tracking-wide uppercase font-banner"
                  variants={itemVariants}
                >
                  ENVOYEZ-NOUS UN MESSAGE
                </motion.p>
                {/* <h2 className="text-4xl text-black md:text-5xl lg:text-6xl font-light leading-tight">Contactez-nous</h2> */}
                <h2 className="text-4xl font-bold font-custom uppercase">Nous sommes là pour vous aider</h2>
              </motion.div>

              <motion.form className="space-y-6" variants={itemVariants}>
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
                  <input
                    id="Prénom"
                    placeholder="Votre Prénom"
                    className="h-10 w-full border-0 border-b-2 border-gray-400 focus:border-b-2 focus:border-primary focus:ring-0 focus:outline-none rounded-none bg-transparent transition-all placeholder:text-gray-500 focus-visible:outline-0"
                  />

                  <input
                    id="Nom"
                    placeholder="Votre Nom"
                    className="h-10 w-full border-0 border-b-2 border-gray-400 focus:border-b-2 focus:border-primary focus:ring-0 focus:outline-none rounded-none bg-transparent transition-all placeholder:text-gray-500 focus-visible:outline-0"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
                  <input
                    id="Telephone"
                    placeholder="Votre Numéro"
                    className="h-10 w-full border-0 border-b-2 border-gray-400 focus:border-b-2 focus:border-primary focus:ring-0 focus:outline-none rounded-none bg-transparent transition-all placeholder:text-gray-500 focus-visible:outline-0"
                  />

                  <input
                    id="email"
                    placeholder="Votre Email"
                    className="h-10 w-full border-0 border-b-2 border-gray-400 focus:border-b-2 focus:border-primary focus:ring-0 focus:outline-none rounded-none bg-transparent transition-all placeholder:text-gray-500 focus-visible:outline-0"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Département
                  </Label>
                  <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                    <SelectTrigger className="w-full rounded-md border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent">
                      <SelectValue placeholder="Sélectionnez un département" />
                    </SelectTrigger>
                    <SelectContent className="rounded-md">
                      <SelectItem value="commercial" className="rounded-md">Service Commercial</SelectItem>
                      <SelectItem value="export" className="rounded-md">Service Export</SelectItem>
                      <SelectItem value="support" className="rounded-md">Service Technique</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </Label>
                  <textarea
                    id="message"
                    placeholder="Entrez votre message"
                    className="placeholder:text-base w-full border-0 border-b-2 border-gray-400 focus:border-b-2 focus:border-primary focus:ring-0 focus:outline-none rounded-none bg-transparent transition-all min-h-[120px] placeholder:text-gray-500 focus-visible:outline-0"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/80 hover:to-primary text-white px-8 py-2  w-full transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Envoyer le message
                </Button>
              </motion.form>
            </motion.div>

            {/* Map Section */}
            <motion.div
              className="bg-primary/90 text-white h-[500px] md:h-full overflow-hidden rounded-[40px]"
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
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}

Contact.layout = (page: React.ReactNode) => <NewLayout children={page} />;
