window.onload = function () {
  // Simulate loading delay
  setTimeout(function () {
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("content").classList.add("visible");
  }, 2000); // Adjust the delay as needed
};

document.addEventListener("DOMContentLoaded", function () {
  // Text to animate
  var text = "WHAT IS CIRC?";

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

  // Show content after loader (if you have a loader logic)
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
  }, 2000); // Adjust delay to match your loader timing
});
