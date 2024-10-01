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
const headerSource = fs.readFileSync(path.join(__dirname, 'views', 'partials', 'header.handlebars'), 'utf8');
Handlebars.registerPartial('header', headerSource);
const footerSource = fs.readFileSync(path.join(__dirname, 'views', 'partials', 'footer.handlebars'), 'utf8');
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
const homeContent = homeTemplate({});
const fullHomeContent = layoutTemplate({ body: homeContent });
writeHTMLFile('index.html', fullHomeContent);

// Render the about page
const aboutContent = layoutTemplate({ body: '<h1>About Chris</h1><p>This is the about page.</p>' });
writeHTMLFile('about.html', aboutContent);

console.log('Build complete!');