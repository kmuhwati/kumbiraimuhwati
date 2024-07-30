/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kumbirai Muhwati",
  title: "Hi all, I'm Kumbirai",
  subTitle: emoji(
    "A passionate IT specialist with extensive experience in developing and managing IT projects, improving operational efficiency and leveraging data science for actionable insights."
  ),
  resumeLink:
    "", // Update with actual resume link if available
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kmuhwati",
  linkedin: "https://linkedin.com/in/kumbirai-muhwati",
  gmail: "kmuhwati@mail.yu.edu",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "IT SPECIALIST WITH A KNACK FOR TECHNOLOGY SOLUTIONS AND DATA SCIENCE",
  skills: [
    emoji(
      "⚡ Expertise in developing and managing IT projects and operations"
    ),
    emoji("⚡ Implementation of technology solutions to improve efficiency"),
    emoji(
      "⚡ Integration of systems and software for better performance and productivity"
    ),
    emoji("⚡ Utilizing data science techniques to derive actionable insights")
  ],


  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "cloud-computing",
    fontAwesomeClassname: "fas fa-cloud"
  },
  {
    skillName: "networking",
    fontAwesomeClassname: "fas fa-network-wired"
  },
  {
    skillName: "cybersecurity",
    fontAwesomeClassname: "fas fa-shield-alt"
  },
  {
    skillName: "sql-database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "r-programming",
    fontAwesomeClassname: "fab fa-r-project"
  },
  {
    skillName: "machine-learning",
    fontAwesomeClassname: "fas fa-robot"
  }
],
display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Yeshiva University, Katz School of Science and Health",
      logo: require("./assets/images/yeshivaLogo.png"),
      subHeader: "Master of Science in Cybersecurity",
      duration: "September 2023 - December 2025",
      desc: "Relevant Courses: Cybersecurity Foundations, Architecture of Secure Operating Systems, Network, Data and Communication Security, Cybersecurity Audit, Digital Evidence and Computer Forensics."
    },
    {
      schoolName: "Africa University",
      logo: require("./assets/images/africaUniversityLogo.png"),
      subHeader: "Bachelor of Science Honors in Computer Information Systems",
      duration: "September 2017 - June 2021",
      desc: "3.6 GPA. Participated in various tech-related extracurricular activities."
    }
  ]
};
// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science",
      progressPercentage: "70%"
    },
    {
      Stack: "Project Management", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "IT Operations",
      progressPercentage: "80%"
    },
    {
      Stack: "Cybersecurity",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Digital Banking Application Support Specialist",
      company: "NMB BANK",
      companylogo: require("./assets/images/nmbBankLogo.png"),
      date: "June 2021 – December 2023",
      desc: "Provided technical support and customer service for online and mobile banking.",
      descBullets: [
        "Troubleshooted technical issues and assisted with account setup",
        "Handled password resets, monitored system performance, and reported outages",
        "Answered customer inquiries, educated them on new features, and resolved complaints"
      ]
    },
    {
      role: "Information, Communication, and Technology Intern",
      company: "SIMBISA BRANDS",
      companylogo: require("./assets/images/simbisaLogo.png"),
      date: "February 2020 – February 2021",
      desc: "Assisted in various IT tasks including security and support.",
      descBullets: [
        "Installed and upgraded anti-virus software to ensure security at the user level",
        "Troubleshot issues on networking and office printers",
        "Installed CCTV at different operation sites",
        "Conducted daily backup operations",
        "Monitored service desk support tickets"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Machine Learning projects including model creation to deployment in Cloud Web Apps",
  projects: [
    {
      image: require("./assets/images/3a77ca711d86a6e66378480dace2b2f2-removebg-preview.png"),
      projectName: "Customer Churn Prediction App",
      projectDesc: "Predict which customer is most likely to leave the bussiness",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/kmuhwati/Customer-Churn"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/undraw_Segment_analysis_re_ocsl-removebg-preview.png"),
      projectName: "EDA For Data Science App",
      projectDesc: "Exploratory data analysis for cleaning data",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/kmuhwati/Exploratory-data-analysis"
        }
      ]
    },
    {
      image: require("./assets/images/undraw_medical_care_movn-removebg-preview.png"),
      projectName: "Early Diabetes Prediction App",
      projectDesc: "AI Application that uses ml for early diabetes detection",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/kmuhwati/Early-Diabetes-Prediction"
        }
      ]
    },
    {
      image: require("./assets/images/undraw_Push_notifications_re_t84m-removebg-preview.png"),
      projectName: "LLM Chatbot App",
      projectDesc: "Use Chat bot to analyse company data",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/kmuhwati/LLM-Chatbot-App"
        }
      ]
    },
    {
      image: require("./assets/images/undraw_Segment_analysis_re_ocsl-removebg-preview.png"),
      projectName: "PowerBI: Uncovering Hidden Patterns",
      projectDesc: "Many organizations struggle to extract meaningful insights from their data due to its vastness and complexity. Hidden patterns and trends often remain undiscovered, hindering decision-making and hindering business growth.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/kmuhwati/Power-BI-Projects"
        }
      ],
      display: true // Set false to hide this section, defaults to true
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        {
          name: "Award Letter",
          url: ""
        },
        {
          name: "Google Code-in Blog",
          url: ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (646) 240-0277",
  email_address: ""
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
