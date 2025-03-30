document.addEventListener("DOMContentLoaded", function () {
    const themeCards = document.querySelectorAll(".theme-card");
    const continueBtn = document.getElementById("continue-btn");
    let selectedTheme = null;

    themeCards.forEach(card => {
        card.addEventListener("click", function () {
            // Remove selection from other cards
            themeCards.forEach(c => c.classList.remove("selected"));
            
            // Add selection to clicked card
            this.classList.add("selected");
            selectedTheme = this.getAttribute("data-theme");
            continueBtn.removeAttribute("disabled");
        });
    });

    continueBtn.addEventListener("click", function () {
        if (selectedTheme) {
            localStorage.setItem("selectedTheme", selectedTheme);
            window.location.href = "notetaking.html"; // Redirect to note-taking page
        }
    });
});
