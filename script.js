//menutup formulir ketika tombol close diklik
function closeContactForm() {
    var contactForm = document.querySelector('.contact-form');
    contactForm.style.display = 'none';
}


document.getElementById('contact-btn').addEventListener('click', function() {
        var contactForm = document.querySelector('.contact-form');
        contactForm.style.display = 'block';
    });
