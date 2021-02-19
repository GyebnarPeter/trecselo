let nav = document.querySelector("nav");
let navBtn = document.querySelector(".nav-btn");
let header = document.querySelector(".header-wrapper");

navBtn.onclick = () => {
    nav.classList.contains("nav-toggle")
        ? nav.classList.remove("nav-toggle")
        : nav.classList.add("nav-toggle");
    
    if (window.innerWidth <= 768) {
        navBtn.classList.contains("nav-btn-rotate")
            ? navBtn.classList.remove("nav-btn-rotate")
            : navBtn.classList.add("nav-btn-rotate");
    }
};

window.onscroll = () => {
    if (document.documentElement.scrollTop > 200) {
        header.classList.add("sticky-header-invisible");
    } else {
        header.classList.remove("sticky-header-invisible");
        header.classList.remove("sticky-header-visible");
    }
    if (document.documentElement.scrollTop > 400) {
        header.classList.remove("sticky-header-invisible");
        header.classList.add("sticky-header-visible");
    }
};