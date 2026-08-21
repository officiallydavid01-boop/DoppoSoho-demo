const header = document.querySelector(".site-header");

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavClose = document.querySelector(".mobile-nav__close");
const mobileNavLinks = document.querySelectorAll(".mobile-nav__links a");


/* =================================
   HEADER SCROLL
================================= */

function handleHeaderScroll() {
    if (window.scrollY > 40) {
        header.classList.add("is-scrolled");
    } else {
        header.classList.remove("is-scrolled");
    }
}

window.addEventListener("scroll", handleHeaderScroll);


/* =================================
   OPEN MOBILE MENU
================================= */

function openMobileMenu() {
    mobileNav.classList.add("is-open");

    mobileNav.setAttribute("aria-hidden", "false");

    menuToggle.setAttribute("aria-expanded", "true");

    document.body.style.overflow = "hidden";
}


/* =================================
   CLOSE MOBILE MENU
================================= */

function closeMobileMenu() {
    mobileNav.classList.remove("is-open");

    mobileNav.setAttribute("aria-hidden", "true");

    menuToggle.setAttribute("aria-expanded", "false");

    document.body.style.overflow = "";
}


/* =================================
   BUTTON EVENTS
================================= */

menuToggle.addEventListener("click", openMobileMenu);

mobileNavClose.addEventListener("click", closeMobileMenu);


/* =================================
   LINK EVENTS
================================= */

mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
});


/* =================================
   ESCAPE KEY
================================= */

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMobileMenu();
    }
});
