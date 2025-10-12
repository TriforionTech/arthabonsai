// Centralized data dengan lazy loading support
export const bonsaiCollections = [
  {
    id: 1,
    title: "Japanese Maple",
    subtitle: "Elegant & Serene",
    price: 299,
    age: "15 Years",
    category: "classic",
    description:
      "A stunning Japanese Maple bonsai featuring delicate leaves and graceful branching patterns.",
    specs: {
      height: "12 inches",
      potSize: "8 inches",
      care: "Intermediate",
      season: "All seasons",
    },
    images: {
      thumbnail: "/src/assets/images/landing/bonsai1.webp",
      gallery: [
        "/src/assets/images/gallery/maple-1.webp",
        "/src/assets/images/gallery/maple-2.webp",
      ],
    },
    seo: {
      slug: "japanese-maple-bonsai",
      keywords: ["japanese maple", "bonsai", "indoor plant", "zen garden"],
    },
  },
  {
    id: 2,
    title: "Pine Bonsai",
    subtitle: "Ancient Wisdom",
    price: 459,
    age: "25 Years",
    category: "premium",
    description:
      "An ancient Pine bonsai embodying decades of careful cultivation and traditional techniques.",
    specs: {
      height: "16 inches",
      potSize: "10 inches",
      care: "Advanced",
      season: "All seasons",
    },
    images: {
      thumbnail: "/src/assets/images/landing/bonsai2.webp",
      gallery: [
        "/src/assets/images/gallery/pine-1.webp",
        "/src/assets/images/gallery/pine-2.webp",
      ],
    },
    seo: {
      slug: "ancient-pine-bonsai",
      keywords: ["pine bonsai", "ancient tree", "premium bonsai", "collector"],
    },
  },
  {
    id: 3,
    title: "Pine Bonsai",
    subtitle: "Ancient Wisdom",
    price: 459,
    age: "25 Years",
    category: "premium",
    description:
      "An ancient Pine bonsai embodying decades of careful cultivation and traditional techniques.",
    specs: {
      height: "16 inches",
      potSize: "10 inches",
      care: "Advanced",
      season: "All seasons",
    },
    images: {
      thumbnail: "/src/assets/images/landing/bonsai2.webp",
      gallery: [
        "/src/assets/images/gallery/pine-1.webp",
        "/src/assets/images/gallery/pine-2.webp",
      ],
    },
    seo: {
      slug: "ancient-pine-bonsai",
      keywords: ["pine bonsai", "ancient tree", "premium bonsai", "collector"],
    },
  },
  {
    id: 4,
    title: "Pine Bonsai",
    subtitle: "Ancient Wisdom",
    price: 459,
    age: "25 Years",
    category: "premium",
    description:
      "An ancient Pine bonsai embodying decades of careful cultivation and traditional techniques.",
    specs: {
      height: "16 inches",
      potSize: "10 inches",
      care: "Advanced",
      season: "All seasons",
    },
    images: {
      thumbnail: "/src/assets/images/landing/bonsai2.webp",
      gallery: [
        "/src/assets/images/gallery/pine-1.webp",
        "/src/assets/images/gallery/pine-2.webp",
      ],
    },
    seo: {
      slug: "ancient-pine-bonsai",
      keywords: ["pine bonsai", "ancient tree", "premium bonsai", "collector"],
    },
  },
  {
    id: 5,
    title: "Pine Bonsai",
    subtitle: "Ancient Wisdom",
    price: 459,
    age: "25 Years",
    category: "premium",
    description:
      "An ancient Pine bonsai embodying decades of careful cultivation and traditional techniques.",
    specs: {
      height: "16 inches",
      potSize: "10 inches",
      care: "Advanced",
      season: "All seasons",
    },
    images: {
      thumbnail: "/src/assets/images/landing/bonsai2.webp",
      gallery: [
        "/src/assets/images/gallery/pine-1.webp",
        "/src/assets/images/gallery/pine-2.webp",
      ],
    },
    seo: {
      slug: "ancient-pine-bonsai",
      keywords: ["pine bonsai", "ancient tree", "premium bonsai", "collector"],
    },
  },
  // ... tambahkan data lainnya
];

// Utility functions
export const getBonsaiById = (id) =>
  bonsaiCollections.find((item) => item.id === id);
export const getBonsaiByCategory = (category) =>
  bonsaiCollections.filter((item) => item.category === category);
export const getBonsaiByPrice = (min, max) =>
  bonsaiCollections.filter((item) => item.price >= min && item.price <= max);

// SEO-friendly URLs
export const generateBonsaiUrl = (bonsai) => `/collection/${bonsai.seo.slug}`;
