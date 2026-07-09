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

if (typeof AOS !== "undefined") {
    AOS.init({
        duration:1000,
        once:true,
        easing:"ease-in-out"
    });
}


/*==============================
MOBILE MENU
==============================*/

const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click",()=>{

    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
    document.body.classList.toggle("menu-open");

});


document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
        document.body.classList.remove("menu-open");

    });

});


/*==============================
STICKY HEADER
==============================*/

const header = document.querySelector("header");

let headerTicking = false;

function updateHeader(){

    if(window.scrollY>50){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}

window.addEventListener("scroll",()=>{

    if(!headerTicking){

        window.requestAnimationFrame(()=>{
            updateHeader();
            headerTicking=false;
        });

        headerTicking=true;

    }

},{passive:true});

updateHeader();


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
document.documentElement.style.setProperty("--border","rgba(0,0,0,.12)");
document.documentElement.style.setProperty("--header-bg","rgba(255,255,255,.55)");
document.documentElement.style.setProperty("--header-bg-scroll","rgba(255,255,255,.85)");
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
document.documentElement.style.setProperty("--border","rgba(255,255,255,.12)");
document.documentElement.style.setProperty("--header-bg","rgba(5,8,22,.45)");
document.documentElement.style.setProperty("--header-bg-scroll","rgba(3,7,18,.85)");
document.body.style.background="#050816";

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

dark=true;

}

});


/*==============================
VANILLA TILT
==============================*/
if (typeof VanillaTilt !== "undefined") {

    if (window.innerWidth > 768) {
        VanillaTilt.init(
            document.querySelectorAll(".project-card"),
            {
                max:8,
                speed:500,
                glare:true,
                "max-glare":0.2
            }
        );
    }

    if (window.innerWidth > 768) {
        VanillaTilt.init(
            document.querySelectorAll(".skill-card"),
            {
                max:10,
                speed:500,
                glare:true,
                "max-glare":0.15
            }
        );
    }

    VanillaTilt.init(
        document.querySelectorAll(".card"),
        {
            max:8,
            speed:400
        }
    );

}


/*==============================
GSAP INTRO
==============================*/

if (typeof gsap !== "undefined") {

    gsap.from(".hero-left",{
        x:-100,
        opacity:0,
        duration:1.2,
        ease:"power3.out"
    });

    gsap.from(".hero-right",{
        x:100,
        opacity:0,
        duration:1.2,
        ease:"power3.out"
    });

    gsap.from(".navbar",{
        y:-100,
        opacity:0,
        duration:1
    });

}


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

/* google Achievements */

function openCloudModal() {
    document.getElementById("cloudModal").style.display = "flex";
}

function closeCloudModal() {
    document.getElementById("cloudModal").style.display = "none";
}



/*==============================
ORACLE MODAL
==============================*/

function openOracleModal(){

    document.getElementById("oracleModal").style.display="flex";

}

function closeOracleModal(){

    document.getElementById("oracleModal").style.display="none";

}

window.onclick = function(event) {

    const cloudModal = document.getElementById("cloudModal");
    const oracleModal = document.getElementById("oracleModal");

    if (cloudModal && event.target === cloudModal) {
        cloudModal.style.display = "none";
    }

    if (oracleModal && event.target === oracleModal) {
        oracleModal.style.display = "none";
    }
}



