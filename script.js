

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

