// Centralized data dengan lazy loading support
// Import semua gambar dari assets
import bonsai1 from "../assets/images/landing/bonsai1.webp";
import bonsai2 from "../assets/images/landing/bonsai2.webp";
import bonsai3 from "../assets/images/landing/bonsai3.webp";
import bonsai4 from "../assets/images/landing/bonsai4.webp";
import gallery1 from "../assets/images/landing/gallery1.webp";
import gallery2 from "../assets/images/landing/gallery2.webp";
import recommend1 from "../assets/images/landing/recommend1.webp";
import recommend2 from "../assets/images/landing/recommend2.webp";
import heroBg from "../assets/images/landing/hero-bg.webp";
import partner1 from "../assets/images/landing/partner1.png";
import partner2 from "../assets/images/landing/partner2.png";

// Import gambar spesifik untuk setiap kategori (menggunakan gambar yang ada sebagai placeholder)
import cemaraDuri from "../assets/images/landing/bonsai1.webp";
import cemaraSargen from "../assets/images/landing/bonsai2.webp";
import cemaraItoigawa from "../assets/images/landing/bonsai3.webp";
import cemaraBlue from "../assets/images/landing/bonsai4.webp";
import cemaraGreen from "../assets/images/landing/gallery1.webp";
import cemaraBuaya from "../assets/images/landing/gallery2.webp";
import cemaraGreenMountain from "../assets/images/landing/recommend1.webp";
import cemaraKhisu from "../assets/images/landing/recommend2.webp";

import lohansungCincuan from "../assets/images/landing/bonsai1.webp";
import lohansungKapsul from "../assets/images/landing/bonsai2.webp";
import lohansungSilver from "../assets/images/landing/bonsai3.webp";
import lohansungBrush from "../assets/images/landing/bonsai4.webp";
import lohansungCompacta from "../assets/images/landing/gallery1.webp";
import lohansungBlueIce from "../assets/images/landing/gallery2.webp";

import saengSimburMicro from "../assets/images/landing/recommend1.webp";
import boxusKecil from "../assets/images/landing/recommend2.webp";
import boxusMedium from "../assets/images/landing/bonsai1.webp";
import boxusLarge from "../assets/images/landing/bonsai2.webp";

import serissa from "../assets/images/landing/bonsai3.webp";
import serissaMicro from "../assets/images/landing/bonsai4.webp";
import zaitunMicro from "../assets/images/landing/gallery1.webp";
import ladaLada from "../assets/images/landing/gallery2.webp";

import ficusRetusa from "../assets/images/landing/recommend1.webp";
import ulmusMicro from "../assets/images/landing/recommend2.webp";
import hokiante from "../assets/images/landing/bonsai1.webp";
import tamarin from "../assets/images/landing/bonsai2.webp";

import eugenia from "../assets/images/landing/bonsai3.webp";
import cendrawasih from "../assets/images/landing/bonsai4.webp";
import ligustrum from "../assets/images/landing/gallery1.webp";
import kemuning from "../assets/images/landing/gallery2.webp";

import sakuraMicro from "../assets/images/landing/recommend1.webp";
import bougenvil from "../assets/images/landing/recommend2.webp";

