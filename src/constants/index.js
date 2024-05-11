import {
  plant,
  tree,
  womensafety,
  fitness,
  aws,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  python,
  github,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id : "skills",
    title : "Skill"
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
  {
    title: "Mobile Development",
    icon:mobile,
  },
];

const technologies = [
  {
    name: "C++",
    icon: redux,
  },
  {
    name : "java",
    icon : docker,
  },
  {
    name: "C",
    icon: typescript,
  },
  {
    name : "Python",
    icon : python, 
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name : "Github",
    icon : github
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Hindustan Aeronautics Limited",
    icon: meta,
    iconBg: "#383E56",
    date: "June 2020 - July 2021",
    points: [
      "Worked on a Python Offline Model to Denoise audio recordings from Pilot microphones and convert them into text transcripts with 88% accuracy, enhancing Pilot communication under the Software Design Division.",
      "Explored diverse software technologies, mastering two distinct languages and frameworks, contributing to a 25% increase in coding versatility. Proficiently documented the process.",
      "Analyzed and documented workflow processes across seven divisions at HAL, identifying bottlenecks and proposing improvements that led to a 20% increase in operational efficiency.",
    ],
  },
    
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Fitness Maniac",
    description:
      "This your premier online destination for all things fitness and wellness. Whether you're a seasoned gym enthusiast pushing your limits or just beginning your fitness journey, our comprehensive website offers everything you need to achieve your health and wellness goals.Lets get fit together with a all the resources.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: fitness,
    source_code_link: "https://fitness-manic.vercel.app/",
  },
  {
    name: "GreenInsight",
    description:
      "This is your go-to online platform for botanical identification and exploration. Whether you're a seasoned botanist, a nature enthusiast, or simply curious about the plant world around you, PlantSpot is your comprehensive resource for discovering and learning about plant species from around the globe.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "machinelearning",
        color: "green-text-gradient",
      },
      {
        name: "googlecolab",
        color: "pink-text-gradient",
      },

    ],
    image: tree,
    source_code_link: "https://github.com/developerbarun/GreenInsight",
  },
  {
    name: "Greenery Haven",
    description:
      "This is your ultimate online destination for all things green and vibrant. Whether you're an avid plant collector, a gardening enthusiast, or someone looking to bring a touch of nature into your home or workspace, Greenery Haven offers a diverse selection of plants, accessories, and expert advice to cater to your botanical needs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: plant,
    source_code_link: "https://github.com/",
  },
  {
    name: "Online Fraud Detection",
    description:
      "In an era marked by increasing digital transactions, safeguarding online ecosystems against fraudulent activities is paramount. This project introduces an advanced solution powered by machine learning techniques to detect and prevent online fraud effectively.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "machinelearning",
        color: "green-text-gradient",
      },
      {
        name: "googlecolab",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/developerbarun/online_payment_fraud/",
  },
  {
    name: "Fashion Sense",
    description:
      "This Fashion Detection Website, where the latest advancements in deep learning converge to revolutionize the way we interact with fashion. This platform harnesses the power of artificial intelligence to seamlessly identify and classify fashion items.",
    tags: [
      {
        name: "deeplearning",
        color: "green-text-gradient",
      },
      {
        name: "machinelearning",
        color: "",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/developerbarun/FashionSense",
  },
  {
    name: "SafeGuardHer",
    description:
      "This is solution dedicated to empowering women's safety through innovative technology. Built on the foundation of Lagchain's cutting-edge framework and powered by the intuitive streamlit platform, Llama2 represents a significant leap forward in ensuring the security and well-being of women in diverse environments.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "machinelearning",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: womensafety,
    source_code_link: "https://github.com/developerbarun/LLM-for-Women-Safety-",
  },
];

export { services, technologies, experiences, testimonials, projects };
