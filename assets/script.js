const menuIcon = document.querySelector('#menu-Icon');
const navbar = document.querySelector('.menu');

menuIcon.addEventListener ('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// darkmode
// const toggleIcon = document.querySelector('.toggle-icon');  

// toggleIcon.addEventListener('click', () => {
//     toggleIcon.classList.toggle('bx-sun');
//     document.body.classList.toggle('dark-mode');
// });

//=== scroll section active links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav   a');

window.onscroll = () => {
    // sections.forEach(sec =>{
    //     const top = window.scrollY;
    //     const offset = sec.offsetTop - 150;
    //     const height = sec.offsetHeight;
    //     const id = sec.getAttribute('id');
    
    //     if(top >= offset && top < offset + height) {
    //         navLinks.forEach(links => {
    //             links.classList.remove('active')
    //             document.querySelector('header ul a[href*=' + id + ']').classList.add('active')
    //         })
    //     };
    // })

// sticky header
    const header = document.querySelector('.header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    // remove navbar when you click the body
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}