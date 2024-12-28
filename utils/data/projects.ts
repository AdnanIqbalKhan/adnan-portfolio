export const PROJECTS_DATA = [
  {
    id: "salesforce-pwa-vineyard-vines",
    title: "Salesforce PWA - Vineyard Vines",
    keywords: ["Salesforce", "PWA", "React"],
    type: "web application",
    imageUrl: "/img/projects/vineyard_vines.png",
    githubUrl: null,
    url: "https://www.vineyardvines.com",
    description: {
      text: "Developed user interfaces for a Salesforce PWA using React, integrating backend APIs to retrieve and manipulate data. Enhanced functionality with third-party plugins.",
      keywords: ["Salesforce Commerce Cloud", "React", "API Integration"],
    },
  },
  {
    id: "express-crud-maker",
    title: "Express CRUD Maker",
    keywords: ["Express", "CRUD", "Dev Tools"],
    type: "dev tools",
    imageUrl: "/img/projects/express_crud_generator.png",
    githubUrl: "https://github.com/AdnanIqbalKhan/express-crud-maker",
    url: "https://www.npmjs.com/package/express-crud-maker",
    description: {
      text: "A command-line tool that generates boilerplate code for creating a CRUD application using Express.js. It automates the generation of files for models, routes, controllers, and DTOs based on user-defined attributes.",
      keywords: ["Express.js", "CLI Tool", "CRUD Operations"],
    },
  },
  {
    id: "qlu-fetch",
    title: "qlu-fetch",
    keywords: ["Fetch", "Retry", "API"],
    type: "library",
    imageUrl: "/img/projects/qlu_fetch.png",
    githubUrl: "https://gitlab.com/adnaniqbalkhan/qlu-fetch",
    url: "https://www.npmjs.com/package/qlu-fetch",
    description: {
      text: "A lightweight library for making HTTP requests with retry logic and customizable pause times. Supports advanced options like timeout and simultaneous retries.",
      keywords: ["HTTP Requests", "Retry Logic", "Node.js"],
    },
  },
  {
    id: "console-log-colorizer",
    title: "Console Log Colorizer",
    keywords: ["Console", "Logging", "Colors"],
    type: "dev tools",
    imageUrl: "/img/projects/console_log_colorizer.png",
    githubUrl: "https://github.com/AdnanIqbalKhan/console-log-colorizer",
    url: "https://www.npmjs.com/package/console-log-colorizer",
    description: {
      text: "A lightweight npm package for color-coded logging in the console. It provides enhanced visualization of log messages with customizable background and foreground colors.",
      keywords: ["Logging", "Console", "Customizable Colors"],
    },
  },
  {
    id: "qlu-ai-chrome-extension",
    title: "Qlu.ai Chrome Extension",
    keywords: ["Chrome Extension", "React", "AI"],
    type: "browser extension",
    imageUrl: "/img/projects/qlu.png",
    githubUrl: null,
    url: "https://www.qlu.ai/",
    description: {
      text: "Developed a Chrome Extension for the AI-based recruitment platform 'Qlu.ai' using React.js, extending the product's functionality and user accessibility.",
      keywords: ["Chrome Extension", "AI Recruitment", "React.js"],
    },
  },
  {
    id: "xchangepost-app",
    title: "Xchange Post - Community Rental App",
    keywords: ["React Native", "Mobile App", "Firebase"],
    type: "mobile application",
    imageUrl: "/img/projects/xchange_post.png",
    githubUrl: null,
    url: "https://xchangepost.wixsite.com/info",
    description: {
      text: "Xchange Post is here to make your life easier and more affordable. It simplifies planning your next project or event with an intuitive rental app that harnesses the power of the sharing economy. Users can easily rent, share, and manage items, promoting convenience and cost savings.",
      keywords: [
        "React Native",
        "Firebase",
        "Sharing Economy",
        "Cross-Platform",
      ],
    },
  },
  {
    id: "extentY-app",
    title: "extentY - Body & Weight Tracker App",
    keywords: ["React Native", "Mobile App", "Firebase"],
    type: "mobile application",
    imageUrl: "/img/projects/extentY.png",
    githubUrl: null,
    url: "https://play.google.com/store/apps/details?id=de.aktiwir.aktibody&hl=en",
    description: {
      text: "extentY is your perfect companion for tracking and improving your body measurements. Whether it's biceps, thighs, chest, abdominal circumference, or shoulders, this app allows you to record, evaluate, and optimize your body metrics seamlessly. Stay motivated and monitor your progress with ease.",
      keywords: [
        "React Native",
        "Firebase",
        "Body Measurements",
        "Cross-Platform",
      ],
    },
  },
  {
    id: "house-construction-app",
    title: "House Construction Management App",
    keywords: ["React Native", "Mobile App", "Firebase"],
    type: "mobile application",
    imageUrl: "/img/projects/home_story.png",
    githubUrl: null,
    url: null,
    description: {
      text: "Developed a hybrid mobile app for managing house construction processes. Designed an intuitive UI, implemented secure user authentication with Firebase, and provided seamless cross-platform functionality.",
      keywords: ["React Native", "Firebase", "Cross-Platform"],
    },
  },
  {
    id: "f4l-digital-business-cards",
    title: "F4L Digital Business Cards",
    keywords: ["Digital Business Cards", "Personal Branding", "Networking"],
    type: "web application",
    imageUrl: "/img/projects/f4l.png",
    githubUrl: null,
    url: "http://f4l.com/",
    description: {
      text: "F4L Digital Business Cards is a revolutionary platform allowing users to create and share personalized digital business cards. With F4L, you can add social links, email, phone numbers, and even a favorite photo to create a unique and professional card. The digital card can be shared instantly, enabling recipients to save your contact details with just one click, making it an essential networking tool for personal and professional use.",
      keywords: [
        "Digital Business Cards",
        "Networking",
        "Social Links",
        "Personal Branding",
      ],
    },
  },
  {
    id: "delivery-android-app-kindred",
    title: "Delivery Android App - Kindred",
    keywords: ["Android", "Firebase", "Google Maps API"],
    type: "mobile application",
    imageUrl: "/img/projects/kindred.png",
    githubUrl: "https://github.com/AdnanIqbalKhan/Kindred",
    url: null,
    description: {
      text: "Designed and developed a delivery app for Android with robust user authentication and navigation features using Firebase Authentication and Google Maps API. Published on the Google Play Store.",
      keywords: ["Android", "Firebase", "Google Maps API"],
    },
  },
];

export type TProject = (typeof PROJECTS_DATA)[number];
