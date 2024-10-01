const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

// Read and compile your main layout
const layoutSource = fs.readFileSync(path.join(__dirname, 'views', 'layouts', 'main.handlebars'), 'utf8');
const layoutTemplate = Handlebars.compile(layoutSource);

// Read and compile your home template
const homeSource = fs.readFileSync(path.join(__dirname, 'views', 'home.handlebars'), 'utf8');
const homeTemplate = Handlebars.compile(homeSource);

// Compile your partials
const partialsDir = path.join(__dirname, 'views', 'partials');
fs.readdirSync(partialsDir).forEach(file => {
    const partialName = path.parse(file).name;
    const partialContent = fs.readFileSync(path.join(partialsDir, file), 'utf8');
    Handlebars.registerPartial(partialName, partialContent);
});

// Function to write HTML files
const writeHTMLFile = (filename, content) => {
    const distDir = path.join(__dirname, 'dist');
    if (!fs.existsSync(distDir)){
        fs.mkdirSync(distDir);
    }
    fs.writeFileSync(path.join(distDir, filename), content);
};

// Render the home page
const data = require('./models/projectModel');
const homeContent = homeTemplate(data);
const fullHomeContent = layoutTemplate({ body: homeContent });
writeHTMLFile('index.html', fullHomeContent);

console.log('Build complete!');