// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  Java,
  sap,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  school,
  college,
  university,
  research,
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
  webd,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  { id: "about", title: "About", link: null },
  { id: "academics", title: "Academics", link: null }, 
  { id: "contact", title: "Contact", link: null },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/IAmBiswabhusan/Biswa-Portfolio",
  },
  {
    id: "Resume",
    title: "Resume",
    link: "https://resume-rho-azure.vercel.app/",
  },
] as const;

// Services
export const SERVICES = [
  { title: "Web Developer", icon: web },
  { title: "Java Developer", icon: mobile },
  { title: "ABAP Backend Developer", icon: backend },
  { title: "Python Developer", icon: creator },
] as const;

// Technologies
export const TECHNOLOGIES = [
  { name: "JAVA", icon: Java },
  { name: "SAP-ABAP", icon: sap },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
] as const;

// ✅ Academic Journey (replaces EXPERIENCES)
export const ACADEMICS = [
  {
    title: "10th Standard",
    institution_name: "Puri Zilla School",
    icon: school,
    iconBg: "#383E56",
    date: "Completed in 2017",
    points: [
      "Secured 77% in Matriculation.",
      "Completed 10th standard with strong foundation in Mathematics and Science.",
      "Developed interest in Computer Science fundamentals.",
    ],
  },
  {
    title: "12th Standard",
    institution_name: "Samanta Chandra Sekhar (Autonomous) College, Puri",
    icon: college,
    iconBg: "#E6DEDD",
    date: "Completed in 2021",
    points: [
      "Secured 80% in Higher Secondary Examination.",
      "Focused on Science stream with an inclination towards Computer Science.",
    ],
  },
  {
    title: "B.Sc in Computer Science",
    institution_name: "Utkal University",
    icon: university,
    iconBg: "#383E56",
    date: "2021 - 2024",
    points: [
      "Graduated with CGPA: 8.58.",
      "Built a strong foundation in programming, data structures, and algorithms.",
      "Explored database management systems, operating systems, and computer networks.",
    ],
  },
  {
    title: "MCA",
    institution_name: "Odisha University of Technology and Research",
    icon: research,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Pursuing MCA with CGPA: 9.20 (till 2nd Semester).",
      "Gaining expertise in full-stack development, software engineering, and AI/ML concepts.",
      "Working on academic projects and research-oriented problem solving.",
    ],
  },
] as const;

// ✅ Certifications
export const CERTIFICATIONS = [
  {
    title: "SAP Certified Associate – Back-End Developer (ABAP Cloud)",
    org: "SAP",
    year: "2025",
    icon: cert1,
    link: "https://www.credly.com/badges/352059fd-1129-42e1-a897-3b802b6dda14/public_url", // replace with real link
  },
  {
    title: "Introduction to Cybersecurity",
    org: "CISCO",
    year: "2025",
    icon: cert6,
    link: "https://www.credly.com/badges/627c7164-cddd-4cd8-91e2-34fb7d88d954/public_url", // replace with real link
  },
  {
    title: "JavaScript Essentials 1",
    org: "CISCO",
    year: "2025",
    icon: cert5,
    link: "https://www.credly.com/badges/94e7074e-2090-46f2-bef3-e284cb25cc97/public_url", // replace with real link
  },
  {
    title: "Frontend React Development",
    org: "Study Comrade",
    year: "2025",
    icon: cert2,
    link: "https://drive.google.com/file/d/1vZiWo1TQ3rvreS0Q2TO3gACrqqEt49AO/view?usp=sharing",
  },
  {
    title: "CCNA: Introduction to Networks",
    org: "Cisco",
    year: "2025",
    icon: cert3,
    link: "https://www.credly.com/badges/f07038c9-3c4e-498e-a247-e47f045be626/public_url",
  },
  {
    title: "Complete Java",
    org: "Knowledge Gate",
    year: "2025",
    icon: cert4,
    link: "https://drive.google.com/file/d/136fCWsy8qOcsSn8Aeo34yNYGrnyl6K0W/view?usp=sharing",
  },
] as const;

