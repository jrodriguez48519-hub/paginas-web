// Scroll suave con highlight en nav flotante
const sections = ['ideas', 'herramientas', 'monetizacion', 'tips'];
const navLinks = document.querySelectorAll('.fnav-link');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(link => {
                const isActive = link.getAttribute('href') === '#' + id;
                link.style.background = isActive
                    ? 'rgba(196,77,255,0.4)'
                    : 'rgba(255,255,255,0.08)';
                link.style.borderColor = isActive
                    ? 'rgba(196,77,255,0.6)'
                    : 'rgba(255,255,255,0.15)';
            });
        }
    });
}, { threshold: 0.4 });

sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
});

// Animación de entrada para cards
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, i * 80);
            cardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.idea-card, .tool-card, .plat-card, .tip-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    cardObserver.observe(card);
});
