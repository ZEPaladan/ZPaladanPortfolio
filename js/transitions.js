/* ======================================================
   SMOOTH SECTION SCROLL
====================================================== */

const smoothLinks = document.querySelectorAll(
    'a[href^="#"]'
);

smoothLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        const targetId =
            this.getAttribute("href");

        if (!targetId || targetId === "#")
            return;

        const target =
            document.querySelector(targetId);

        if (!target)
            return;

        e.preventDefault();

        const headerOffset = 80;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            headerOffset;

        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });
    });
});

/* ======================================================
   BUTTON MICRO INTERACTIONS
====================================================== */

const buttons =
    document.querySelectorAll(
        ".btn, .project-btn, .social-card"
    );

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        if (typeof gsap !== "undefined") {

            gsap.to(button, {

                scale: 1.03,
                duration: 0.25,
                ease: "power2.out"

            });
        }
    });

    button.addEventListener("mouseleave", () => {

        if (typeof gsap !== "undefined") {

            gsap.to(button, {

                scale: 1,
                duration: 0.25,
                ease: "power2.out"

            });
        }
    });
});

/* ======================================================
   PARALLAX BACKGROUND BLURS
====================================================== */

const blur1 = document.querySelector(".blur-1");
const blur2 = document.querySelector(".blur-2");

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    if (blur1) {

        blur1.style.transform =
            `translateY(${scrollY * 0.05}px)`;
    }

    if (blur2) {

        blur2.style.transform =
            `translateY(${-scrollY * 0.05}px)`;
    }
});

/* ======================================================
   FADE IN BODY
====================================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    if (typeof gsap !== "undefined") {

        gsap.to(document.body, {

            opacity: 1,

            duration: 0.8,

            ease: "power2.out"

        });

    } else {

        document.body.style.opacity = "1";
    }
});

/* ======================================================
   PROJECT IMAGE SMOOTH EFFECT
====================================================== */

const projectImages =
    document.querySelectorAll(".project-image img");

projectImages.forEach(image => {

    image.addEventListener("mouseenter", () => {

        if (typeof gsap !== "undefined") {

            gsap.to(image, {

                scale: 1.08,
                duration: 0.5,
                ease: "power2.out"

            });
        }
    });

    image.addEventListener("mouseleave", () => {

        if (typeof gsap !== "undefined") {

            gsap.to(image, {

                scale: 1,
                duration: 0.5,
                ease: "power2.out"

            });
        }
    });
});