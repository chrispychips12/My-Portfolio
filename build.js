const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

// Ensure dist directory exists
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)){
    fs.mkdirSync(distDir);
}

// Read and compile your main layout
const layoutSource = fs.readFileSync(path.join(__dirname, 'views', 'layouts', 'main.handlebars'), 'utf8');
const layoutTemplate = Handlebars.compile(layoutSource);

// Register partials
const partialsDir = path.join(__dirname, 'views', 'partials');
fs.readdirSync(partialsDir).forEach(file => {
    const partialName = path.parse(file).name;
    const partialContent = fs.readFileSync(path.join(partialsDir, file), 'utf8');
    Handlebars.registerPartial(partialName, partialContent);
});

// Read and compile your home template
const homeSource = fs.readFileSync(path.join(__dirname, 'views', 'home.handlebars'), 'utf8');
const homeTemplate = Handlebars.compile(homeSource);

// Function to write HTML files
const writeHTMLFile = (filename, content) => {
    fs.writeFileSync(path.join(distDir, filename), content);
};

// Render the home page
const homeContent = homeTemplate({ myProjects: require('./models/projectModel').myProjects });
const fullHomeContent = layoutTemplate({ body: homeContent });
writeHTMLFile('index.html', fullHomeContent);

// Render the about page
const aboutContent = layoutTemplate({ body: '<h1>About Chris</h1><p>This is the about page.</p>' });
writeHTMLFile('about.html', aboutContent);

// Add more pages as needed
console.log('Build complete!');