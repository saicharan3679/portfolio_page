/*=========================================
            SCROLL.JS
=========================================*/

const counters = document.querySelectorAll(".counter");

const speed = 150;

const startCounter = () => {

    counters.forEach(counter => {

        const update = () => {

            const target = +counter.dataset.target;

            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {

                counter.innerText = Math.ceil(count + increment);

                setTimeout(update, 15);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

};

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter();

        }

    });

});

counters.forEach(counter => observer.observe(counter));
