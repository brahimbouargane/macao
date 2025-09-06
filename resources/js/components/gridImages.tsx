import grid1 from '@/assets/images/gid-1.webp';
import grid2 from '@/assets/images/grid-2.webp';
import grid3 from '@/assets/images/grid-3.webp';
import grid4 from '@/assets/images/grid-4_1.webp';
import grid5 from '@/assets/images/grid-5_1.webp';
import grid6 from '@/assets/images/grid-6.webp';
import gridlogo from '@/assets/images/grid-logo.webp';
import logomacao from '@/assets/images/macao_logo.png';
import { cn } from '@/utils/classes';
import { Link } from '@inertiajs/react';
import { Facebook, Instagram } from 'lucide-react';

const ImageGrid = () => {
  const images = [
    // First row - Facebook and key images
    {
      src: gridlogo,
      alt: 'Instagram logo on beige background',
      overlay: {
        type: 'logo',
        title: 'Facebook',
        text: 'Suivez-nous',
        logoSrc: logomacao,
        iconSrc: Facebook
      },
      href: 'https://www.facebook.com/MacaoPastor/',
      priority: 'high'
    },
    {
      src: grid1,
      alt: 'Chocolate truffles in a box',
      priority: 'high'
    },
    {
      src: grid5,
      alt: 'Chocolate dessert with pink flower',
      priority: 'medium',
      hideOnMobile: true
    },
    {
      src: grid3,
      alt: 'Crown decorated cupcakes',
      priority: 'low',
      hideOnMobile: true
    },
    // Second row - Instagram and supporting images
    {
      src: grid4,
      alt: 'Storefront with gold text',
      priority: 'medium',
      hideOnMobile: true
    },
    {
      src: grid6,
      alt: 'Book with chocolate quote',
      priority: 'low',
      hideOnMobile: true
    },
    {
      src: gridlogo,
      alt: 'White chocolate and almonds',
      overlay: {
        type: 'logo',
        title: 'Instagram',
        text: 'Suivez-nous',
        logoSrc: logomacao,
        iconSrc: Instagram
      },
      href: 'https://www.instagram.com/macaopastor/',
      priority: 'high'
    },
    {
      src: grid2,
      alt: 'Dark chocolate with gold decoration',
      priority: 'high'
    }
  ];

  return (
    <div className="w-full mx-auto py-6 sm:py-8 lg:py-16 rounded-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 rounded-2xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              'relative aspect-square rounded-2xl',
              image.hideOnMobile ? 'hidden sm:block' : 'block',
              // Adjust size based on priority
              image.priority === 'high'
                ? 'col-span-1'
                : image.priority === 'medium'
                  ? 'col-span-1 sm:col-span-1'
                  : 'col-span-1'
            )}
          >
            {image.href ? (
              <Link href={image.href} target="_blank" rel="noreferrer" className="block w-full h-full  rounded-2xl">
                <ImageContent image={image} />
              </Link>
            ) : (
              <ImageContent image={image} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Separate component for image content to improve maintainability
const ImageContent = ({ image }) => (
  <>
    <div className="relative w-full h-full overflow-hidden rounded-2xl group ">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-all duration-300
                   group-hover:scale-105 group-hover:opacity-90"
        loading={image.priority === 'high' ? 'eager' : 'lazy'}
      />

      {image.overlay && image.overlay.type === 'logo' && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center
                      bg-white/10 backdrop-blur-[2px] transition-all duration-300
                      group-hover:bg-white/20"
        >
          <img
            src={image.overlay.logoSrc}
            alt="Logo"
            className="w-20 h-20 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-2
                     transition-transform duration-300 group-hover:scale-110"
          />
          <image.overlay.iconSrc
            className="h-10 w-10 sm:h-8 sm:w-8 md:h-10 md:w-10
                                          text-gray-700 mb-2"
          />
          <h2
            className="text-3xl sm:text-2xl md:text-3xl font-semibold text-gray-700
                        text-center"
          >
            {image.overlay.title}
          </h2>
          <p
            className="text-3xl sm:text-xl md:text-2xl font-semibold text-gray-700
                       text-center"
          >
            {image.overlay.text}
          </p>
        </div>
      )}
    </div>
  </>
);

export default ImageGrid;
