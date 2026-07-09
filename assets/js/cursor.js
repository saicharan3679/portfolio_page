/*=========================================
            CURSOR.JS
=========================================*/

// Disable custom cursor on touch devices
if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {

    document.querySelector(".cursor")?.remove();
    document.querySelector(".cursor2")?.remove();

} else {

    const cursor = document.querySelector(".cursor");
    const cursor2 = document.querySelector(".cursor2");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let cursorX = mouseX;
    let cursorY = mouseY;

    // Mouse Move
    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

    });

    // Smooth Animation (60 FPS)
    function animateCursor() {

        cursorX += (mouseX - cursorX) * 0.18;
        cursorY += (mouseY - cursorY) * 0.18;

        cursor.style.transform =
            `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;

        cursor2.style.transform =
            `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;

        requestAnimationFrame(animateCursor);

    }

    animateCursor();

    // Hover Effect
    const hoverElements = document.querySelectorAll(

        "a, button, .btn, .project-card, .skill-card, .card, .achievement-card"

    );

    hoverElements.forEach((item) => {

        item.addEventListener("mouseenter", () => {

            cursor.classList.add("active");
            cursor2.classList.add("active");

        });

        item.addEventListener("mouseleave", () => {

            cursor.classList.remove("active");
            cursor2.classList.remove("active");

        });

    });

    // Click Animation
    document.addEventListener("mousedown", () => {

        cursor.classList.add("click");
        cursor2.classList.add("click");

    });

    document.addEventListener("mouseup", () => {

        cursor.classList.remove("click");
        cursor2.classList.remove("click");

    });

    // Hide Cursor When Leaving Window
    document.addEventListener("mouseleave", () => {

        cursor.style.opacity = "0";
        cursor2.style.opacity = "0";

    });

    document.addEventListener("mouseenter", () => {

        cursor.style.opacity = "1";
        cursor2.style.opacity = "1";

    });

    // Hide While Scrolling Fast
    let scrollTimer;

    window.addEventListener("scroll", () => {

        cursor.style.opacity = ".4";
        cursor2.style.opacity = ".4";

        clearTimeout(scrollTimer);

        scrollTimer = setTimeout(() => {

            cursor.style.opacity = "1";
            cursor2.style.opacity = "1";

        }, 100);

    },{passive:true});

}
