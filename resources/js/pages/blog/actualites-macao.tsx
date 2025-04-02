import candies from '@/assets/images/banner-blog.jpg';
import grid1 from '@/assets/images/gid-1.webp';
import grid2 from '@/assets/images/grid-2.webp';
import grid3 from '@/assets/images/grid-3.webp';
import grid4 from '@/assets/images/grid-4_1.webp';
import grid5 from '@/assets/images/grid-5_1.webp';
import grid6 from '@/assets/images/grid-6.webp';
import imageblog from '@/assets/images/pic9.png';

import { NewLayout } from '@/layouts/new-layout';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function Actualites() {
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

  const blogPosts = [
    {
      id: 1,
      image: grid1,
      category: 'Category',
      readTime: '5 min read',
      title: 'Blog title heading will go here',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
    },
    {
      id: 2,
      image: grid2,
      category: 'Category',
      readTime: '5 min read',
      title: 'Blog title heading will go here',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
    },
    {
      id: 3,
      image: grid3,
      category: 'Category',
      readTime: '5 min read',
      title: 'Blog title heading will go here',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
    },
    {
      id: 4,
      image: grid4,
      category: 'Category',
      readTime: '5 min read',
      title: 'Blog title heading will go here',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
    },
    {
      id: 5,
      image: grid5,
      category: 'Category',
      readTime: '5 min read',
      title: 'Blog title heading will go here',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
    },
    {
      id: 6,
      image: grid6,
      category: 'Category',
      readTime: '5 min read',
      title: 'Blog title heading will go here',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
    }
  ];
  return (
    <>
      <motion.div className="relative  overflow-hidden bg-gradient-to-r from-amber-900 to-amber-950">
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
                actualites macao
              </motion.h1>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <main className="container mx-auto px-4 py-8">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Promotional Banner */}
        <div className="mt-16 rounded-[80px] overflow-hidden">
          <div className="bg-red-700 text-white flex flex-col md:flex-row items-center">
            <div className="p-8 md:p-12 md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4"> Lorem ipsum dolor</h2>
              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur. Massa felis massa enim tristique. Lectus eget viverra nunc nisi
                risus mattis fusce eu. Blandit pellentesque lacus est ut ultricies.
              </p>
              <button className="bg-white text-red-700 px-6 py-3 rounded-l-full rounded-br-full font-medium">
                Lorem ipsum
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src={imageblog}
                alt="Automatic delivery service"
                width={600}
                height={400}
                className="w-full h-auto"
              />
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
function BlogCard({ post }: { post: any }) {
  return (
    <div className="rounded-[40px] overflow-hidden border-2 border-red-700 ">
      <div className="relative h-64 overflow-hidden">
        <img src={post.image || '/placeholder.svg'} alt={post.title} className="object-cover" />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-red-700 text-sm font-medium">{post.category}</span>
          <span className="text-gray-500 text-sm">{post.readTime}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h3>
        <p className="text-gray-700 mb-4">{post.excerpt}</p>
        <Link href="/blog/actualites-macao/blog" className="inline-flex items-center text-red-700 font-medium">
          Read more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
