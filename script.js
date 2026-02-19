document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Cambio de estilo del Navbar al hacer Scroll
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            backToTop.style.display = 'flex';
        } else {
            navbar.classList.remove('scrolled');
            backToTop.style.display = 'none';
        }
        reveal(); // Llamamos a la función de animación
    });

    // 2. Menú Móvil (Hamburguesa)
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('nav-menu');

    burger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.width = '100%';
        navMenu.style.background = 'white';
    });

    // 3. Animaciones al hacer Scroll (Reveal)
    function reveal() {
        const reveals = document.querySelectorAll(".reveal");
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add("active");
            }
        });
    }

    // 4. Validación y envío del formulario
    const form = document.getElementById('appointmentForm');
    const successMsg = document.getElementById('formSuccess');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulación de carga
        const btn = form.querySelector('button');
        btn.innerText = 'Enviando...';
        
        setTimeout(() => {
            form.style.display = 'none';
            successMsg.style.display = 'block';
        }, 1500);
    });

    // 5. Botón Volver Arriba
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});