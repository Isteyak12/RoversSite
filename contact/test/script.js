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
