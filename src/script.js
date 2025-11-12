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

// Zapier webhook URL
const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/25228794/u8m268w/';

// Form validation for contact form
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const course = document.getElementById('course').value;
    const message = document.getElementById('message').value.trim();

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

    // Disable submit button and show loading state
    const submitButton = this.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';

    // Prepare data for Zapier
    const formData = {
        formType: 'contact',
        name: name,
        email: email,
        courseInterest: course,
        message: message,
        submittedAt: new Date().toISOString()
    };

    try {
        // Send data to Zapier webhook
        const response = await fetch(ZAPIER_WEBHOOK_URL, {
            method: 'POST',
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Thank you for contacting us! We will get back to you soon.');
            this.reset(); // Reset form
        } else {
            throw new Error('Failed to submit form');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your form. Please try again or contact us directly at virrtech@gmail.com');
    } finally {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    }
});

// Form validation for enrollment form
if (document.getElementById('enroll-form')) {
    document.getElementById('enroll-form').addEventListener('submit', async function(e) {
        e.preventDefault();

        const fullName = document.getElementById('full-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const contact = document.getElementById('contact').value.trim();
        const age = document.getElementById('age').value;
        const courseInterest = document.getElementById('course-interest').value;
        const additionalInfo = document.getElementById('additional-info').value.trim();

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

        // Disable submit button and show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';

        // Prepare data for Zapier
        const formData = {
            formType: 'enrollment',
            fullName: fullName,
            email: email,
            contact: contact,
            age: age,
            courseInterest: courseInterest,
            additionalInfo: additionalInfo,
            submittedAt: new Date().toISOString()
        };

        try {
            // Send data to Zapier webhook
            const response = await fetch(ZAPIER_WEBHOOK_URL, {
                method: 'POST',
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Enrollment submitted successfully! We will contact you soon to confirm your enrollment.');
                this.reset(); // Reset form
            } else {
                throw new Error('Failed to submit enrollment');
            }
        } catch (error) {
            console.error('Error submitting enrollment:', error);
            alert('There was an error submitting your enrollment. Please try again or contact us directly at virrtech@gmail.com or +254740793959');
        } finally {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
}

// Form validation for booking form
if (document.getElementById('booking-form')) {
    document.getElementById('booking-form').addEventListener('submit', async function(e) {
        e.preventDefault();

        const fullName = document.getElementById('full-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const contact = document.getElementById('contact').value.trim();
        const courseInterest = document.getElementById('course-interest').value;
        const preferredDate = document.getElementById('preferred-date').value;
        const preferredTime = document.getElementById('preferred-time').value;
        const sessionType = document.getElementById('session-type').value;
        const additionalInfo = document.getElementById('additional-info').value.trim();

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

        // Disable submit button and show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';

        // Get readable option texts for better booking details
        const courseOptions = {
            'web-dev': '🌐 Web Development - HTML, CSS, JavaScript',
            'ai': '🤖 AI & Automation - Chatbots & AI Tools',
            'programming': '💻 Programming Fundamentals - Python & Algorithms',
            'entrepreneurship': '🚀 Digital Entrepreneurship - Start Your Tech Business',
            'data-science': '📊 Data Science - Analyze data and build predictive models',
            'computer': '🧠 Computer Science - Understand core computer science principles'
        };

        const timeOptions = {
            'morning': '🌅 Morning (9:00 AM - 12:00 PM)',
            'afternoon': '☀️ Afternoon (1:00 PM - 5:00 PM)',
            'evening': '🌙 Evening (6:00 PM - 9:00 PM)'
        };

        const sessionOptions = {
            'consultation': '💬 Free Consultation - Discuss your goals (30 mins)',
            'demo': '🎓 Demo Session - See how we teach (45 mins)',
            'trial': '✨ Trial Class - Experience a full lesson (1 hour)'
        };

        // Format date for better readability
        const formattedDate = new Date(preferredDate).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Prepare structured booking data for Zapier
        const formData = {
            formType: 'booking',
            bookingDetails: {
                name: fullName,
                email: email,
                phone: contact,
                courseSlot: `${courseOptions[courseInterest] || courseInterest} - ${sessionOptions[sessionType] || sessionType}`,
                dateTime: `${formattedDate} at ${timeOptions[preferredTime] || preferredTime}`,
                notes: additionalInfo || 'No additional notes provided'
            },

            // Additional metadata for processing
            courseInterest: courseInterest,
            sessionType: sessionType,
            preferredDate: preferredDate,
            preferredTime: preferredTime,
            submittedAt: new Date().toISOString(),
            bookingReference: `BK-${Date.now()}`,

            // Formatted summary
            summary: `New booking: ${fullName} (${email}) - ${courseOptions[courseInterest] || courseInterest} on ${formattedDate}`
        };

        try {
            // Send data to Zapier webhook
            const response = await fetch(ZAPIER_WEBHOOK_URL, {
                method: 'POST',
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Booking submitted successfully! We will contact you to confirm your session.');
                this.reset(); // Reset form
            } else {
                throw new Error('Failed to submit booking');
            }
        } catch (error) {
            console.error('Error submitting booking:', error);
            alert('There was an error submitting your booking. Please try again or contact us directly at virrtech@gmail.com or +254740793959');
        } finally {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
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
