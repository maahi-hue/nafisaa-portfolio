export type Project = {
  id: string
  title: string
  color: 'teal' | 'mustard' | 'harbor' | 'signal' | 'cargo'
  summary: string
  problem: string
  role: string
  stack: string[]
  platformStack?: string[]
  highlights?: string[]
  result: string
  liveUrl?: string
  codeUrl?: string
  image: string
  imageAlt: string
}

export const projects: Project[] = [
  {
    id: 'shayonis-emporium',
    title: "Shayoni's Emporium",
    color: 'teal',
    summary:
      'A responsive storefront for a Chattogram fashion store, part of a full-stack eCommerce platform built at mPair Technologies.',
    problem:
      'A small fashion brand needed an online shop where customers can browse collections by category, see sale prices and check out quickly, including on phones.',
    role:
      'I worked on the UI and frontend: the home page, category browsing, product cards, the slide-out cart and the responsive layout.',
    stack: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Framer Motion', 'Radix UI', 'Swiper'],
    platformStack: ['Node.js', 'Express.js', 'Prisma', 'MongoDB', 'cPanel VPS'],
    highlights: [
      'Home page with hero, hot selling, new arrivals, sales and collections sections',
      'Category browsing with a category list',
      'Product cards with Add to Cart and Buy Now, sale badges and discounted prices',
      'Slide-out cart with quantity controls, subtotal and checkout',
      'Search, wishlist and cart icons in the header',
      'Responsive layout for phones and desktop',
    ],
    result:
      'Live in production, with a responsive storefront that works on phones and desktop.',
    liveUrl: 'https://emporium.shayonisworld.com/',
    image: '/images/shayonis-emporium.jpeg',
    imageAlt: "Shayoni's Emporium home page with fashion products displayed in a grid layout",
  },
  {
    id: 'caremeds',
    title: 'CareMeds',
    color: 'mustard',
    summary:
      'A multi-vendor e-commerce platform for medicines and healthcare products.',
    problem:
      'Buyers needed a reliable way to purchase medicines from multiple verified vendors with secure payment processing.',
    role:
      'Built authentication system, shopping cart, vendor dashboards, and payment integration.',
    stack: ['React', 'Tailwind', 'Node', 'MongoDB', 'Firebase Hosting'],
    result:
      'Learned full-stack e-commerce architecture and payment gateway integration.',
    liveUrl: 'https://assignment-12-6a5e8.web.app',
    codeUrl: 'https://github.com/maahi-hue/CareMeds',
    image: '/images/CareMeds.png',
    imageAlt: 'CareMeds home page with a banner reading "Your Trusted Marketplace for Medicines"',
  },
  {
    id: 'bistroboard',
    title: 'BistroBoard',
    color: 'harbor',
    summary:
      'A restaurant management platform where users browse food items, place orders and manage their purchases.',
    problem:
      'Restaurants needed a digital solution to manage menus, track orders, and handle customer relationships.',
    role:
      'Built the food browsing interface, order management system, and admin dashboard.',
    stack: ['React', 'Tailwind', 'Node', 'MongoDB', 'Firebase Hosting'],
    result:
      'Gained experience with complex state management and admin panel design.',
    liveUrl: 'https://assignment-11-f04f9.web.app',
    codeUrl: 'https://github.com/maahi-hue/BistroBoard',
    image: '/images/BistroBoard.png',
    imageAlt: 'BistroBoard food browsing interface showing menu items in a grid layout',
  },
  {
    id: 'emventory',
    title: 'Emventory',
    color: 'cargo',
    summary:
      'An in-house SaaS inventory management system with a point-of-sale (POS) module, built at mPair Technologies.',
    problem:
      'Shops need one system to track stock and sell at the counter.',
    role:
      'I led the initial frontend setup, connected the GraphQL APIs, built responsive interface components and refined the POS interface over several design iterations. As a trainee I moved to backend work: models and controllers in TypeScript, plus production deployment.',
    stack: ['React 18', 'Vite', 'Tailwind CSS', 'Apollo Client', 'GraphQL', 'Material-UI', 'TypeScript'],
    result:
      'Shipped to production, covering the frontend, the POS module and the backend models and controllers.',
    liveUrl: 'https://shop.emventory.com',
    image: '/images/emventory.jpeg',
    imageAlt: 'Emventory inventory management dashboard showing product list and stock levels',
  },
]