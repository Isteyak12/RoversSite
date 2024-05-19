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
