export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
}

export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  technologies: string[];
  features?: string[];
  methodology?: string[];
  outcome?: string;
  status?: string;
}

export interface Skill {
  name: string;
  level: string;
  percentage: number;
}

export interface LanguageSkill extends Skill {}

export interface TestingToolSkill extends Skill {}

export interface QaSkill {
  name: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  location: string;
  about: string;
  aboutExtended: string;
  contact: ContactInfo;
  projects: Project[];
  languageSkills: LanguageSkill[];
  testingToolSkills: TestingToolSkill[];
  qaSkills: QaSkill[];
  education: Education[];
  certificates: Certificate[];
}

export const portfolioData: PortfolioData = {
  name: "Mahika",
  title: "Quality Assurance Professional",
  location: "Dharamshala, Himachal Pradesh 176057",
  about: "Passionate about ensuring software quality through comprehensive testing. Specialized in functional, UI/UX, performance, and security testing with expertise in automation tools.",
  aboutExtended: "I'm a dedicated QA professional with expertise in software testing methodologies. I specialize in ensuring application functionality, usability, performance and security through comprehensive testing approaches. With strong technical skills in Selenium, JMeter, and other testing tools, I'm committed to delivering high-quality software products through rigorous testing procedures and identifying critical issues before they reach end users.",
  contact: {
    phone: "8351013254",
    email: "malyanmahika7@gmail.com",
    location: "Dharamshala, Himachal Pradesh 176057",
    github: "mahika1989",
    linkedin: "mahika-malyan"
  },
  projects: [
    {
      id: 1,
      title: "Testing Functionalities of Amazon",
      date: "October 2024",
      description: "Performed functional, UI/UX, performance, security, and compatibility testing on Amazon website.",
      technologies: ["Selenium", "JMeter", "Burp Suite", "TestRail/JIRA"],
      methodology: [
        "Functional Testing (Login, Search, Cart, Checkout, Payment)",
        "UI/UX Testing (Responsiveness, Layout, Visibility)",
        "Performance Testing (Page Load Time, Server Response)",
        "Security Testing (SQL Injection, Session Handling)",
        "Compatibility Testing (Across Browsers & Devices)"
      ],
      outcome: "Identified and reported critical bugs, improved test coverage, and enhanced website performance."
    },
    {
      id: 2,
      title: "Library Management System",
      date: "Completed",
      description: "Developed and tested a comprehensive Library Management System with multiple modules and user roles.",
      technologies: ["C++", "Object-Oriented Design", "SDLC"],
      features: [
        "User login and registration (admin/student roles)",
        "Book catalog management (add, update, delete books)",
        "Book issuance and return tracking with due dates",
        "Search functionality and transaction history",
        "Admin dashboard for user and inventory control"
      ],
      outcome: "Built using OOP principles with a focus on data integrity and user experience testing."
    }
  ],
  languageSkills: [
    {
      name: "C++",
      level: "Advanced",
      percentage: 85
    },
    {
      name: "Java",
      level: "Intermediate",
      percentage: 70
    },
    {
      name: "Python",
      level: "Intermediate",
      percentage: 75
    }
  ],
  testingToolSkills: [
    {
      name: "Selenium",
      level: "Advanced",
      percentage: 90
    },
    {
      name: "Appium",
      level: "Intermediate",
      percentage: 65
    },
    {
      name: "JMeter",
      level: "Advanced",
      percentage: 80
    },
    {
      name: "Postman",
      level: "Intermediate",
      percentage: 75
    }
  ],
  qaSkills: [
    { name: "API Testing" },
    { name: "Functional Testing" },
    { name: "UI/UX Testing" },
    { name: "Security Testing" },
    { name: "Performance Testing" },
    { name: "Mobile Testing" },
    { name: "SDLC" },
    { name: "STLC" }
  ],
  education: [
    {
      id: 1,
      degree: "Computer Science and Engineering",
      institution: "Lovely Professional University Punjab",
      location: "Jalandhar, Punjab",
      period: "2022 — 2026",
      description: "Currently pursuing a Bachelor's degree in Computer Science with a focus on software development and testing methodologies."
    },
    {
      id: 2,
      degree: "12th with Science",
      institution: "Sacred Heart Senior Secondary School",
      location: "Dharamshala, Himachal Pradesh",
      period: "2021 — 2022",
      description: "Completed higher secondary education with a focus on Science subjects."
    },
    {
      id: 3,
      degree: "10th with Science",
      institution: "Sacred Heart Senior Secondary School",
      location: "Dharamshala, Himachal Pradesh",
      period: "2019 — 2020",
      description: "Completed secondary education with strong foundation in Science and Mathematics."
    }
  ],
  certificates: [
    {
      id: 1,
      title: "Web and Mobile Testing with Selenium",
      issuer: "Coursera",
      date: "November 2024",
      description: "Comprehensive training in web and mobile application testing using Selenium automation framework."
    },
    {
      id: 2,
      title: "C++ Object Basics: Functions, Recursion, and Objects",
      issuer: "Coursera",
      date: "September 2023",
      description: "Mastery of fundamental C++ concepts including object-oriented programming principles and implementation."
    }
  ]
};
