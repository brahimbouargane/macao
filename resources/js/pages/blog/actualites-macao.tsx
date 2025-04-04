// import candies from '@/assets/images/banner-blog.jpg';
// import grid1 from '@/assets/images/gid-1.webp';
// import grid2 from '@/assets/images/grid-2.webp';
// import grid3 from '@/assets/images/grid-3.webp';
// import grid4 from '@/assets/images/grid-4_1.webp';
// import grid5 from '@/assets/images/grid-5_1.webp';
// import grid6 from '@/assets/images/grid-6.webp';
// import imageblog from '@/assets/images/pic9.png';

// import { NewLayout } from '@/layouts/new-layout';
// import { Link } from '@inertiajs/react';
// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';

// function Actualites() {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: 'easeOut'
//       }
//     },
//     exit: {
//       opacity: 0,
//       y: -20,
//       transition: {
//         duration: 0.3
//       }
//     }
//   };

//   const blogPosts = [
//     {
//       id: 1,
//       image: grid1,
//       category: 'Category',
//       readTime: '5 min read',
//       title: 'Blog title heading will go here',
//       excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
//     },
//     {
//       id: 2,
//       image: grid2,
//       category: 'Category',
//       readTime: '5 min read',
//       title: 'Blog title heading will go here',
//       excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
//     },
//     {
//       id: 3,
//       image: grid3,
//       category: 'Category',
//       readTime: '5 min read',
//       title: 'Blog title heading will go here',
//       excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
//     },
//     {
//       id: 4,
//       image: grid4,
//       category: 'Category',
//       readTime: '5 min read',
//       title: 'Blog title heading will go here',
//       excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
//     },
//     {
//       id: 5,
//       image: grid5,
//       category: 'Category',
//       readTime: '5 min read',
//       title: 'Blog title heading will go here',
//       excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
//     },
//     {
//       id: 6,
//       image: grid6,
//       category: 'Category',
//       readTime: '5 min read',
//       title: 'Blog title heading will go here',
//       excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
//     }
//   ];
//   return (
//     <>
//       <motion.div className="relative  overflow-hidden bg-gradient-to-r from-amber-900 to-amber-950">
//         <div className="absolute inset-0">
//           <motion.div
//             initial={{ scale: 1.1 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 1.5 }}
//             className="absolute inset-0 bg-cover bg-center"
//             style={{
//               backgroundImage: `url(${candies || '/placeholder.svg'})`,
//               opacity: '0.20'
//             }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 to-transparent" />
//         </div>

//         <div className="container relative mx-auto px-4">
//           <motion.div
//             variants={fadeInUp}
//             initial="hidden"
//             animate="visible"
//             className="flex min-h-[350px] items-center justify-center py-20"
//           >
//             <div className="text-center mt-28">
//               <motion.h1
//                 variants={fadeInUp}
//                 className="mb-6 font-custom text-4xl font-bold text-white md:text-6xl uppercase"
//               >
//                 Blog Pastor macao
//               </motion.h1>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>

//       <main className="container mx-auto px-4 py-8">
//         {/* Blog Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {blogPosts.map((post) => (
//             <BlogCard key={post.id} post={post} />
//           ))}
//         </div>

//         {/* Promotional Banner */}
//         <div className="mt-16 rounded-[80px] overflow-hidden">
//           <div className="bg-red-700 text-white flex flex-col md:flex-row items-center">
//             <div className="p-8 md:p-12 md:w-1/2">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4"> Lorem ipsum dolor</h2>
//               <p className="mb-6">
//                 Lorem ipsum dolor sit amet consectetur. Massa felis massa enim tristique. Lectus eget viverra nunc nisi
//                 risus mattis fusce eu. Blandit pellentesque lacus est ut ultricies.
//               </p>
//               <button className="bg-white text-red-700 px-6 py-3 rounded-l-full rounded-br-full font-medium">
//                 Lorem ipsum
//               </button>
//             </div>
//             <div className="md:w-1/2">
//               <img
//                 src={imageblog}
//                 alt="Automatic delivery service"
//                 width={600}
//                 height={400}
//                 className="w-full h-auto"
//               />
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

// export default Actualites;
// Actualites.layout = (page) => <NewLayout children={page} />;

// // Blog Card Component
// function BlogCard({ post }: { post: any }) {
//   return (
//     <div className="rounded-[40px] overflow-hidden border-2 border-red-700 ">
//       <div className="relative h-64 overflow-hidden">
//         <img src={post.image || '/placeholder.svg'} alt={post.title} className="object-cover" />
//       </div>
//       <div className="p-5">
//         <div className="flex justify-between items-center mb-3">
//           <span className="text-red-700 text-sm font-medium">{post.category}</span>
//           <span className="text-gray-500 text-sm">{post.readTime}</span>
//         </div>
//         <h3 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h3>
//         <p className="text-gray-700 mb-4">{post.excerpt}</p>
//         <Link href="/blog/actualites-macao/blog" className="inline-flex items-center text-red-700 font-medium">
//           Read more <ArrowRight className="ml-1 h-4 w-4" />
//         </Link>
//       </div>
//     </div>
//   );
// }

import candies from '@/assets/images/banner-blog.jpg';
import grid1 from '@/assets/images/gid-1.webp';
import grid2 from '@/assets/images/grid-2.webp';
import grid3 from '@/assets/images/grid-3.webp';
import grid4 from '@/assets/images/grid-4_1.webp';
import grid5 from '@/assets/images/grid-5_1.webp';
import grid6 from '@/assets/images/grid-6.webp';
import imageblog from '@/assets/images/pic9.png';

