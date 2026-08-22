import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: "SiJava" },
      { name: "Python", icon: "SiPython", level: 70 },
      { name: "Dart", icon: "SiDart" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "PHP", icon: "SiPhp" }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "SiHtml5" },
      { name: "CSS", icon: "SiCss3" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "React", icon: "SiReact", level: 75 }
    ]
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "Flutter", icon: "SiFlutter", level: 85 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs", level: 70 },
      { name: "Express", icon: "SiExpress" }
    ]
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "MySQL", icon: "SiMysql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "Firebase", icon: "SiFirebase" }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "VS Code", icon: "SiVisualstudiocode" },
      { name: "Android Studio", icon: "SiAndroidstudio" },
      { name: "Postman", icon: "SiPostman" },
      { name: "Figma", icon: "SiFigma" }
    ]
  }
];