export const bonsaiCollections = [
  // Cemara Collection
  {
    id: 1,
    title: "Cemara Duri",
    subtitle: "Juniperus Rigida",
    price: 450,
    age: "8 Years",
    category: "cemara",
    description:
      "Cemara duri adalah spesies juniper yang sangat populer untuk bonsai dengan karakteristik daun seperti jarum yang tajam dan tahan cuaca ekstrem.",
    specs: {
      height: "15 inches",
      potSize: "8 inches",
      care: "Intermediate",
      season: "All seasons",
    },
    images: {
      thumbnail: cemaraDuri,
      gallery: [gallery1, recommend1, bonsai3],
    },
    seo: {
      slug: "cemara-duri-juniperus-rigida",
      keywords: [
        "cemara duri",
        "juniperus rigida",
        "bonsai cemara",
        "conifer bonsai",
      ],
    },
  },
  {
    id: 2,
    title: "Cemara Sargen",
    subtitle: "Sargent Juniper",
    price: 380,
    age: "6 Years",
    category: "cemara",
    description:
      "Cemara sargen memiliki pertumbuhan yang kompak dengan daun berwarna hijau kebiruan, ideal untuk bonsai gaya cascade.",
    specs: {
      height: "12 inches",
      potSize: "7 inches",
      care: "Beginner",
      season: "All seasons",
    },
    images: {
      thumbnail: cemaraSargen,
      gallery: [gallery2, recommend2, bonsai4],
    },
    seo: {
      slug: "cemara-sargen-sargent-juniper",
      keywords: [
        "cemara sargen",
        "sargent juniper",
        "cascade bonsai",
        "juniper bonsai",
      ],
    },
  },
  {
    id: 3,
    title: "Cemara Itoigawa",
    subtitle: "Premium Shimpaku",
    price: 850,
    age: "12 Years",
    category: "cemara",
    description:
      "Cemara itoigawa adalah varietas premium dari juniper dengan pertumbuhan padat dan warna hijau yang indah, sangat dihargai untuk bonsai berkualitas tinggi.",
    specs: {
      height: "14 inches",
      potSize: "9 inches",
      care: "Advanced",
      season: "All seasons",
    },
    images: {
      thumbnail: cemaraItoigawa,
      gallery: [heroBg, gallery1, recommend1],
    },
    seo: {
      slug: "cemara-itoigawa-premium-shimpaku",
      keywords: [
        "cemara itoigawa",
        "shimpaku",
        "premium juniper",
        "high quality bonsai",
      ],
    },
  },
  {
    id: 4,
    title: "Cemara Blue Chinensis",
    subtitle: "Chinese Blue Juniper",
    price: 520,
    age: "10 Years",
    category: "cemara",
    description:
      "Cemara blue chinensis memiliki warna daun yang unik dengan nuansa kebiruan, memberikan tampilan eksotis pada koleksi bonsai.",
    specs: {
      height: "13 inches",
      potSize: "8 inches",
      care: "Intermediate",
      season: "All seasons",
    },
    images: {
      thumbnail: cemaraBlue,
      gallery: [recommend1, gallery2, bonsai1],
    },
    seo: {
      slug: "cemara-blue-chinensis-chinese-juniper",
      keywords: [
        "cemara blue chinensis",
        "chinese juniper",
        "blue juniper",
        "exotic bonsai",
      ],
    },
  },
  {
    id: 5,
    title: "Cemara Green Chinensis",
    subtitle: "Chinese Green Juniper",
    price: 490,
    age: "9 Years",
    category: "cemara",
    description:
      "Cemara green chinensis adalah varietas klasik dengan warna hijau segar dan pertumbuhan yang mudah dibentuk.",
    specs: {
      height: "12 inches",
      potSize: "7 inches",
      care: "Beginner",
      season: "All seasons",
    },
    images: {
      thumbnail: cemaraGreen,
      gallery: [bonsai2, gallery1, heroBg],
    },
    seo: {
      slug: "cemara-green-chinensis-chinese-green",
      keywords: [
        "cemara green chinensis",
        "chinese green juniper",
        "classic juniper",
        "beginner bonsai",
      ],
    },
  },
  {
    id: 6,
    title: "Cemara Buaya",
    subtitle: "Crocodile Juniper",
    price: 680,
    age: "15 Years",
    category: "cemara",
    description:
      "Cemara buaya dinamakan demikian karena tekstur kulit batangnya yang menyerupai kulit buaya, memberikan karakter unik pada bonsai.",
    specs: {
      height: "16 inches",
      potSize: "10 inches",
      care: "Advanced",
      season: "All seasons",
    },
    images: {
      thumbnail: cemaraBuaya,
      gallery: [bonsai2, gallery1, partner1],
    },
    seo: {
      slug: "cemara-buaya-crocodile-juniper",
      keywords: [
        "cemara buaya",
        "crocodile juniper",
        "textured bark",
        "unique bonsai",
      ],
    },
  },
  {
    id: 7,
    title: "Cemara Green Mountain",
    subtitle: "Mountain Green Juniper",
    price: 420,
    age: "7 Years",
    category: "cemara",
    description:
      "Cemara green mountain memiliki pertumbuhan vertikal yang baik dengan warna hijau yang konsisten sepanjang tahun.",
    specs: {
      height: "14 inches",
      potSize: "8 inches",
      care: "Intermediate",
      season: "All seasons",
    },
    images: {
      thumbnail: cemaraGreenMountain,
      gallery: [bonsai3, recommend1, partner2],
    },
    seo: {
      slug: "cemara-green-mountain-vertical",
      keywords: [
        "cemara green mountain",
        "vertical juniper",
        "mountain juniper",
        "upright bonsai",
      ],
    },
  },
  {
    id: 8,
    title: "Cemara Khisu",
    subtitle: "Khisu Variety",
    price: 550,
    age: "11 Years",
    category: "cemara",
    description:
      "Cemara khisu adalah varietas langka dengan karakteristik pertumbuhan yang unik dan daya tahan yang luar biasa.",
    specs: {
      height: "13 inches",
      potSize: "8 inches",
      care: "Advanced",
      season: "All seasons",
    },
    images: {
      thumbnail: cemaraKhisu,
      gallery: [bonsai4, recommend2, heroBg],
    },
    seo: {
      slug: "cemara-khisu-rare-variety",
      keywords: [
        "cemara khisu",
        "rare juniper",
        "unique variety",
        "hardy bonsai",
      ],
    },
  },

  // Lohansung Collection
  {
    id: 9,
    title: "Lohansung Cincuan",
    subtitle: "Podocarpus Cincuan",
    price: 320,
    age: "5 Years",
    category: "lohansung",
    description:
      "Lohansung cincuan memiliki daun yang rapat dan pertumbuhan yang lambat, sangat cocok untuk bonsai mame atau shohin.",
    specs: {
      height: "8 inches",
      potSize: "6 inches",
      care: "Intermediate",
      season: "All seasons",
    },
    images: {
      thumbnail: lohansungCincuan,
      gallery: [gallery1, recommend1, bonsai3],
    },
    seo: {
      slug: "lohansung-cincuan-podocarpus",
      keywords: [
        "lohansung cincuan",
        "podocarpus",
        "mame bonsai",
        "compact growth",
      ],
    },
  },
  {
    id: 10,
    title: "Lohansung Kapsul",
    subtitle: "Taiwan Podocarpus",
    price: 380,
    age: "6 Years",
    category: "lohansung",
    description:
      "Lohansung kapsul atau Taiwan variety memiliki daun yang sedikit memanjang dengan batang yang cepat mengeras dan tumbuh cepat.",
    specs: {
      height: "10 inches",
      potSize: "7 inches",
      care: "Beginner",
      season: "All seasons",
    },
    images: {
      thumbnail: lohansungKapsul,
      gallery: [gallery2, recommend2, bonsai4],
    },
    seo: {
      slug: "lohansung-kapsul-taiwan-variety",
      keywords: [
        "lohansung kapsul",
        "taiwan podocarpus",
        "fast growing",
        "elongated leaves",
      ],
    },
  },
  {
    id: 11,
    title: "Lohansung Silver",
    subtitle: "Silver Podocarpus",
    price: 450,
    age: "8 Years",
    category: "lohansung",
    description:
      "Lohansung silver memiliki warna daun dengan nuansa keperakan yang memberikan efek visual yang menarik dan elegan.",
    specs: {
      height: "12 inches",
      potSize: "8 inches",
      care: "Intermediate",
      season: "All seasons",
    },
    images: {
      thumbnail: lohansungSilver,
      gallery: [gallery1, recommend1, heroBg],
    },
    seo: {
      slug: "lohansung-silver-elegant",
      keywords: [
        "lohansung silver",
        "silver podocarpus",
        "elegant foliage",
        "attractive color",
      ],
    },
  },
  {
    id: 12,
    title: "Lohansung Brush",
    subtitle: "Brush Leaf Variety",
    price: 290,
    age: "4 Years",
    category: "lohansung",
    description:
      "Lohansung brush memiliki daun terkecil di antara jenis lohansung lainnya, sangat cocok untuk bonsai berukuran kecil dengan detail halus.",
    specs: {
      height: "7 inches",
      potSize: "5 inches",
      care: "Advanced",
      season: "All seasons",
    },
    images: {
      thumbnail: lohansungBrush,
      gallery: [gallery2, recommend2, partner1],
    },
    seo: {
      slug: "lohansung-brush-small-leaves",
      keywords: [
        "lohansung brush",
        "small leaves",
        "detailed bonsai",
        "fine texture",
      ],
    },
  },
  {
    id: 13,
    title: "Lohansung Compacta",
    subtitle: "Compact Growth",
    price: 350,
    age: "6 Years",
    category: "lohansung",
    description:
      "Lohansung compacta memiliki pertumbuhan yang sangat padat dengan daun yang menghadap ke atas, menciptakan kanopi yang rapi.",
    specs: {
      height: "9 inches",
      potSize: "6 inches",
      care: "Intermediate",
      season: "All seasons",
    },
    images: {
      thumbnail: lohansungCompacta,
      gallery: [bonsai1, gallery1, partner2],
    },
    seo: {
      slug: "lohansung-compacta-dense-growth",
      keywords: [
        "lohansung compacta",
        "dense foliage",
        "compact growth",
        "neat canopy",
      ],
    },
  },
  {
    id: 14,
    title: "Lohansung Blue Ice",
    subtitle: "Blue Ice Variety",
    price: 480,
    age: "9 Years",
    category: "lohansung",
    description:
      "Lohansung blue ice memiliki daun yang lebih rapat dengan warna daun yang menarik kebiruan dan batang yang fleksibel.",
    specs: {
      height: "11 inches",
      potSize: "7 inches",
      care: "Advanced",
      season: "All seasons",
    },
    images: {
      thumbnail: lohansungBlueIce,
      gallery: [bonsai2, gallery2, heroBg],
    },
    seo: {
      slug: "lohansung-blue-ice-flexible",
      keywords: [
        "lohansung blue ice",
        "bluish foliage",
        "flexible trunk",
        "attractive color",
      ],
    },
  },

  // Other Varieties
  {
    id: 15,
    title: "Saeng Simbur Micro",
    subtitle: "Desmodium Species",
    price: 180,
    age: "3 Years",
    category: "tropical",
    description:
      "Saeng simbur micro (Desmodium) adalah tanaman tropis dengan daun kecil yang cocok untuk bonsai berukuran mini dengan gaya alami.",
    specs: {
      height: "6 inches",
      potSize: "4 inches",
      care: "Beginner",
      season: "Warm seasons",
    },
    images: {
      thumbnail: saengSimburMicro,
      gallery: [gallery1, recommend1, bonsai3],
    },
    seo: {
      slug: "saeng-simbur-micro-desmodium",
      keywords: ["saeng simbur", "desmodium", "micro bonsai", "tropical plant"],
    },
  },
  {
    id: 16,
    title: "Boxus Kecil",
    subtitle: "Small Boxwood",
    price: 150,
    age: "2 Years",
    category: "boxwood",
    description:
      "Boxus kecil adalah pilihan ideal untuk pemula dengan perawatan yang mudah dan kemampuan tahan terhadap pemangkasan.",
    specs: {
      height: "5 inches",
      potSize: "4 inches",
      care: "Beginner",
      season: "All seasons",
    },
    images: {
      thumbnail: boxusKecil,
      gallery: [gallery2, recommend2, bonsai4],
    },
    seo: {
      slug: "boxus-kecil-small-boxwood",
      keywords: [
        "boxus kecil",
        "small boxwood",
        "beginner friendly",
        "easy care",
      ],
    },
  },
  {
    id: 17,
    title: "Boxus Medium",
    subtitle: "Medium Boxwood",
    price: 220,
    age: "4 Years",
    category: "boxwood",
    description:
      "Boxus medium memberikan keseimbangan yang baik antara ukuran dan detail, cocok untuk berbagai gaya bonsai.",
    specs: {
      height: "8 inches",
      potSize: "6 inches",
      care: "Beginner",
      season: "All seasons",
    },
    images: {
      thumbnail: boxusMedium,
      gallery: [gallery1, recommend1, heroBg],
    },
    seo: {
      slug: "boxus-medium-balanced-size",
      keywords: [
        "boxus medium",
        "medium boxwood",
        "balanced size",
        "versatile",
      ],
    },
  },
  {
    id: 18,
    title: "Boxus Large",
    subtitle: "Large Boxwood",
    price: 320,
    age: "7 Years",
    category: "boxwood",
    description:
      "Boxus large adalah pilihan untuk bonsai berukuran lebih besar dengan struktur cabang yang sudah terbentuk dengan baik.",
    specs: {
      height: "12 inches",
      potSize: "8 inches",
      care: "Intermediate",
      season: "All seasons",
    },
    images: {
      thumbnail: boxusLarge,
      gallery: [gallery2, recommend2, partner1],
    },
    seo: {
      slug: "boxus-large-mature-structure",
      keywords: [
        "boxus large",
        "large boxwood",
        "mature structure",
        "established branches",
      ],
    },
  },
  {
    id: 19,
    title: "Serissa",
    subtitle: "Snow Rose",
    price: 280,
    age: "5 Years",
    category: "flowering",
    description:
      "Serissa atau snow rose adalah bonsai berbunga dengan bunga putih kecil yang indah dan daun hijau mengkilap sepanjang tahun.",
    specs: {
      height: "10 inches",
      potSize: "7 inches",
      care: "Advanced",
      season: "All seasons",
    },
    images: {
      thumbnail: serissa,
      gallery: [bonsai1, gallery1, partner2],
    },
    seo: {
      slug: "serissa-snow-rose-flowering",
      keywords: ["serissa", "snow rose", "flowering bonsai", "white flowers"],
    },
  },
  {
    id: 20,
    title: "Serissa Micro",
    subtitle: "Miniature Snow Rose",
    price: 200,
    age: "3 Years",
    category: "flowering",
    description:
      "Serissa micro adalah versi miniatur dari serissa dengan bunga dan daun yang lebih kecil, cocok untuk bonsai mame.",
    specs: {
      height: "6 inches",
      potSize: "4 inches",
      care: "Advanced",
      season: "All seasons",
    },
    images: {
      thumbnail: serissaMicro,
      gallery: [bonsai2, gallery2, heroBg],
    },
    seo: {
      slug: "serissa-micro-miniature",
      keywords: ["serissa micro", "miniature", "mame bonsai", "small flowers"],
    },
  },
  {
    id: 21,
    title: "Zaitun Micro",
    subtitle: "Micro Olive",
    price: 380,
    age: "6 Years",
    category: "mediterranean",
    description:
      "Zaitun micro adalah bonsai dengan karakteristik Mediterania, memiliki daun kecil keperakan dan batang yang berkarakter.",
    specs: {
      height: "8 inches",
      potSize: "6 inches",
      care: "Intermediate",
      season: "All seasons",
    },
    images: {
      thumbnail: zaitunMicro,
      gallery: [bonsai3, recommend1, partner1],
    },
    seo: {
      slug: "zaitun-micro-olive-mediterranean",
      keywords: [
        "zaitun micro",
        "micro olive",
        "mediterranean",
        "silver leaves",
      ],
    },
  },
  {
    id: 22,
    title: "Lada-Lada",
    subtitle: "Pepper Tree",
    price: 250,
    age: "4 Years",
    category: "tropical",
    description:
      "Lada-lada adalah bonsai tropis dengan daun kecil dan pertumbuhan yang cepat, memberikan tampilan rimbun yang alami.",
    specs: {
      height: "9 inches",
      potSize: "6 inches",
      care: "Beginner",
      season: "Warm seasons",
    },
    images: {
      thumbnail: ladaLada,
      gallery: [bonsai4, recommend2, partner2],
    },
    seo: {
      slug: "lada-lada-pepper-tree",
      keywords: ["lada-lada", "pepper tree", "tropical bonsai", "fast growing"],
    },
  },
  {
    id: 23,
    title: "Ficus Retusa",
    subtitle: "Banyan Fig",
    price: 350,
    age: "6 Years",
    category: "ficus",
    description:
      "Ficus retusa adalah salah satu bonsai paling populer dengan akar udara yang indah dan toleransi tinggi terhadap berbagai kondisi.",
    specs: {
      height: "11 inches",
      potSize: "7 inches",
      care: "Beginner",
      season: "All seasons",
    },
    images: {
      thumbnail: ficusRetusa,
      gallery: [gallery1, recommend1, heroBg],
    },
    seo: {
      slug: "ficus-retusa-banyan-fig",
      keywords: [
        "ficus retusa",
        "banyan fig",
        "aerial roots",
        "beginner bonsai",
      ],
    },
  },
  {
    id: 24,
    title: "Ulmus Micro",
    subtitle: "Chinese Elm",
    price: 320,
    age: "5 Years",
    category: "deciduous",
    description:
      "Ulmus micro atau Chinese elm adalah bonsai gugur dengan daun kecil dan kemampuan beradaptasi yang baik terhadap pemangkasan.",
    specs: {
      height: "10 inches",
      potSize: "7 inches",
      care: "Intermediate",
      season: "All seasons",
    },
    images: {
      thumbnail: ulmusMicro,
      gallery: [gallery2, recommend2, bonsai1],
    },
    seo: {
      slug: "ulmus-micro-chinese-elm",
      keywords: ["ulmus micro", "chinese elm", "deciduous bonsai", "adaptable"],
    },
  },
  {
    id: 25,
    title: "Hokiante (Carmona)",
    subtitle: "Fukien Tea",
    price: 290,
    age: "5 Years",
    category: "flowering",
    description:
      "Hokiante atau Carmona (Fukien Tea) adalah bonsai tropis dengan bunga putih kecil dan buah merah yang menarik.",
    specs: {
      height: "9 inches",
      potSize: "6 inches",
      care: "Intermediate",
      season: "Warm seasons",
    },
    images: {
      thumbnail: hokiante,
      gallery: [gallery1, recommend1, bonsai2],
    },
    seo: {
      slug: "hokiante-carmona-fukien-tea",
      keywords: ["hokiante", "carmona", "fukien tea", "flowering bonsai"],
    },
  },
  {
    id: 26,
    title: "Tamarin",
    subtitle: "Tamarind Tree",
    price: 420,
    age: "8 Years",
    category: "tropical",
    description:
      "Tamarin adalah bonsai tropis dengan daun majemuk yang halus dan pertumbuhan yang unik, memberikan tampilan eksotis.",
    specs: {
      height: "12 inches",
      potSize: "8 inches",
      care: "Advanced",
      season: "Warm seasons",
    },
    images: {
      thumbnail: tamarin,
      gallery: [gallery2, recommend2, bonsai3],
    },
    seo: {
      slug: "tamarin-tamarind-exotic",
      keywords: ["tamarin", "tamarind", "compound leaves", "exotic bonsai"],
    },
  },
  {
    id: 27,
    title: "Eugenia",
    subtitle: "Brush Cherry",
    price: 340,
    age: "6 Years",
    category: "flowering",
    description:
      "Eugenia atau brush cherry memiliki daun mengkilap dan bunga putih kecil yang harum, sangat cocok untuk bonsai indoor.",
    specs: {
      height: "10 inches",
      potSize: "7 inches",
      care: "Intermediate",
      season: "All seasons",
    },
    images: {
      thumbnail: eugenia,
      gallery: [bonsai1, gallery1, bonsai4],
    },
    seo: {
      slug: "eugenia-brush-cherry-fragrant",
      keywords: [
        "eugenia",
        "brush cherry",
        "fragrant flowers",
        "glossy leaves",
      ],
    },
  },
  {
    id: 28,
    title: "Cendrawasih (Phyllantus)",
    subtitle: "Bird of Paradise",
    price: 380,
    age: "7 Years",
    category: "tropical",
    description:
      "Cendrawasih (Phyllantus) adalah bonsai tropis dengan daun kecil yang rapat dan pertumbuhan yang mudah dibentuk.",
    specs: {
      height: "11 inches",
      potSize: "7 inches",
      care: "Intermediate",
      season: "Warm seasons",
    },
    images: {
      thumbnail: cendrawasih,
      gallery: [bonsai2, gallery2, heroBg],
    },
    seo: {
      slug: "cendrawasih-phyllantus-tropical",
      keywords: ["cendrawasih", "phyllantus", "dense foliage", "shapeable"],
    },
  },
  {
    id: 29,
    title: "Ligustrum",
    subtitle: "Privet",
    price: 280,
    age: "5 Years",
    category: "classic",
    description:
      "Ligustrum atau privet adalah bonsai klasik dengan daun oval mengkilap dan toleransi tinggi terhadap pemangkasan.",
    specs: {
      height: "9 inches",
      potSize: "6 inches",
      care: "Beginner",
      season: "All seasons",
    },
    images: {
      thumbnail: ligustrum,
      gallery: [bonsai3, recommend1, partner1],
    },
    seo: {
      slug: "ligustrum-privet-classic",
      keywords: ["ligustrum", "privet", "oval leaves", "pruning tolerant"],
    },
  },
  {
    id: 30,
    title: "Kemuning (Murayya)",
    subtitle: "Orange Jasmine",
    price: 320,
    age: "6 Years",
    category: "flowering",
    description:
      "Kemuning (Murayya) atau orange jasmine memiliki bunga putih yang harum dan daun kecil mengkilap yang indah.",
    specs: {
      height: "10 inches",
      potSize: "7 inches",
      care: "Intermediate",
      season: "All seasons",
    },
    images: {
      thumbnail: kemuning,
      gallery: [bonsai4, recommend2, partner2],
    },
    seo: {
      slug: "kemuning-murayya-orange-jasmine",
      keywords: ["kemuning", "murayya", "orange jasmine", "fragrant bonsai"],
    },
  },
  {
    id: 31,
    title: "Sakura Micro (Malphigia)",
    subtitle: "Barbados Cherry",
    price: 450,
    age: "7 Years",
    category: "flowering",
    description:
      "Sakura micro (Malphigia) atau Barbados cherry memiliki bunga merah muda yang indah menyerupai sakura dengan ukuran mini.",
    specs: {
      height: "8 inches",
      potSize: "6 inches",
      care: "Advanced",
      season: "All seasons",
    },
    images: {
      thumbnail: sakuraMicro,
      gallery: [gallery1, recommend1, heroBg],
    },
    seo: {
      slug: "sakura-micro-malphigia-barbados",
      keywords: [
        "sakura micro",
        "malphigia",
        "barbados cherry",
        "pink flowers",
      ],
    },
  },
  {
    id: 32,
    title: "Bougenvil",
    subtitle: "Bougainvillea",
    price: 380,
    age: "6 Years",
    category: "flowering",
    description:
      "Bougenvil adalah bonsai berbunga spektakuler dengan bracts berwarna-warni yang memberikan tampilan tropis yang memukau.",
    specs: {
      height: "11 inches",
      potSize: "7 inches",
      care: "Advanced",
      season: "Warm seasons",
    },
    images: {
      thumbnail: bougenvil,
      gallery: [gallery2, recommend2, bonsai1],
    },
    seo: {
      slug: "bougenvil-bougainvillea-colorful",
      keywords: [
        "bougenvil",
        "bougainvillea",
        "colorful bracts",
        "spectacular blooms",
      ],
    },
  },
];

