// import choco1 from '@/assets/images/1.webp';
// import confis6 from '@/assets/images/10.webp';
// import confis7 from '@/assets/images/11.webp';
// import pat1 from '@/assets/images/12.webp';
// import pat2 from '@/assets/images/13.webp';
// import pat3 from '@/assets/images/14.webp';
// import pat4 from '@/assets/images/15.webp';
// import gauf1 from '@/assets/images/16.webp';
// import gauf2 from '@/assets/images/17.webp';
// import fete1 from '@/assets/images/18.webp';
// import fete2 from '@/assets/images/19.webp';
// import choco2 from '@/assets/images/2.webp';
// import fete3 from '@/assets/images/20.webp';
// import fete4 from '@/assets/images/21.webp';
// import choco3 from '@/assets/images/3.webp';
// import choco4 from '@/assets/images/4.webp';
// import confis1 from '@/assets/images/5.webp';
// import confis2 from '@/assets/images/6.webp';
// import confis3 from '@/assets/images/7.webp';
// import confis4 from '@/assets/images/8.webp';
// import confis5 from '@/assets/images/9.webp';

// import { motion } from 'framer-motion';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: 'easeOut'
//     }
//   },
//   exit: {
//     opacity: 0,
//     y: -20,
//     transition: {
//       duration: 0.3
//     }
//   }
// };

// // Category content configuration
// const categoryContent = {
//   Confiserie: {
//     title: 'DÉLICES SUCRÉS MACAO',
//     subtitle: 'Une gamme complète de confiseries artisanales',
//     bgColor: 'from-red-700 to-red-800',
//     bgImage: [confis1, confis2, confis3, confis4, confis5, confis6, confis7],
//     overlayOpacity: 'opacity-80'
//   },
//   Chocolat: {
//     title: 'CHOCOLAT EXQUIS',
//     subtitle: 'Des créations chocolatées pour tous les plaisirs.',
//     bgColor: 'from-amber-900 to-amber-950',
//     bgImage: [choco1, choco2, choco3, choco4],
//     overlayOpacity: '50'
//   },
//   Gaufrettes: {
//     title: 'GAUFRETTES CROUSTILLANTES',
//     subtitle: 'La légèreté et le croustillant à la perfection',
//     bgColor: 'from-orange-600 to-orange-700',
//     bgImage: [gauf1, gauf2],
//     overlayOpacity: '40'
//   },
//   'Produits pâtissiers': {
//     title: 'PÂTISSERIE RAFFINÉE',
//     subtitle: "L'excellence de la pâtisserie traditionnelle",
//     bgColor: 'from-rose-800 to-rose-900',
//     bgImage: [pat1, pat2, pat3, pat4],
//     overlayOpacity: '45'
//   },
//   'Fêtes et événements': {
//     title: 'CÉLÉBREZ VOS MOMENTS',
//     subtitle: 'Des créations spéciales pour vos occasions',
//     bgColor: 'from-purple-700 to-purple-800',
//     bgImage: [fete1, fete2, fete3, fete4],
//     overlayOpacity: '55'
//   }
// };
// // CategoryBanner Component
// export const CategoryBanner = ({ parentCategory, selectedChildCategory }) => {
//   // Find the index of the selected child category or default to 0
//   const selectedChildIndex = selectedChildCategory
//     ? parentCategory.childCategoriesNames.indexOf(selectedChildCategory)
//     : 0;

//   // Get the selected category name (either the selected child or the parent if none selected)
//   const selectedCategoryName = selectedChildCategory || parentCategory.name;

//   // Get content for the selected category or use parent category content as fallback
//   const content = categoryContent[selectedCategoryName] || categoryContent[parentCategory.name];

//   // If the content has multiple background images, select one based on the child index
//   const bgImage =
//     content.bgImage && Array.isArray(content.bgImage)
//       ? content.bgImage[selectedChildIndex % content.bgImage.length]
//       : content.bgImage;

//   return (
//     <motion.div className="relative overflow-hidden">
//       <div className="absolute inset-0">
//         <motion.div
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.5 }}
//           className={`absolute inset-0 bg-cover bg-center bg-gradient-to-r ${content.bgColor}`}
//           style={{
//             backgroundImage: bgImage ? `url(${bgImage})` : undefined
//           }}
//         />
//       </div>

