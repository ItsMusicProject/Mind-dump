document.addEventListener('DOMContentLoaded', () => {
    const quotes = document.querySelectorAll('.quote-box p');
    quotes.forEach((quote, index) => {
        quote.style.animation = `fadeIn 2s ease-out ${index}s`;
    });
});
