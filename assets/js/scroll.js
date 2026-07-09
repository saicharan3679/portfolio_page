/*=========================================
            SCROLL.JS
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const progressBar = document.getElementById("progress-bar");
    const topBtn = document.getElementById("topBtn");
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section");
    const reveals = document.querySelectorAll(".reveal");

    /*==============================
    SCROLL PROGRESS
    ==============================*/

    function updateProgress() {

        const scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress = (scrollTop / scrollHeight) * 100;

        if (progressBar) {
            progressBar.style.width = progress + "%";
        }

    }

    /*==============================
    ACTIVE NAVIGATION
    ==============================*/

    function activeNavigation() {

        let current = "";

        sections.forEach((section) => {

            const top = section.offsetTop - 180;

            if (window.scrollY >= top) {

                current = section.id;

            }

        });

        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    /*==============================
    BACK TO TOP
    ==============================*/

    function backToTop() {

        if (!topBtn) return;

        if (window.scrollY > 450) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    }

    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /*==============================
    REVEAL
    ==============================*/

    function reveal() {

        reveals.forEach((item) => {

            const top = item.getBoundingClientRect().top;

            const visible = window.innerHeight - 120;

            if (top < visible) {

                item.classList.add("active");

            }

        });

    }

    /*==============================
    THROTTLED SCROLL
    ==============================*/

    let ticking = false;

    function onScroll() {

        if (!ticking) {

            window.requestAnimationFrame(() => {

                updateProgress();
                activeNavigation();
                backToTop();
                reveal();

                ticking = false;

            });

            ticking = true;

        }

    }

    window.addEventListener("scroll", onScroll, {passive:true});

    /*==============================
    INITIAL LOAD
    ==============================*/

    updateProgress();
    activeNavigation();
    backToTop();
    reveal();

});
