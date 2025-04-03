import candies from '@/assets/images/banner-blog.jpg';
import youtube4 from '@/assets/images/youtube4.jpg';
import youtube1 from '@/assets/images/youtube_1.jpg';
import youtube2 from '@/assets/images/youtube_2.jpg';

import { Badge } from '@/components/ui/shadcn-badge';
import { Button } from '@/components/ui/shadcn-button';
import { Dialog, DialogClose, DialogContent } from '@/components/ui/shadcn-dailog';
import { Input } from '@/components/ui/shadcn-input';
import { NewLayout } from '@/layouts/new-layout';
import { motion } from 'framer-motion';
import { Facebook, Filter, Instagram, Search, X, Youtube } from 'lucide-react';
import { useEffect, useState } from 'react';

// Media item type definition
type MediaType = 'image' | 'video';
type MediaSource = 'youtube' | 'instagram' | 'facebook' | 'internal';
type MediaItem = {
  id: string;
  type: MediaType;
  src: string;
  thumbnail?: string;
  title: string;
  category: string;
  tags: string[];
  source: MediaSource;
  sourceUrl?: string;
  date?: string;
  views?: number;
  embedCode?: string;
};

const YOUTUBE_API_KEY = 'AIzaSyCJzvr_kv-6NlMHUeIpRe2wY8Uap1idBGo';
const FACEBOOK_ACCESS_TOKEN =
  'EAAYGsBV53VEBOz2o2a5oI7GY1E9IIWkOqZCI3rk9X6qEsqGrJQFy267k4KIXRq8rxqhxE0f6ZCxn06rjlmK0fsZCIyCHqpJ0NQncZCKdQ4FxkJ8EFDBrSsA3tXHhi9N5D0jTaetFjx7hlHMKjIjoXAUByqVyOUGA9uOYRhqs5ZCP8mmZCGosB0Abvyu7JZBVRW4dxG9Ku9QZBJcCkcRXMBjYDbILn6lP2i1uCVWAHO9YquOR6zWtcJAZB2lJrCWMGhpyr4dmpZCkBbCwkZD';
const INSTAGRAM_ACCESS_TOKEN = 'YOUR_INSTAGRAM_ACCESS_TOKEN';
const YOUTUBE_CHANNEL_ID = 'UCGoKUNUIEgPpUkV_Po_r__g';
const FACEBOOK_PAGE_ID = '105390059972962';
const INSTAGRAM_USER_ID = '4509954822';

