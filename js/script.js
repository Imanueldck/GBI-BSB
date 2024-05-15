// Toggle sidebar function
document.querySelector('[data-bs-toggle="sidebar"]').addEventListener("click", function () {
  document.querySelector(".sidebar").classList.toggle("sidebar-active");
});

// Function to check window width and toggle sidebar accordingly
function checkWidth() {
  if (window.innerWidth >= 992) {
    // If window width is larger than or equal to 992px (desktop), hide sidebar
    document.querySelector(".sidebar").classList.remove("sidebar-active");
  }
}

// Check window width on page load
checkWidth();

// Check window width on window resize
window.addEventListener("resize", checkWidth);
