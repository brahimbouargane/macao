import iso from '@/assets/images/iso.webp';
import macaoImage from '@/assets/images/macao_logo.png';
import onssa from '@/assets/images/onssa.webp';
import video from '@/assets/images/test-footer-video.mp4';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { useEffect, useRef } from 'react';

const MotionLink = motion(Link);

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const products = [
  { name: 'Chocolat', href: '/products/chocolat/Pâtes à tartiner' },
  { name: 'Confiserie', href: '/products/confiserie/Sucettes' },
  { name: 'Gaufrettes', href: '/products/Gaufrettes/Gaufrettes enrobées' },
  { name: 'Produits pâtissiers', href: '/products/Produits pâtissiers/Chocolats pâtissiers' },
  { name: 'Fêtes et événements', href: '/products/Fêtes et événements/Chocolats fins fourrés' }
];

const quickLinks = [
  { name: 'Notre histoire', href: '/history' },
  { name: 'Rejoignez nous', href: '/career' },
  { name: 'Médiathèque', href: '/media' }
];

const contactInfo = [
  { icon: MapPin, text: '49 rue Ennasrine Beausejour Casablanca 20200 Maroc' },
  { icon: Phone, text: '+212 (5) 22 79 10 00' },
  { icon: Phone, text: '+212 (5) 22 36 54 92' },
  { icon: Mail, text: 'export@pastor-macao.com' }
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/MacaoPastor/' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/macaopastor/' },
  { name: 'Linkedin', icon: Linkedin, href: 'https://www.linkedin.com/company/pastor-macao-s-a/' },
  { name: 'Youtube', icon: Youtube, href: 'https://www.youtube.com/channel/UCGoKUNUIEgPpUkV_Po_r__g' }
];

// Enhanced Link component with hover animation
const AnimatedNavLink = ({ href, children }) => {
  return (
    <motion.div
      className="relative group"
      initial={false}
      whileHover={{ x: 10 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Link
        href={href}
        className="text-gray-100 text-base flex items-center transition-colors duration-300 hover:text-red-700"
      >
        <ArrowRight className="h-4 w-4 text-red-700 mr-2 transform transition-all duration-300 opacity-0 group-hover:opacity-100" />
        <span>{children}</span>
      </Link>
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-red-700"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

const AnimatedContactLink = ({ href, icon: Icon, children }) => {
  const IconComponent = Icon;
  return (
    <motion.div whileHover={{ x: 10 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
      <Link
        href={href}
        preserveState={false}
        preserveScroll={false}
        className="text-gray-100 flex items-center space-x-3 group transition-colors duration-300 hover:text-red-700"
      >
        <IconComponent className="h-6 w-6 text-red-700 transition-transform duration-300 group-hover:scale-110" />
        <span className="text-base">{children}</span>
      </Link>
    </motion.div>
  );
};

const certifications = [
  {
    id: 'iso9001',
    name: 'ISO 9001:2015',
    image: iso,
    alt: 'ISO 9001:2015 Certification'
  },
  {
    id: 'haccp',
    name: 'ONSSA',
    image: onssa,
    alt: 'ONSSA Certification'
  }
  //   {
  //     id: 'iso22000',
  //     name: 'ISO 22000',
  //     image: ifs,
  //     alt: 'ISO 22000 Food Safety Management'
  //   }
];

const CertificationLogo = ({ cert }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
    className="flex flex-col items-center"
  >
    <img
      src={cert.image}
      alt={cert.alt}
      className="h-20 w-20 object-contain brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
    />
    {/* <span className="text-xs text-white mt-2 text-center">{cert.name}</span> */}
  </motion.div>
);

export function Footer() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const handleEnded = () => {
      video.currentTime = 0.45;
      video.play();
    };

    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, []);
  return (
    <footer className="relative  text-white">
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {/* <video autoPlay loop muted playsInline className="object-cover w-full h-full ">
          <source src={video} type="video/mp4" />
        </video> */}
        <video ref={videoRef} autoPlay loop muted playsInline className="object-cover w-full h-full ">
          <source src={video} type="video/mp4" />
        </video>

        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-black/10" />
      </div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="relative z-10 max-w-[98rem] mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <motion.div variants={fadeInUp} className="space-y-6 col-span-2 md:col-span-3 lg:col-span-1">
            <Link preserveScroll href="/" className="block">
              <img src={macaoImage} alt="Macao" className="h-20 w-auto" />
            </Link>
            <p className="text-gray-100 text-base leading-relaxed">
              Fabrication de chocolats et de confiseries d'exception depuis 1954. Une tradition d'excellence et de
              savoir-faire artisanal.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  //   whileHover={{ scale: 1.2, y: -5 }}
                  //   transition={{ type: 'spring', stiffness: 400 }}
                  className="text-gray-100 hover:text-red-700 transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Products Column */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative">
              Nos Produits
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-700"></span>
            </h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <AnimatedNavLink href={product.href}>{product.name}</AnimatedNavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative">
              Liens Rapides
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-700"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <AnimatedNavLink href={link.href}>{link.name}</AnimatedNavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative">
              Contact
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-700"></span>
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <AnimatedContactLink href="#" icon={item.icon}>
                    {item.text}
                  </AnimatedContactLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications Column */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative">
              Nos Certifications
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-700"></span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <CertificationLogo key={cert.id} cert={cert} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 pt-8 border-t border-white flex justify-center flex-col sm:flex-row items-center space-y-4 sm:space-y-0"
        >
          <p className="text-lg text-white">© {new Date().getFullYear()} Macao. Tous droits réservés.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
