import banner from '@/assets/images/23.webp';

import { NewLayout } from '@/layouts/new-layout';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import { useEffect, useState } from 'react';

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

function Actualites({ posts }) {
  //   // State for filter and search
  //   const [activeCategory, setActiveCategory] = useState('all');
  //   const [searchTerm, setSearchTerm] = useState('');
  //   const [filteredPosts, setFilteredPosts] = useState([]);

  //   // Category labels for display
  //   const categoryLabels = {
  //     all: 'Tous les articles',
  //     recettes: 'Recettes Produits Macao',
  //     actualites: 'Actualités Macao'
  //   };

  //   // Filter posts based on category and search term
  //   useEffect(() => {
  //     // For debugging
  //     console.log('Active category:', activeCategory);
  //     console.log('Search term:', searchTerm);
  //     console.log('Posts:', posts);

  //     // Add safety check for posts
  //     if (!Array.isArray(posts) || posts.length === 0) {
  //       setFilteredPosts([]);
  //       return;
  //     }

  //     const filtered = posts.filter((post) => {
  //       // Safety check for post object
  //       if (!post) return false;

  //       // Check if the post has the category property and it matches the filter
  //       const matchesCategory =
  //         activeCategory === 'all' || (post.category && post.category.toLowerCase() === activeCategory.toLowerCase());

  //       // Check if title or excerpt matches the search term
  //       const matchesSearch =
  //         searchTerm === '' ||
  //         (post.title && post.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
  //         (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));

  //       return matchesCategory && matchesSearch;
  //     });

  //     setFilteredPosts(filtered);
  //   }, [activeCategory, searchTerm, posts]);

  //   console.log(filteredPosts);

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Category labels for display
  const categoryLabels = {
    all: 'Tous les articles',
    recettes: 'Recettes Produits Macao',
    actualites: 'Actualités Macao'
  };

  // Filter posts based on category and search term
  useEffect(() => {
    // Add safety check for posts
    if (!Array.isArray(posts) || posts.length === 0) {
      setFilteredPosts([]);
      return;
    }

    const filtered = posts.filter((post) => {
      // Safety check for post object
      if (!post) return false;

      // Check if the post has the category property and it matches the filter
      const matchesCategory =
        activeCategory === 'all' || (post.category && post.category.toLowerCase() === activeCategory.toLowerCase());

      // Check if title or excerpt matches the search term
      const matchesSearch =
        searchTerm === '' ||
        (post.title && post.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchesCategory && matchesSearch;
    });

    setFilteredPosts(filtered);
  }, [activeCategory, searchTerm, posts]);

  return (
    <>
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
            className="flex min-h-[350px] flex-col text-center md:text-left justify-center pt-36 pb-12 text-white"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl uppercase  font-bold font-banner tracking-wide md:text-[65px] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_0_1px_0_rgb(0_0_0_/_40%),_0_2px_15px_rgb(255_255_255_/_30%)] leading-tight"
            >
              <span className="inline-block">CÔTÉ BLOG :</span>{' '}
              <span className="inline-block">LÀ OÙ L'INFO SE DÉGUSTE</span>{' '}
              <span className="inline-block">ET LES RECETTES INSPIRENT.</span>
            </motion.h1>
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
      </main>
    </>
  );
}

export default Actualites;
Actualites.layout = (page) => <NewLayout children={page} />;

// Blog Card Component
function BlogCard({ key, post, categoryLabels }) {
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
    <Link href={route('blog.show', post.id)}>
      <motion.div
        key={key}
        variants={fadeInUp}
        className="rounded-[40px] overflow-hidden border-2 border-red-700 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
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
            href={route('blog.show', post.id)}
            className="inline-flex items-center text-red-700 font-medium hover:underline"
          >
            Lire plus <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </Link>
  );
}
