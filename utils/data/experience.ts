export const EXPERIENCE_DATA = {
  "systems-ltd:consultant-development": {
    id: "systems-ltd:consultant-development",
    title: {
      text: "Consultant Development",
      keywords: ["Consultant", "Development"],
    },
    company: "Systems Ltd.",
    companyUrl: "https://www.systemsltd.com",
    date: {
      start: "June 2023",
      end: "Present",
    },
    tasks: [
      {
        text: "Developed diverse web applications suiting different business domains.",
        keywords: ["web applications", "business domains"],
      },
      {
        text: "Created complex solutions to fit client and business requirements.",
        keywords: ["complex solutions", "client requirements"],
      },
      {
        text: "Developed user interfaces for a Salesforce PWA using React.",
        keywords: ["Salesforce PWA", "React"],
      },
      {
        text: "Integrated backend APIs seamlessly into the front-end.",
        keywords: ["backend APIs", "front-end integration"],
      },
      {
        text: "Translated Figma designs into pixel-perfect front-end components.",
        keywords: ["Figma", "front-end components"],
      },
    ],
  },
  "qlu.ai:full-stack-engineer": {
    id: "qlu.ai:full-stack-engineer",
    title: {
      text: "Full Stack Engineer",
      keywords: ["Full Stack Engineer"],
    },
    company: "Dnnae Ltd (Qlu.ai)",
    companyUrl: "https://qlu.ai",
    date: {
      start: "September 2022",
      end: "May 2023",
    },
    tasks: [
      {
        text: "Maintained and enhanced the AI-based recruitment system 'Qlu.ai'.",
        keywords: ["AI-based recruitment", "Qlu.ai"],
      },
      {
        text: "Developed a Chrome Extension for 'Qlu.ai' using React.js.",
        keywords: ["Chrome Extension", "React.js"],
      },
      {
        text: "Created a prototype backend using Go-lang.",
        keywords: ["Go-lang", "prototype backend"],
      },
      {
        text: "Implemented an automated testing workflow using Selenium.",
        keywords: ["automated testing", "Selenium"],
      },
      {
        text: "Integrated third-party APIs like SendGrid for email communication.",
        keywords: ["APIs", "SendGrid", "email communication"],
      },
    ],
  },
  "freelancing:react-native-developer": {
    id: "freelancing:react-native-developer",
    title: {
      text: "React Native Developer",
      keywords: ["React Native", "Developer"],
    },
    company: "Freelancing",
    companyUrl: null,
    date: {
      start: "July 2019",
      end: "September 2022",
    },
    tasks: [
      {
        text: "Developed a hybrid mobile app to manage house construction processes.",
        keywords: ["hybrid mobile app", "house construction"],
      },
      {
        text: "Implemented robust user authentication using Firebase.",
        keywords: ["user authentication", "Firebase"],
      },
      {
        text: "Designed a scalable backend using Firebase.",
        keywords: ["scalable backend", "Firebase"],
      },
    ],
  },
  "locopixel:software-developer": {
    id: "locopixel:software-developer",
    title: {
      text: "Software Developer",
      keywords: ["Software Developer"],
    },
    company: "Locopixel Pvt Ltd",
    companyUrl: null,
    date: {
      start: "July 2019",
      end: "August 2019",
    },
    tasks: [
      {
        text: "Developed a trucking management application using the MEAN stack.",
        keywords: ["trucking management", "MEAN stack"],
      },
      {
        text: "Implemented real-time notifications with Firebase Cloud Messaging.",
        keywords: ["real-time notifications", "Firebase Cloud Messaging"],
      },
    ],
  },
  "kindred:co-founder": {
    id: "kindred:co-founder",
    title: {
      text: "Co-Founder",
      keywords: ["Co-Founder"],
    },
    company: "Kindred",
    companyUrl: null,
    date: {
      start: "January 2018",
      end: "March 2019",
    },
    tasks: [
      {
        text: "Designed and developed a delivery app for Android.",
        keywords: ["delivery app", "Android"],
      },
      {
        text: "Implemented secure user authentication using Firebase.",
        keywords: ["user authentication", "Firebase"],
      },
      {
        text: "Integrated Google Maps API for navigation features.",
        keywords: ["Google Maps API", "navigation"],
      },
    ],
  },
  "visionx:intern": {
    id: "visionx:intern",
    title: {
      text: "Intern",
      keywords: ["Intern"],
    },
    company: "Vision X",
    companyUrl: "https://www.visionx.io",
    date: {
      start: "July 2017",
      end: "August 2017",
    },
    tasks: [
      {
        text: "Collaborated on Machine Learning research projects using Python.",
        keywords: ["Machine Learning", "Python"],
      },
      {
        text: "Implemented a research paper on Table Segmentation.",
        keywords: ["Table Segmentation", "research"],
      },
    ],
  },
};

export type TExperience =
  (typeof EXPERIENCE_DATA)[keyof typeof EXPERIENCE_DATA];
export type TExperienceId = keyof typeof EXPERIENCE_DATA;

export const EXPERIENCE_DATA_DEFAULT_ID = Object.keys(
  EXPERIENCE_DATA
)[0] as TExperienceId;
