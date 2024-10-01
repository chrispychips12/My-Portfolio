document.addEventListener('DOMContentLoaded', function() {

    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.error('GSAP or ScrollTrigger is not loaded');
        return;
    }

    // New animateText function
    function animateText(element, finalText) {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let iteration = 0;

        const interval = setInterval(() => {
            element.innerText = finalText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return finalText[index];
                    }
                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");

            if (iteration >= finalText.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    }

    // Animate header links
    const headerLinks = document.querySelectorAll('.header-scroll .link-text');
    headerLinks.forEach(link => {
        const originalText = link.textContent;
        link.addEventListener('mouseenter', () => {
            animateText(link, originalText);
        });
    });

    // Scroll animations
    gsap.registerPlugin(ScrollTrigger);

    // Fade in sections
    const sections = gsap.utils.toArray('section');
    if (sections.length > 0) {
        sections.forEach(section => {
            try {
                gsap.from(section, {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                });
            } catch (error) {
                console.error('Error animating section:', error);
            }
        });
    }
    // Animate project cards
    const projectCards = gsap.utils.toArray('.project-card');
    if (projectCards.length > 0) {
        projectCards.forEach(card => {
            const title = card.querySelector('h3');
            const description = card.querySelector('p');
            const originalTitle = title.dataset.original;
            const originalDescription = description.textContent;

            function shuffleText(element, originalText, duration = 2000) {
                const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                let interval = null;
                let iteration = 0;

                clearInterval(interval);

                interval = setInterval(() => {
                    element.innerText = originalText
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return originalText[index];
                            }
                            return letters[Math.floor(Math.random() * 26)]
                        })
                        .join("");

                    if (iteration >= originalText.length) {
                        clearInterval(interval);
                    }

                    iteration += 1 / 3;
                }, 30);
            }

            card.addEventListener('mouseenter', () => {
                shuffleText(title, originalTitle);
                shuffleText(description, originalDescription);
            });
            card.addEventListener('mouseleave', () => {
                title.textContent = originalTitle;
                description.textContent = originalDescription;
            });

            gsap.from(card, {
                opacity: 0,
                scale: 0.8,
                duration: 0.5,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            });
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hero section animations
    const planets = document.querySelectorAll('.planet');
    const heroSection = document.querySelector('#hero');
    const stars = document.querySelector('#stars');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const heroHeight = heroSection.offsetHeight;
        const scrollPercentage = scrollPosition / heroHeight;

        planets.forEach((planet, index) => {
            const speed = 0.2 + (index * 0.1);
            const yPos = scrollPercentage * 100 * speed;
            const rotation = scrollPercentage * 360 * speed;
            planet.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
        });

        // Stars parallax effect
        const starsYPos = scrollPercentage * 1000;
        stars.style.transform = `translateY(${starsYPos}px)`;
    });

    // Header scroll effect
    const header = document.querySelector('.header-scroll');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const opacity = Math.max(0, 1 - scrollTop / 200);
        header.style.opacity = opacity;

        if (scrollTop > lastScrollTop) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });

    // Custom mouse cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    document.body.addEventListener('mouseenter', (e) => {
        if (e.target.matches('a, button')) {
            cursor.classList.add('hover');
        }
    }, true);

    document.body.addEventListener('mouseleave', (e) => {
        if (e.target.matches('a, button')) {
            cursor.classList.remove('hover');
        }
    }, true);

    // Animate journey timeline
    const journeySection = document.querySelector('#my-journey');
    const progressBar = document.querySelector('.timeline-progress-bar');
    const journeyItems = gsap.utils.toArray('.timeline-item');

    if (journeySection && progressBar && journeyItems.length > 0) {
        gsap.to(progressBar, {
            scaleY: 1,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
                trigger: journeySection,
                start: "top center",
                end: "bottom center",
                scrub: true,
            }
        });

        journeyItems.forEach((item, index) => {
            const content = item.querySelector('.timeline-content');
            const connector = item.querySelector('.timeline-connector');

            gsap.from(content, {
                opacity: 0,
                scale: 0.8,
                duration: 0.5,
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            if (connector) {
                gsap.from(connector, {
                    scaleX: 0,
                    transformOrigin: index % 2 === 0 ? "left center" : "right center",
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                });
            }
        });
    }

    const heroText = document.querySelector('#hero h2');
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';

        function typeText() {
            heroText.textContent = '';
            for (let i = 0; i < text.length; i++) {
                const span = document.createElement('span');
                span.textContent = text[i];
                span.style.opacity = '0';
                heroText.appendChild(span);
                gsap.to(span, {
                    opacity: 1,
                    duration: 0.1,
                    delay: i * 0.1
                });
            }
            gsap.delayedCall(5, () => {
                gsap.to(heroText.children, {
                    opacity: 0,
                    duration: 0.5,
                    stagger: 0.05,
                    onComplete: typeText
                });
            });
        }

        typeText();
    }

    // Vertical progress bar
    const verticalProgressBar = document.querySelector('.vertical-progress-bar');
    let ticking = false;

    function updateProgressBar() {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        verticalProgressBar.style.height = `${scrollPercentage}%`;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateProgressBar);
            ticking = true;
        }
    });

    // Tech logo carousel
    const carousel = document.querySelector('.tech-carousel');
    if (carousel) {
        const logos = Array.from(carousel.children);
        const totalWidth = logos.reduce((acc, logo) => acc + logo.offsetWidth + 40, 0); // 40px for gap

        // Clone logos and append to the end
        logos.forEach(logo => {
            const clone = logo.cloneNode(true);
            carousel.appendChild(clone);
        });

        gsap.to(carousel, {
            x: -totalWidth / 2,
            duration: 20,
            ease: "linear",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % (totalWidth / 2))
            }
        });
    }

    function createFloatingElements() {
        const container = document.querySelector('.floating-elements');
        for (let i = 0; i < 20; i++) {
            const element = document.createElement('div');
            element.classList.add('floating-element');
            element.style.left = `${Math.random() * 100}%`;
            element.style.animationDelay = `${Math.random() * 15}s`;
            container.appendChild(element);
        }
    }

    createFloatingElements();

    function createStars() {
        const container = document.querySelector('#stars');
        const starCount = 100;
        const stars = [];

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            container.appendChild(star);
            stars.push(star);
        }

        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            stars.forEach(star => {
                const rect = star.getBoundingClientRect();
                const starX = rect.left + rect.width / 2;
                const starY = rect.top + rect.height / 2;

                const dx = mouseX - starX;
                const dy = mouseY - starY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    const angle = Math.atan2(dy, dx);
                    const force = (100 - distance) / 10;
                    const moveX = Math.cos(angle) * force;
                    const moveY = Math.sin(angle) * force;

                    star.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
                } else {
                    star.style.transform = 'translate(0, 0)';
                }
            });
        });
    }

    createStars();

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    function updateCubeRotation() {
        const cube = document.querySelector('.hero-cube');
        if (cube) {
            const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            const rotationDegrees = scrollPercentage * 360;
            cube.style.transform = `rotateX(${rotationDegrees}deg) rotateY(${rotationDegrees}deg)`;
        }
    }

    window.addEventListener('scroll', updateCubeRotation);

    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
