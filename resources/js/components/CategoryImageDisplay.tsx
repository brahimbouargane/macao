import choco1 from '@/assets/images/1.webp';
import confis6 from '@/assets/images/10.webp';
import confis7 from '@/assets/images/11.webp';
import pat1 from '@/assets/images/12.webp';
import pat2 from '@/assets/images/13.webp';
import pat3 from '@/assets/images/14.webp';
import pat4 from '@/assets/images/15.webp';
import gauf1 from '@/assets/images/16.webp';
import gauf2 from '@/assets/images/17.webp';
import fete1 from '@/assets/images/18.webp';
import fete2 from '@/assets/images/19.webp';
import choco2 from '@/assets/images/2.webp';
import fete3 from '@/assets/images/20.webp';
import fete4 from '@/assets/images/21.webp';
import choco3 from '@/assets/images/3.webp';
import choco4 from '@/assets/images/4.webp';
import confis1 from '@/assets/images/5.webp';
import confis2 from '@/assets/images/6.webp';
import confis3 from '@/assets/images/7.webp';
import confis4 from '@/assets/images/8.webp';
import confis5 from '@/assets/images/9.webp';

import { motion } from 'framer-motion';

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

// Category content configuration
const categoryContent = {
  Confiserie: {
    title: 'DÉLICES SUCRÉS MACAO',
    subtitle: 'Une gamme complète de confiseries artisanales',
    bgColor: 'from-red-700 to-red-800',
    bgImage: [confis1, confis2, confis3, confis4, confis5, confis6, confis7],
    overlayOpacity: 'opacity-80'
  },
  Chocolat: {
    title: 'CHOCOLAT EXQUIS',
    subtitle: 'Des créations chocolatées pour tous les plaisirs.',
    bgColor: 'from-amber-900 to-amber-950',
    bgImage: [choco1, choco2, choco3, choco4],
    overlayOpacity: '50'
  },
  Gaufrettes: {
    title: 'GAUFRETTES CROUSTILLANTES',
    subtitle: 'La légèreté et le croustillant à la perfection',
    bgColor: 'from-orange-600 to-orange-700',
    bgImage: [gauf1, gauf2],
    overlayOpacity: '40'
  },
  'Produits pâtissiers': {
    title: 'PÂTISSERIE RAFFINÉE',
    subtitle: "L'excellence de la pâtisserie traditionnelle",
    bgColor: 'from-rose-800 to-rose-900',
    bgImage: [pat1, pat2, pat3, pat4],
    overlayOpacity: '45'
  },
  'Fêtes et événements': {
    title: 'CÉLÉBREZ VOS MOMENTS',
    subtitle: 'Des créations spéciales pour vos occasions',
    bgColor: 'from-purple-700 to-purple-800',
    bgImage: [fete1, fete2, fete3, fete4],
    overlayOpacity: '55'
  }
};
// CategoryBanner Component
export const CategoryBanner = ({ parentCategory, selectedChildCategory }) => {
  // Find the index of the selected child category or default to 0
  const selectedChildIndex = selectedChildCategory
    ? parentCategory.childCategoriesNames.indexOf(selectedChildCategory)
    : 0;

  // Get the selected category name (either the selected child or the parent if none selected)
  const selectedCategoryName = selectedChildCategory || parentCategory.name;

  // Get content for the selected category or use parent category content as fallback
  const content = categoryContent[selectedCategoryName] || categoryContent[parentCategory.name];

  // If the content has multiple background images, select one based on the child index
  const bgImage =
    content.bgImage && Array.isArray(content.bgImage)
      ? content.bgImage[selectedChildIndex % content.bgImage.length]
      : content.bgImage;

  return (
    <motion.div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className={`absolute inset-0 bg-cover bg-center bg-gradient-to-r ${content.bgColor}`}
          style={{
            backgroundImage: bgImage ? `url(${bgImage})` : undefined
          }}
        />
      </div>

      <div className="relative mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex min-h-[350px] flex-col items-center justify-center pt-48 pb-20 text-center text-white"
        ></motion.div>
      </div>
    </motion.div>
  );
};