//       <div className="relative mx-auto px-4">
//         <motion.div
//           variants={fadeInUp}
//           initial="hidden"
//           animate="visible"
//           className="flex min-h-[350px] flex-col items-center justify-center pt-48 pb-20 text-center text-white"
//         ></motion.div>
//       </div>
//     </motion.div>
//   );
// };

import choco1 from '@/assets/images/1.webp';
import fete3 from '@/assets/images/10.webp';
import fete4 from '@/assets/images/11.webp';
import fete2 from '@/assets/images/19.webp';
import confis1 from '@/assets/images/2.webp';
import confis2 from '@/assets/images/22.webp';

import pat1 from '@/assets/images/3.webp';
import pat2 from '@/assets/images/4.webp';
import pat3 from '@/assets/images/5.webp';
import pat4 from '@/assets/images/6.webp';
import gauf1 from '@/assets/images/7.webp';
import gauf2 from '@/assets/images/8.webp';
import fete1 from '@/assets/images/9.webp';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

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

// Parent category content configuration
const parentCategoryContent = {
  Confiserie: {
    title: 'DÉLICES SUCRÉS MACAO',
    subtitle: 'Une gamme complète de confiseries artisanales',
    bgColor: 'from-red-700 to-red-800',
    bgImage: confis1, // Always use the first image for Confiserie
    overlayOpacity: 'opacity-80'
  },
  Chocolat: {
    title: 'CHOCOLAT EXQUIS',
    subtitle: 'Des créations chocolatées pour tous les plaisirs.',
    bgColor: 'from-amber-900 to-amber-950',
    bgImage: choco1, // Always use the first image for Chocolat
    overlayOpacity: '50'
  },
  Gaufrettes: {
    title: 'GAUFRETTES CROUSTILLANTES',
    subtitle: 'La légèreté et le croustillant à la perfection',
    bgColor: 'from-orange-600 to-orange-700',
    bgImage: [gauf1, gauf2], // Use two images for Gaufrettes
    overlayOpacity: '40'
  },
  'Produits pâtissiers': {
    title: 'PÂTISSERIE RAFFINÉE',
    subtitle: "L'excellence de la pâtisserie traditionnelle",
    bgColor: 'from-rose-800 to-rose-900',
    bgImage: [pat1, pat2, pat3, pat4], // Use four images for Produits pâtissiers
    overlayOpacity: '45'
  },
  'Fêtes et événements': {
    title: 'CÉLÉBREZ VOS MOMENTS',
    subtitle: 'Des créations spéciales pour vos occasions',
    bgColor: 'from-purple-700 to-purple-800',
    bgImage: [fete1, fete2, fete3, fete4], // Use four images for Fêtes et événements
    overlayOpacity: '55'
  }
};

