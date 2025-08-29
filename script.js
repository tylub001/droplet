// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Puppy data for modal
const puppyData = {
    golden: {
        name: 'Sunny',
        breed: 'Golden Retriever',
        age: '8 weeks old',
        weight: '12 lbs',
        color: 'Golden',
        description: 'Sunny is a sweet and gentle golden retriever puppy who loves to play fetch and cuddle. He has a beautiful golden coat and the most expressive eyes that will melt your heart.',
        personality: 'Sunny is incredibly friendly and gets along well with everyone he meets. He loves children and other pets, making him the perfect family dog.',
        care: 'Golden retrievers are known for their intelligence and trainability. Sunny will need regular exercise, grooming, and lots of love and attention.',
        price: '$2,500',
        availability: 'Available for adoption',
        images: [
            'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop&crop=face',
            'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop&crop=face'
        ]
    },
    labrador: {
        name: 'Choco',
        breed: 'Labrador Retriever',
        age: '10 weeks old',
        weight: '15 lbs',
        color: 'Chocolate',
        description: 'Choco is an energetic chocolate lab who adores water and is always ready for adventure. His playful nature and boundless energy will keep you entertained for hours.',
        personality: 'Choco is full of life and loves to explore. He\'s very social and enjoys playing with other dogs and people. His water-loving nature makes him perfect for families who enjoy outdoor activities.',
        care: 'Labradors need plenty of exercise and mental stimulation. Choco will thrive with regular walks, playtime, and training sessions.',
        price: '$2,200',
        availability: 'Available for adoption',
        images: [
            'https://images.unsplash.com/photo-1605897472359-2481d0e3d0e7?w=400&h=400&fit=crop&crop=face',
            'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=face'
        ]
    },
    poodle: {
        name: 'Fluffy',
        breed: 'Miniature Poodle',
        age: '12 weeks old',
        weight: '8 lbs',
        color: 'White',
        description: 'Fluffy is a clever and elegant poodle puppy with a curly coat and charming personality. His intelligence and hypoallergenic coat make him a popular choice for many families.',
        personality: 'Fluffy is very intelligent and learns quickly. He\'s gentle and affectionate, making him great with children and seniors. His elegant appearance and graceful movements are truly captivating.',
        care: 'Poodles require regular grooming to maintain their beautiful coat. Fluffy will need mental stimulation through training and puzzle toys.',
        price: '$3,000',
        availability: 'Available for adoption',
        images: [
            'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop&crop=face',
            'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop&crop=face'
        ]
    },
    beagle: {
        name: 'Bella',
        breed: 'Beagle',
        age: '9 weeks old',
        weight: '10 lbs',
        color: 'Tricolor',
        description: 'Bella is a curious beagle puppy with a great sense of smell and a love for exploration. Her adorable face and friendly nature will capture your heart instantly.',
        personality: 'Bella is naturally curious and loves to follow scents. She\'s very friendly and gets along well with other dogs and people. Her gentle temperament makes her great for families.',
        care: 'Beagles need regular exercise and mental stimulation. Bella will enjoy long walks and games that engage her excellent sense of smell.',
        price: '$1,800',
        availability: 'Available for adoption',
        images: [
            'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=400&h=400&fit=crop&crop=face',
            'https://images.unsplash.com/photo-1605897472359-2481d0e3d0e7?w=400&h=400&fit=crop&crop=face'
        ]
    },
    bulldog: {
        name: 'Winston',
        breed: 'English Bulldog',
        age: '11 weeks old',
        weight: '18 lbs',
        color: 'Fawn',
        description: 'Winston is a laid-back bulldog puppy with a wrinkly face and a heart of gold. His calm demeanor and loving nature make him the perfect companion for relaxed households.',
        personality: 'Winston is very calm and gentle, despite his tough appearance. He loves to cuddle and will happily spend hours lounging with his family. He\'s great with children and other pets.',
        care: 'Bulldogs need moderate exercise and regular cleaning of their facial wrinkles. Winston will thrive in a calm environment with lots of love and attention.',
        price: '$3,500',
        availability: 'Available for adoption',
        images: [
            'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=face',
            'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=400&h=400&fit=crop&crop=face'
        ]
    },
    husky: {
        name: 'Luna',
        breed: 'Siberian Husky',
        age: '10 weeks old',
        weight: '14 lbs',
        color: 'Black & White',
        description: 'Luna is a beautiful husky puppy with striking blue eyes and a wild spirit. Her stunning appearance and adventurous personality will make every day an exciting adventure.',
        personality: 'Luna is full of energy and loves to explore. She\'s very independent and has a strong prey drive. Her striking blue eyes and beautiful coat make her absolutely stunning.',
        care: 'Huskies need lots of exercise and mental stimulation. Luna will thrive with regular runs, hikes, and activities that challenge her both physically and mentally.',
        price: '$2,800',
        availability: 'Available for adoption',
        images: [
            'https://images.unsplash.com/photo-1547407139-3c921a0b0b7f?w=400&h=400&fit=crop&crop=face',
            'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop&crop=face'
        ]
    }
};

