import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nuno Reis', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Nuno',
  subtitle: 'I am',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I deeply believe that great user experiences make a difference when delivering digital products. I'm passionate about developing seemingly user interfaces that work pixel-perfect across all devices. With background in UI/UX design I am very detail oriented and have a positive problem-solving attitude.",
  paragraphTwo:
    "I 'm proficient in: Vanilla Javascript, React, Redux, GraphQl, Styled-Components, SASS, Storybook, HTML, CSS, Jest, Mocha, Puppeteer, ESLint, React Scripts, Git, GitHub, GitLab, VueJS, NodeJS, React Native, Sketch, Photoshop, Illustrator, ProCreate, Scrum and Kanban methodologies",
  paragraphThree:
    'When I am not developing I like to ride my bike, practice sports, travel and do a bit of digital illustration using my iPad and ProCreate',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  // {
  //   id: nanoid(),
  //   img: 'nakhoda.png',
  //   title: 'CreateiQ',
  //   info: "Currently working as the Frontend Lead for the Nakhoda team, I've been working on the Linklater's CreateiQ project since the beginning 2020. CreateiQ is a digital contract automation and negotiation platform that captures valuable structured data from legal documents at source.",
  //   info2: 'React, Redux, SASS, Jest, Courgette, Python, Flask, PHP, SCALA',
  //   url: 'https://wwwqa.createiq.tech/',
  //   repo: 'https://www.linklaters.com/en/about-us/nakhoda',
  //   company: 'Linklaters',
  // },
  {
    id: nanoid(),
    img: 'hamutuk.png',
    title: 'Hamutuk',
    info: 'While at Catalpa, I worked as a UI/UX designer and Frontend Developer for many projects - Hamutuk is one of those projects. Hamutuk is an innovative, multi-sector program bringing more than 20 organisations together to improve nutrition in Timor-Leste.',
    info2: 'RiotJS, SASS, Bootstrap, Python, Django, Cordova',
    url: 'https://hamutuk.tl/en/',
    repo: 'https://catalpa.io/',
    company: 'Catalpa',
  },
  {
    id: nanoid(),
    img: 'nekonato.jpeg',
    title: 'Nekonato',
    info: 'Working for Lunática meant working on a wide diversity of projects from stricktly graphic to web-design. One of those projects was Nekonato, from the branding design to the development of an e-commerce shop for an emblematic brand in the heart of Madrid.',
    info2: 'Wordpress, Illustrator, Photoshop, InDesign',
    url: 'https://nekonato.com/en/',
    repo: 'https://lunatica.biz/',
    company: 'Lunática',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nunobreis@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/nunobreis/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nunobreis/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nunobreis',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false,
};
