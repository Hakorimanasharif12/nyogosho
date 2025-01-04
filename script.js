// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Form Validation (Placeholder for Booking)
document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;

            if (name && phone && service) {
                alert(`Murakoze ${name}! Mwatsinze umwanya wa ${service}`);
                bookingForm.reset();
            } else {
                alert('Nyamunekauzuza amakuru yose');
            }
        });
    }
});

// Image Gallery Hover Effects
const styleCards = document.querySelectorAll('.style-card');
styleCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Testimonial Rotation
const testimonials = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

function rotateTestimonials() {
    testimonials.forEach(t => t.style.display = 'none');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].style.display = 'block';
}

if (testimonials.length > 1) {
    setInterval(rotateTestimonials, 5000);
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.createElement('div');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '☰';
    navToggle.setAttribute('aria-label', 'Toggle Navigation');
    
    const nav = document.querySelector('nav');
    const navMenu = nav.querySelector('ul');
    
    nav.insertBefore(navToggle, navMenu);

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!nav.contains(event.target)) {
            navMenu.classList.remove('show');
            navToggle.classList.remove('active');
        }
    });
});

// Touch-Friendly Hover Effects
function addTouchHoverEffects() {
    const touchElements = [
        '.service-card', 
        '.style-card', 
        '.team-member', 
        '.testimonial-card'
    ];

    touchElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.addEventListener('touchstart', function() {
                this.style.transform = 'scale(1.05)';
            });
            el.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });
    });
}

// Responsive Image Lazy Loading
function lazyLoadImages() {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.01
    });

    images.forEach(img => {
        if (!img.src) {
            img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        }
        imageObserver.observe(img);
    });
}

// Mobile-Specific Initialization
function initMobileFeatures() {
    addTouchHoverEffects();
    lazyLoadImages();
}

// Run Mobile Features
document.addEventListener('DOMContentLoaded', initMobileFeatures);

// Booking Form Handling
function initBookingForm() {
    const bookingForm = document.getElementById('booking-form');
    
    if (bookingForm) {
        // Phone number validation for your specific number
        const phoneInput = document.getElementById('phone');
        phoneInput.value = '+250 079 838 8890'; // Pre-fill with your number
        phoneInput.addEventListener('input', function(e) {
            // Validate specifically for your number
            const ownerPhoneRegex = /^(\+250)?079\s?838\s?8890$/;
            this.setCustomValidity(
                ownerPhoneRegex.test(this.value.replace(/\s/g, '')) ? '' : 'Andika numero yawe ya telefone'
            );
        });

        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Collect form data
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                service: document.getElementById('service').value,
                date: document.getElementById('date').value,
                time: document.getElementById('time').value,
                contactEmail: 'Hakorimanasharif12@Gmail.com'
            };

            // Basic validation
            const requiredFields = bookingForm.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('error');
                    isValid = false;
                } else {
                    field.classList.remove('error');
                }
            });

            if (isValid) {
                // Simulate booking submission
                try {
                    // In a real-world scenario, you'd send this to a backend
                    console.log('Booking Submitted:', formData);
                    
                    // Sweet alert or custom modal for confirmation
                    const confirmationMessage = `
                        Murakoze ${formData.name}! 
                        Mwatsinze umwanya wa ${formData.service} 
                        ku itariki ${formData.date} isaha ya ${formData.time}. 
                        Tuzagukomeza!
                    `;
                    
                    alert(confirmationMessage);
                    bookingForm.reset();
                } catch (error) {
                    console.error('Booking submission failed:', error);
                    alert('Haracyari ikibazo. Ongera ugerageze.');
                }
            } else {
                alert('Nyamunekauzuza amakuru yose neza.');
            }
        });
    }
}

// Initialize booking form when DOM is loaded
document.addEventListener('DOMContentLoaded', initBookingForm);

// Responsive Booking Form (if implemented later)
function initResponsiveBooking() {
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validate form on mobile
            const requiredFields = bookingForm.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('error');
                    isValid = false;
                } else {
                    field.classList.remove('error');
                }
            });

            if (isValid) {
                // Mobile-friendly submission feedback
                alert('Mwatsinze umwanya! Tuzagukomeza!');
                bookingForm.reset();
            }
        });
    }
}

// Orientation Change Handling
window.addEventListener('orientationchange', () => {
    // Adjust layout or reload images if needed
    lazyLoadImages();
});

// Preload Images for Smoother Experience
function preloadImages() {
    const imageSources = [
        'images/hero-bg.jpg', 
        'images/haircuts.jpg', 
        'images/shaving.jpg',
        'images/coloring.jpg',
        'images/stylist1.jpg',
        'images/stylist2.jpg'
    ];

    imageSources.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}