const MEDIA_DATA: MediaItem[] = [
  {
    id: 'yt1',
    type: 'video',
    src: 'https://www.youtube.com/embed/7AzkVCZgKuY',
    thumbnail: youtube1,
    title: 'كيك فروماج 1 و كيك مكاو 1 !',
    category: 'Recettes',
    tags: ['gâteau', 'recette', 'tutoriel'],
    source: 'youtube',
    sourceUrl: 'https://www.youtube.com/watch?v=7AzkVCZgKuY',
    date: '9 months ago',
    views: 75000,
    embedCode:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/7AzkVCZgKuY" title="Macao Cake Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  },
  {
    id: 'yt2',
    type: 'video',
    src: 'https://www.youtube.com/embed/5ViNPai-X5A',
    thumbnail: youtube2,
    title: '!  شوكولا ، و كاين ماكاو لانݣو شوكولا ، و هادي نصيحة ، من عند لالة حليمة',
    category: 'Marque',
    tags: ['marque', 'entreprise', 'histoire'],
    source: 'youtube',
    sourceUrl: 'https://www.youtube.com/watch?v=5ViNPai-X5A',
    date: '1 year ago',
    views: 216,
    embedCode:
      '<iframe width="2114" height="850" src="https://www.youtube.com/embed/5ViNPai-X5A" title="! ‎كاين شوكولا ، و كاين ماكاو لانݣو شوكولا ، و هادي نصيحة ، من عند لالة حليمة" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    id: 'yt2',
    type: 'video',
    src: 'https://www.youtube.com/embed/5ViNPai-X5A',
    thumbnail: youtube2,
    title: '!  شوكولا ، و كاين ماكاو لانݣو شوكولا ، و هادي نصيحة ، من عند لالة حليمة',
    category: 'Marque',
    tags: ['marque', 'entreprise', 'histoire'],
    source: 'youtube',
    sourceUrl: 'https://www.youtube.com/watch?v=5ViNPai-X5A',
    date: '1 year ago',
    views: 216,
    embedCode:
      '<iframe width="2114" height="850" src="https://www.youtube.com/embed/5ViNPai-X5A" title="! ‎كاين شوكولا ، و كاين ماكاو لانݣو شوكولا ، و هادي نصيحة ، من عند لالة حليمة" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    id: 'yt2',
    type: 'video',
    src: 'https://www.youtube.com/embed/5ViNPai-X5A',
    thumbnail: youtube2,
    title: '! شوكولا ، و كاين ماكاو لانݣو شوكولا ، و هادي نصيحة ، من عند لالة حليمة',
    category: 'Marque',
    tags: ['marque', 'entreprise', 'histoire'],
    source: 'youtube',
    sourceUrl: 'https://www.youtube.com/watch?v=5ViNPai-X5A',
    date: '1 year ago',
    views: 216,
    embedCode:
      '<iframe width="2114" height="850" src="https://www.youtube.com/embed/5ViNPai-X5A" title="! ‎كاين شوكولا ، و كاين ماكاو لانݣو شوكولا ، و هادي نصيحة ، من عند لالة حليمة" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  {
    id: 'yt2',
    type: 'video',
    src: 'https://www.youtube.com/embed/MwREL4Qa-no&ab',
    thumbnail: youtube4,
    title: 'MACAO est le leader marocain en confiserie chocolaterie',
    category: 'Marque',
    tags: ['marque', 'entreprise', 'histoire'],
    source: 'youtube',
    sourceUrl: 'https://www.youtube.com/watch?v=MwREL4Qa-no&ab',
    date: '1 year ago',
    views: 216,
    embedCode:
      '<iframe width="2114" height="850" src="https://www.youtube.com/embed/MwREL4Qa-no" title="MACAO est le leader marocain en confiserie chocolaterie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  }
  // Instagram posts with local images
  //   {
  //     id: 'ig1',
  //     type: 'image',
  //     src: insta1,
  //     title: 'L’idéal pour le goûter',
  //     category: 'Produits',
  //     tags: ['produit', 'instagram'],
  //     source: 'instagram',
  //     sourceUrl: 'https://www.instagram.com/macaopastor/p/C7zTmKTtPP8/',
  //     date: '2 weeks ago'
  //   },
  //   {
  //     id: 'ig2',
  //     type: 'image',
  //     src: insta2,
  //     thumbnail: insta2,
  //     title: 'Le meilleur goûter avec nos savoureuses pépites de chocolat 😋',
  //     category: 'Dans les Coulisses',
  //     tags: ['chocolat', 'fabrication', 'processus'],
  //     source: 'instagram',
  //     sourceUrl: 'https://www.instagram.com/macaopastor/p/C8FBjs3Nc8s/',
  //     date: '1 month ago'
  //   },

  //   // Facebook posts with local images
  //   {
  //     id: 'fb1',
  //     type: 'image',
  //     src: facebook1,
  //     title: 'Aux éclats du Cacao ✨ à consommer sans modération 🤭',
  //     category: 'Produits',
  //     tags: ['produit', 'lancement', 'nouveau'],
  //     source: 'facebook',
  //     sourceUrl: 'https://www.facebook.com/photo.php?fbid=789243226563618&set=pb.100064338445367.-2207520000&type=3',
  //     date: '3 weeks ago'
  //   },
  //   {
  //     id: 'fb2',
  //     type: 'image',
  //     src: facebook2,
  //     thumbnail: facebook1,
  //     title: 'Une excellente idée de célébrer le nouvel an en famille en préparant un délicieux cake riche en cacao ! ✨',
  //     category: 'Témoignages',
  //     tags: ['client', 'témoignage', 'avis'],
  //     source: 'facebook',
  //     sourceUrl: 'https://www.facebook.com/photo.php?fbid=791988859622388&set=pb.100064338445367.-2207520000&type=3',
  //     date: '2 months ago'
  //   },

  //   // Internal media with local images
  //   {
  //     id: '1',
  //     type: 'image',
  //     src: insta2,
  //     title: 'Le meilleur goûter avec nos savoureuses pépites de chocolat 😋',
  //     category: 'Produits',
  //     tags: ['produit', 'présentation', 'mis en avant'],
  //     sourceUrl: 'https://www.facebook.com/photo.php?fbid=901600768661196&set=pb.100064338445367.-2207520000&type=3',
  //     source: 'facebook'
  //   },

  //   {
  //     id: '3',
  //     type: 'image',
  //     src: facebook3,
  //     thumbnail: facebook3,
  //     title: 'Dites-nous 🤪 quel est votre dessert préféré ?',
  //     category: 'Produits',
  //     tags: ['démonstration', 'produit', 'tutoriel'],
  //     sourceUrl: 'https://www.facebook.com/photo.php?fbid=773094451511829&set=pb.100064338445367.-2207520000&type=3',
  //     source: 'facebook'
  //   },
  //   {
  //     id: '4',
  //     type: 'image',
  //     src: facebook4,
  //     title: 'Votre Family préférée ? Vanille, Noisettes ou Cacao 😋',
  //     category: 'Produits',
  //     tags: ['équipe', 'personnel', 'entreprise'],
  //     sourceUrl: 'https://www.instagram.com/p/C2wrflcNWSF/',
  //     source: 'instagram',
  //     date: '1 weeks ago'
  //   },
  //   {
  //     id: '6',
  //     type: 'image',
  //     src: insta4,
  //     title: '🎁 ماكاو كعادتها ديما كتفكر فيكم 🤗',
  //     category: 'Produits',
  //     tags: ['bureau', 'espace de travail', 'environnement'],
  //     sourceUrl: 'https://www.instagram.com/p/C5WqeKZNBhf/',
  //     source: 'instagram',
  //     date: '2 weeks ago'
  //   }
];

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

export default function Media() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<MediaType | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');
  const [selectedTag, setSelectedTag] = useState<string | 'all'>('all');
  const [selectedSource, setSelectedSource] = useState<MediaSource | 'all'>('all');
  const [filteredMedia, setFilteredMedia] = useState<MediaItem[]>(MEDIA_DATA);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState({ youtube: [], instagram: [], facebook: [] });

  // Extract unique categories and tags
  const categories = Array.from(new Set(MEDIA_DATA.map((item) => item.category)));
  const tags = Array.from(new Set(MEDIA_DATA.flatMap((item) => item.tags)));

  // Filter media based on search and filters
  useEffect(() => {
    let result = MEDIA_DATA;

    // Filter by type
    if (selectedType !== 'all') {
      result = result.filter((item) => item.type === selectedType);
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((item) => item.category === selectedCategory);
    }

    // Filter by tag
    if (selectedTag !== 'all') {
      result = result.filter((item) => item.tags.includes(selectedTag));
    }

    // Filter by source
    if (selectedSource !== 'all') {
      result = result.filter((item) => item.source === selectedSource);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          item.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    setFilteredMedia(result);
  }, [searchQuery, selectedType, selectedCategory, selectedTag, selectedSource]);

  // Open lightbox with selected media
  const openLightbox = (media: MediaItem) => {
    setSelectedMedia(media);
    setIsLightboxOpen(true);
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedType('all');
    setSelectedCategory('all');
    setSelectedTag('all');
    setSelectedSource('all');
  };

  // Function to fetch social media content (would be implemented with actual API calls)
  const fetchSocialMedia = async () => {
    setIsLoading(true);

    try {
      //   const fetchYouTubeVideos = async () => {
      //     try {
      //       const response = await axios.get(
      //         `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&maxResults=5&order=date&type=video&key=${YOUTUBE_API_KEY}`
      //       );
      //       setPosts((prev) => ({ ...prev, youtube: response.data.items }));
      //     } catch (error) {
      //       console.error('Error fetching YouTube videos:', error);
      //     }
      //   };
      // In a real implementation, these would be actual API calls to the respective platforms
      // For YouTube: fetch from https://www.youtube.com/channel/UCGoKUNUIEgPpUkV_Po_r__g
      // For Instagram: fetch from https://www.instagram.com/macaopastor/
      // For Facebook: fetch from https://www.facebook.com/MacaoPastor/

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // The data is already loaded in our MEDIA_DATA array for this demo
      // In a real implementation, we would update the state with the fetched data
    } catch (error) {
      console.error('Error fetching social media content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch social media content on component mount
  useEffect(() => {
    fetchSocialMedia();
  }, []);

  // Get source icon
  const getSourceIcon = (source: MediaSource) => {
    switch (source) {
      case 'youtube':
        return <Youtube className="h-4 w-4 mr-1" />;
      case 'instagram':
        return <Instagram className="h-4 w-4 mr-1" />;
      case 'facebook':
        return <Facebook className="h-4 w-4 mr-1" />;
      default:
        return null;
    }
  };

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
                Médiathèque
              </motion.h1>
              <motion.p variants={fadeInUp} className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                {' '}
                Explorez notre collection d'actifs médiatiques mettant en valeur notre marque, nos produits et nos
                histoires à travers nos canaux médiatiques sociaux.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <section className="container mx-auto py-12 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-4">
            {/* Section de recherche et de filtrage */}
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 my-6">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Rechercher un média..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {/* <Tabs
                  defaultValue="all"
                  value={selectedType}
                  onValueChange={(value) => setSelectedType(value as MediaType | 'all')}
                >
                  <TabsList>
                    <TabsTrigger value="all">Tous</TabsTrigger>
                    <TabsTrigger value="image">Images</TabsTrigger>
                    <TabsTrigger value="video">Vidéos</TabsTrigger>
                  </TabsList>
                </Tabs>

                <Tabs
                  defaultValue="all"
                  value={selectedSource}
                  onValueChange={(value) => setSelectedSource(value as MediaSource | 'all')}
                >
                  <TabsList>
                    <TabsTrigger value="all">Toutes les sources</TabsTrigger>
                    <TabsTrigger value="youtube" className="flex items-center">
                      <Youtube className="h-4 w-4 mr-1" /> YouTube
                    </TabsTrigger>
                    <TabsTrigger value="instagram" className="flex items-center">
                      <Instagram className="h-4 w-4 mr-1" /> Instagram
                    </TabsTrigger>
                    <TabsTrigger value="facebook" className="flex items-center">
                      <Facebook className="h-4 w-4 mr-1" /> Facebook
                    </TabsTrigger>
                      <TabsTrigger value="internal">Interne</TabsTrigger>
                  </TabsList>
                </Tabs> */}

                <select
                  className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">Toutes les catégories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                <select
                  className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                >
                  <option value="all">Tous les tags</option>
                  {tags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>

                {(searchQuery ||
                  selectedType !== 'all' ||
                  selectedCategory !== 'all' ||
                  selectedTag !== 'all' ||
                  selectedSource !== 'all') && (
                  <Button variant="outline" size="icon" onClick={resetFilters} title="Effacer les filtres">
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>

            {/* Nombre de résultats */}
            <div className="text-sm text-muted-foreground mb-4">
              Affichage de {filteredMedia.length} sur {MEDIA_DATA.length} éléments
            </div>

            {/* État de chargement */}
            {isLoading && (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            )}

            {/* Grille des médias */}
            {!isLoading && filteredMedia.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredMedia.map((media) => (
                  <div
                    key={media.id}
                    className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                    onClick={() => openLightbox(media)}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={media.type === 'video' ? media.thumbnail || media.src : media.src}
                        alt={media.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute text-black bg-white bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-background/0 p-4 transition-opacity group-hover:opacity-100 opacity-0">
                      <h3 className="font-medium text-foreground line-clamp-1">{media.title}</h3>
                      <p className="text-sm text-muted-foreground">{media.category}</p>
                      {media.date && <p className="text-xs text-muted-foreground mt-1">{media.date}</p>}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              !isLoading && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Filter className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium">Aucun média trouvé</h3>
                  <p className="text-muted-foreground">Essayez d'ajuster votre recherche ou vos filtres</p>
                  <Button variant="outline" className="mt-4" onClick={resetFilters}>
                    Réinitialiser les filtres
                  </Button>
                </div>
              )
            )}

            {/* Bouton de rafraîchissement */}
            <div className="flex justify-center mt-8">
              <Button
                variant="outline"
                onClick={fetchSocialMedia}
                disabled={isLoading}
                className="flex items-center gap-2"
              >
                {isLoading ? (
                  <span className="animate-spin h-4 w-4 border-t-2 border-b-2 border-current rounded-full mr-2"></span>
                ) : null}
                Rafraîchir le contenu des réseaux sociaux
              </Button>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background">
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10">
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </DialogClose>

            {selectedMedia && (
              <div className="grid md:grid-cols-[2fr_1fr] bg-white">
                <div className="relative bg-black flex items-center justify-center">
                  {selectedMedia.type === 'image' ? (
                    <img
                      src={selectedMedia.src || '/placeholder.svg'}
                      alt={selectedMedia.title}
                      className="max-h-[80vh] w-auto object-contain"
                    />
                  ) : selectedMedia.source === 'youtube' ? (
                    <iframe
                      src={selectedMedia.src}
                      title={selectedMedia.title}
                      className="w-full aspect-video"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="aspect-video w-full">
                      <div className="flex h-full items-center justify-center bg-muted">
                        <img
                          src={selectedMedia.thumbnail || selectedMedia.src}
                          alt={selectedMedia.title}
                          className="max-h-[80vh] w-auto object-contain"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rounded-full bg-background/80 p-4 shadow-sm">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-8 w-8"
                            >
                              <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    {selectedMedia.source !== 'internal' && (
                      <Badge variant="outline" className="flex items-center">
                        {getSourceIcon(selectedMedia.source)}
                        <span className="capitalize">{selectedMedia.source}</span>
                      </Badge>
                    )}
                    <Badge variant={selectedMedia.type === 'video' ? 'destructive' : 'default'}>
                      {selectedMedia.type}
                    </Badge>
                  </div>

                  <h2 className="text-2xl font-bold">{selectedMedia.title}</h2>
                  <p className="text-muted-foreground mt-2">{selectedMedia.category}</p>

                  {selectedMedia.date && (
                    <p className="text-sm text-muted-foreground mt-2">Posted: {selectedMedia.date}</p>
                  )}

                  {selectedMedia.views !== undefined && (
                    <p className="text-sm text-muted-foreground">Views: {selectedMedia.views.toLocaleString()}</p>
                  )}

                  <div className="mt-4">
                    <h3 className="text-sm font-medium mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedMedia.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-6 flex flex-col gap-2">
                    {selectedMedia.sourceUrl && (
                      <Button className="w-full" asChild>
                        <a
                          href={selectedMedia.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Original
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </section>
    </>
  );
}

Media.layout = (page) => <NewLayout children={page} />;
