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
  mindsdb_photo,
  git,
  figma,
  docker,
  java,
  truvisory,
  mindsdb,
  qrev,
  jobit,
  threejs,
  etcd,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Founding Full-Stack Developer",
    company_name: "QRev AI",
    icon: qrev,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Engineered a SaaS product using React, TypeScript, and NextJS with advanced animations, enhancing user engagement and achieving 20% faster load times.",
      "Developed and maintained APIs using NodeJS and Python, leveraging LLMs to automate marketing workflows, resulting in a 40% reduction in manual tasks.",
      "Implemented secure deployment pipelines with AWS, Docker, and CI/CD, ensuring 99.99% uptime and supporting scalable infrastructure for high-traffic applications.",
      "Led troubleshooting and optimization efforts, improving system performance by 25% through proactive identification of performance bottlenecks and enhanced error logging.",
    ],
  },
  {
    title: "Maintainer",
    company_name: "MindsDB",
    icon: mindsdb_photo,
    iconBg: "#383E56",
    date: "June 2023 - March 2024",
    points: [
      "Maintaining and supporting the Snowflake integration for MindsDB, ensuring proper functionality and extensive documentation.",
      "Building new releases periodically on the Snowflake integration based on the community feedback to improve the product insights.",
      "Providing technical expertise and troubleshooting integration-related queries to assist the community over GitHub, Slack.",
      "Curating Technical Blogs, Tutorials around the new/existing integrations developed by the community members.",
      "Collaborating with teams to improve existing integrations, address feedback, and ensure seamless connectivity for the users.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Truvisory",
    icon: truvisory,
    iconBg: "#383E56",
    date: "July 2020 - July 2021",
    points: [
      "Deployed REST API connectivity with microservices using Python led to 30% reduction in client requests processing.",
      "Utilized Docker, AWS EC2 to automate SDLC of a web app implemented via TypeScript, NextJS, NodeJS and React.",
      "Applied Git for version control and collaboration, achieving seamless integration and 50% reduction in code conflicts.",
    ],
  },
  {
    title: "Intern",
    company_name: "Truvsiory",
    icon: truvisory,
    iconBg: "#383E56",
    date: "Jan 2020 - July 2020",
    points: [
      "Accomplished 7% increase in profits by Predictive Analysis leveraging Machine Learning algorithms for improved accuracy.",
      "Constructed SQL queries to extract and manipulate data from databases, leading to a 25% increase in efficiency of data retrieval and analysis.",
      "Produced interactive dashboards in PowerBI and Excel, enabling stakeholders to visualize data trends and insights, resulting in more informed decision-making.",
    ],
  },
  {
    title: "Java Application Developer",
    company_name: "Trivia Softwares",
    icon: java,
    iconBg: "#383E56",
    date: "July 2019 - Sept 2019",
    points: [
      "Developed RESTful and SOAP-based web services using J2EE technologies such as Spring Boot, Hibernate, and JDBC.",
      "Collaborated effectively with cross-functional teams and implemented continuous integration, delivery using Jenkins and Git, for faster product delivery and increased quality.",
      "Implemented TDD development approach and automated testing frameworks using Selenium and BDD, resulting in 50% reduction in bug reports.",
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
    name: "CNCF etcd - Open Source",
    description:
      "Enhanced the Raft consensus algorithm implementation by developing end-to-end testing using ARM64 runners in GitHub Actions, improving test coverage by 35% and reducing deployment failures by 25%.",
    tags: [
      {
        name: "go",
        color: "blue-text-gradient",
      },
      {
        name: "kubernetes",
        color: "green-text-gradient",
      },
      {
        name: "git",
        color: "pink-text-gradient",
      },
    ],
    image: etcd,
    source_code_link: "https://github.com/etcd-io/raft/pull/128",
  },
  {
    name: "MindsDB: Slack/OpenAI Integration",
    description:
      "Implemented a new Slack integration for MindsDB, using Slack API to connect to Workspaces, built with Python to enable users to leverage MindsDB's OpenAI integrations to automate tasks such as writing, responding to messages, and posting announcements.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "git",
        color: "pink-text-gradient",
      },
    ],
    image: mindsdb,
    source_code_link:
      "https://docs.mindsdb.com/use-cases/ai_workflow_automation/slack-chatbot#build-a-slack-chatbot-with-mindsdb-and-openai",
  },
  {
    name: "Echo",
    description:
      "A Full Stack Social Media application with real-time search engine, worked on client-side design, user sign-in page, UI experience by applying Express, React, Redux, MongoDB with CRUD operations on profiles.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/tcchawla/Echo---MERN",
  },
];

export { services, technologies, experiences, testimonials, projects };
