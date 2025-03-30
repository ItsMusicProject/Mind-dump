document.addEventListener("DOMContentLoaded", function () { const mbtiButtons = document.querySelectorAll(".mbti-btn"); const genderButtons = document.querySelectorAll(".gender-btn"); const continueButton = document.getElementById("continue-btn"); let selectedMBTI = null; let selectedGender = null;

// Function to update button selection
function updateSelection(buttons, selectedValue, type) {
    buttons.forEach(button => button.classList.remove("selected"));
    selectedValue.classList.add("selected");
    return selectedValue.dataset[type];
}

// MBTI selection event
mbtiButtons.forEach(button => {
    button.addEventListener("click", function () {
        selectedMBTI = updateSelection(mbtiButtons, this, "mbti");
        checkSelection();
    });
});

// Gender selection event
genderButtons.forEach(button => {
    button.addEventListener("click", function () {
        selectedGender = updateSelection(genderButtons, this, "gender");
        checkSelection();
    });
});

// Enable the continue button if both MBTI and gender are selected
function checkSelection() {
    if (selectedMBTI && selectedGender) {
        continueButton.classList.add("active");
        continueButton.removeAttribute("disabled");
    } else {
        continueButton.classList.remove("active");
        continueButton.setAttribute("disabled", "true");
    }
}

// Redirect to the next page when continue button is clicked
continueButton.addEventListener("click", function () {
    if (selectedMBTI && selectedGender) {
        localStorage.setItem("selectedMBTI", selectedMBTI);
        localStorage.setItem("selectedGender", selectedGender);
        window.location.href = "theme-selection.html"; // Change to your next page
    }
});

});

