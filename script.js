document.addEventListener("DOMContentLoaded", () => { const welcomeText = document.querySelector(".welcome"); const dumpText = document.querySelector(".dump-text"); const quotes = document.querySelectorAll(".quote-box");

// Adding a slight delay to animations for better visibility
setTimeout(() => {
    welcomeText.style.opacity = "1";
    dumpText.style.opacity = "1";
}, 500);

quotes.forEach((quote, index) => {
    setTimeout(() => {
        quote.style.opacity = "1";
        quote.style.transform = "translateY(0)";
    }, 800 + index * 300);
});

});