// ✅ Experiences
export const EXPERIENCES = [
  {
    role: "React Development Intern",
    company: "WebDzen Technologies",
    duration: "Jul 2025 – Present",
    desc: "Developing and enhancing React applications, writing clean/documented code, collaborating in reviews to meet project requirements.",
    icon: webd,
  }
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Netflix Clone",
    description:
      "Developed a responsive streaming web application with dynamic content, interactive UI, and seamless user experience, replicating core features of a modern media platform",
    tags: [
      { name: "HTML5", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: project1,
    source_code_link: "https://github.com/IAmBiswabhusan/Netflix-Clone",
    live_site_link: "https://jolly-frangipane-ec5658.netlify.app/",
  },
  {
    name: "Biswabhusan | Portfolio",
    description:
      "A modern, responsive developer portfolio built with React, Tailwind CSS, showcasing my skills, certifications, and experience with sleek UI and interactive animations.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "Tailwind", color: "green-text-gradient" },
      { name: "Three.js", color: "pink-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/IAmBiswabhusan/Portfolio",
    live_site_link: "#",
  },
  {
    name: "Currency Converter",
    description:
      "A Currency Converter is a web application that allows users to convert amounts from one currency to another using real-time exchange rates. It provides quick, accurate conversions with features like dynamic dropdowns, flag icons, and responsive design for a smooth user experience.",
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "CSS5", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/IAmBiswabhusan/Currency-Converter",
    live_site_link: "https://currency-converter-biswa.netlify.app/",
  },
  {
    name: "Movie Recommendation System",
    description:
      "Built a content-based movie recommendation system that analyzes movie metadata to suggest similar titles, integrating interactive features and poster display for an enhanced user experience.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Machine Learning", color: "green-text-gradient" },
      { name: "Js", color: "pink-text-gradient" },
    ],
    image: project4,
    source_code_link:
      "https://github.com/IAmBiswabhusan/MOVIE-RECOMMENDATION--SYSTEM",
    live_site_link: "#",
  },
  {
    name: "Snake game",
    description:
      "This is a simple Snake Food game where the player controls a snake to eat food and grow in size. The game ends if the snake collides with itself or the screen boundaries. The game makes use of Python libraries such as Pygame for game logic, NumPy for data operations, Pandas for tracking scores, and Seaborn for visualizing results.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Pygame", color: "green-text-gradient" },
    ],
    image: project5,
    source_code_link: "https://github.com/IAmBiswabhusan/SNAKE-GAME",
    live_site_link:
      "https://www.linkedin.com/posts/iambiswabhusan_python-gamedevelopment-ai-activity-7310789577814728707-Y2xW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEwQ4eYBk9UUZSHdt0ZHMHh7CIA_N8pjytQ",
  },
  {
    name: "Stone-Paper-Scissor Game",
    description:
      "Developed an interactive Stone-Paper-Scissors game with real-time user input, dynamic score tracking, and responsive gameplay logic, enhancing engagement through intuitive UI and smooth functionality",
    tags: [
      { name: "HTML5", color: "blue-text-gradient" },
      { name: "CSS3", color: "green-text-gradient" },
      { name: "JS", color: "pink-text-gradient" },
    ],
    image: project6,
    source_code_link: "https://github.com/IAmBiswabhusan/Stone-Paper-Scissors",
    live_site_link: "https://stone-paper-scissor-by-biswa.netlify.app/",
  },
] as const;

// Socials
export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/biswabhusanmohapatra/",
  },
  {
    name: "X",
    icon: twitter,
    link: "https://x.com/IAmBiswabhusan0",
  },
  { name: "GitHub", icon: github, link: "https://github.com/IAmBiswabhusan" },
] as const;
