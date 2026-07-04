/*=========================================
            CURSOR.JS
=========================================*/

const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursor2.style.left = e.clientX + "px";
    cursor2.style.top = e.clientY + "px";

});

document.querySelectorAll("a,button,.btn,.card,.skill-card,.project-card")
.forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor2.style.transform = "translate(-50%,-50%) scale(1.8)";
        cursor2.style.borderColor = "#06b6d4";

    });

    item.addEventListener("mouseleave", () => {

        cursor2.style.transform = "translate(-50%,-50%) scale(1)";
        cursor2.style.borderColor = "rgba(255,255,255,.4)";

    });

});
