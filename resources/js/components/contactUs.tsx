import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/shadcn-input';
import { Label } from '@/components/ui/shadcn-label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/shadcn-select';
import { Textarea } from '@/components/ui/shadcn-textarea';
import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, MessageSquare, Phone, Send, User } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection(id) {
  const [selectedDepartment, setSelectedDepartment] = useState('commercial');

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

  const ContactContent = (id) => (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start" id="contact">
      {/* Left side with map and contact info */}
      <motion.div className="relative space-y-8" variants={itemVariants}>
        <div className="relative h-[500px] md:h-[500px] overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-red-900/90 text-white"
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
            />
          </motion.div>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div className="bg-white p-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3">
              <div className="text-red-600">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm !text-gray-500">Téléphone</p>
                <p className="font-medium text-black">+212 (5) 22 79 10 00</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="bg-white p-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3">
              <div className="text-red-600">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm !text-gray-500">Email</p>
                <p className="font-medium text-black">{departments[selectedDepartment].email}</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="bg-white p-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3">
              <div className="text-red-600">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm !text-gray-500">Adresse</p>
                <p className="font-medium text-black">49 rue Ennasrine Beausejour Casablanca 20200 Maroc</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="bg-white p-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3">
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

      {/* Right side with contact form */}
      <motion.div className="space-y-8" variants={itemVariants}>
        <motion.div className="space-y-6" variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">Contactez-nous</h1>
          <p className="text-gray-600">Nous sommes là pour vous aider</p>
        </motion.div>

        <motion.form className="space-y-6" variants={itemVariants}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="Prénom" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Prénom
              </Label>
              <Input
                id="Prénom"
                placeholder="Entrez votre prénom"
                className="rounded-none border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="Nom" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Nom
              </Label>
              <Input
                id="Nom"
                placeholder="Entrez votre nom"
                className="rounded-none border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Téléphone
            </Label>
            <Input
              id="Telephone"
              placeholder="Entrez votre numéro"
              className="rounded-none border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
            />
          </div>
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Département
            </Label>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger className="w-full rounded-none border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent">
                <SelectValue placeholder="Sélectionnez un département" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="commercial">Service Commercial</SelectItem>
                <SelectItem value="export">Service Export</SelectItem>
                <SelectItem value="support">Service Technique</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Entrez votre message"
              className="rounded-none border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all min-h-[120px]"
            />
          </div>

          <Button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded-none w-full transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Envoyer le message
          </Button>
        </motion.form>
      </motion.div>
    </div>
  );

  return (
    <motion.section
      className="container mx-auto px-4 py-12 md:py-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <ContactContent id="contact" />
    </motion.section>
  );
}