// Show puppy details modal
function showPuppyDetails(puppyType) {
    const modal = document.getElementById('puppyModal');
    const modalContent = document.getElementById('modalContent');
    const puppy = puppyData[puppyType];
    
    if (puppy) {
        modalContent.innerHTML = `
            <div class="puppy-modal">
                <div class="puppy-modal-images">
                    <img src="${puppy.images[0]}" alt="${puppy.name}" class="main-image">
                    <div class="thumbnail-images">
                        ${puppy.images.map(img => `<img src="${img}" alt="${puppy.name}" onclick="changeMainImage(this.src)">`).join('')}
                    </div>
                </div>
                <div class="puppy-modal-info">
                    <h2>${puppy.name}</h2>
                    <p class="breed">${puppy.breed}</p>
                    <div class="puppy-details">
                        <div class="detail-item">
                            <span class="label">Age:</span>
                            <span class="value">${puppy.age}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Weight:</span>
                            <span class="value">${puppy.weight}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Color:</span>
                            <span class="value">${puppy.color}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Price:</span>
                            <span class="value price">${puppy.price}</span>
                        </div>
                    </div>
                    <div class="puppy-description">
                        <h3>About ${puppy.name}</h3>
                        <p>${puppy.description}</p>
                        <h3>Personality</h3>
                        <p>${puppy.personality}</p>
                        <h3>Care Requirements</h3>
                        <p>${puppy.care}</p>
                    </div>
                    <div class="puppy-actions">
                        <button class="adopt-now-btn">Adopt Now</button>
                        <button class="schedule-visit-btn">Schedule a Visit</button>
                    </div>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Change main image in modal
function changeMainImage(src) {
    const mainImage = document.querySelector('.main-image');
    if (mainImage) {
        mainImage.src = src;
    }
}

// Close modal
const modal = document.getElementById('puppyModal');
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Add hover effects to puppy cards
document.querySelectorAll('.puppy-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click effects to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.puppy-card, .about-content, .contact-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add some fun interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Add paw prints to the page randomly
    addPawPrints();
    
    // Add floating hearts animation
    addFloatingHearts();
});

function addPawPrints() {
    const pawPrint = document.createElement('div');
    pawPrint.innerHTML = '🐾';
    pawPrint.style.position = 'fixed';
    pawPrint.style.fontSize = '20px';
    pawPrint.style.pointerEvents = 'none';
    pawPrint.style.zIndex = '100';
    pawPrint.style.opacity = '0.3';
    pawPrint.style.transition = 'opacity 0.5s ease';
    
    document.addEventListener('mousemove', (e) => {
        if (Math.random() < 0.01) { // 1% chance to create paw print
            const newPaw = pawPrint.cloneNode(true);
            newPaw.style.left = e.clientX + 'px';
            newPaw.style.top = e.clientY + 'px';
            document.body.appendChild(newPaw);
            
            setTimeout(() => {
                newPaw.style.opacity = '0';
                setTimeout(() => {
                    if (newPaw.parentNode) {
                        newPaw.parentNode.removeChild(newPaw);
                    }
                }, 500);
            }, 1000);
        }
    });
}

function addFloatingHearts() {
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance every interval
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = window.innerHeight + 'px';
            heart.style.fontSize = '20px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '50';
            heart.style.transition = 'all 3s ease';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.style.top = '-50px';
                heart.style.opacity = '0';
                setTimeout(() => {
                    if (heart.parentNode) {
                        heart.parentNode.removeChild(heart);
                    }
                }, 3000);
            }, 100);
        }
    }, 2000);
}

// Add CSS for modal styling
const modalStyles = `
    .puppy-modal {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        max-height: 80vh;
        overflow-y: auto;
    }
    
    .puppy-modal-images {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .main-image {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 15px;
    }
    
    .thumbnail-images {
        display: flex;
        gap: 0.5rem;
    }
    
    .thumbnail-images img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 10px;
        cursor: pointer;
        transition: transform 0.3s ease;
    }
    
    .thumbnail-images img:hover {
        transform: scale(1.1);
    }
    
    .puppy-modal-info h2 {
        color: #333;
        margin-bottom: 0.5rem;
    }
    
    .puppy-details {
        margin: 1.5rem 0;
    }
    
    .detail-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        padding: 0.5rem 0;
        border-bottom: 1px solid #eee;
    }
    
    .label {
        font-weight: 600;
        color: #666;
    }
    
    .value {
        color: #333;
    }
    
    .price {
        color: #ff6b6b;
        font-weight: 700;
        font-size: 1.2rem;
    }
    
    .puppy-description h3 {
        color: #333;
        margin: 1.5rem 0 0.5rem 0;
    }
    
    .puppy-description p {
        color: #666;
        line-height: 1.6;
        margin-bottom: 1rem;
    }
    
    .puppy-actions {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
    }
    
    .adopt-now-btn, .schedule-visit-btn {
        flex: 1;
        padding: 1rem;
        border: none;
        border-radius: 10px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .adopt-now-btn {
        background: #ff6b6b;
        color: white;
    }
    
    .schedule-visit-btn {
        background: #667eea;
        color: white;
    }
    
    .adopt-now-btn:hover, .schedule-visit-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    
    @media (max-width: 768px) {
        .puppy-modal {
            grid-template-columns: 1fr;
            gap: 1rem;
        }
        
        .puppy-actions {
            flex-direction: column;
        }
    }
`;

// Inject modal styles
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);
