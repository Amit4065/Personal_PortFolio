// typing animation
let typed = new Typed(".typing", {
    strings: ["", "I'm Front-End Developer", "I'm Web Developer", "I'm Amit Yadav"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

// Scroll Animation

ScrollReveal(
    {
        reset: true,
        distance: '100px',
        duration: 2500,
        delay: 400
    }
);
ScrollReveal().reveal('.skill ,.home_title , .about_left , .img1 , .about_right , .img2 , .contact_animation , .home_section , .random', { delay: 100, origin: 'top'});
ScrollReveal().reveal('.button , .footer_last , .short_line', { delay: 100, origin: 'bottom'});


// Navigation Bar effect on scroll

window.addEventListener("scroll", function () {
    const header = document.querySelector(".nav")
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Responsive navigation menu toggle

const menuBtn = document.querySelector(".nav-menu-btn")
const closeBtn = document.querySelector(".nav-close-btn")
const nava = document.querySelectorAll(".nav-a")
const navitem = document.querySelector(".nav-item")
// console.log(nava);

menuBtn.addEventListener("click", () => {
    navitem.classList.add("active");
})
closeBtn.addEventListener("click", () => {
    navitem.classList.remove("active");
})
nava.forEach((e) => {
    e.addEventListener("click", () => {
        navitem.classList.remove("active");
    })
})