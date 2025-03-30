function goToSelectionPage() { window.location.href = "selection.html"; }

document.addEventListener("DOMContentLoaded", function() { const continueButton = document.getElementById("continue-btn"); if (continueButton) { continueButton.addEventListener("click", goToSelectionPage); }

// Fade-in effect for quotes
const quotes = document.querySelectorAll(".quote-box");
quotes.forEach((quote, index) => {
    setTimeout(() => {
        quote.style.opacity = "1";
        quote.style.transform = "translateY(0)";
    }, index * 500);
});

// Dynamic background animation
document.body.classList.add("animated-bg");

});

