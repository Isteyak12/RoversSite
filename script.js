window.onload = function () {
  // Simulate loading delay
  setTimeout(function () {
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("content").classList.add("visible");
  }, 2000); // Adjust the delay as needed
};


