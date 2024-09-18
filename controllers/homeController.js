const express = require('express');
const router = express.Router();

const journeyItems = [
    {
        year: "2024",
        title: "Talent Sourcer @ Immutable",
        date: "2024",
        description: "As a Talent Sourcer, I'm responsible for finding and attracting top-tier talent for tech companies. This involves sourcing candidates through various channels, screening resumes, and providing sourcing support and strategies to the TA function.",
        color: "#00FFFF"
    },
    {
        year: "2024",
        title: "USYD Coding Student",
        date: "2024",
        description: "Coding Bootcamp Student, learning the ropes of web development and beyond.",
        color: "#FF00FF"
    },
    {
        year: "2024",
        title: "Talent Acquisition Specialist @ Talent International",
        date: "2024 - Present",
        description: "As a Talent Acquisition Specialist, I help companies with their TA function, supporting across various functions to improve their quality of standard and find top talent for their business.",
        color: "#00FFFF"
    },
    {
        year: "2021",
        title: "Recruitment Consultant @ Scouut",
        date: "2021 - 2024",
        description: "As a recruitment consultant at Scouut, I was responsible for sourcing and recruiting top talent for various clients in the tech industry.",
        color: "#FF00FF"
    },
    {
        year: "2019",
        title: "Senior Team Lead / Sales Consultant @ ShineHub",
        date: "2019 - 2021",
        description: "As a Senior Team Lead / Sales Consultant at ShineHub, I was responsible for leading a team of recruiters and sales consultants, as well as managing customer relationships and ensuring the delivery of high-quality services.",
        color: "#00FFFF"
    },
    {
        year: "2018",
        title: "Senior Customer Service Specialist @ CommInsure / AIA",
        date: "2018-2019",
        description: "As a senior customer service specialist, I helped customers with their insurance needs, and maintained a high level of customer satisfaction.",
        color: "#FF00FF"
    }
];

const myProjects = [
  { name: 'Prework Study Guide', description: 'A study guide for prework', url: 'https://github.com/chrispychips12/prework-study-guide' },
  { name: 'Mini Project 1', description: 'First mini project', url: 'https://github.com/chrispychips12/mini-project-1' },
  { name: 'Advanced CSS Wireframe', description: 'Wireframe using advanced CSS', url: 'https://github.com/chrispychips12/Advanced-CSS-Wireframe-1' },
  { name: 'USYD Challenge Week 1', description: 'First week challenge for USYD', url: 'https://github.com/chrispychips12/USYD-Challenge-week1' },
  { name: 'Pay Roll Tracker', description: 'Application to track payroll', url: 'https://github.com/chrispychips12/Pay-Roll-Tracker' },
  { name: 'Personal Blog Template', description: 'Template for a personal blog', url: 'https://github.com/chrispychips12/Personal-Blog-Template' },
  { name: 'Personal Task Board', description: 'A board to manage personal tasks', url: 'https://github.com/chrispychips12/personal-task-board' },
  { name: 'Weather Dashboard', description: 'Dashboard to display weather information', url: 'https://github.com/chrispychips12/weather-dashboard' },
  { name: 'Potential Enigma', description: 'A mysterious project', url: 'https://github.com/chrispychips12/potential-enigma' },
  { name: 'SVG Logo Generator', description: 'Tool to generate SVG logos', url: 'https://github.com/chrispychips12/svg-logo-generator' },
  { name: 'Express Note Taker', description: 'Note-taking application using Express', url: 'https://github.com/chrispychips12/express-note-taker' },
  { name: 'Employee Tracker', description: 'Application to track employees', url: 'https://github.com/chrispychips12/employee-tracker' },
];

const groupProjects = [
  { name: 'FocusTrack', description: 'Group project for task management', url: 'https://github.com/Cbeattie97/FocusTrack' },
  { name: 'Recipe Book', description: 'Collaborative recipe book project', url: 'https://github.com/ChrisReynolds0508/recipe-book' },
];

const techLogos = [
    { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Handlebars", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg" },
    { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "SQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Sequelize", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" },
    { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Bootstrap", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
    { name: "Tailwind", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Express", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
];

router.get('/', (req, res) => {
    res.render('home', {
        journeyItems: journeyItems,
        myProjects: myProjects,
        groupProjects: groupProjects,
        techLogos: techLogos
    });
});

module.exports = router;