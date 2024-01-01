import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Hamza Akbar",
  title: "Hi all, I'm Hamza",
  description:
    "I'm a passionate Software developer with experience developing Full Stack web applications with JavaScript, TypeScript, React.js, Next.js, Node.js and other Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  // resumeLink: "#",
};

export const openSource = {
  githubUserName: "HamzaAkbar067",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:hakbar067@gmail.com",
  linkedin: "https://www.linkedin.com/in/hamza-akbar-57845b171/",
  github: "https://github.com/HamzaAkbar067",
  // instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Node.js & Java Sprint Boot"),
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          iconifyTag: "logos:typescript",
        },
        {
          skillName: "Java",
          iconifyTag: "logos:java",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "PHP",
          iconifyTag: "logos:php",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        }        ,

        {
          skillName: "Nodejs",
          iconifyTag: "logos:nodejs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Angular",
          iconifyTag: "logos:angular",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "75",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "RWTH Aachen Universityy",
    subHeader: "Master's in Data Science",
    duration: "October 2020 - October 2023",
    desc: "",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Bahauddin Zakariya University",
    subHeader: "Bachelor's in Computer Science ",
    duration: "October 2014 - October 2018",
    desc: "",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Developer",
    company: "Indurad GmbH",
    companyLogo: "/img/icons/common/indurad_logo.jpg",
    date: "April 2022 - Present",
    desc: "I design front-end libraries and create reusable code for our sensor product web interface, enhancing app components to increase the performance. I also focus on creating a scalable app architecture with APIs to support our product's growth. My work ensures an efficient and responsive UI, aligning with the company's long-term objectives.",
    descBullets: ["TypeScript / JavaSctipt","React.js / Next.js / Redux / React Router / ANTD / Styled Components","Node.js / SQL / Axios / WebSocket /  Middleware Implementation ",]
  },
  {
    role: "Frontend Developer",
    company: "Map Intelligence Agency",
    companyLogo: "/img/icons/common/map_intelligence_agency_logo.jpg",
    date: "March 2021 - April 2022",
    desc: "I specialize in implementing web applications and developing unit tests to ensure the seamless functionality of mobility monitor features. I actively contribute to the evolution of our products by incorporating new features aligned with business requirements. Collaborating closely with a dynamic team of backend developers, UX designers, product managers, and other stakeholders, I prioritize effective communication and teamwork to ensure the successful integration of mobility monitor functionalities. Additionally, my responsibilities extend to building scalable API solutions, leveraging my expertise to derive robust and efficient user interfaces. This comprehensive approach allows me to play a key role in the development lifecycle, from feature implementation to fostering collaborative relationships across diverse teams",
    descBullets: ["TypeScript / JavaSctipt","React.js / Vue.js / MobX / Redux / Hooks / ANTD / Styled Components",
      "GraphQL / Webpack / Babel / ESLint / Prettier / Jest / Storybook"
  ]
  }
  ,
  {
    role: "Full Stack Developer",
    company: "Xcademyy",
    companyLogo: "/img/icons/common/xcad-klogo.jpeg",
    date: "Feb 2020 - Aug 2020",
    desc: "In my role, I played a pivotal part in enhancing our mission-critical external web application by identifying and implementing crucial code improvements. These efforts resulted in a notable improvement in system performance and reduced response times, ultimately delivering effective business solutions for end-users. Gathering client-side requirements, I translated them into user-friendly solutions and streamlined the system by seamlessly integrating with third-party services and external APIs within our mission-critical single-page application. Additionally, I successfully implemented and integrated payment gateway systems and messaging features, contributing to the overall functionality of the web application. Further, I designed and implemented generic algorithms for hundreds of cloud applications, ensuring efficient capture of user activities. My involvement extended to playing a key role in the system architecture design, contributing to the comprehensive development and optimization of our technology stack.",
    descBullets: ["TypeScript / JavaSctipt / React.js / Graphql / Webpack / State & Life Cycle / Routing / Redux / Pubnub chat / Responsive Designs.",
      "Node.js / Express.js / MongoDB / Mongoose / RESTful APIs / GraphQL / JWT / Webpack / Babel / ESLint / Prettier / Postman / ORMs / Data Storage / Queries."]
  },
  {
    role: "Full Stack Developer",
    company: "Fabulous Technologies",
    companyLogo: "/img/icons/common/ftl.jpg",
    date: "Feb 2018 - Jan 2020",
    desc: "I work on enhancing the code quality for external websites by implementing common coding standards. This initiative aimed to reduce code complexity and improve the maintainability of shared libraries and components. Actively engaging in peer code reviews, I contributed to maintaining consistency in code, tests, and design within our team. Additionally, I focused on fine-tuning legacy data storage and search queries for high-volume applications, leading to a notable increase in performance. My commitment extended to exploring cutting-edge front-end technologies to accelerate the development of our external web app.",
    descBullets: [ "TypeScript / JavaSctipt / React / Redux / CORS Development / Routing / Styling / HTML / CSS / SAAS / Bootstrap / JQuery / XML / JSON / JSX / AJAX / Unit testing / Postman / Error Handling",
      "NodeJS / ExpressJS / RESTful APIs and API Communications / Authentication and Authorization / SQL/NoSQL Database / Database Migration System / Payment Gateway / Backend Tests / Unit Testing / GIT / Docker"]
  }
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Giebo",
    desc: "A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.",
    link: "https://gibeo.io/",
  },
  {
    name: "O Mejor Oferta",
    desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
    link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "Hooligan Culture",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Hamza Akbar",
  description: greetings.description,
  author: "Hanzla Tauqeer",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Hanzla",
    "Hanzla Tauqeer",
    "@1hanzla100",
    "1hanzla100",
    "Portfolio",
    "Hanzla Portfolio ",
    "Hanzla Tauqeer Portfolio",
  ],
};
