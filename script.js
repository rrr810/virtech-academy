// Smooth scroll to courses section
function scrollToCourses() {
    document.getElementById('courses').scrollIntoView({
        behavior: 'smooth'
    });
}

// Smooth scroll to booking section
function scrollToBooking() {
    document.getElementById('booking').scrollIntoView({
        behavior: 'smooth'
    });
}

// Form validation for contact form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const course = document.getElementById('course').value;

    if (!name) {
        alert('Please enter your full name.');
        return;
    }

    if (!email) {
        alert('Please enter your email address.');
        return;
    }

    if (!course) {
        alert('Please select a course of interest.');
        return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
    // Here you would typically send the form data to a server
});

// Form validation for enrollment form
if (document.getElementById('enroll-form')) {
    document.getElementById('enroll-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const fullName = document.getElementById('full-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const contact = document.getElementById('contact').value.trim();
        const age = document.getElementById('age').value;
        const courseInterest = document.getElementById('course-interest').value;

        if (!fullName) {
            alert('Please enter your full name.');
            return;
        }

        if (!email) {
            alert('Please enter your email address.');
            return;
        }

        if (!contact) {
            alert('Please enter your contact number.');
            return;
        }

        if (!age || age < 10 || age > 100) {
            alert('Please enter a valid age between 10 and 100.');
            return;
        }

        if (!courseInterest) {
            alert('Please select a course of interest.');
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Basic phone validation (simple check for digits and length)
        const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(contact)) {
            alert('Please enter a valid contact number.');
            return;
        }

        alert('Enrollment submitted successfully! We will contact you soon.');
        // Here you would typically send the form data to a server
    });
}

// Form validation for booking form
if (document.getElementById('booking-form')) {
    document.getElementById('booking-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const fullName = document.getElementById('full-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const contact = document.getElementById('contact').value.trim();
        const courseInterest = document.getElementById('course-interest').value;
        const preferredDate = document.getElementById('preferred-date').value;
        const preferredTime = document.getElementById('preferred-time').value;
        const sessionType = document.getElementById('session-type').value;

        if (!fullName) {
            alert('Please enter your full name.');
            return;
        }

        if (!email) {
            alert('Please enter your email address.');
            return;
        }

        if (!contact) {
            alert('Please enter your contact number.');
            return;
        }

        if (!courseInterest) {
            alert('Please select a course of interest.');
            return;
        }

        if (!preferredDate) {
            alert('Please select a preferred date.');
            return;
        }

        if (!preferredTime) {
            alert('Please select a preferred time.');
            return;
        }

        if (!sessionType) {
            alert('Please select a session type.');
            return;
        }

        // Check if selected date is not in the past
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selectedDate = new Date(preferredDate);

        if (selectedDate < today) {
            alert('Please select a date that is not in the past.');
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Basic phone validation (simple check for digits and length)
        const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(contact)) {
            alert('Please enter a valid contact number.');
            return;
        }

        alert('Booking submitted successfully! We will contact you to confirm your session.');
        // Here you would typically send the form data to a server
    });
}

// Back to top button
window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.course-card, .about, .courses, .contact, .booking-form-section');
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Add loading animation to course cards with staggered effect
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Course card hover effects (optional)
const courseCards = document.querySelectorAll('.course-card');
courseCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