// Child category content configuration - define specific content for each child category
const childCategoryContent = {
  // Confiserie child categories
  Sucettes: {
    title: (
      <>
        LA TOUCHE SUCRÉE QUI FAIT TOUTE
        <br />
        LA DIFFÉRENCE.
      </>
    ),
    subtitle: 'Douceurs sucrées pour tous les âges',
    bgColor: 'from-red-700 to-red-800',
    bgImage: confis1, // Always use the same image for all Confiserie child categories
    overlayOpacity: 'opacity-80'
  },
  'Pâte à mâcher': {
    title: (
      <>
        UN GOÛT INFINI, À MÀCHER...
        <br />
        SANS MODÉRATION !
      </>
    ),
    // title: 'UN GOÛT INFINI, À MÀCHER... SANS MODéRATION !',
    subtitle: 'La gourmandise authentique',
    bgColor: 'from-red-700 to-red-800',
    bgImage: confis1,
    overlayOpacity: 'opacity-80'
  },
  'Gommes gélifiées': {
    // title: 'UN GOÛT FRUITé & GÉLIFIÉE, LAISSEZ-VOUS EMPORTER.',
    title: (
      <>
        UN GOÛT FRUITÉ & GÉLIFIÉE,
        <br />
        SANS MODÉRATION !
      </>
    ),
    subtitle: 'Fraîcheur et amusement à chaque bouchée',
    bgColor: 'from-red-700 to-red-800',
    bgImage: confis1,
    overlayOpacity: 'opacity-80'
  },
  Dragées: {
    // title: "DES DRAGÉEs, DES SOUVENIRS, UN GOÛT D'ÉTERNITÉ",
    title: (
      <>
        DES DRAGÉEs, DES SOUVENIRS,
        <br />
        UN GOÛT D'ÉTERNITÉ
      </>
    ),
    subtitle: 'Saveurs exotiques et traditions millénaires',
    bgColor: 'from-red-700 to-red-800',
    bgImage: confis2,
    overlayOpacity: 'opacity-80'
  },
  Caramel: {
    // title: 'LE PETITE PLAISIR, QUI FAIT GRANDIR LES SOURIRES.',
    title: (
      <>
        LE PETIT PLAISIR,
        <br />
        QUI FAIT GRANDIR LES SOURIRES.
      </>
    ),
    subtitle: 'Élégance et raffinement pour vos célébrations',
    bgColor: 'from-red-700 to-red-800',
    bgImage: confis1,
    overlayOpacity: 'opacity-80'
  },
  'BONBONS DURS SANS SUCRE': {
    title: (
      <>
        SUCCOMBEZ AU GOÛT,
        <br />
        SANS SUCRE AJOUTÉ !
      </>
    ),
    // title: 'SUCCOMBEZ AU GOÛT, SANS SUCRE AJOUTÉ !',
    subtitle: 'Textures moelleuses et saveurs onctueuses',
    bgColor: 'from-red-700 to-red-800',
    bgImage: confis1,
    overlayOpacity: 'opacity-80'
  },
  'BONBONS DURS': {
    title: (
      <>
        UN BONBON DUR,
        <br />
        UNE EXPLOSION DE GOÛT QUI DURE !
      </>
    ),
    // title: 'UN BONBON DUR, UNE EXPLOSION DE GOÛT QUI DURE !',
    subtitle: "L'intensité et le caractère d'une confiserie d'exception",
    bgColor: 'from-red-700 to-red-800',
    bgImage: confis1,
    overlayOpacity: 'opacity-80'
  },

  // Chocolat child categories (example - replace with your actual categories)

  'Pâtes à tartiner': {
    title: (
      <>
        Le chocolat PRÉFÉRÉ des petits…
        <br />
        et des grands aussi !
      </>
    ),
    // title: 'Le chocolat prÉfÉrÉ des petits… et des grands aussi !',
    subtitle: "Savourez l'intensité du chocolat pur",
    bgColor: 'from-amber-900 to-amber-950',
    bgImage: choco1, // Always use the same image for all Chocolat child categories
    overlayOpacity: '50'
  },
  'Chocolats variés': {
    title: (
      <>
        À EMPORTER PARTOUT,
        <br />À SAVOURER À TOUT MOMENT.
      </>
    ),
    // title: 'À EMPORTER PARTOUT, À SAVOURER À TOUT MOMENT.',
    subtitle: 'Des créations raffinées pour les connaisseurs',
    bgColor: 'from-amber-900 to-amber-950',
    bgImage: choco1,
    overlayOpacity: '50'
  },
  'Chocolats sans sucre': {
    title: (
      <>
        TOUT LE PLAISIR DU CHOCOLAT,
        <br />
        SANS LE SUCRE
      </>
    ),
    // title: 'TOUT LE PLAISIR DU CHOCOLAT, SANS LE SUCRE',
    subtitle: 'Des créations raffinées pour les connaisseurs',
    bgColor: 'from-amber-900 to-amber-950',
    bgImage: choco1,
    overlayOpacity: '50'
  },
  'Tablettes de chocolats': {
    title: (
      <>
        L'ART DU CHOCOLAT
        <br />
        DANS CHAQUE CARRé
      </>
    ),
    // title: "L'ART DU CHOCOLAT DANS CHAQUE CARRé.",
    subtitle: "Savourez l'intensité du chocolat pur",
    bgColor: 'from-amber-900 to-amber-950',
    bgImage: choco1, // Always use the same image for all Chocolat child categories
    overlayOpacity: '50'
  },

  // Gaufrettes child categories (example - replace with your actual categories)
  'Gaufrettes enrobées': {
    title: (
      <>
        le croquant de la gaufrette,
        <br />
        l'enrobage fondant.
      </>
    ),
    // title: "le croquant de la gaufrette, l'enrobage fondant.",
    subtitle: 'Le goût authentique des gaufrettes traditionnelles',
    bgColor: 'from-orange-600 to-orange-700',
    bgImage: gauf1, // Use first image
    overlayOpacity: '40'
  },
  'Gaufrettes fourrées': {
    title: (
      <>
        Un cœur crémeux,
        <br />
        un enrobage croquant
      </>
    ),
    // title: 'Un cœur crémeux, un enrobage croquant',
    subtitle: 'Un coeur fondant pour un plaisir intensifié',
    bgColor: 'from-orange-600 to-orange-700',
    bgImage: gauf2, // Use second image
    overlayOpacity: '40'
  },

  // Produits pâtissiers child categories (example - replace with your actual categories)
  'Chocolats pâtissiers': {
    title: (
      <>
        UN CHOCOLAT DE QUALITé,
        <br />
        POUR DES DESSERTS PARFAITS.
      </>
    ),
    // title: 'UN CHOCOLAT DE QUALITé, POUR DES DESSERTS PARFAITS.',
    subtitle: 'La pâtisserie française dans sa plus belle expression',
    bgColor: 'from-rose-800 to-rose-900',
    bgImage: pat1, // Use first image
    overlayOpacity: '45'
  },
  'Fourrage & décoration': {
    title: (
      <>
        LA TOUCHE SUCRéE ET créative
        <br />
        qui fait tout la différence.
      </>
    ),
    // title: 'LA TOUCHE SUCRéE ET créative qui fait tout la différence.',
    subtitle: 'Le croustillant doré du petit-déjeuner parfait',
    bgColor: 'from-rose-800 to-rose-900',
    bgImage: pat2, // Use second image
    overlayOpacity: '45'
  },
  'Poudre de cacao sucré': {
    title: (
      <>
        du cacao pur pour des recettes
        <br />
        riches en saveurs.
      </>
    ),
    // title: 'du cacao pur pour des recettes riches en saveurs.',
    subtitle: 'Des créations délicates aux textures harmonieuses',
    bgColor: 'from-rose-800 to-rose-900',
    bgImage: pat3, // Use third image
    overlayOpacity: '45'
  },
  'Fruits confits': {
    title: (
      <>
        une touche fruitée,
        <br />
        une douceur confite.
      </>
    ),
    // title: 'une touche fruitée, une douceur confite.',
    subtitle: 'Parfaits pour accompagner vos moments de pause',
    bgColor: 'from-rose-800 to-rose-900',
    bgImage: pat4, // Use fourth image
    overlayOpacity: '45'
  },

  // Fêtes et événements child categories (example - replace with your actual categories)
  'Chocolats fins fourrés': {
    title: (
      <>
        le chocolat fin fourré
        <br />
        qui allie finesse et délice.
      </>
    ),
    // title: 'le chocolat fin fourré qui allie  finesse et délice.',
    subtitle: 'Célébrez vos moments spéciaux avec élégance',
    bgColor: 'from-purple-700 to-purple-800',
    bgImage: fete1, // Use first image
    overlayOpacity: '55'
  },
  'Confiserie fine': {
    title: (
      <>
        des confiseries fines,
        <br />
        pour les palais exigeants.
      </>
    ),
    // title: 'des confiseries fines, pour les palais exigeants.',
    subtitle: "L'excellence pour votre jour le plus important",
    bgColor: 'from-purple-700 to-purple-800',
    bgImage: fete1, // Use second image
    overlayOpacity: '55'
  },
  Nougat: {
    title: (
      <>
        l’authenticité du nougat,
        <br />
        un plaisir sucré à partager.
      </>
    ),
    // title: 'l’authenticité du nougat, un plaisir sucré à partager.',
    subtitle: 'Respectueux des traditions et du goût',
    bgColor: 'from-purple-700 to-purple-800',
    bgImage: fete3, // Use third image
    overlayOpacity: '55'
  },
  'Fruits Confits - F&E': {
    title: (
      <>
        des fruits confits, une explosion
        <br />
        de saveurs à savourer.
      </>
    ),
    // title: 'des fruits confits, une explosion de saveurs à savourer.',
    subtitle: 'Des solutions sur mesure pour vos réceptions professionnelles',
    bgColor: 'from-purple-700 to-purple-800',
    bgImage: fete4, // Use fourth image
    overlayOpacity: '55'
  }
};

