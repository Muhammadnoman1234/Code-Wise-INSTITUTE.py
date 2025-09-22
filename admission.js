// Admission Form Functionality

document.addEventListener('DOMContentLoaded', function() {
    const admissionForm = document.getElementById('admissionForm');
    
    if (admissionForm) {
        admissionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const course = document.getElementById('course').value;
            
            // In a real application, this data would be sent to a server
            // For now, we'll just show a confirmation message
            alert(`Thank you ${firstName} ${lastName}! Your admission form has been submitted successfully. We will contact you at ${email} or ${phone} regarding the ${getCourseName(course)} course.`);
            
            // Reset form
            admissionForm.reset();
        });
    }
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
});

// Helper function to get course name from value
function getCourseName(courseValue) {
    const courses = {
        'computer': 'Computer Course',
        'web': 'Web Development',
        'freelancing': 'Freelancing',
        'trading': 'Trading',
        'marketing': 'Digital Marketing',
        'ai': 'AI & ChatGPT Training',
        'graphic': 'Graphic Design'
    };
    
    return courses[courseValue] || 'Selected Course';
}