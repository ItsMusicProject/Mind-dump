document.addEventListener("DOMContentLoaded", function () { const quoteContainer = document.querySelector(".quote-box"); quoteContainer.classList.add("fade-in");

// Adding animation to the emphasized text
const emphasizedText = document.querySelector(".emphasized");
emphasizedText.classList.add("pulse");

// Smooth scrolling effect for better user experience
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

});

