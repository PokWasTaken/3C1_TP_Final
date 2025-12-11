/* Léandre NF */ 

/* =========================================
   MAIN.JS - Scripts principaux
   ========================================= */

/* -----------------------------------------
   Menu Burger (Mobile/Tablette)
   ----------------------------------------- */
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const navMenu = document.getElementById('nav-menu');
    const navClose = document.getElementById('nav-close');
    
    // Fonction pour fermer le menu
    function closeMenu() {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
    
    // Fonction pour ouvrir le menu
    function openMenu() {
        burgerMenu.classList.add('active');
        navMenu.classList.add('active');
        document.body.classList.add('menu-open');
    }
    
    // Toggle du menu au clic sur le burger
    if (burgerMenu && navMenu) {
        burgerMenu.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
        
        // Fermer le menu au clic sur le bouton X
        if (navClose) {
            navClose.addEventListener('click', function() {
                closeMenu();
            });
        }
        
        // Fermer le menu au clic sur un lien
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                closeMenu();
            });
        });
        
        // Fermer le menu au clic en dehors
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnBurger = burgerMenu.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnBurger && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });
        
        // Fermer le menu avec la touche Escape
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });
    }
});
