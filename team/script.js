document.addEventListener("DOMContentLoaded", function () {
    // Text to animate
    var text = "THE TEAM";

    // Get the element
    var animatedText = document.getElementById("animated-text");
    var imageContainer = document.getElementById("image-container");

    // Function to set text content
    function setTextContent(text) {
        animatedText.textContent = text;
    }

    // Function to animate typing effect
    function animateTyping(text) {
        var index = 0;
        var interval = setInterval(function () {
            setTextContent(text.substring(0, index));
            index++;
            if (index > text.length) {
                clearInterval(interval);
                setTimeout(makeTextClickable, 2000); // Make text clickable after 2 seconds
            }
        }, 100); // Adjust typing speed here
    }

    // Function to make the text clickable
    function makeTextClickable() {
        animatedText.addEventListener('click', function () {
            imageContainer.classList.add('show');
        });
    }

    // Start animation
    animateTyping(text);
});
