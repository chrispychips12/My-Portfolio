document.addEventListener('DOMContentLoaded', () => {


    // New animateText function
    function animateText(element, finalText) {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let iteration = 0;
        
        const interval = setInterval(() => {
            element.innerText = finalText
                .split("")
                .map((letter, index) => {
                    if(index < iteration) {
                        return finalText[index];
                    }
                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");
            
            if(iteration >= finalText.length){ 
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
        });
    }

    // Animate project cards
    const projectCards = gsap.utils.toArray('.project-card');
    if (projectCards.length > 0) {
        projectCards.forEach(card => {
            const title = card.querySelector('h3');
            const description = card.querySelector('p');
            const originalTitle = title.textContent;
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
                            if(index < iteration) {
                                return originalText[index];
                            }
                            return letters[Math.floor(Math.random() * 26)]
                        })
                        .join("");
                    
                    if(iteration >= originalText.length){ 
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
    const floatingElements = gsap.utils.toArray('.floating-element');
    if (floatingElements.length > 0) {
        floatingElements.forEach(element => {
            gsap.to(element, {
                y: "random(-30, 30)",
                x: "random(-30, 30)",
                rotation: "random(-15, 15)",
                duration: "random(3, 6)",
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });
        });
    }


    // Header scroll effect
    const header = document.querySelector('.header-scroll');
    window.addEventListener('scroll', () => {
        const scrollPercentage = Math.min(window.scrollY / 500, 1);
        header.style.opacity = 1 - scrollPercentage;
        header.classList.toggle('scrolled', window.scrollY > 0);
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
    const carouselInner = document.querySelector('.tech-carousel-inner');

    if (carouselInner) {
        const totalWidth = carouselInner.scrollWidth;
        const visibleWidth = carouselInner.offsetWidth;

        gsap.to('.tech-carousel-inner', {
            x: () => -(totalWidth - visibleWidth),
            ease: 'none',
            duration: 20,
            repeat: -1,
            yoyo: true
        });
    }

    // ... (other code)
});
