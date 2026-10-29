console.log("js loaded");
const screenshots = [
    {
        src: "assets/screenshots/chapter1/battle.png",
        caption: "Battle"
    },
    {
        src: "assets/screenshots/chapter1/chapterselect.png",
        caption: "Chapter select screen"
    },
    {
        src: "assets/screenshots/chapter1/torielhouse.png",
        caption: "Toriel's yard"
    },
    {
        src: "assets/screenshots/chapter1/seam.png",
        caption: "Seam shop"
    },
    {
        src: "assets/screenshots/chapter1/castletown.png",
        caption: "Castle town"
    },
    {
        src: "assets/screenshots/chapter1/legend.png",
        caption: "Legend Pannel"
    },
];

let currentIndex = 0;

const screenshot = document.querySelector(".carousel img");
const caption = document.querySelector(".carousel .caption");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

function showScreenshot(index) {
    currentIndex = (index + screenshots.length) % screenshots.length;

    screenshot.src = screenshots[currentIndex].src;
    caption.textContent = screenshots[currentIndex].caption;
}

if (screenshot && caption && prevButton && nextButton) {
    prevButton.addEventListener("click", () => {
        showScreenshot(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        showScreenshot(currentIndex + 1);
    });

    showScreenshot(0);
}

const images = document.querySelectorAll(".gallery-grid img");
const photoCount = images.length;
document.getElementById("photo-count").textContent = photoCount;
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeButton = document.getElementById("lightbox-close");

images.forEach(image => {
    image.addEventListener("click", () => {
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
        lightbox.style.display = "flex";
    });
});

closeButton.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", event => {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        lightbox.style.display = "none";
    }
});

document.querySelectorAll(".gallery details").forEach(chapter => {
    const images = chapter.querySelectorAll(".gallery-grid img");
    const counter = chapter.querySelector(".photo-count");

    counter.textContent = `${images.length}`;
});