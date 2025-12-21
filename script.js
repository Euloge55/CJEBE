document.addEventListener('DOMContentLoaded', () => {
    
    // 1. GESTION DU MENU MOBILE (OPEN/CLOSE)
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Animation du burger (optionnelle)
        menuToggle.classList.toggle('is-active');
    });

    // 2. GESTION DU FORMULAIRE DE DON
    const donForm = document.getElementById('donForm');
    donForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const amount = document.getElementById('donAmount').value;
        const name = document.getElementById('donName').value;

        if (amount > 0) {
            alert(`Merci infiniment ${name} ! Votre promesse de don de ${amount}€ a été enregistrée. Vous allez être redirigé vers notre plateforme sécurisée.`);
            donForm.reset();
        }
    });

    // 3. GESTION DU FORMULAIRE DE CONTACT
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Merci ! Votre message a bien été envoyé. Nos équipes reviendront vers vous sous 24h.");
        contactForm.reset();
    });

    // 4. FERMETURE AUTOMATIQUE DU MENU AU CLIC SUR UN LIEN
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 5. EFFET DE SCROLL SUR LE HEADER (TRANSPARENCE)
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) {
            header.style.padding = "5px 0";
            header.style.background = "rgba(255, 255, 255, 0.95)";
        } else {
            header.style.padding = "0";
            header.style.background = "#fff";
        }
    });
});