// Admin Panel Functionality

// DOM Elements
const adminLoginForm = document.getElementById('adminLoginForm');
const adminDashboard = document.getElementById('adminDashboard');
const logoutBtn = document.getElementById('logoutBtn');

// Admission Form Elements
const admissionModal = document.getElementById('admissionModal');
const closeModalElements = document.querySelectorAll('.close-modal, #closeModalBtn');
const viewAdmissionButtons = document.querySelectorAll('.view-admission');
const saveAdmissionBtn = document.getElementById('saveAdmissionBtn');

// Check if user is already logged in
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('adminLoggedIn') === 'true') {
        showDashboard();
    }
});

// Handle Login Form Submission
if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simple validation (in a real app, this would be server-side)
        if (username === 'admin' && password === 'codewise123') {
            // Store login status
            localStorage.setItem('adminLoggedIn', 'true');
            showDashboard();
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
}

// Show Dashboard
function showDashboard() {
    document.querySelector('.admin-login').style.display = 'none';
    adminDashboard.style.display = 'block';
    document.querySelector('.admin-header').classList.add('dashboard-header');
}

// Handle Logout
if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('adminLoggedIn');
        document.querySelector('.admin-login').style.display = 'block';
        adminDashboard.style.display = 'none';
        document.querySelector('.admin-header').classList.remove('dashboard-header');
        
        // Reset form
        if (adminLoginForm) {
            adminLoginForm.reset();
        }
    });
}

// Add Course Button
const addCourseBtn = document.getElementById('addCourseBtn');
if (addCourseBtn) {
    addCourseBtn.addEventListener('click', function() {
        alert('Add new course functionality would open a form here in a full implementation.');
    });
}

// Edit/Delete Course Buttons
document.querySelectorAll('.course-actions .btn.secondary').forEach(button => {
    button.addEventListener('click', function() {
        alert('Edit course functionality would open here in a full implementation.');
    });
});

document.querySelectorAll('.course-actions .btn.danger').forEach(button => {
    button.addEventListener('click', function() {
        if (confirm('Are you sure you want to delete this course?')) {
            alert('Delete course functionality would execute here in a full implementation.');
        }
    });
});

// View Enrollment Buttons
document.querySelectorAll('.data-table .btn.small').forEach(button => {
    button.addEventListener('click', function() {
        alert('View enrollment details functionality would open here in a full implementation.');
    });
});

// Admission Form Functionality
if (viewAdmissionButtons.length > 0) {
    viewAdmissionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real implementation, this would fetch the specific admission data
            // For now, we'll just show the modal with sample data
            admissionModal.style.display = 'block';
        });
    });
}

// Close Modal
if (closeModalElements.length > 0) {
    closeModalElements.forEach(element => {
        element.addEventListener('click', function() {
            admissionModal.style.display = 'none';
        });
    });
}

// Save Admission Changes
if (saveAdmissionBtn) {
    saveAdmissionBtn.addEventListener('click', function() {
        const status = document.getElementById('admissionStatus').value;
        alert(`Admission status updated to: ${status}`);
        admissionModal.style.display = 'none';
    });
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === admissionModal) {
        admissionModal.style.display = 'none';
    }
});