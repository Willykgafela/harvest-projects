// Mobile Menu Toggle
function toggleMenu() {
  const nav = document.getElementById("nav");
  const menuToggle = document.querySelector(".menu-toggle");
  nav.classList.toggle("show");
  menuToggle.classList.toggle("active");
}

// Handle responsive menu behavior
function handleMenuResponsiveness() {
  const nav = document.getElementById("nav");
  const menuToggle = document.querySelector(".menu-toggle");
  
  if (window.innerWidth > 768) {
    // Desktop: ensure menu is visible and toggle is hidden
    nav.classList.remove("show");
    if (menuToggle) {
      menuToggle.classList.remove("active");
      menuToggle.style.display = "none";
    }
  } else {
    // Mobile: show toggle, keep menu hidden until clicked
    if (menuToggle) {
      menuToggle.style.display = "flex";
    }
    nav.classList.remove("show");
    if (menuToggle) {
      menuToggle.classList.remove("active");
    }
  }
}

// Close menu when a navigation link is clicked
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav ul li a");
  const nav = document.getElementById("nav");
  const menuToggle = document.querySelector(".menu-toggle");

  // Initial responsiveness check
  handleMenuResponsiveness();

  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      const href = this.getAttribute("href");
      
      // Close menu immediately on mobile
      if (window.innerWidth <= 768) {
        nav.classList.remove("show");
        if (menuToggle) {
          menuToggle.classList.remove("active");
        }
      }

      // Allow natural navigation to occur
      if (!href.startsWith("#")) {
        // For external page navigation, allow default behavior
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function(event) {
    const isClickInside = nav.contains(event.target) || (menuToggle && menuToggle.contains(event.target));
    if (!isClickInside && nav.classList.contains("show") && window.innerWidth <= 768) {
      nav.classList.remove("show");
      if (menuToggle) {
        menuToggle.classList.remove("active");
      }
    }
  });

  // Handle resize events for responsive behavior
  let resizeTimer;
  window.addEventListener("resize", function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      handleMenuResponsiveness();
    }, 250);
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

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

