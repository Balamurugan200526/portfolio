import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "College Bus Tracking System",
    description: "A comprehensive mobile solution that provides real-time bus tracking for college students, with separate dashboards for admin, drivers, and students.",
    features: [
      "Real-time bus tracking",
      "Admin Dashboard",
      "Driver Dashboard",
      "Student Dashboard",
      "Push Notifications",
      "Live Location Updates",
      "Authentication",
      "Route Management"
    ],
    techStack: ["Flutter", "Firebase", "Google Maps", "Cloud Firestore", "FCM"],
    githubUrl: "https://github.com/Balamurugan200526/College-Bus-Tracking-System-and-Management.git", 
    liveUrl: "https://drive.google.com/file/d/1Gcwc4omYm5A098nuoTdVygoICUNuFzs1/view?usp=drive_link",   
    imagePlaceholder: "bus-tracking",
    imageUrl: "/projects/College Bus Tracking.png",
    featured: true,
    category: "Flutter"
  },
  {
    id: "proj-2",
    title: "Event Registration System",
    description: "A full-stack event management platform with automated registration, QR code tickets, and an intelligent chatbot.",
    features: [
      "Event registration portal",
      "Unique ID generation",
      "Automated confirmation emails",
      "AI-powered chatbot assistance",
      "Admin event management"
    ],
    techStack: ["React", "Node.js", "MongoDB", "Member ID Generation", "Email Automation", "AI Chatbot"],
    githubUrl: "https://github.com/Balamurugan200526/college-event-registration.git", // TODO: Add GitHub URL
    liveUrl: "https://college-event-registration-alpha.vercel.app/",   // TODO: Add Live Demo URL
    imagePlaceholder: "event-registration",
    imageUrl: "/projects/event-registration.png",
    featured: true,
    category: "React"
  },
   {
    id: "proj-3",
    title: "Library management system",
    description: "A full-stack event management platform with automated registration, QR code tickets, and an intelligent chatbot.",
    features: [
      "Book Management",
      "Member Management",
      "Book Issue",
      "Book Return",
      "Book Availability Tracking",
      "Efficient Data Management",
    ],
    techStack: ["Java", "Core Java", "JDBC", "MySQL", "Email Automation", ""],
    githubUrl: "https://github.com/Balamurugan200526/Library-Management-System-using-Core-Java.git", // TODO: Add GitHub URL
    liveUrl: "#",   // TODO: Add Live Demo URL
    imagePlaceholder: "event-registration",
    imageUrl: "/projects/library.jpg",
    featured: true,
    category: "React"
  },
  {
    id: "proj-4",
    title: "PG Life",
    description: "A responsive web platform for finding and booking paying guest accommodations, with advanced search and filter capabilities.",
    features: [
      "PG listing search",
      "Responsive UI",
      "Filter & search",
      "User authentication",
      "Booking management"
    ],
    techStack: ["React", "PHP", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/Balamurugan200526/pg-life.git", // TODO: Add GitHub URL
    liveUrl: "https://pglifeproject.wuaze.com",   // TODO: Add Live Demo URL
    imagePlaceholder: "pg-life",
    imageUrl: "/projects/pg-life.png",
    category: "React"
  },
  {
    id: "proj-5",
    title: "E-waste Facility locator",
    description: "A smart attendance system using face recognition technology, built as a cross-platform desktop application.",
    features: [
      "Face recognition attendance",
      "Desktop application",
      "Real-time processing",
      "Attendance reports",
      "Student management"
    ],
    techStack: ["React", "Node.js", "MongoDB", "QR code generation"],
    githubUrl: "https://github.com/Balamurugan200526/E-Waste-recycle-Locator.git", // TODO: Add GitHub URL
    liveUrl: "https://e-waste-recycle-locator.vercel.app",   // TODO: Add Live Demo URL
    imagePlaceholder: "attendance",
    imageUrl:"/projects/e-waste.png",
    category: "Full Stack"
  }
];
