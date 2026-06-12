
/* ======================================================
   GSAP CHECK
====================================================== */


document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        console.error("GSAP not loaded.");
        return;
    }

    // 🛑 SAFETY DELAY (IMPORTANT FIX)
    setTimeout(() => {

        heroAnimation();
        revealAnimations();
        projectCardAnimations();
        skillAnimations();

    }, 100);

});

/* ======================================================
   HERO ENTRANCE
====================================================== */


function heroAnimation() {

    gsap.from(".hero-badge", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });

    gsap.from(".hero-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.1,
        ease: "power3.out"
    });

    gsap.from(".hero-description", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.25,
        ease: "power3.out"
    });

    gsap.from(".hero-buttons .btn", {
        y: 30,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        delay: 0.4,
        stagger: 0.12,
        ease: "power3.out"
    });
}

/* ======================================================
   SCROLL REVEAL
====================================================== */

function revealAnimations() {

    const revealElements =
        document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    gsap.to(entry.target, {
                        opacity: 1,
                        y: 0,
                        duration: 0.9,
                        ease: "power2.out"
                    });

                    observer.unobserve(entry.target);
                }
            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(element => {
        observer.observe(element);
    });
}

/* ======================================================
   PROJECT CARDS HOVER EFFECT
====================================================== */

function projectCardAnimations() {

    const cards =
        document.querySelectorAll(".project-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            gsap.to(card, {
                y: -10,
                duration: 0.3,
                ease: "power2.out"
            });

        });

        card.addEventListener("mouseleave", () => {

            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });

        });

    });

}

/* ======================================================
   SKILLS ANIMATION (FIXED VERSION)
====================================================== */

function skillAnimations() {

    const aboutSection =
        document.querySelector("#about");

    const skillCards =
        document.querySelectorAll("#about .skill-card");

    if (!aboutSection || skillCards.length === 0) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                gsap.fromTo(skillCards,
                    {
                        opacity: 0,
                        y: 25,
                        scale: 0.95
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.6,
                        stagger: 0.08,
                        ease: "power2.out"
                    }
                );

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.2
    });

    observer.observe(aboutSection);
}