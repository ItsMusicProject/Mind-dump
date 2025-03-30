document.addEventListener("DOMContentLoaded", function () { // Add animation class after a short delay setTimeout(() => { document.querySelector(".welcome-text").classList.add("fade-in"); document.querySelector(".sub-text").classList.add("bounce"); }, 500);

// Fade in quotes
const quotes = document.querySelectorAll(".quote-box");
let delay = 1000;
quotes.forEach((quote, index) => {
    setTimeout(() => {
        quote.classList.add("fade-in");
    }, delay * (index + 1));
});

});

