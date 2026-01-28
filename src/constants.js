// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import aws from './assets/tech_logo/aws.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's


// Education Section Logo's
import cu_logo from './assets/tech_logo/cu_logo.png';
import jbaLogo from './assets/tech_logo/jba-logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';




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
      grade: "75.2%",
      desc: "I am pursuing my Bachelor of Engineering in Computer Science from Chandigarh University, where I have studied Data Structures, Web Development, DBMS, and Software Engineering with hands-on project experience.",
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
      id: 0,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/suryansh-git-hub/Repository-Finder",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
   
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    
    {
      id: 4,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    
  ]