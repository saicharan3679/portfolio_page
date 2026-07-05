/*=========================================
            MAIN.JS
=========================================*/

/*==============================
LOADER
==============================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";
    loader.style.visibility = "hidden";

});


/*==============================
AOS
==============================*/

AOS.init({

    duration:1000,

    once:true,

    easing:"ease-in-out"

});


/*==============================
MOBILE MENU
==============================*/

const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});


document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});


/*==============================
STICKY HEADER
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.background="rgba(3,7,18,.85)";
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";
        header.style.backdropFilter="blur(18px)";

    }

    else{

        header.style.background="rgba(5,8,22,.45)";
        header.style.boxShadow="none";

    }

});


/*==============================
ACTIVE NAVIGATION
==============================*/

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/*==============================
BACK TO TOP
==============================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});


topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/*==============================
SCROLL PROGRESS BAR
==============================*/

window.addEventListener("scroll",()=>{

const winScroll=document.body.scrollTop||document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const scrolled=(winScroll/height)*100;

document.getElementById("progress-bar").style.width=scrolled+"%";

});


/*==============================
THEME TOGGLE
==============================*/

const themeBtn=document.getElementById("theme-btn");

let dark=true;

themeBtn.addEventListener("click",()=>{

if(dark){

document.documentElement.style.setProperty("--bg","#f8fafc");
document.documentElement.style.setProperty("--bg2","#ffffff");
document.documentElement.style.setProperty("--text","#111827");
document.documentElement.style.setProperty("--text2","#475569");
document.documentElement.style.setProperty("--card","rgba(0,0,0,.04)");
document.body.style.background="#f8fafc";

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

dark=false;

}

else{

document.documentElement.style.setProperty("--bg","#050816");
document.documentElement.style.setProperty("--bg2","#0d1224");
document.documentElement.style.setProperty("--text","#ffffff");
document.documentElement.style.setProperty("--text2","#cbd5e1");
document.documentElement.style.setProperty("--card","rgba(255,255,255,.06)");
document.body.style.background="#050816";

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

dark=true;

}

});


/*==============================
VANILLA TILT
==============================*/

VanillaTilt.init(

document.querySelectorAll(".project-card"),

{

max:8,

speed:500,

glare:true,

"max-glare":0.2

}

);

VanillaTilt.init(

document.querySelectorAll(".skill-card"),

{

max:10,

speed:500,

glare:true,

"max-glare":0.15

}

);

VanillaTilt.init(

document.querySelectorAll(".card"),

{

max:8,

speed:400

}

);


/*==============================
GSAP INTRO
==============================*/

// gsap.from(".hero-left",{

// x:-100,

// opacity:0,

// duration:1.2,

// ease:"power3.out"

// });

// gsap.from(".hero-right",{

// x:100,

// opacity:0,

// duration:1.2,

// ease:"power3.out"

// });

// gsap.from(".navbar",{

// y:-100,

// opacity:0,

// duration:1

// });


/*==============================
REVEAL ON SCROLL
==============================*/

const reveals=document.querySelectorAll(".reveal");

function reveal(){

reveals.forEach(item=>{

const windowHeight=window.innerHeight;

const revealTop=item.getBoundingClientRect().top;

const revealPoint=120;

if(revealTop<windowHeight-revealPoint){

item.classList.add("active");

}

});

}

window.addEventListener("scroll",reveal);


/*==============================
CONTACT FORM
==============================*/

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}
