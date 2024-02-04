document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.navbar');

    window.onscroll = function () {
        var top = window.scrollY;
        if (top >= 100) {
            header.classList.add('navbarDark');
        } else {
            header.classList.remove('navbarDark');
        }
    };

    // Display the text without typing animation
    const typedTextSpan = document.querySelector('.typed-text');
    if (typedTextSpan) {
        typedTextSpan.textContent = "I am a Web Developer";
    }
});
