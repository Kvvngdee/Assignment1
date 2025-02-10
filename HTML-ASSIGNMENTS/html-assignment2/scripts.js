// Smooth scrolling for the "Back to Top" button
document.getElementById("backToTopBtn").addEventListener("click", function () {
  // Scroll to the top of the page (including the header)
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Show the "Back to Top" button when scrolled down 50px from the top
window.onscroll = function () {
  let scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollPosition > 50) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
};
