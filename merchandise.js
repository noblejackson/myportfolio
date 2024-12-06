<script src="https://cdn.jsdelivr.net/npm/mixitup@3.3.1/dist/mixitup.min.js"></script>
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
   menuIcon.addEventListener('click', () => {
       navbar.classList.toggle('active');
   });
} else {
   console.error('Menu icon or navbar not found!');
}
// MixItUp initialization
var mixer = mixitup('.merchandise');

// Toggle navbar class for mobile menu
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
} else {
    console.error('Menu icon or navbar not found!');
}

// FAQ question toggle
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.closest('.faq-item');  // Get the parent .faq-item
        faqItem.classList.toggle('open');  // Toggle the open class on .faq-item
    });
});
