document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    
    hamburger.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});

var typed = new Typed('#element', {
    strings: ["Empowering students to shape a brighter future for happyness.", ],
    typeSpeed: 10,
    backSpeed: 10, 
    loop: true     
});

 