export const skillsData = [
  {
    title: "Frontend skills",
    description: `with expertise in HTML5, CSS3, and JavaScript (ES6+), bringing ideas
            to life on the web. Skilled in utilizing popular frameworks like
            jQuery and React for dynamic, interactive experiences, and adept
            with responsive design through Tailwind CSS and Bootstrap to ensure
            visually appealing layouts across devices. and have explored
            creative tools like Figma and Affinity Design`,
    tags: [
      "html5",
      "css3",
      "javascript",
      "tailwindCss",
      "react",
      "netlify",
      "affinityDesign",
      "motion",
      "rechart",
    ],
    img: "./img/computer.gif",
    id: 1,
  },
  {
    title: "Backend skills",
    description: `server-side development with PHP, MySQL, and PostgreSQL, enabling
            robust data management and efficient database interactions. Skilled
            in building scalable, secure APIs with Node.js and Express,
            providing seamless backend support for web applications.`,
    tags: [
      "nodejs",
      "mySql",
      "postgresql",
      "apache",
      "aws",
      "cloudflare",
      "express",
    ],
    img: "./img/backend.gif",
    id: 2,
  },
  {
    title: "Other skills",
    description: `Familiar with essential development tools and environments,
            including Git and GitHub for version control, and Visual Studio Code
            for efficient code editing. Experienced with npm , debian linux and
            Apache server. Additionally, I have foundational knowledge in Web3,
            Motoko as well as libraries like Leaflet for map integration.
            Familiar with AI tools like ChatGPT and GitHub Copilot for coding
            assistance and enhancing productivity`,
    tags: [
      "git",
      "vscode",
      "gitHub",
      "aws",
      "cloudflare",
      "msOffice",
      "chatGpt",
    ],
    img: "./img/skills.gif",
    id: 3,
  },
];

export const chartColors = [
  "#115f9a",
  "#1984c5",
  "#22a7f0",
  "#48b5c4",
  "#76c68f",
  "#a6d75b",
  "#c9e52f",
  "#d0ee11",
  "#d0f400",
];
export const chartData = [
  { name: "HTML", percent: 90, type: 1 },
  { name: "CSS", percent: 70, type: 2 },
  { name: "JavaScript", percent: 62, type: 3 },
  { name: "Tailwind", percent: 50, type: 5 },
  { name: "React", percent: 36, type: 4 },
  { name: "Nodejs", percent: 24, type: 7 },
];
export const chartLevels = ["Beginner", "", "Intermediate", "", "Proficient"];
