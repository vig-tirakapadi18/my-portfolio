const MenuBtn = document.getElementById("MenuBtn");

MenuBtn.addEventListener("click", function (event) {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    this.classList.toggle("fa-xmark");
});

let typed = new Typed(".auto-input", {
    strings: ["Full-Stack Web Developer!", "Front-End Developer!", "ReactJs Developer!"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
});
