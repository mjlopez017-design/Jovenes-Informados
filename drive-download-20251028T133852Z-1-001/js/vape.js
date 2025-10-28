// vape.js

// 1. FUNCIONALIDAD DEL MENÚ DE NAVEGACIÓN (RESPONSIVE)
function toggleMobileMenu() {
    const navUl = document.querySelector('.nav ul');
    navUl.classList.toggle('active');
}

// 2. FUNCIONALIDAD DEL BOTÓN 'SCROLL TO TOP'
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Hace el desplazamiento suave
    });
}

// LÓGICA DE INTERACCIÓN PRINCIPAL
document.addEventListener('DOMContentLoaded', () => {
    
    // CONTROL DEL BOTÓN 'SCROLL TO TOP'
    const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');

    if (scrollToTopBtn) {
        // Función para mostrar u ocultar el botón
        const scrollFunction = () => {
            // Muestra el botón si el scroll vertical es mayor a 300px
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollToTopBtn.style.display = "block";
                scrollToTopBtn.style.opacity = "1";
            } else {
                // Oculta el botón
                scrollToTopBtn.style.opacity = "0";
                // setTimeout para que se oculte completamente después de la transición
                setTimeout(() => { scrollToTopBtn.style.display = "none"; }, 300); 
            }
        };

        // Agregar el listener al evento de scroll
        window.onscroll = scrollFunction;
    }

    // RESALTAR EL ENLACE DE NAVEGACIÓN ACTIVO Y CERRAR MENÚ MÓVIL AL HACER CLIC
    const navLinks = document.querySelectorAll('.nav-button');
    const navUl = document.querySelector('.nav ul');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Quitar la clase 'active' de todos los enlaces
            navLinks.forEach(item => item.classList.remove('active'));
            
            // Añadir la clase 'active' al enlace clickeado
            e.currentTarget.classList.add('active');
            
            // Ocultar el menú móvil después de la navegación (si está visible)
            if (navUl.classList.contains('active')) {
                navUl.classList.remove('active');
            }
        });
    });
});