// Utility functions
export const getBonsaiById = (id) =>
  bonsaiCollections.find((item) => item.id === id);

export const getBonsaiByCategory = (category) =>
  bonsaiCollections.filter((item) => item.category === category);

export const getBonsaiByPrice = (min, max) =>
  bonsaiCollections.filter((item) => item.price >= min && item.price <= max);

// Get all available categories
export const getCategories = () => {
  const categories = [
    ...new Set(bonsaiCollections.map((item) => item.category)),
  ];
  return categories;
};

// Get bonsai by multiple categories
export const getBonsaiByCategories = (categories) =>
  bonsaiCollections.filter((item) => categories.includes(item.category));

// Search functionality
export const searchBonsai = (query) => {
  const searchTerm = query.toLowerCase();
  return bonsaiCollections.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm) ||
      item.subtitle.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm) ||
      item.seo.keywords.some((keyword) =>
        keyword.toLowerCase().includes(searchTerm)
      )
  );
};

// SEO-friendly URLs
export const generateBonsaiUrl = (bonsai) => `/collection/${bonsai.seo.slug}`;

// Category descriptions for SEO
export const categoryDescriptions = {
  cemara:
    "Koleksi bonsai cemara (juniper) dengan berbagai varietas dari seluruh dunia",
  lohansung:
    "Bonsai lohansung (podocarpus) dengan pertumbuhan lambat dan karakter unik",
  tropical: "Bonsai tropis yang cocok untuk iklim hangat dan lembab",
  boxwood: "Bonsai boxus dalam berbagai ukuran, ideal untuk pemula",
  flowering: "Bonsai berbunga yang memberikan keindahan warna sepanjang tahun",
  mediterranean:
    "Bonsai dengan karakteristik Mediterania yang tahan cuaca kering",
  ficus: "Keluarga bonsai ficus yang mudah perawatan dan adaptif",
  deciduous: "Bonsai gugur yang memberikan perubahan musiman yang menarik",
  classic: "Bonsai klasik dengan perawatan mudah dan bentuk tradisional",
};
