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
const headerSource = fs.readFileSync(path.join(__dirname, 'views', 'partials', 'header.handlebars'), 'utf8');
Handlebars.registerPartial('header', headerSource);

const footerSource = fs.readFileSync(path.join(__dirname, 'views', 'partials', 'footer.handlebars'), 'utf8');
Handlebars.registerPartial('footer', footerSource);

// Render the home page
const homeContent = homeTemplate({});
const fullHomeContent = layoutTemplate({ body: homeContent });

// Write the rendered content to index.html
fs.writeFileSync(path.join(__dirname, 'index.html'), fullHomeContent);

console.log('Build complete!');
