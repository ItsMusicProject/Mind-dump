document.addEventListener("DOMContentLoaded", () => { const quotes = document.querySelectorAll(".quote"); quotes.forEach((quote, index) => { setTimeout(() => { quote.classList.add("fade-in"); }, index * 1000); });

const exploreBtn = document.querySelector(".explore-btn");
exploreBtn.addEventListener("mouseover", () => {
    exploreBtn.classList.add("hover-effect");
});
exploreBtn.addEventListener("mouseleave", () => {
    exploreBtn.classList.remove("hover-effect");
});

exploreBtn.addEventListener("click", () => {
    exploreBtn.classList.add("button-click");
    setTimeout(() => {
        window.location.href = "mbti_selection.html";
    }, 500);
});

});

