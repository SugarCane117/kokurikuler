// script.js - FIXED VERSION

// Auto refresh setiap 20 menit (1200000 ms)
setTimeout(function() {
    location.reload();
}, 1200000);

// JavaScript untuk hamburger menu - UNIVERSAL
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenu && navMenu) {
        // Toggle menu ketika hamburger diklik
        mobileMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu ketika klik link
        const navLinks = document.querySelectorAll('.menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu ketika klik di luar
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.atas') && !e.target.closest('.menu')) {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Close menu ketika resize window (optional)
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});