import { NewLayout } from '@/layouts/new-layout';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-aria-components';

function Actualites() {
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

  // State for filter and search
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Blog posts with category data
  const blogPosts = [
    {
      id: 1,
      image: grid1,
      category: 'recettes',
      readTime: '5 min read',
      title: 'Recette de gâteau au chocolat',
      excerpt: 'Découvrez notre délicieuse recette de gâteau au chocolat avec les produits Macao.'
    },
    {
      id: 2,
      image: grid3,
      category: 'recettes',
      readTime: '8 min read',
      title: 'Cookies aux pépites de caramel',
      excerpt: 'Une recette simple et rapide pour des cookies croustillants avec un cœur fondant.'
    },
    {
      id: 3,
      image: grid2,
      category: 'actualites',
      readTime: '3 min read',
      title: "Nouveaux produits Macao pour l'été",
      excerpt: 'Découvrez notre nouvelle gamme de produits pour vos recettes estivales.'
    },
    {
      id: 4,
      image: grid4,
      category: 'recettes',
      readTime: '6 min read',
      title: 'Crème dessert à la vanille',
      excerpt: 'Une recette facile et rapide pour une crème dessert onctueuse à la vanille.'
    },
    {
      id: 5,
      image: grid5,
      category: 'actualites',
      readTime: '4 min read',
      title: "Macao s'engage pour l'environnement",
      excerpt: 'Découvrez nos nouvelles initiatives écologiques et nos emballages biodégradables.'
    },
    {
      id: 6,
      image: grid6,
      category: 'actualites',
      readTime: '7 min read',
      title: 'Partenariat avec des chefs français',
      excerpt: 'Macao collabore avec des chefs étoilés pour créer des recettes exclusives.'
    }
  ];

  // Filter posts based on category and search term
  useEffect(() => {
    const filtered = blogPosts.filter((post) => {
      const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    setFilteredPosts(filtered);
  }, [activeCategory, searchTerm]);

  // Category labels for display
  const categoryLabels = {
    all: 'Tous les articles',
    recettes: 'Recettes Produits Macao',
    actualites: 'Actualités Macao'
  };

  return (
    <>
      <motion.div className="relative overflow-hidden bg-gradient-to-r from-amber-900 to-amber-950">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${candies || '/placeholder.svg'})`,
              opacity: '0.20'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 to-transparent" />
        </div>

        <div className="container relative mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex min-h-[350px] items-center justify-center py-20"
          >
            <div className="text-center mt-28">
              <motion.h1
                variants={fadeInUp}
                className="mb-6 font-custom text-4xl font-bold text-white md:text-6xl uppercase"
              >
                Blog Macao
              </motion.h1>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <main className="container mx-auto px-4 py-8">
        {/* Filter and Search Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              {Object.entries(categoryLabels).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200
                    ${
                      activeCategory === key
                        ? 'bg-red-700 text-white shadow-lg'
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-red-700 hover:text-red-700'
                    }`}
                  aria-pressed={activeCategory === key}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full md:w-64 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent"
                  aria-label="Rechercher un article"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Results indicator */}
          <div className="text-gray-600">
            <p>
              {filteredPosts.length === 0
                ? 'Aucun article trouvé'
                : `${filteredPosts.length} article${filteredPosts.length > 1 ? 's' : ''} trouvé${filteredPosts.length > 1 ? 's' : ''}`}
              {activeCategory !== 'all' && ` dans ${categoryLabels[activeCategory].toLowerCase()}`}
              {searchTerm && ` pour "${searchTerm}"`}
            </p>
          </div>
        </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Aucun article ne correspond à votre recherche</h3>
            <p className="text-gray-600 mb-8">
              Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchTerm('');
              }}
              className="bg-red-700 text-white px-6 py-3 rounded-full font-medium hover:bg-red-800 transition-colors"
            >
              Voir tous les articles
            </button>
          </div>
        )}

        {/* Blog Grid */}
        {filteredPosts.length > 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} categoryLabels={categoryLabels} />
            ))}
          </motion.div>
        )}

        {/* Promotional Banner */}
        <div className="mt-16 rounded-[80px] overflow-hidden">
          <div className="bg-red-700 text-white flex flex-col md:flex-row items-center">
            <div className="p-8 md:p-12 md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Inscrivez-vous à notre newsletter</h2>
              <p className="mb-6">
                Recevez nos dernières recettes et actualités directement dans votre boîte mail. Nous partageons
                régulièrement des astuces exclusives et des offres spéciales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="px-4 py-3 rounded-l-full rounded-br-full text-gray-800 w-full sm:w-64"
                  aria-label="Votre adresse email"
                />
                <button className="bg-amber-900 hover:bg-amber-800 text-white px-6 py-3 rounded-l-full rounded-br-full font-medium transition-colors">
                  S'inscrire
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src={imageblog} alt="Produits Macao" width={600} height={400} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Actualites;
Actualites.layout = (page) => <NewLayout children={page} />;

// Blog Card Component
function BlogCard({ post, categoryLabels }) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-[40px] overflow-hidden border-2 border-red-700 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={post.image || '/placeholder.svg'}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-medium">
            {categoryLabels[post.category]}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-end items-center mb-3">
          <span className="text-gray-500 text-sm">{post.readTime}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">{post.title}</h3>
        <p className="text-gray-700 mb-4 flex-grow">{post.excerpt}</p>
        <Link
          href={`/blog/${post.category}/${post.id}`}
          className="inline-flex items-center text-red-700 font-medium hover:underline"
        >
          Lire plus <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}
