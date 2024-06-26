document.addEventListener("DOMContentLoaded", function () {
  // Get the element
  var animatedText = document.getElementById("animated-text");

  // Extract text from the element
  var text = animatedText.textContent;

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



document.addEventListener("DOMContentLoaded", function () {
  const clickableImage = document.getElementById("clickable-image");

  clickableImage.addEventListener("click", function (event) {
    for (let i = 0; i < 3; i++) {
      createSmoke(event.clientX, event.clientY);
    }
  });

  function createSmoke(x, y) {
    const smoke = document.createElement("div");
    smoke.className = "smoke";
    smoke.style.left = `${x + (Math.random() * 40 - 20)}px`;
    smoke.style.top = `${y + (Math.random() * 40 - 20)}px`;
    document.body.appendChild(smoke);

    setTimeout(() => {
      smoke.remove();
    }, 2000); // Remove the smoke after the animation
  }
});

// Add this to your script.js file
document.addEventListener("DOMContentLoaded", function () {
  function showContent() {
    document.getElementById('loader').classList.add('hidden');
    var content = document.getElementById('content');
    content.classList.add('visible');
  }

  // Show content after 1 second
  setTimeout(showContent, 1000);
});

