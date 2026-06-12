/* ======================================================
   MOBILE MENU
====================================================== */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        menuBtn.classList.toggle("active");
    });
}

/* ======================================================
   CLOSE MOBILE MENU ON LINK CLICK
====================================================== */

const mobileLinks = document.querySelectorAll(".mobile-link");

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        menuBtn.classList.remove("active");
    });
});

/* ======================================================
   ACTIVE NAVIGATION
====================================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {
            link.classList.add("active");
        }
    });
});

/* ======================================================
   EMAILJS CONTACT FORM
====================================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        // 🔴 CRITICAL: stop page reload / anchor jump
        e.preventDefault();
        e.stopPropagation();

        const submitBtn = contactForm.querySelector(".submit-btn");

        const originalText = submitBtn.textContent;

        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        const templateParams = {
            name: contactForm.name.value,
            email: contactForm.email.value,
            message: contactForm.message.value
        };

        emailjs.send(
            "service_tk82fp9",
            "template_qva68rr",
            templateParams
        )
        .then(function (response) {

            console.log("SUCCESS", response);

            submitBtn.textContent = "Message Sent ✓";
            contactForm.reset();

        })
        .catch(function (error) {

            console.error("FAILED", error);

            submitBtn.textContent = "Failed to Send";

        })
        .finally(function () {

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);

        });

    });
}

/* ======================================================
   HEADER BACKGROUND ON SCROLL
====================================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(7,11,20,.92)";

    } else {

        header.style.background =
            "rgba(7,11,20,.65)";
    }
});

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    // Background orbs parallax
    const orb1 = document.querySelector(".orb-1");
    const orb2 = document.querySelector(".orb-2");
    const orb3 = document.querySelector(".orb-3");

    if (orb1) {
        orb1.style.transform = `translateY(${scrollY * 0.2}px)`;
    }

    if (orb2) {
        orb2.style.transform = `translateY(${-scrollY * 0.15}px)`;
    }

    if (orb3) {
        orb3.style.transform = `translate(-50%, -50%) translateY(${scrollY * 0.1}px)`;
    }

});



window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        // add class for post-load animation
        loader.classList.add("loaded");

        loader.style.opacity = "0";
        loader.style.transition = "0.6s ease";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);

    }, 1200);

});