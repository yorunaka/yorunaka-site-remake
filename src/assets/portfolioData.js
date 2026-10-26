import portrait from '../assets/portrait.png';
import logo from '../assets/webicon.png';

export const PORTFOLIO_DATA = {
  // Personal Brand & Information
  personal: {
    name: 'Vincent Louis Fernando',
    firstName: 'Vincent', 
    handle: 'Yorunaka',
    roles: [
      'Front End Web Developer',
      'Graphic Designer',
      'AI Enthusiast',
    ],
    email: 'vincentfernando.work@gmail.com',
    institution: 'Universitas Negeri Surabaya',
    degree: 'Computer Science',
    tagline: 'Coding 4 Fun!',
    slogan: 'who has a great vision about future.',
    bio: "My name is Vincent Louis Fernando. I'm currently studied in Computer Science major at the Universitas Negeri Surabaya. I'm a developer who has interest at doing fun AI stuff, web development, UI/UX, and graphic design. I'm a gamer and technology enthusiast. I'm a fast learner and I'm always eager to learn new things. I'm a hard worker and always willing to put in extra effort to get the job done. I'm also ready for collaborative environment and always open for work within a team.",
    portraitImg: portrait,
  },

  // Navigation Links
  navigation: [
    { id: 'home', label: 'Home', path: '/home' },
    { id: 'blog', label: 'Blog', path: '/blog' },
    // { id: 'chatbot', label: 'Chatbot', path: '/chatbot' },
  ],

  // Social Media Profiles & Icons
  socials: [
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com/yorunaka',
      handle: '@yorunaka',
      icon: 'https://img.icons8.com/ios-filled/50/github.png',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/vincent-louis-fernando', 
      handle: 'vincent-louis-fernando',
      icon: 'https://img.icons8.com/ios-filled/50/linkedin.png', 
    },
    {
      id: 'instagram',
      name: 'Instagram',
      url: 'https://instagram.com/feruu.nando', 
      handle: '@feruu.nando',
      icon: 'https://img.icons8.com/material-rounded/48/instagram-new.png', 
    },
    {
      id: 'discord',
      name: 'Discord',
      url: 'https://discord.com/users/579136952930926601', 
      handle: '579136952930926601',
      icon: 'https://img.icons8.com/ios-filled/50/discord-logo.png', 
    },
    {
      id: 'facebook',
      name: 'Facebook',
      url: 'https://facebook.com/vincent2703', 
      handle: 'vincent2703',
      icon: 'https://img.icons8.com/ios-filled/50/facebook--v1.png', 
    },
  ],

  // Project Portfolio Items
  projects: [
    {
      id: 'sakuya-ai',
      name: 'SakuyaAI', 
      category: 'AI & Machine Learning',
      type: 'Python', 
      featured: true,
      tags: ['Python', 'Streamlit', 'Local LLM', 'AI Chatbot'],
      desc: 'My personal project to create a local multimodel languange chatbot using Python and StreamLit. Still WIP.', 
      linkToProject: 'https://github.com/yorunaka/SakuyaAI', 
      linkToWebsite: '', 
    },
    {
      id: 'shizucha',
      name: 'Shizucha', 
      category: 'Frontend Engineering',
      type: 'Frontend Engineering', 
      featured: true,
      tags: ['ReactJS', 'Tailwind CSS', 'E-Commerce', 'Cloudflare Pages'],
      desc: 'This is my front end web portfolio using ReactJS and Tailwind CSS. Shizucha is a startup that focused on bringing tea products everywhere and anywhere, here i made the front end for its online shop page.', 
      linkToProject: 'https://github.com/yorunaka/react-shizucha', 
      linkToWebsite: 'https://shizucha.pages.dev', 
    },
    {
      id: 'centralica-news',
      name: 'Centralica News App', 
      category: 'Frontend Engineering',
      type: 'Frontend Engineering', 
      featured: true,
      tags: ['ReactJS', 'Tailwind CSS', 'DaisyUI', 'Vercel'],
      desc: 'This is my front end web portfolio using ReactJS, Tailwind CSS, and DaisyUI. This project is created as a capstone completion during my Independent Study at Hacktiv8. Centralica is a News App that delivers newest information to everyone and anywhere.', 
      linkToProject: 'https://github.com/yorunaka/centralica-newsapp', 
      linkToWebsite: 'https://capstone-news-app-vincent-louis-fernando-izqs2lxyy.vercel.app/', 
    },
    {
      id: 'sign-extractor',
      name: 'Sign Extractor', 
      category: 'Computer Vision',
      type: 'Image Processing', 
      featured: false,
      tags: ['Python', 'Image Processing', 'Computer Vision', 'No-Lib'],
      desc: 'I was appointed to create a sign extractor project with my team. This project uses Python as for the techstack. This project is used to detect and extract someone handsign and removes its background the result would be a picture file with png format.', 
      linkToProject: 'https://github.com/MuhammadMiftaa/Sign-Extractor-NoLib', 
      linkToWebsite: '', 
    },
    {
      id: 'warehouse-management',
      name: 'Warehouse Management', 
      category: 'Backend Engineering',
      type: 'Backend Engineering', 
      featured: false,
      tags: ['Backend Engineering', 'Database Architecture', 'API Development'],
      desc: 'Me and my team was creating a Warehouse Management Website, here I worked as backend dev. This project is also created for our mid term assignment.', 
      linkToProject: 'https://github.com/luth-fi02/uts-pbp', 
      linkToWebsite: '', 
    },
    {
      id: 'sman1-weleri',
      name: 'SMAN 1 Weleri Web Remake', 
      category: 'Frontend Engineering',
      type: 'Frontend Engineering', 
      featured: false,
      tags: ['Frontend Engineering', 'UI/UX Redesign', 'Web Development'],
      desc: 'Here, me and my team was asked to remake a government instance website and we choose to remake SMAN 1 Weleri website. I worked as frontend dev. This is also project for late term assignment.', 
      linkToProject: 'https://github.com/yorunaka/sman1weleri', 
      linkToWebsite: '', 
    },
  ],

  logo: logo,

  // Footer Metadata
  footer: {
    copyrightOwner: 'Yorunaka', 
    rightsText: 'All Rights Reserved', 
  },
};

export default PORTFOLIO_DATA;