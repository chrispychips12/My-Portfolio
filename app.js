const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');


const app = express();

// Set up Handlebars
app.engine('handlebars', engine({
    helpers: {
        json: function(context) {
            return JSON.stringify(context, null, 2);
        },
        isEven: function(value) {
            return value % 2 === 0;
        }
    }
}));
app.set('view engine', 'handlebars');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const homeController = require('./controllers/homeController');
app.use('/', homeController);

// Add this after your existing routes
app.use((req, res) => {
    res.status(404).render('404', { title: '404 - Page Not Found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

