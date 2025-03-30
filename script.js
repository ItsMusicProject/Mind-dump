document.addEventListener("DOMContentLoaded", function () { const quoteBoxes = document.querySelectorAll(".quote-box");

quoteBoxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        box.style.transform = "scale(1.1)";
        box.style.transition = "transform 0.3s ease";
    });
    
    box.addEventListener("mouseout", () => {
        box.style.transform = "scale(1)";
    });
});

});

