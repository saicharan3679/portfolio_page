/*=========================================
            TYPING.JS
=========================================*/

const typingElement = document.querySelector(".typing");

if (typingElement) {

    new Typed(".typing", {

        strings: [

            "Software Developer",

            "Python Developer",

            "Cloud Enthusiast",

            "Machine Learning Learner",

            "Backend Developer",

            "Problem Solver"

        ],

        typeSpeed: 70,

        backSpeed: 40,

        backDelay: 1800,

        startDelay: 300,

        loop: true,

        smartBackspace: true,

        showCursor: true,

        cursorChar: "|"

    });

}
