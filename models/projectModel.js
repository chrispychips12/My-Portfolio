const myProjects = [
  { name: 'Prework Study Guide', description: 'A study guide for USYD prework', url: 'https://github.com/chrispychips12/prework-study-guide' },
  { name: 'Mini Project 1', description: 'First mini project', url: 'https://github.com/chrispychips12/mini-project-1' },
  { name: 'Advanced CSS Wireframe', description: 'Wireframe using advanced CSS', url: 'https://github.com/chrispychips12/Advanced-CSS-Wireframe-1' },
  { name: 'USYD Challenge Week 1', description: 'First week challenge for USYD', url: 'https://github.com/chrispychips12/USYD-Challenge-week1' },
  { name: 'Pay Roll Tracker', description: 'Application to track payroll', url: 'https://github.com/chrispychips12/Pay-Roll-Tracker' },
  { name: 'Personal Blog Template', description: 'Template for a personal blog', url: 'https://github.com/chrispychips12/Personal-Blog-Template' },
  { name: 'Personal Task Board', description: 'A board to manage personal tasks', url: 'https://github.com/chrispychips12/personal-task-board' },
  { name: 'Weather Dashboard', description: 'Dashboard to display weather information', url: 'https://github.com/chrispychips12/weather-dashboard' },
  { name: 'ReadMe Generator', description: 'A backend ReadMe generator', url: 'https://github.com/chrispychips12/potential-enigma' },
  { name: 'SVG Logo Generator', description: 'Tool to generate SVG logos', url: 'https://github.com/chrispychips12/svg-logo-generator' },
  { name: 'Express Note Taker', description: 'Note-taking application using Express', url: 'https://github.com/chrispychips12/express-note-taker' },
  { name: 'Employee Tracker', description: 'Backend application to track employees', url: 'https://github.com/chrispychips12/employee-tracker' },
];

const groupProjects = [
  { name: 'FocusTrack', description: 'Group project for task management', url: 'https://github.com/Cbeattie97/FocusTrack' },
  { name: 'Recipe Book', description: 'Collaborative recipe book project', url: 'https://github.com/ChrisReynolds0508/recipe-book' },
];

module.exports = {
  getMyProjects: () => myProjects,
  getGroupProjects: () => groupProjects,
};

