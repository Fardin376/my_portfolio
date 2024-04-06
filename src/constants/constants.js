import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  infobase,
  carrent,
  jobify,
  threejs,
  gadgetsgalore,
  myfash,
  blog_prompts,
  projectCard_bg,
} from '../assets/index.js';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'ReactJS Developer',
    icon: mobile,
  },
  {
    title: 'NodeJS Developer',
    icon: backend,
  },
  {
    title: 'UI / UX Designer',
    icon: creator,
  },
];

const techStack = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Infobase',
    icon: infobase,
    iconBg: '#383E56',
    date: 'October 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  // {
  //   title: 'React Native Developer',
  //   company_name: 'Tesla',
  //   icon: tesla,
  //   iconBg: '#E6DEDD',
  //   date: 'Jan 2021 - Feb 2022',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
  // {
  //   title: 'Web Developer',
  //   company_name: 'Shopify',
  //   icon: shopify,
  //   iconBg: '#383E56',
  //   date: 'Jan 2022 - Jan 2023',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
  // {
  //   title: 'Full stack Developer',
  //   company_name: 'Meta',
  //   icon: meta,
  //   iconBg: '#E6DEDD',
  //   date: 'Jan 2023 - Present',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'MotoMania',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    bg_image: projectCard_bg,
    source_code_link: 'https://github.com/Fardin376/motomania',
    demo_link: 'https://motomania.vercel.app/',
  },
  {
    name: 'Jobify',
    description:
      'Web-based dashboard application that enables users to post, edit, delete and search for job openings, view location, type and status for positions.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'expressjs',
        color: 'pink-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
    ],
    image: jobify,
    bg_image: projectCard_bg,
    source_code_link: 'https://github.com/Fardin376/jobify_mern_app',
    demo_link: 'https://jobify-mern-app-1.onrender.com/',
  },
  {
    name: 'Gadgets Galore',
    description:
      'An ecommerce platform that allows users to buy gadgets, pay with Stripe, and also offers an easy to use admin dashboard for admins to post new products in real-time.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
    ],
    image: gadgetsgalore,
    bg_image: projectCard_bg,
    source_code_link: 'https://github.com/Fardin376/gadgets-shop',
    demo_link: 'https://gadgets-shop.vercel.app/',
  },
  {
    name: 'MYFASH',
    description:
      'An ecommerce platform that allows users to buy clothing, select desired sizes, pay with Stripe. Additionally, it includes an intuitive admin dashboard, enabling seamless real-time product postings by administrators.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: myfash,
    bg_image: projectCard_bg,
    source_code_link: 'https://github.com/Fardin376/myfashEcommerce',
    demo_link: 'https://myfash-ecommerce.vercel.app/',
  },
  {
    name: 'Blog Prompts',
    description:
      'A sophisticated web-based CRUD application boasting Google OAuth Login functionality, advanced copy-to-clipboard features, and robust search filters.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: blog_prompts,
    bg_image: projectCard_bg,
    source_code_link: 'https://github.com/Fardin376/project_blogPrompts',
    demo_link: 'https://project-blog-prompts.vercel.app/',
  },
];

export { services, techStack, experiences, testimonials, projects };
