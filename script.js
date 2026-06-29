// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Contact form submission
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(this);
    
    // Simple validation and feedback
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
    
    // In a real application, you would send this data to a server
    // Example:
    // fetch('/api/contact', {
    //     method: 'POST',
    //     body: JSON.stringify(Object.fromEntries(formData))
    // })
});

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all feature cards and project cards
document.querySelectorAll('.feature-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Mobile menu toggle (if you add a hamburger menu later)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}