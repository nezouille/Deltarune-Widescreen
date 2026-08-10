const screenshots = document.querySelectorAll(".screenshot");
const previousButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");
const dotsContainer = document.querySelector(".carousel-dots");
const counter = document.querySelector(".carousel-counter");
const navbar = document.querySelector(".navbar");

let currentSlide = 0;
let autoSlide;


/* ================================
   Carousel
================================ */

function showSlide(index) {

    if (screenshots.length === 0) return;

    if (index >= screenshots.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = screenshots.length - 1;
    } else {
        currentSlide = index;
    }


    screenshots.forEach((screenshot, i) => {

        if (i === currentSlide) {
            screenshot.classList.add("active");
        } else {
            screenshot.classList.remove("active");
        }

    });


    /* Update dots */

    const dots = document.querySelectorAll(".carousel-dot");

    dots.forEach((dot, i) => {

        if (i === currentSlide) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }

    });


    /* Update counter */

    if (counter) {

        const current = String(currentSlide + 1).padStart(2, "0");
        const total = String(screenshots.length).padStart(2, "0");

        counter.textContent = `${current} / ${total}`;

    }

}


/* ================================
   Next / Previous
================================ */

function nextSlide() {

    showSlide(currentSlide + 1);

}


function previousSlide() {

    showSlide(currentSlide - 1);

}


/* ================================
   Automatic carousel
================================ */

function startAutoSlide() {

    clearInterval(autoSlide);

    autoSlide = setInterval(() => {

        nextSlide();

    }, 5000);

}


/* ================================
   Create dots
================================ */

screenshots.forEach((_, index) => {

    const dot = document.createElement("button");

    dot.classList.add("carousel-dot");

    dot.setAttribute(
        "aria-label",
        `Go to screenshot ${index + 1}`
    );


    dot.addEventListener("click", () => {

        showSlide(index);
        startAutoSlide();

    });


    dotsContainer.appendChild(dot);

});


/* ================================
   Carousel buttons
================================ */

if (nextButton) {

    nextButton.addEventListener("click", () => {

        nextSlide();
        startAutoSlide();

    });

}


if (previousButton) {

    previousButton.addEventListener("click", () => {

        previousSlide();
        startAutoSlide();

    });

}


/* ================================
   Keyboard controls
================================ */

document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowRight") {

        nextSlide();
        startAutoSlide();

    }

    if (event.key === "ArrowLeft") {

        previousSlide();
        startAutoSlide();

    }

});


/* ================================
   Start
================================ */

showSlide(0);
startAutoSlide();