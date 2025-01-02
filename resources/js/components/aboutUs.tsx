import chocolateImg from '@/assets/images/aboutuspic.png'; // Update path as needed
import pastoLogo from '@/assets/images/logo-white.png'; // Update path as needed

export default function PastorMacaoHero() {
  return (
    <section className=" py-8 sm:py-12 lg:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2
          className="text-red-500 font-medium tracking-wide uppercase mb-3 sm:mb-4
          text-sm sm:text-base"
        >
          about us
        </h2>
        <h1 className="text-gray-700 text-4xl md:text-5xl lg:text-6xl font-medium mb-2">PASTOR MACAO</h1>
        <h2 className="text-gray-700 text-2xl md:text-3xl lg:text-4xl mb-12">SAVOUREZ LA VIE !</h2>
      </div>
      <div className="relative min-h-[60vh] bg-neutral-900/100">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={chocolateImg} alt="Chocolate background" className="w-full h-full object-fill opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative container mx-auto px-4  min-h-[60vh] flex gap-2 flex-col items-center justify-center text-center">
          {/* Logo */}
          <img src={pastoLogo} alt="Pastor Macao logo" className="w-16 h-16 mb-10" />

          {/* Text Content */}
          <div className="max-w-4xl mx-auto space-y-6 text-white/90 mb-8">
            <p className="text-sm md:text-lg">
              Fondé en 1954, PASTOR MACAO est le leader marocain en confiserie-chocolaterie, offrant une large gamme de
              produits de qualité pour satisfaire tous les goûts au meilleur prix.
            </p>

            <p className="text-sm md:text-lg">
              La satisfaction de nos clients est au cœur de nos préoccupations. Nous vous proposons une large gamme de
              produits halal, conçus avec les meilleurs ingrédients répondant aux normes de qualité les plus strictes
              pour satisfaire tous les goûts.
            </p>

            <p className="text-sm md:text-lg">
              La qualité de nos produits est reconnue au-delà des frontières du Maroc et nécessite de faire de nouveaux
              adeptes.
            </p>
          </div>

          {/* Button */}
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 transition-colors duration-300 text-sm md:text-base font-medium">
            Savoir Plus
          </button>
        </div>
      </div>
    </section>
  );
}
