import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

import profileImg from "../assets/arpit.jpg";

import projectImg1 from "../assets/e-commerce.jpg";
import projectImg2 from "../assets/chat-app.jpg";
import projectImg3 from "../assets/blood-bank.jpg";

export const assets = {
  profileImg,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Problem Solving",
    description:
      "I enjoy solving practical problems by building useful and reliable software solutions.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "User-Focused",
    description:
      "I focus on creating responsive interfaces that provide a clean and intuitive user experience.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I aim to write structured, maintainable, and efficient code using modern development practices.",
    color: "text-blue",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive web interfaces using modern frontend technologies.",
    tags: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description:
      "Developing server-side applications and RESTful APIs for web applications.",
    tags: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Working with databases to store, manage, and retrieve application data efficiently.",
    tags: ["MongoDB", "SQL", "MySQL"],
  },
  {
    title: "Programming & DSA",
    icon: FaCode,
    description:
      "Applying programming fundamentals, data structures, algorithms, and object-oriented programming.",
    tags: ["C++", "Java", "Python", "DSA", "OOP"],
  },
  {
    title: "Development Tools",
    icon: FaTools,
    description:
      "Using Git and development tools to manage code, debug applications, and support an organized development workflow.",
    tags: ["Git", "GitHub", "VS Code", "MySQL Workbench"],
  },
];

export const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A full-stack e-commerce web application with product listings, real-time cart updates, authentication, and secure checkout.",
    image: projectImg1,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    demo: "https://e-commerce-website-2026-frontend.onrender.com/",
    code: "https://github.com/ArpitPal19/E-Commerce-Website-2026",
  },
  {
    title: "Chat App",
    description:
      "A real-time chat application built with a modern frontend and backend stack for real-time communication.",
    image: projectImg2,
    tech: ["React.js", "Node.js", "Express.js", "Socket.IO"],
    demo: "https://chat-app-client-nyyy.onrender.com/",
    code: "https://github.com/ArpitPal19/Chat-App-2026",
  },
  {
    title: "Blood Bank App",
    description:
      "A full-stack blood bank application for donor registration, blood requests, availability tracking, authentication, and inventory management.",
    image: projectImg3,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    demo: "https://blood-bank-management-app-beta.vercel.app/login",
    code: "https://github.com/ArpitPal19/Blood-Bank-Management-App",
  },
];

export const workData = [
  {
    role: "Web Development Intern",
    company: "Meliorist Developers",
    duration: "Jun 2024 - Aug 2024",
    description:
      "Built and optimized responsive web interfaces using HTML, CSS, JavaScript, and React.js. Integrated RESTful APIs, contributed to debugging and code reviews, and used Git, UI/UX practices, and agile development workflows while collaborating with the development team.",
    color: "purple",
  },
];
