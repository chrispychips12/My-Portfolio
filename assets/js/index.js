document.getElementById('toggle-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('header, button, a, nav, p, main, .featured-project, .card, #contact, input, textarea, footer').forEach(function(element) {
        element.classList.toggle('dark-mode');
    });
});
