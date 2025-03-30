document.addEventListener("DOMContentLoaded", function () { const mbtiButtons = document.querySelectorAll(".mbti-btn"); const genderButtons = document.querySelectorAll(".gender-btn"); const continueButton = document.getElementById("continue-btn"); let selectedMBTI = null; let selectedGender = null;

function checkSelection() {
    if (selectedMBTI && selectedGender) {
        continueButton.disabled = false;
    } else {
        continueButton.disabled = true;
    }
}

mbtiButtons.forEach(button => {
    button.addEventListener("click", function () {
        mbtiButtons.forEach(btn => btn.classList.remove("selected"));
        this.classList.add("selected");
        selectedMBTI = this.dataset.mbti;
        checkSelection();
    });
});

genderButtons.forEach(button => {
    button.addEventListener("click", function () {
        genderButtons.forEach(btn => btn.classList.remove("selected"));
        this.classList.add("selected");
        selectedGender = this.dataset.gender;
        checkSelection();
    });
});

continueButton.addEventListener("click", function () {
    if (selectedMBTI && selectedGender) {
        localStorage.setItem("selectedMBTI", selectedMBTI);
        localStorage.setItem("selectedGender", selectedGender);
        window.location.href = "ThemeSelection.html";
    }
});

// Smooth fade-in animation for selection boxes
document.querySelectorAll(".mbti-btn, .gender-btn").forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
    }, 300);
});

// Continue button animation
continueButton.style.opacity = 0;
setTimeout(() => {
    continueButton.style.transition = "opacity 1s ease";
    continueButton.style.opacity = 1;
}, 500);

});

