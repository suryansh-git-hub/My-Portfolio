// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import aws from './assets/tech_logo/aws.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejs from './assets/tech_logo/nodejs.png'
import mysql from './assets/tech_logo/mysql.png'
import express from './assets/tech_logo/express.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import mongodb from './assets/tech_logo/mongodb.png'


// Experience Section Logo's


// Education Section Logo's
import cu_logo from './assets/tech_logo/cu_logo.png';
import jbaLogo from './assets/tech_logo/jba-logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import emedi from './assets/work_logo/emedi.png';
import legal from './assets/work_logo/legal.png';
import quickai from './assets/work_logo/quickai.svg';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    
    ],
  },
  
  {
    title: 'Languages',
    skills: [
    
    
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Backend and database',
    skills: [
      { name: 'node', logo: nodejs },
      { name: 'express', logo: express },
      { name: 'mongodb', logo: mongodb },
    
      { name: 'mysql', logo: mysql },
     
    
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
    
      { name: 'Vercel', logo: vercelLogo },
      { name: 'AWS', logo: aws },
    
    ],
  },

];

  export const education = [
    
    {
      id: 1,
      img: cu_logo,
      school: "Chandigarh University",
      date: "August 2022 - June 2026 ",
      grade: "76%",
      desc: "I have my Bachelor of Engineering in Computer Science from Chandigarh University, where I have studied Data Structures, Web Development, DBMS, and Software Engineering with hands-on project experience.",
      degree: "Bachelor of Engineering - BE (Computer Science)",
    },
    {
      id: 2,
      img: jbaLogo,
      school: "JB Academy",
      date: "April 2020 - March 2021",
      grade: "79%",
      desc: "I completed my class 12 education JB Academy, Ayodhya , under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) ",
      degree: "CBSE(XII) - PCM ",
    },
    {
      id: 3,
     img: jbaLogo,
      school: "JB Academy",
      date: "Apr 2018 - March 2019",
      grade: "87.5%",
      desc: "I completed my class 10 education from JB Academy, Ayodhya, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
   

     {
      id: 4,
      title: "NyayaPath - Legal Complaint Guidance & Tracking Portal",
      description:
        "NyayaPath is a full-stack MERN application built using React.js, Node.js, Express.js, MongoDB that enables users to submit legal complaints, upload supporting documents, communicate with administrators, and track the complete complaint resolution process through an intuitive dashboard. The platform is used so that if a used for the people who are not able to understand how to deal with legal problem and where to take action for it. The platform helps in guiding them and also provide a way to tell there complaint.",
      image: legal,
      tags: ["JavaScript", "React", "Node", "Express", "Mongodb"],
      github: "https://github.com/suryansh-git-hub/Legal-complaint-guidance-and-tracking-portal",
      webapp: "https://nyayapath-ashen.vercel.app/",
    },

     {
      id: 3,
      title: "Quick.ai",
      description:
     "Ai based saas application built using  React.js, Node.js, Express.js, PostgreSQL, and Cloudinary. It is used to write Article, Blogs,Generate Image, Review Resume. It is application performing multiple ai task in one application",
      image: quickai,
    tags: ["JavaScript","React.js", "Node", "Express", "PostgreSQL", "Cloudinary"],
      github: "https://github.com/suryansh-git-hub/QUICKAI/tree/main",
      webapp: "https://quick-ai-nine-zeta.vercel.app/",
    },
   
    {
      id: 2,
      title: "eMedi Pharmacy",
      description:
        "A full-stack Medical Shop Management System designed to manage medicines, inventory, suppliers, customers, purchases, and sales efficiently. The application provides role-based authentication, medicine management with search, filtering and pagination, inventory tracking, purchase and sales management, GST and billing calculations, and customer reward points. It is built using React.js, Node.js, Express.js, MongoDB, and Cloudinary, with REST APIs connecting the frontend and backend.",
      image: emedi,
      tags: ["JavaScript","React JS","Node", "Express","Mongodb","Cloudinary"],
      github: "https://github.com/suryansh-git-hub/emedical-shop",
      webapp: "https://emedical-shop-6w89.vercel.app/",
    },
    
    {
      id: 0,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS"],
      github: "https://github.com/suryansh-git-hub/Repository-Finder",
      webapp: "https://githubprofiledetective.netlify.app/",
    },


    

  ]