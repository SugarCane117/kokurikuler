// hah kosonggg
// website refresh 
// Auto refresh setiap 20 menit (1200000 ms)
setTimeout(function() {
    location.reload();
}, 1200000);




// ini buat navbar responsiv index.html + profile.html  mereka digabung disini

// JavaScript untuk hamburger menu
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
if (mobileMenu && navMenu) {
  mobileMenu.addEventListener('click', function() {
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
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.atas')) {
      mobileMenu.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
}
// ini buat navbar responsiv profile.html