import imageblogmain from '@/assets/images/blog-main-page.jpg';
import imageblogmain2 from '@/assets/images/blog-main-page2.jpg';
import grid1 from '@/assets/images/gid-1.webp';
import grid2 from '@/assets/images/grid-2.webp';
import grid3 from '@/assets/images/grid-3.webp';
import imageblog from '@/assets/images/pic9.png';

import { NewLayout } from '@/layouts/new-layout';
import { ArrowRight, Facebook, Link, Twitter } from 'lucide-react';

function BlogShow() {
  return (
    <div className="container mx-auto px-4 py-8 mt-36">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-4">
        <a href="#" className="text-red-700 hover:underline">
          Blog
        </a>
        <span>&gt;</span>
        <a href="#" className="text-red-700 hover:underline">
          Category
        </a>
      </div>

      {/* Article Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">Le titre de l'article</h1>

      {/* Featured Image */}
      <div className="rounded-lg overflow-hidden mb-10">
        <img
          src={imageblogmain}
          alt="pastore macao"
          width={800}
          height={400}
          className="w-full h-[450px] rounded-lg "
        />
      </div>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-red-700 mb-4">Introduction</h2>

        <p className="mb-4">
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget
          vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu
          amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
        </p>

        <p className="mb-4">
          Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor.
          Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In
          turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est volutpat.
        </p>

        {/* Second Image with Caption */}
        <figure className="my-8">
          <img src={imageblogmain2} alt="pastore macao" width={800} height={400} className="w-full h-auto rounded-lg" />
          <figcaption className="text-sm text-gray-600 mt-2">Image caption goes here</figcaption>
        </figure>

        <h3 className="text-xl font-bold text-red-700 mb-4">
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque
          aenean hac vestibulum turpis mi blandit diam. Tempor integer aliquam in vitae malesuada fringilla.
        </h3>

        <p className="mb-4">
          Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed
          condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus,
          volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque.
          Mauris, neque vitae eu vestibulum, blandit ornare aenean nulla. Enim accumsan euismod nunc nunc. Placerat
          arcu.
        </p>

        {/* Blockquote */}
        <blockquote className="border-l-4 border-red-700 pl-4 italic my-6">
          "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget
          consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."
        </blockquote>

        <p className="mb-4">
          Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi
          feugiat cras placerat elit. Aliquam tellus lorem aliquam et. Morbi, sed mattis pellentesque suscipit accumsan.
          Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris
          vestibulum.
        </p>

        <h2 className="text-2xl font-bold text-red-700 mb-4">Conclusion</h2>

        <p className="mb-4">
          Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis
          est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet
          nulla purus habitasse.
        </p>

        <p className="mb-4">
          Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra
          consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh
          tortor commodo cursus.
        </p>

        <p className="mb-4">
          Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat
          dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere
          pharetra odio consequat scelerisque et sed commodo. Nulla adipiscing erat et erat. Condimentum lorem posuere
          gravida enim posuere cursus diam.
        </p>
      </article>

      {/* Share Section */}
      <div className="border-t border-b border-gray-200 py-6 my-8">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="font-medium text-gray-700">Share this post</span>
            <div className="flex gap-2">
              <button className="p-2 text-gray-600 hover:text-red-700">
                <Link size={18} />
              </button>
              <button className="p-2 text-gray-600 hover:text-red-700">
                <Twitter size={18} />
              </button>
              <button className="p-2 text-gray-600 hover:text-red-700">
                <Facebook size={18} />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Tag one</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Tag two</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Tag three</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Tag four</span>
          </div>
        </div>
      </div>

      {/* Related Posts Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-red-700 text-center mb-6">Nos dernières actualités</h2>
        <p className="text-center text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Blog Card 1 */}
          <div className="rounded-[40px] overflow-hidden border border-gray-200 bg-white">
            <div className="relative h-auto overflow-hidden">
              <img src={grid3} alt="Blog post" className="object-cover" />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-red-700 text-sm font-medium">Category</span>
                <span className="text-gray-500 text-sm">5 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Blog title heading will go here</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <a href="#" className="inline-flex items-center text-red-700 font-medium">
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="rounded-[40px] overflow-hidden border border-gray-200 bg-white">
            <div className="relative h-auto overflow-hidden">
              <img src={grid1} alt="Blog post" className="object-cover" />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-red-700 text-sm font-medium">Category</span>
                <span className="text-gray-500 text-sm">5 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Blog title heading will go here</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <a href="#" className="inline-flex items-center text-red-700 font-medium">
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="rounded-[40px] overflow-hidden border border-gray-200 bg-white">
            <div className="relative h-auto overflow-hidden">
              <img src={grid2} alt="Blog post" className="object-cover" />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-red-700 text-sm font-medium">Category</span>
                <span className="text-gray-500 text-sm">5 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Blog title heading will go here</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <a href="#" className="inline-flex items-center text-red-700 font-medium">
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* All Products Button */}
        <div className="flex justify-center">
          <a
            href="#"
            className="px-6 py-3 bg-red-600 text-white font-medium rounded-l-full rounded-br-full hover:bg-red-700 transition-colors"
          >
            Tous les produits
          </a>
        </div>
      </div>
      <div className="mt-16 rounded-[80px] overflow-hidden">
        <div className="bg-red-700 text-white flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img src={imageblog} alt="Automatic delivery service" width={600} height={400} className="w-full h-auto" />
          </div>
          <div className="p-8 md:p-12 md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lorem ipsum dolor</h2>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur. Massa felis massa enim tristique. Lectus eget viverra nunc nisi
              risus mattis fusce eu. Blandit pellentesque lacus est ut ultricies.
            </p>
            <button className="bg-white text-red-700 px-6 py-3 rounded-l-full rounded-br-full font-medium">
              Lorem ipsum
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BlogShow;
BlogShow.layout = (page) => <NewLayout children={page} />;
