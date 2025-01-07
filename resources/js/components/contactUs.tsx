import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/shadcn-input';
import { Label } from '@/components/ui/shadcn-label';
import { Textarea } from '@/components/ui/shadcn-textarea';
import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, MessageSquare, Phone, Send, User } from 'lucide-react';

export default function ContactSection() {
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
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      text: '+212 (5) 22 79 10 00 - +212 (5) 22 36 54 92',
      label: 'Téléphone'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      text: 'export@pastor-macao.com',
      label: 'Email'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: '49 rue Ennasrine Beausejour Casablanca 20200 Maroc',
      label: 'Adresse'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: 'Lun-Ven : 9:00 - 18:00',
      label: 'Horaires'
    }
  ];

  return (
    <motion.section
      className="container mx-auto px-4 py-12 md:py-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left side with image and contact info */}
        <motion.div className="relative space-y-8" variants={itemVariants}>
          <div className="relative h-[500px] md:h-[500px] overflow-hidden">
            <img src="/placeholder.svg?height=600&width=600" alt="Contact visual" className="object-cover " />
            <motion.div
              className="absolute inset-0 bg-red-900/90 text-white flex items-center justify-center p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1661.9232125861787!2d-7.649992323583578!3d33.56785337807974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2d6cdf894dd%3A0xcef3758880cfd48a!2sPASTOR%20S.A.!5e0!3m2!1sen!2sma!4v1703893456789!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="PASTOR S.A. Location Map"
              />
            </motion.div>
          </div>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 shadow-lg hover:shadow-xl transition-shadow"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-red-600">{info.icon}</div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="font-medium">{info.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right side with contact form */}
        <motion.div className="space-y-8" variants={itemVariants}>
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.span
              className="text-red-500 uppercase tracking-wider text-sm font-medium inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Contactez-nous
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Partagez vos envies sucrées avec nous
            </h1>
            <p className="text-gray-600">
              Nous sommes là pour donner vie à vos idées gourmandes. Que ce soit pour des bonbons, du chocolat ou des
              pâtisseries, contactez-nous et discutons ensemble de votre projet délicieux.
            </p>
          </motion.div>

          <motion.form className="space-y-9" variants={itemVariants}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="Prénom" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Prénom
                </Label>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <Input
                    id="Prénom"
                    placeholder="Entrez votre prénom"
                    className="rounded-none border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  />
                </motion.div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="Nom" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Nom
                </Label>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <Input
                    id="Nom"
                    placeholder="Entrez votre nom"
                    className="rounded-none border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  />
                </motion.div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </Label>
              <motion.div whileHover={{ scale: 1.01 }}>
                <Input
                  id="email"
                  type="email"
                  placeholder="Entrez votre email"
                  className="rounded-none border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                />
              </motion.div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Message
              </Label>
              <motion.div whileHover={{ scale: 1.01 }}>
                <Textarea
                  id="message"
                  placeholder="Entrez votre message"
                  className="rounded-none border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all min-h-[120px]"
                />
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                className="bg-red-500 hover:bg-red-500 text-white px-8 py-2 rounded-none w-full transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Envoyer le message
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
}
