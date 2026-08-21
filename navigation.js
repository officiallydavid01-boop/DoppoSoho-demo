const header = document.querySelector(".site-header");

function handleHeaderScroll() {
    if (window.scrollY > 40) {
        header.classList.add("is-scrolled");
    } else {
        header.classList.remove("is-scrolled");
    }
}

window.addEventListener("scroll", handleHeaderScroll);
