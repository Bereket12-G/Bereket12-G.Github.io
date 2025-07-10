// Navigation Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Scroll Reveal Animations
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 400,
});

sr.reveal('.home-text', {});
sr.reveal('.home-img', { delay: 500 });
sr.reveal('.section-title', { delay: 200 });
sr.reveal('.about-description', { delay: 300 });
sr.reveal('.skill-item', { interval: 100 });
sr.reveal('.project-card', { interval: 200 });

// Initialize DOM elements first
const projectsGrid = document.querySelector('.projects-grid');
const skillsGrid = document.querySelector('.skills-grid');

// Projects Data
const projects = [
    {
        title: 'Education center website',
        description: 'A simple interactive and informative website.its not too much fancy but it well done.',
        image: 'assets/project1.jpg',
        github: 'https://github.com/Bereket12-G.Github.com/Lucy-Education-Center'
    },
    {
        title: 'Stopwatch Application',
        description: 'A precise stopwatch web application with lap timing, split times, and a clean interface for time tracking.',
        image: 'assets/project3.jpg',
        github: 'https://github.com
    }
];

// Skills Data
const frontendSkills = [
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js' }
];

const backendSkills = [
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Java', icon: 'fab fa-java' }
];

// Update Skills Population
const frontendContainer = document.querySelector('.frontend .skill-items');
const backendContainer = document.querySelector('.backend .skill-items');

frontendSkills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.innerHTML = `
        <i class="${skill.icon}"></i>
        <span>${skill.name}</span>
    `;
    frontendContainer.appendChild(skillItem);
});

backendSkills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.innerHTML = `
        <i class="${skill.icon}"></i>
        <span>${skill.name}</span>
    `;
    backendContainer.appendChild(skillItem);
});

// Populate Projects
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-links">
                <a href="${project.github}" class="button" target="_blank">View code on GitHub</a>
            </div>
        </div>
    `;
    projectsGrid.appendChild(projectCard);
});

// Populate Skills
skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.innerHTML = `<h3>${skill}</h3>`;
    skillsGrid.appendChild(skillItem);
});

// Contact Form
const contactForm = document.getElementById('contact-form');

// Contact Form Handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create mailto URL with form data
    const mailtoUrl = `mailto:bereketgezhagne12@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    // Open default email client
    window.location.href = mailtoUrl;

    // Clear the form
    this.reset();
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header Scroll Effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }

    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }

    lastScroll = currentScroll;
});

// Metrics Animation
// Metrics Animation
function animateMetrics() {
    const metrics = document.querySelectorAll('.metric-number');

    metrics.forEach(metric => {
        const target = parseInt(metric.getAttribute('data-count'));
        let count = 0;
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps

        const updateCount = () => {
            count += increment;
            if (count < target) {
                metric.textContent = Math.round(count);
                requestAnimationFrame(updateCount);
            } else {
                metric.textContent = target;
            }
        };

        updateCount();
    });
}

// Intersection Observer for metrics animation
const metricsSection = document.querySelector('#metrics');
if (metricsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateMetrics();
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(metricsSection);
}

// Add interactive hover effect to the name
const title = document.querySelector('.title');
if (title) {
    title.innerHTML = title.textContent.split('').map(letter => 
        `<span class="letter">${letter}</span>`
    ).join('');

    const letters = title.querySelectorAll('.letter');
    letters.forEach(letter => {
        letter.addEventListener('mouseover', () => {
            letter.style.color = 'var(--primary-color)';
            letter.style.transform = 'translateY(-5px)';
            letter.style.transition = 'all 0.3s ease';
        });
        letter.addEventListener('mouseout', () => {
            letter.style.color = '';
            letter.style.transform = '';
        });gi
    });
}