/**
 * CategoryBanner Component - Displays a dynamic banner based on the selected category
 *
 * @param {Object} props - Component props
 * @param {Object} props.parentCategory - The parent category object containing name and childCategoriesNames
 * @param {string} props.selectedChildCategory - The currently selected child category name
 * @returns {JSX.Element} - Rendered component
 */
export const CategoryBanner = ({ parentCategory, selectedChildCategory }) => {
  // Get the parent category name with fallback
  const parentCategoryName = parentCategory?.name || '';
  console.log(parentCategory);

  // Determine which content to use based on selection
  const bannerContent = useMemo(() => {
    // If a child category is selected and we have specific content for it, use that
    if (selectedChildCategory && childCategoryContent[selectedChildCategory]) {
      return childCategoryContent[selectedChildCategory];
    }

    // Otherwise, fall back to parent category content
    return parentCategoryContent[parentCategoryName] || {};
  }, [selectedChildCategory, parentCategoryName]);

  // Determine the background image to use
  const bgImage = useMemo(() => {
    if (!bannerContent.bgImage) return null;

    // If the image is an array, select based on parent category rules
    if (Array.isArray(bannerContent.bgImage)) {
      const images = bannerContent.bgImage;
      if (images.length === 0) return null;

      // Find the index of the selected child category
      const selectedChildIndex = selectedChildCategory
        ? parentCategory.childCategoriesNames?.indexOf(selectedChildCategory) || 0
        : 0;

      // Apply category-specific image selection rules
      switch (parentCategoryName) {
        case 'Gaufrettes':
          // Use one of the two images based on child index
          return images[selectedChildIndex % Math.min(2, images.length)];

        case 'Produits pâtissiers':
        case 'Fêtes et événements':
          // Use one of the four images based on child index
          return images[selectedChildIndex % Math.min(4, images.length)];

        default:
          // Default behavior - cycle through all available images
          return images[selectedChildIndex % images.length];
      }
    }

    // If it's a single image, use that
    return bannerContent.bgImage;
  }, [bannerContent.bgImage, parentCategoryName, selectedChildCategory, parentCategory]);

  // Handle overlay opacity class
  const overlayOpacityClass = useMemo(() => {
    // Check if the opacity is already a full class (with "opacity-" prefix)
    if (bannerContent.overlayOpacity && bannerContent.overlayOpacity.startsWith('opacity-')) {
      return bannerContent.overlayOpacity;
    }

    // Format as a class if it's just a number
    return bannerContent.overlayOpacity ? `opacity-${bannerContent.overlayOpacity}` : 'opacity-50';
  }, [bannerContent.overlayOpacity]);

  return (
    // <motion.div className="relative overflow-hidden">
    //   <div className="absolute inset-0">
    //     <motion.div
    //       initial={{ scale: 1.1 }}
    //       animate={{ scale: 1 }}
    //       transition={{ duration: 1.5 }}
    //       className={`absolute inset-0 bg-cover bg-center bg-gradient-to-r ${bannerContent.bgColor || ''}`}
    //       style={{
    //         backgroundImage: bgImage ? `url(${bgImage})` : undefined
    //       }}
    //     />
    //     {/* Overlay with configurable opacity */}
    //     <div className="absolute inset-0 bg-black opacity-20"></div>
    //   </div>

    //   <div className="relative mx-auto px-4">
    //     <motion.div
    //       variants={fadeInUp}
    //       initial="hidden"
    //       animate="visible"
    //       className="flex min-h-[350px] flex-col text-center md:text-justify justify-center pt-36 pb-12 text-white"
    //     >
    //       {bannerContent.title && (
    //         <h1 className="text-5xl font-extrabold font-custom tracking-tight md:text-8xl md:max-w-[90%] mx-auto text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%),_0_2px_15px_rgb(255_255_255_/_30%)]">
    //           {bannerContent.title}
    //         </h1>
    //       )}
    //     </motion.div>
    //   </div>
    // </motion.div>

    <motion.div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className={`absolute inset-0 bg-cover bg-center bg-gradient-to-r ${bannerContent.bgColor || ''}`}
          style={{
            backgroundImage: bgImage ? `url(${bgImage})` : undefined
          }}
        />
        {/* Overlay with configurable opacity */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      <div className="relative mx-auto px-4 ml-10 ">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex min-h-[350px] flex-col text-center md:text-left justify-center pt-36 pb-12 text-white"
        >
          {bannerContent.title && (
            <h1 className="text-5xl uppercase font-bold font-banner tracking-wide md:text-[65px]  text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%),_0_2px_15px_rgb(255_255_255_/_30%)] whitespace-pre-line leading-tight">
              {typeof bannerContent.title === 'string'
                ? bannerContent.title.replace(/\s+/g, ' ') // Clean up extra spaces in strings
                : bannerContent.title}
            </h1>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
