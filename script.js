const menuBtn = document.getElementById('menu-btn');
const menuBox = document.getElementById('menu-box');
const xBtn = document.getElementById('x-btn');
const eBtn = document.getElementById('email-btn');
const contactForm = document.getElementById('contact-form');
menuBtn.addEventListener('click', () => {
    console.log(menuBox);

    menuBox.classList.add('show-menu-btn');

});

menuBox.addEventListener('click', (e) => {
    // if(e.target==menuBox)
    menuBox.classList.remove('show-menu-btn');
})
xBtn.addEventListener('click', () => {
    menuBox.classList.remove('show-menu-btn');
});


eBtn.addEventListener('click', (e) => {
    e.preventDefault();
    contactForm.classList.toggle('show-form');
});
