// Portfolio JavaScript

// Sample projects data - Easy to modify and add new projects
const projectsData = [
    {
        id: 1,
        title: "AI Chatbot Assistant",
        description: "An intelligent chatbot powered by GPT-4 that can answer questions, provide recommendations, and assist with various tasks. Built with Python, Flask, and OpenAI API.",
        image: "fas fa-robot",
        category: "ai",
        technologies: ["Python", "Flask", "OpenAI API", "JavaScript"],
        liveUrl: "https://your-chatbot-demo.com",
        githubUrl: "https://github.com/yourusername/ai-chatbot",
        featured: true
    },
    {
        id: 2,
        title: "Image Classification Model",
        description: "A deep learning model that can classify images into 1000 different categories with 95% accuracy. Trained using TensorFlow and deployed with Streamlit.",
        image: "fas fa-image",
        category: "cv",
        technologies: ["Python", "TensorFlow", "OpenCV", "Streamlit"],
        liveUrl: "https://your-image-classifier.com",
        githubUrl: "https://github.com/yourusername/image-classifier",
        featured: true
    },
    {
        id: 3,
        title: "Sentiment Analysis Tool",
        description: "NLP application that analyzes text sentiment using BERT and provides real-time analysis of social media posts and reviews.",
        image: "fas fa-heart",
        category: "nlp",
        technologies: ["Python", "BERT", "Transformers", "Pandas"],
        liveUrl: "https://your-sentiment-analysis.com",
        githubUrl: "https://github.com/yourusername/sentiment-analysis",
        featured: false
    },
    {
        id: 4,
        title: "Stock Price Predictor",
        description: "Machine learning model that predicts stock prices using LSTM neural networks and technical indicators. Includes real-time data integration.",
        image: "fas fa-chart-line",
        category: "ai",
        technologies: ["Python", "LSTM", "Pandas", "Yahoo Finance API"],
        liveUrl: "https://your-stock-predictor.com",
        githubUrl: "https://github.com/yourusername/stock-predictor",
        featured: true
    },
    {
        id: 5,
        title: "Face Recognition System",
        description: "Computer vision application that can detect and recognize faces in real-time using OpenCV and face recognition libraries.",
        image: "fas fa-user-check",
        category: "cv",
        technologies: ["Python", "OpenCV", "face_recognition", "Flask"],
        liveUrl: "https://your-face-recognition.com",
        githubUrl: "https://github.com/yourusername/face-recognition",
        featured: false
    },
    {
        id: 6,
        title: "Text Summarization API",
        description: "RESTful API that provides automatic text summarization using extractive and abstractive methods. Supports multiple languages.",
        image: "fas fa-file-text",
        category: "nlp",
        technologies: ["Python", "FastAPI", "spaCy", "Transformers"],
        liveUrl: "https://your-text-summarizer.com",
        githubUrl: "https://github.com/yourusername/text-summarizer",
        featured: false
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const projectsGrid = document.getElementById('projects-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contact-form');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project Filtering
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        filterProjects(filter);
    });
});

// Filter Projects Function
function filterProjects(filter) {
    const projects = projectsData;
    let filteredProjects = projects;
    
    if (filter !== 'all') {
        filteredProjects = projects.filter(project => project.category === filter);
    }
    
    displayProjects(filteredProjects);
}

// Display Projects Function
function displayProjects(projects) {
    projectsGrid.innerHTML = '';
    
    projects.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        projectsGrid.appendChild(projectCard);
    });
}

// Create Project Card Function
function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="project-image">
            <i class="${project.image}"></i>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="project-link">Live Demo</a>` : ''}
                ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="project-link">GitHub</a>` : ''}
            </div>
        </div>
    `;
    
    return card;
}

// Scroll Animation
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Contact Form Handling
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    alert('Thank you for your message! I\'ll get back to you soon.');
    contactForm.reset();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Initialize the portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Display all projects initially
    displayProjects(projectsData);
    
    // Add scroll event listener for animations
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Initial check for elements already in view
    handleScrollAnimation();
});

// Function to add new project (for easy management)
function addProject(project) {
    projectsData.push(project);
    displayProjects(projectsData);
}

// Function to remove project by ID
function removeProject(projectId) {
    const index = projectsData.findIndex(project => project.id === projectId);
    if (index > -1) {
        projectsData.splice(index, 1);
        displayProjects(projectsData);
    }
}

// Function to update project
function updateProject(projectId, updatedProject) {
    const index = projectsData.findIndex(project => project.id === projectId);
    if (index > -1) {
        projectsData[index] = { ...projectsData[index], ...updatedProject };
        displayProjects(projectsData);
    }
}

// Export functions for easy project management
window.portfolioManager = {
    addProject,
    removeProject,
    updateProject,
    projectsData
};

// Console message for developers
console.log(`
🚀 Portfolio Website Loaded Successfully!

📝 To manage projects:
- Add: portfolioManager.addProject(newProject)
- Remove: portfolioManager.removeProject(projectId)
- Update: portfolioManager.updateProject(projectId, updates)
- View all: portfolioManager.projectsData

💡 Example of adding a new project:
portfolioManager.addProject({
    id: 7,
    title: "My New AI Project",
    description: "Description of the project...",
    image: "fas fa-brain",
    category: "ai",
    technologies: ["Python", "TensorFlow"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/repo",
    featured: true
});
`);
