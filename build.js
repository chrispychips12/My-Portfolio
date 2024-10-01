const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const { myProjects, groupProjects, techLogos, journeyItems } = require('./models/projectModel');

// Function to copy files
const copyFile = (src, dest) => {
    fs.copyFileSync(src, dest);
};

// Function to copy directories
const copyDirectory = (src, dest) => {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest);
    }
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        entry.isDirectory() ? copyDirectory(srcPath, destPath) : copyFile(srcPath, destPath);
    }
};

// Read and compile your main layout
const layoutSource = fs.readFileSync(path.join(__dirname, 'views', 'layouts', 'main.handlebars'), 'utf8');
const layoutTemplate = Handlebars.compile(layoutSource);

// Read and compile your home template
const homeSource = fs.readFileSync(path.join(__dirname, 'views', 'home.handlebars'), 'utf8');
const homeTemplate = Handlebars.compile(homeSource);

// Compile your partials
const partialsDir = path.join(__dirname, 'views', 'partials');
const headerSource = fs.readFileSync(path.join(partialsDir, 'header.handlebars'), 'utf8');
Handlebars.registerPartial('header', headerSource);
const footerSource = fs.readFileSync(path.join(partialsDir, 'footer.handlebars'), 'utf8');
Handlebars.registerPartial('footer', footerSource);

// Function to write HTML files
const writeHTMLFile = (filename, content) => {
    const distDir = path.join(__dirname, 'dist');
    if (!fs.existsSync(distDir)){
        fs.mkdirSync(distDir);
    }
    fs.writeFileSync(path.join(distDir, filename), content);
};

// Render the home page
const homeContent = homeTemplate({
    myProjects: myProjects,
    groupProjects: groupProjects,
    techLogos: techLogos,
    journeyItems: journeyItems
});
const fullHomeContent = layoutTemplate({ body: homeContent });
writeHTMLFile('index.html', fullHomeContent);

// Copy models to dist directory
const modelsSrcDir = path.join(__dirname, 'models');
const modelsDestDir = path.join(__dirname, 'dist', 'models');
copyDirectory(modelsSrcDir, modelsDestDir);

console.log('Build complete!');