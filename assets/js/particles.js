/*=========================================
            PARTICLES.JS
=========================================*/

const glow = document.createElement("div");

glow.className = "mouse-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove", e => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

setInterval(() => {

    document.querySelectorAll(".bg-blur").forEach((blob, index) => {

        blob.style.transform = `translate(${Math.sin(Date.now()/1500+index)*40}px,
        ${Math.cos(Date.now()/1500+index)*30}px)`;

    });

},30);
