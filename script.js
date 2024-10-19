// Form Submission Logic
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for subscribing! We'll be in touch soon.");
    // Here you could also add functionality to send form data to a backend service
});

// Schedule Demo Button
function scheduleDemo() {
    alert("Live Demo scheduled! We will send you the details soon.");
}

// Show/Hide Additional Resources
function toggleResources() {
    const resourceSection = document.getElementById('resources');
    if (resourceSection.style.display === 'none' || resourceSection.style.display === '') {
        resourceSection.style.display = 'block';
    } else {
        resourceSection.style.display = 'none';
    }
}
