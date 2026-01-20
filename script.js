// Mobile Menu Toggle
function toggleMenu() {
  const nav = document.getElementById("nav");
  const menuToggle = document.querySelector(".menu-toggle");
  nav.classList.toggle("show");
  menuToggle.classList.toggle("active");
}

// Close menu when a navigation link is clicked
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav ul li a");
  const nav = document.getElementById("nav");
  const menuToggle = document.querySelector(".menu-toggle");

  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      nav.classList.remove("show");
      if (menuToggle) {
        menuToggle.classList.remove("active");
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function(event) {
    const isClickInside = nav.contains(event.target) || (menuToggle && menuToggle.contains(event.target));
    if (!isClickInside && nav.classList.contains("show")) {
      nav.classList.remove("show");
      if (menuToggle) {
        menuToggle.classList.remove("active");
      }
    }
  });

  // Close menu on resize to desktop size
  window.addEventListener("resize", function() {
    if (window.innerWidth > 768) {
      nav.classList.remove("show");
      if (menuToggle) {
        menuToggle.classList.remove("active");
      }
    }
  });
});

function toggleDetails(card) {
  card.querySelector(".details").classList.toggle("show");
}

function openLightbox(img) {
  event.stopPropagation();
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = img.src || event.target.src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function filterGallery(category) {
  document.querySelectorAll(".gallery-item").forEach(img => {
    img.style.display = category === "all" || img.classList.contains(category) ? "block" : "none";
  });
}

function validateForm(e) {
  e.preventDefault();
  alert("Message sent successfully!");
}

window.onscroll = () => {
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  }
};
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
