// ============================================
// NAVIGATION ACTIVE ET SCROLL
// ============================================

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

// Mettre en évidence le lien de navigation actif lors du scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll pour les liens
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============================================
// ANIMATIONS AU SCROLL
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer les cartes
document.querySelectorAll('.content-card, .characteristic-card, .personality-card, .relation-card, .objective-card, .mystery-box').forEach(card => {
    observer.observe(card);
});

// ============================================
// EASTER EGG
// ============================================

let titleClickCount = 0;
const heroTitle = document.querySelector('.hero-title');

heroTitle.addEventListener('click', () => {
    titleClickCount++;
    
    if (titleClickCount === 5) {
        activateEasterEgg();
        titleClickCount = 0;
    }
});

function activateEasterEgg() {
    console.log('%c🗡️ Ito Yuketsu - Mode Secret Activé 🗡️', 'color: #d4af37; font-size: 20px; font-weight: bold;');
    console.log('%cIto: "Même si ma vie n\'a pas été un choix... mes rêves le sont."', 'color: #4a7ba7; font-size: 14px; font-style: italic;');
    console.log('%cLa brume se lève lentement, révélant les mystères cachés...', 'color: #b8d4e8; font-size: 12px;');
    
    // Effet visuel
    document.body.style.background = 'linear-gradient(135deg, rgba(74, 123, 167, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%), linear-gradient(135deg, #f5f9fc 0%, #e8f0f7 100%)';
    
    setTimeout(() => {
        document.body.style.background = 'linear-gradient(135deg, #f5f9fc 0%, #e8f0f7 100%)';
    }, 2000);
}

// ============================================
// PARALLAX EFFET HERO
// ============================================

window.addEventListener('scroll', () => {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const scrolled = window.pageYOffset;
        if (scrolled < 600) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    }
});

// ============================================
// MESSAGES CONSOLE THÉMATIQUES
// ============================================

console.log('%c╔═══════════════════════════════════════════╗', 'color: #d4af37; font-size: 12px;');
console.log('%c║  ARCHIVES DES POURFENDEURS - ITO YUKETSU  ║', 'color: #d4af37; font-size: 12px; font-weight: bold;');
console.log('%c╚═══════════════════════════════════════════╝', 'color: #d4af37; font-size: 12px;');
console.log('%c\n🗡️ Nom: Ito Yuketsu\n🌊 Souffle: Kanoe du Son\n📍 Rang: Kanoe (Rang 1)\n👶 Âge: 12 ans\n⭐ État: Prometteur\n🔍 Statut: À surveiller', 'color: #4a7ba7; font-size: 11px;');
console.log('%c\n"Une pièce manquante... quelque chose d\'inexprimé." - Archives', 'color: #b8d4e8; font-size: 11px; font-style: italic;');

// ============================================
// INTERACTION HOVER PERSONNALISÉE
// ============================================

const cards = document.querySelectorAll('.characteristic-card, .personality-card, .relation-card, .objective-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderTopColor = '#d4af37';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderTopColor = '';
    });
});

// ============================================
// CHARGE COMPLÈTE
// ============================================

console.log('%c✓ Site complètement chargé', 'color: #4a90e2; font-weight: bold;');
