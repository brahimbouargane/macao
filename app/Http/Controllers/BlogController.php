<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;


class BlogController extends Controller
{

    private $blogPosts = [
        1 => [
            'id' => 1,
            'title' => "L'histoire gourmande de Pastor Macao : une saga 100% marocaine",
            'content' => "Depuis sa création en 1954, Pastor Macao s'est imposée comme une référence incontournable dans
                            le domaine de la confiserie et de la chocolaterie au Maroc. Fondée à Casablanca, l'entreprise a su
                            évoluer au fil des décennies tout en restant fidèle à ses valeurs fondamentales : qualité, innovation et
                            satisfaction du client.
                            À ses débuts, Pastor Macao se concentrait principalement sur la production de bonbons traditionnels.
                            Cependant, avec une vision tournée vers l'avenir, l'entreprise a rapidement diversifié sa gamme de
                            produits pour inclure des chocolats fins, des gaufrettes croustillantes et des produits pâtissiers de
                            haute qualité. Cette diversification a permis à Pastor Macao de répondre aux goûts variés des
                            consommateurs marocains et de s'adapter aux tendances du marché.
                            L'innovation a toujours été au cœur de la stratégie de Pastor Macao. En adoptant des technologies
                            de production modernes et en investissant dans la recherche et le développement, l'entreprise a pu
                            offrir des produits alliant tradition et modernité. Cet engagement envers l'excellence a valu à Pastor
                            Macao une reconnaissance non seulement au Maroc, mais également sur la scène internationale.
                            Aujourd'hui, Pastor Macao est plus qu'une simple marque de confiserie ; elle représente un héritage
                            marocain, une histoire de passion et de dévouement à l'art de la gourmandise. En continuant à
                            innover tout en respectant ses racines, Pastor Macao demeure une source de fierté pour le Maroc et
                            un délice pour les papilles des gourmands.",
            'category' => 'actualites',
            'image' => '/images/blog/histoire-pastor-macao.jpg',
            'date' => '2024-01-15',
        ],
        2 => [
            'id' => 2,
            'title' => "Une gamme pour tous les goûts : à la découverte des produits Pastor Macao",
            'content' => "Pastor Macao, leader marocain en confiserie et chocolaterie, propose une variété impressionnante de
                            produits pour satisfaire toutes les envies sucrées. Cette diversité témoigne de l'engagement de
                            l'entreprise à offrir des douceurs de qualité adaptées aux goûts de chacun.
                            Confiseries : Les amateurs de bonbons seront ravis par l'assortiment proposé par Pastor Macao.
                            Des sucettes aux caramels en passant par les nougats et les dragées, chaque friandise est élaborée
                            avec soin pour offrir une expérience gustative unique. Aujourd'hui le Maroc
                            Chocolats : Les passionnés de chocolat ne sont pas en reste. Pastor Macao offre une gamme variée
                            de chocolats fins, incluant des tablettes, des assortiments et des pâtes à tartiner. Chaque produit est
                            conçu pour révéler la richesse et la profondeur des arômes du cacao.
                            Gaufrettes : Pour une pause gourmande croustillante, les gaufrettes Pastor Macao sont idéales.
                            Disponibles en versions natures ou enrobées de chocolat, elles allient légèreté et saveur pour le
                            plaisir des petits et des grands.
                            Produits pâtissiers : Les professionnels et les amateurs de pâtisserie peuvent compter sur Pastor
                            Macao pour des ingrédients de qualité. L'entreprise propose des chocolats de couverture, des fruits
                            confits, des fourrages et décorations, ainsi que de la poudre de cacao sucrée, parfaits pour sublimer
                            toutes les créations sucrées. Pastor Macao
                            Cette large gamme de produits reflète la volonté de Pastor Macao d'accompagner chaque moment de
                            gourmandise, qu'il soit quotidien ou exceptionnel, en offrant des douceurs adaptées à toutes les
                            occasions.",
            'category' => 'actualites',
            'image' => '/images/blog/gamme-produits-macao.jpg',
            'date' => '2024-01-25',
        ],
        3 => [
            'id' => 3,
            'title' => "Qualité, innovation et savoir-faire : les secrets de fabrication de Pastor Macao",
            'content' => "Depuis plus de six décennies, Pastor Macao s'est distinguée par son engagement indéfectible envers
                            la qualité, l'innovation et le savoir-faire artisanal. Ces piliers fondamentaux ont permis à l'entreprise de
                            se hisser au sommet de l'industrie de la confiserie et de la chocolaterie au Maroc.
                            Qualité : Chaque produit Pastor Macao est le résultat d'une sélection rigoureuse des ingrédients.
                            L'entreprise veille à utiliser des matières premières de premier choix, garantissant ainsi des saveurs
                            authentiques et une expérience gustative inégalée. De plus, des contrôles qualité stricts sont
                            effectués à chaque étape de la production pour assurer la constance et l'excellence des produits finis.
                            Innovation : Consciente des évolutions du marché et des attentes des consommateurs, Pastor
                            Macao investit continuellement dans la recherche et le développement. L'adoption de technologies de
                            pointe et la création de nouvelles recettes permettent à l'entreprise de proposer régulièrement des
                            produits novateurs, alliant tradition et modernité.
                            Savoir-faire : Fort d'une riche histoire débutée en 1954, Pastor Macao a su préserver et transmettre
                            un savoir-faire artisanal précieux. Les maîtres chocolatiers et confiseurs de l'entreprise allient
                            techniques traditionnelles et approches contemporaines pour créer des douceurs qui ravissent les
                            palais les plus exigeants.
                            Cet équilibre harmonieux entre qualité, innovation et savoir-faire confère à Pastor Macao une place
                            de choix dans le cœur des gourmands et assure à l'entreprise une réputation d'excellence, tant au
                            niveau national qu'international.",
            'category' => 'actualites',
            'image' => '/images/blog/qualite-innovation-macao.jpg',
            'date' => '2024-02-10',
        ],
        4 => [
            'id' => 4,
            'title' => "Pastor Macao à GULFOOD 2024 : le savoir-faire marocain à l'international",
            'content' => "En février 2024, Pastor Macao a brillamment représenté le Maroc lors du prestigieux salon
                            GULFOOD, tenu au Dubai World Trade Centre. Cet événement, reconnu comme l'un des plus grands
                            rendez-vous mondiaux de l'industrie alimentaire, a offert à l'entreprise une plateforme idéale pour
                            démontrer son expertise et élargir son rayonnement international.
                            Installée au Sheikh Makhtoum Hall, Stand M-G5, Pastor Macao a présenté sa vaste gamme de
                            produits, mettant en avant la richesse et la diversité de la confiserie et de la chocolaterie marocaines.
                            Les visiteurs ont eu l'occasion de découvrir et de déguster des spécialités alliant tradition et
                            innovation, reflétant le savoir-faire unique que l’entreprise cultive depuis 1954.
                            La participation à GULFOOD 2024 n'était pas uniquement une vitrine commerciale : c'était aussi une
                            opportunité de rencontres et d’échanges avec des acteurs majeurs du secteur agroalimentaire. Pastor
                            Macao a ainsi pu initier de nouveaux partenariats internationaux, renforcer sa présence dans la
                            région MENA et prendre le pouls des dernières tendances de consommation.
                            Ce type d’événement s’inscrit pleinement dans la stratégie de développement à l’international de
                            Pastor Macao, qui entend bien porter les couleurs du &quot;Made in Morocco&quot; au-delà des frontières. En
                            affirmant son identité marocaine à travers des produits de qualité, tout en adoptant les standards
                            mondiaux en matière d’emballage, d’innovation et de sécurité alimentaire, la marque confirme sa
                            capacité à rivaliser avec les plus grands.
                            L’expérience GULFOOD 2024 est donc une étape marquante dans l’histoire de Pastor Macao,
                            démontrant que l’excellence artisanale marocaine peut séduire les palais du monde entier. Un pari
                            réussi, et un nouvel élan vers de futures conquêtes internationales.",
            'category' => 'actualites',
            'image' => '/images/blog/gulfood-2024-macao.jpg',
            'date' => '2024-02-28',
        ],
        5 => [
            'id' => 5,
            'title' => "Le chocolat au Maroc : un marché en évolution",
            'content' => "Le marché du chocolat au Maroc connaît une véritable transformation. Autrefois perçu comme un
                            produit réservé aux grandes occasions ou à une certaine élite, il est désormais en phase de
                            démocratisation. Grâce à l'évolution des modes de consommation, à la montée de la classe moyenne
                            et à la diversification de l'offre, le chocolat s’invite de plus en plus souvent dans le quotidien des
                            Marocains.
                            Aujourd’hui, même si la consommation par habitant reste bien en dessous de celle observée en
                            Europe, les courbes progressent régulièrement. Les consommateurs marocains s’ouvrent à de
                            nouvelles expériences gustatives et s’intéressent davantage à la qualité, aux ingrédients, et même à
                            l’origine du cacao.
                            Dans cette dynamique, Pastor Macao joue un rôle fondamental. Forte de son enracinement local, la
                            marque a su anticiper les besoins du marché tout en respectant les préférences culturelles
                            marocaines. En proposant une gamme variée de tablettes, chocolats à pâtisserie, pâtes à tartiner et
                            assortiments, Pastor Macao permet à chacun de trouver le produit qui lui correspond, que ce soit pour
                            une dégustation personnelle, une recette gourmande ou un moment de partage en famille.
                            L’innovation est également au cœur de cette stratégie. Pastor Macao investit dans la recherche et le
                            développement pour adapter constamment ses produits aux nouvelles tendances, sans perdre son
                            âme artisanale. Par exemple, la marque réfléchit à intégrer davantage de produits à base de chocolat
                            noir, de recettes allégées en sucre, ou encore des formats pratiques pour le snacking.
                            Mais au-delà de la consommation individuelle, Pastor Macao soutient activement les professionnels
                            de la pâtisserie en leur fournissant des produits techniques de haute qualité : chocolats de
                            couverture, fourrages, décors… En les accompagnant, la marque contribue à faire émerger une
                            véritable culture du chocolat au Maroc.
                            Enfin, le chocolat représente aussi une opportunité d’exportation. Pastor Macao ambitionne de faire
                            rayonner son savoir-faire au-delà des frontières, en portant les couleurs du “chocolat marocain” sur
                            les marchés internationaux.
                            Ainsi, entre tradition, accessibilité, innovation et ambition, le chocolat au Maroc est en pleine évolution
                            — et Pastor Macao en est l’un des moteurs les plus actifs.",
            'category' => 'actualites',
            'image' => '/images/blog/chocolat-maroc-evolution.jpg',
            'date' => '2024-03-15',
        ],
        6 => [
            'id' => 6,
            'title' => "L'engagement de Pastor Macao pour la pâtisserie marocaine",
            'content' => "Depuis ses débuts, Pastor Macao entretient un lien fort avec l’univers de la pâtisserie
                            marocaine. Plus qu’un simple fournisseur de produits sucrés, la marque est un
                            partenaire actif du développement du secteur, en apportant son savoir-faire et son
                            soutien aux professionnels comme aux passionnés.
                            L’une des illustrations les plus marquantes de cet engagement remonte à 2006, avec la
                            participation de Pastor Macao au Concours du Meilleur Pâtissier du Maroc. Ce type
                            d’initiative traduit l’implication de la marque dans la valorisation des talents marocains
                            et dans la reconnaissance de la pâtisserie comme véritable art culinaire.
                            L’entreprise accompagne aussi les pâtissiers grâce à une gamme complète de produits
                            techniques : chocolats de couverture, fourrages, décors pâtissiers, poudre de cacao
                            sucrée, fruits confits, etc. Conçus pour répondre aux exigences des professionnels, ces
                            produits permettent de réaliser des créations raffinées, alliant esthétisme et goût.
                            Au-delà des produits, Pastor Macao se distingue par son approche pédagogique.
                            L’entreprise organise régulièrement des ateliers, démonstrations et sessions de
                            formation, animés par des chefs pâtissiers. Ces rencontres sont l’occasion d’échanger,
                            de partager des techniques et d’encourager la créativité dans les recettes marocaines.
                            En soutenant les professionnels tout en démocratisant l’accès à des ingrédients de
                            qualité, Pastor Macao contribue activement à faire rayonner la pâtisserie marocaine,
                            tant sur le plan national qu’international. Son implication traduit une vision claire : celle
                            de faire du Maroc un acteur reconnu dans le domaine de la pâtisserie et du chocolat.",
            'category' => 'actualites',
            'image' => '/images/blog/patisserie-marocaine-macao.jpg',
            'date' => '2024-03-25',
        ],
        7 => [
            'id' => 7,
            'title' => "Une marque connectée : Pastor Macao et sa stratégie digitale",
            'content' => "À l’ère du numérique, Pastor Macao a su moderniser sa communication pour rester
                            proche de sa communauté. Présente activement sur les réseaux sociaux, la marque
                            déploie une stratégie digitale à la fois créative, engageante et en phase avec les
                            attentes de ses consommateurs.
                            Sur Instagram et Facebook, Pastor Macao partage un univers gourmand, coloré et
                            convivial. Les contenus publiés vont bien au-delà des simples visuels produits : recettes
                            originales, coulisses de fabrication, moments de dégustation, jeux-concours,
                            collaborations avec des influenceurs... La marque crée un lien authentique avec ses
                            fans.
                            Ce positionnement digital permet à Pastor Macao de toucher une audience jeune et
                            connectée, mais aussi de valoriser son image moderne et accessible. Grâce aux stories,
                            aux lives et aux formats interactifs, l’entreprise instaure un dialogue continu avec sa
                            communauté et renforce sa proximité avec les familles marocaines.
                            La stratégie digitale ne se limite pas aux réseaux sociaux. Le site officiel de Pastor
                            Macao constitue une vitrine complète de l’univers de la marque, avec ses gammes, ses
                            engagements et ses actualités. Une approche globale, qui intègre storytelling,
                            référencement SEO et identité visuelle soignée.
                            En adoptant les codes de la communication digitale tout en conservant son

                            authenticité, Pastor Macao réussit le pari d’allier tradition et modernité. Une marque
                            connectée, à l’écoute, et toujours gourmande.",
            'category' => 'actualites',
            'image' => '/images/blog/strategie-digitale-macao.jpg',
            'date' => '2024-04-05',
        ],
        8 => [
            'id' => 8,
            'title' => "Pastor Macao et les enfants : plaisir, gourmandise et souvenirs d'enfance",
            'content' => "Depuis plusieurs générations, Pastor Macao accompagne les enfants marocains dans
                            leurs moments de plaisir sucré. Qui ne se souvient pas des fameuses sucettes colorées,
                            des caramels fondants ou des gaufrettes croustillantes glissées dans les cartables ?
                            Pour les plus petits, les produits Pastor Macao sont bien plus que des friandises : ce
                            sont des souvenirs d’enfance, des moments de partage, des instants de joie simples. La
                            marque a toujours veillé à proposer des produits adaptés aux enfants, avec des formats
                            pratiques, des goûts variés et des visuels attrayants.
                            Les emballages colorés, les mascottes ludiques et les formes amusantes contribuent à
                            créer un univers joyeux, dans lequel les enfants se reconnaissent. Pastor Macao mise
                            également sur la qualité et la sécurité, en respectant des normes strictes de
                            fabrication.
                            Au-delà du produit, la marque s’intègre dans la vie quotidienne des familles
                            marocaines. Elle est présente dans les goûters, les anniversaires, les fêtes scolaires,
                            mais aussi dans les petits moments de récompense ou de réconfort. Pastor Macao est
                            ainsi devenue une figure affective du quotidien.
                            En valorisant ces instants simples et sucrés, la marque renforce son attachement aux
                            valeurs familiales et au bonheur partagé. Pastor Macao, c’est plus qu’un chocolat ou un
                            bonbon : c’est une madeleine de Proust à la marocaine, transmise de génération en
                            génération.",
            'category' => 'actualites',
            'image' => '/images/blog/enfants-macao.jpg',
            'date' => '2024-04-15',
        ],
    ];

    public function actualites()
    {
        // Show confiserie and chocolate products
        return inertia('blog/actualites-macao');
    }
    public function recettes()
    {
        // Show confiserie and chocolate products
        return inertia('blog/recettes-produits-macao');
    }

    public function media()
    {
        // Show confiserie and chocolate products
        return inertia('media');
    }

    public function displayBlog()
    {
        // Show all blog posts
        return inertia('blog/blog-post', [
            'posts' => array_values($this->blogPosts)
        ]);
    }

    public function showBlogPost($id)
    {
        // Check if the blog post exists
        if (!isset($this->blogPosts[$id])) {
            abort(404);
        }

        // Return the blog post details
        return inertia('blog/blog-show', [
            'post' => $this->blogPosts[$id],
            'relatedPosts' => $this->getRelatedPosts($id, 3)
        ]);
    }

    private function getRelatedPosts($currentId, $count = 3)
    {
        // Get all posts except the current one
        $otherPosts = array_filter($this->blogPosts, function($post) use ($currentId) {
            return $post['id'] != $currentId;
        });

        // Shuffle to get random related posts
        shuffle($otherPosts);

        // Return only the requested number of posts
        return array_slice($otherPosts, 0, $count);
    }
}
