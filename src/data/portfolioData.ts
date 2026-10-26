import { Project, EducationItem, Coursework, DocumentItem } from '../types';

export const personalInfo = {
  name: "Rebecca",
  role: "Driven IT Professional & Web Developer",
  subRole: "Specializing in Cloud Security & Responsive Digital Experiences",
  headline: "Driven IT Professional & Web Developer specializing in Cloud Security & Responsive Digital Experiences.",
  summary1: "Driven IT diploma student at KCA University seeking a 3-month industrial attachment (September - November 2026). Passionate about cloud security and web development. Proven ability to build real websites for real people.",
  summary2: "Junior Achievers national runner-up (2nd place, Kenya). Self-taught cloud enthusiast actively learning Linux and AWS. Hardworking, detail-oriented, and applies classroom knowledge to real-world projects.",
  email: "2502692@students.kcau.ac.ke",
  phone: "0116968755",
  linkedin: "https://linkedin.com/in/becca-afk",
  github: "https://github.com/becca-afk",
  attachmentPeriod: "September - November 2026",
};

export const educationList: EducationItem[] = [
  {
    qualification: "Diploma in Information Technology",
    institution: "KCA University",
    period: "2025 - 2027 (Expected)",
  },
  {
    qualification: "KCSE (Grade C)",
    institution: "AgaKhan Highschool",
    period: "Completed",
  },
];

export const completedCoursework: Coursework[] = [
  { title: "Computer Architecture", grade: "A" },
  { title: "Operating Systems", grade: "B" },
  { title: "Database Systems", grade: "A-" },
  { title: "Web Development", grade: "A" },
];

export const currentStudies: Coursework[] = [
  { title: "Java Programming" },
  { title: "Network Design" },
  { title: "Application Programming" },
  { title: "Data Structures" },
];

export const projectsList: Project[] = [
  {
    id: "perfume-store",
    title: "Perfume Store",
    description: "Live e-commerce site with a custom WhatsApp ordering system to streamline payments and customer interaction.",
    tags: ["HTML", "CSS", "Vercel", "WhatsApp API"],
    demoUrl: "https://first-class-perfume.vercel.app",
    badge: "Live E-Commerce",
  },
  {
    id: "car-showcase",
    title: "Car Showcase",
    description: "Modern, responsive gallery for vehicle listings optimized for all devices and screen sizes.",
    tags: ["HTML", "CSS", "GitHub Pages"],
    demoUrl: "https://becca-afk.github.io/car-website/index.html",
    badge: "Showcase Gallery",
  },
  {
    id: "portfolio-website",
    title: "Professional Portfolio",
    description: "This very portfolio site, built with a focus on performance, aesthetics, and clean code.",
    tags: ["React 19", "TypeScript", "Vite", "Responsive Design"],
    sourceUrl: "https://github.com/becca-afk/portfolio",
    badge: "React App",
  },
];

export const documentsList: DocumentItem[] = [
  {
    id: "cv",
    title: "Curriculum Vitae",
    description: "Detailed professional background, education, and career history.",
    fileUrl: "/CV.pdf",
    iconType: "cv",
  },
  {
    id: "resume",
    title: "Professional Resume",
    description: "A concise summary of my key skills and achievements.",
    fileUrl: "/Resume.pdf",
    iconType: "resume",
  },
  {
    id: "cover-letter",
    title: "Cover Letter",
    description: "Personalized letter highlighting my passion and suitability for roles.",
    fileUrl: "/Cover_Letter.pdf",
    iconType: "letter",
  },
];

export const technicalSkills: string[] = [
  "HTML/CSS",
  "JavaScript",
  "Java",
  "Linux",
  "AWS",
  "SQL",
];

export const softSkills: string[] = [
  "Problem Solving",
  "Leadership",
  "Quick Learner",
  "Teamwork",
];
