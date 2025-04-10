import blogDefault from '@/assets/images/macao-blog.jpg';
import imageblog from '@/assets/images/pic9.png';
import { NewLayout } from '@/layouts/new-layout';
import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Link2, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
function BlogShow({ post, relatedPosts }) {
  const [isRecipe, setIsRecipe] = useState(false);

  useEffect(() => {
    setIsRecipe(post.category === 'recettes');
  }, [post]);

  if (!post) {
    return <div className="container mx-auto px-4 py-8 mt-36">Loading...</div>;
  }

  // Format the date for display without date-fns
  const formatDate = (dateString) => {
    if (!dateString) return 'Date non disponible';

    const date = new Date(dateString);
    // Format as DD/MM/YYYY in French format
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  //   const readingTime = Math.ceil(post.content.split(' ').length / 200);

  // Format the content - split by newlines and create paragraphs
  //   const formatContent = (content) => {
  //     if (!content) return [];
  //     return content
  //       .split('\n')
  //       .filter((paragraph) => paragraph.trim() !== '')
  //       .map((paragraph, index) => (
  //         <p key={index} className="mb-4">
  //           {paragraph.trim()}
  //         </p>
  //       ));
  //   };
  console.log('post:', post);

  return (
    <div className="container mx-auto px-4 py-8 mt-36">
      <div className="flex items-center gap-2 text-sm mb-4">
        <a href="/blog" className="text-red-700 hover:underline">
          Blog
        </a>
        <span>&gt;</span>
        <p className="text-red-700 hover:underline">{post.category.charAt(0).toUpperCase() + post.category.slice(1)}</p>
      </div>

      {/* <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">{post.title}</h1> */}

      {/* Post Meta */}
      <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600">
        <div className="flex items-center">
          <span className="font-medium mr-2">Date:</span>
          {formatDate(post.date)}
        </div>
        <div className="flex items-center">
          <span className="font-medium mr-2">Catégorie:</span>
          <p className="text-red-700 hover:underline">
            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
          </p>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden mb-10">
        <img
          src={post.image ? `https://macao.digitalia-solutions.com/${post.image}` : blogDefault}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-[450px] object-cover rounded-lg"
        />
      </div>

      {/* Article Content */}
      {/* <article className="prose prose-lg max-w-5xl text-justify mx-auto">
        <h2 className="text-4xl font-bold text-red-700 mb-4">Introduction</h2>

        <p>{post.content} </p>
      </article> */}
      {/* Content Section */}
      <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="prose prose-lg max-w-none">
        {isRecipe ? (
          <div className="recipe-content">
            {post.emoji && (
              <div className="text-6xl mb-6 flex items-baseline">
                {post.emoji} <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">{post.title}</h1>
              </div>
            )}
            <h2 className="text-2xl font-bold mb-6 text-red-700">Ingrédients</h2>
            <div className="bg-amber-50 rounded-3xl p-6 mb-10">
              <ul className="list-disc pl-10 space-y-2">
                {post.ingredients &&
                  post.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-800">
                      {ingredient}
                    </li>
                  ))}
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-red-700">Préparation</h2>
            <div className="bg-amber-50 rounded-3xl p-6 mb-10">
              <ol className="list-decimal pl-10 space-y-6">
                {post.preparations &&
                  post.preparations.map((step, index) => (
                    <li key={index} className="text-gray-800">
                      <p>{step}</p>
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        ) : (
          <div className="article-content">
            {post.content && (
              <>
                <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">{post.title}</h1>

                <article className="prose prose-lg max-w-7xl text-justify mx-auto">
                  <p>{post.content} </p>
                </article>
              </>
            )}
          </div>
        )}
      </motion.div>

      {/* Share Section */}
      <div className="border-t border-b border-gray-200 py-6 my-8">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="font-medium text-gray-700">Partager cet article</span>
            <div className="flex gap-2">
              <button className="p-2 text-gray-600 hover:text-red-700" aria-label="Copier le lien">
                <Link2 size={18} />
              </button>
              <button className="p-2 text-gray-600 hover:text-red-700" aria-label="Partager sur Twitter">
                <Twitter size={18} />
              </button>
              <button className="p-2 text-gray-600 hover:text-red-700" aria-label="Partager sur Facebook">
                <Facebook size={18} />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">{post.category}</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Pastor Macao</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Chocolat</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Maroc</span>
          </div>
        </div>
      </div>

      {/* Related Posts Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-red-700 text-center mb-6">Nos dernières actualités</h2>
        <p className="text-center text-gray-600 mb-8">Découvrez d'autres articles passionnants de Pastor Macao.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {relatedPosts.slice(0, 3).map((relatedPost) => (
            <div className="rounded-[40px] overflow-hidden border-2 border-red-700 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image ? `https://macao.digitalia-solutions.com/${post.image}` : blogDefault}
                  alt={relatedPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-end items-center mb-3">
                  <span className="text-gray-500 text-sm">{relatedPost.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{relatedPost.title}</h3>
                <p className="text-gray-700 mb-4 flex-grow">{relatedPost.excerpt}</p>
                <a
                  href={route('blog.show', relatedPost.id)}
                  className="inline-flex items-center text-red-700 font-medium hover:underline"
                >
                  Lire plus <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* All Articles Button */}
        <div className="flex justify-center">
          <a
            href="/blog"
            className="px-6 py-3 bg-red-600 text-white font-medium rounded-l-full rounded-br-full hover:bg-red-700 transition-colors"
          >
            Tous les articles
          </a>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 rounded-[80px] overflow-hidden">
        <div className="bg-red-700 text-white flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img src={imageblog} alt="Pastor Macao products" className="w-full h-auto" />
          </div>
          <div className="p-8 md:p-12 md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Découvrez nos produits</h2>
            <p className="mb-6">
              Pastor Macao propose une gamme variée de produits chocolatés et de confiseries pour satisfaire toutes vos
              envies gourmandes. De la pâte à tartiner aux tablettes en passant par les gaufrettes, il y en a pour tous
              les goûts.
            </p>
            <a
              href="/products/chocolat/pâtes%20à%20tartiner"
              className="inline-block bg-white text-red-700 px-6 py-3 rounded-l-full rounded-br-full font-medium"
            >
              Nos produits
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogShow;
BlogShow.layout = (page) => <NewLayout children={page} />;
