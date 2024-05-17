document.addEventListener("DOMContentLoaded", function () {
  // Text to animate
  var text = "THE TEAM";

  // Get the element
  var animatedText = document.getElementById("animated-text");

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
          }
      }, 100); // Adjust typing speed here
  }

  // Start animation
  animateTyping(text);
});
