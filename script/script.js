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
function downloadResume() {
    // Replace the URL with the shareable link of your resume file
    window.location.href = 'https://drive.google.com/uc?export=download&id=1wy-UiAdC4Nk13PdqelKU_Cly5L7hs-pT';
}

