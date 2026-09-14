/* =========================================================
   Harvest&Projects - Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------------------------------------------------------
       Service Card Details
       --------------------------------------------------------- */
    window.toggleDetails = function (card) {
        if (!card) return;

        const details = card.querySelector(".details");

        if (details) {
            details.classList.toggle("show");
        }
    };


    /* ---------------------------------------------------------
       Lightbox
       Supports:
       - openLightbox(event)
       - openLightbox(this)
       - openLightbox(image)
       --------------------------------------------------------- */
    window.openLightbox = function (target) {

        let image = null;

        // If called with an event
        if (target && target.currentTarget) {
            image = target.currentTarget.querySelector("img");
        }

        // If called with a button
        else if (target && target.querySelector) {
            image = target.querySelector("img");

            // If target itself is an image
            if (!image && target.tagName === "IMG") {
                image = target;
            }
        }

        // Fallback
        if (!image && target && target.tagName === "IMG") {
            image = target;
        }

        if (!image) return;

        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightbox-img");

        if (!lightbox || !lightboxImg) return;

        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt || "Harvest&Projects project image";

        lightbox.style.display = "flex";
        document.body.classList.add("lightbox-open");
    };


    /* ---------------------------------------------------------
       Close Lightbox
       --------------------------------------------------------- */
    window.closeLightbox = function () {

        const lightbox = document.getElementById("lightbox");

        if (!lightbox) return;

        lightbox.style.display = "none";
        document.body.classList.remove("lightbox-open");
    };


    /* ---------------------------------------------------------
       Close Lightbox when clicking the background
       --------------------------------------------------------- */
    const lightbox = document.getElementById("lightbox");

    if (lightbox) {

        lightbox.addEventListener("click", (e) => {

            if (e.target === lightbox) {
                window.closeLightbox();
            }

        });
    }


    /* ---------------------------------------------------------
       Escape Key - Close Lightbox
       --------------------------------------------------------- */
    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {
            window.closeLightbox();
        }

    });


    /* ---------------------------------------------------------
       Gallery Filter
       --------------------------------------------------------- */
    window.filterGallery = function (category) {

        const galleryItems = document.querySelectorAll(".gallery-item");
        const filterButtons = document.querySelectorAll(".filter-btn");

        galleryItems.forEach((item) => {

            if (category === "all" || item.classList.contains(category)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }

        });


        // Update active filter button
        filterButtons.forEach((button) => {

            button.classList.remove("active");

            const buttonCategory =
                button.getAttribute("data-filter") ||
                button.getAttribute("onclick");

            if (
                buttonCategory &&
                (
                    buttonCategory === category ||
                    buttonCategory.includes(`'${category}'`) ||
                    buttonCategory.includes(`"${category}"`)
                )
            ) {
                button.classList.add("active");
            }

        });
    };


    /* ---------------------------------------------------------
       Back To Top
       --------------------------------------------------------- */
    const backToTop = document.getElementById("backToTop");

    function updateBackToTop() {

        if (!backToTop) return;

        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    }

    window.addEventListener("scroll", updateBackToTop);

    updateBackToTop();


    /* ---------------------------------------------------------
       Scroll To Top
       --------------------------------------------------------- */
    window.scrollToTop = function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };


    /* ---------------------------------------------------------
       Fade-In Animation
       --------------------------------------------------------- */
    const fadeElements = document.querySelectorAll(".fade-in");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        fadeElements.forEach((element) => {
            observer.observe(element);
        });

    } else {

        // Fallback for older browsers
        fadeElements.forEach((element) => {
            element.classList.add("visible");
        });

    }

});