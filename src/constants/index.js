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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  makonjo,
  iventu,
  lifemix,
  tekglobal,
  beyongo,
  sumerice,
  promptFactory,
  kryptHall,
  jealtor
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
];

const services = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'React Native Developer',
    icon: mobile
  },
  {
    title: 'Backend Developer',
    icon: backend
  },
  {
    title: 'Web3 Developer',
    icon: creator
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'figma',
    icon: figma
  },
  {
    name: 'docker',
    icon: docker
  }
];

const experiences = [
  {
    title: 'Engineering Manager',
    company_name: 'Tekglobal, Remote',
    icon: tekglobal,
    iconBg: '#383E56',
    date: 'March 2022 - Current',
    points: [
      'Overseeing the development of an educational platform. Making sure that deadlines are being met while working on the design and workflow of the system.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Using Nodes NestJs framework to realize project API. Nest gives me an upper edge with how fast I can scaffold and get my API running.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'Full Stack Web Developer',
    company_name: 'Lifemix, Remote',
    icon: lifemix,
    iconBg: '#383E6D',
    date: 'Feb 2020 - Jan 2022',
    points: [
      'Researching, designing, implementing and managing the development of our robust user interface using technologies such as React and Redux for effective state management',
      'Writing, implementing, testing and evaluating efficient code for our backend system using python, Javascript and flask with some third party libraries like Pusher.',
      'Developing the architecture of our application to run on AWS Lambda(serverless) which in turn greatly reduced our cost of running our application on the cloud.'
    ]
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Beyongo Dynamics, Remote',
    icon: beyongo,
    iconBg: '#E6DEDD',
    date: 'Feb 2019 - May 2019',
    points: [
      'Designed and built news web crawlers using Python’s Scrapy. These crawlers could crawl more than 50 news websites over the world in less than 3 minutes',
      'Built a very simple and fast user interface using Javascript, HTML and CSS, capable of rendering over 500 crawled feeds in less than 2 seconds.'
    ]
  },
  {
    title: 'Full Stack Developer(Intern)',
    company_name: 'Makonjo Media, Buea',
    icon: makonjo,
    iconBg: '#E6DEDD',
    date: 'Aug 2017 - Feb 2018',
    points: [
      'Developed interesting and engaging websites and web applications for clients, rendering clients very satisfied and resulting in bonuses and positive feedback',
      'Served as project manager for several full-stack development projects, each of which was successfully completed before its deadline.',
      'Designed, developed and modified React components for a job search application known as workwit. Modifications boosted the application speed by over 10%.'
    ]
  },
  {
    title: 'Front End Programmer',
    company_name: 'Iventu, Remote',
    icon: iventu,
    iconBg: '#383E6D',
    date: 'Jan 2015 - Mar 2017',
    points: [
      'Implemented SEO best practices to improve website visibility and search engine rankings.',
      'Developed and maintained responsive websites and web applications using HTML, CSS, and JavaScript',
      'Collaborated with designers and back-end developers to implement user interface designs and ensure smooth functionality.'
    ]
  }
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Joshua proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Joshua does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    testimonial:
      "After Joshua optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
];

const projects = [
  {
    name: 'Krypt Hall',
    description:
      'A web based application that permits users to send crypto to other users and eventually will provide the functionality for users to exchange ERC720 tokens with ERC20',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'hardhat',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      },
      {
        name: 'metamask',
        color: 'pink-text-gradient'
      }
    ],
    image: kryptHall,
    source_code_link: 'https://github.com/tafodinho/krypthall',
    url: 'https://kryptHall.tafangjoshua.xyz'
  },
  {
    name: 'Prompt Factory',
    description:
      'Web platform that enables users to search for AI prompts and also add prompts for other users to benefit from',
    tags: [
      {
        name: 'NextJs',
        color: 'blue-text-gradient'
      },
      {
        name: 'chatGPT4',
        color: 'pink-text-gradient'
      },
      {
        name: 'mongoDb',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: promptFactory,
    source_code_link: 'https://github.com/tafodinho/prompt_factory',
    url: 'https://promptfactory.tafangjoshua.xyz'
  },
  {
    name: 'Jealtor',
    description:
      'A comprehensive real estate web platorm that displays houses from around the world for users to make real estate decisions and also supports renting and buying functionalities',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'bayut',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: jealtor,
    source_code_link: 'https://github.com/tafodinho/jealtor',
    url: 'https://jealtor.tafangjoshua.xyz'
  },
  {
    name: 'SumeRice',
    description:
      'A web application that enables users to sumerise entire websites by just pasting a link. Currently working on building a web scrapper that will reduce the cost i currently spend on the crapping plus summerizing api maybe also eventually build my own sumerizer AI Model',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'chatGPT4.0',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      },
      {
        name: 'googleOauth',
        color: 'green-text-gradient'
      }
    ],
    image: sumerice,
    source_code_link: 'https://github.com/tafodinho/sumerice',
    url: 'https://sumerice.tafangjoshua.xyz'
  },
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: carrent,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'restapi',
        color: 'green-text-gradient'
      },
      {
        name: 'scss',
        color: 'pink-text-gradient'
      }
    ],
    image: jobit,
    source_code_link: 'https://github.com/'
  }
];

export { services, technologies, experiences, testimonials, projects };
