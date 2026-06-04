/* ================= AOS INIT ================= */
AOS.init({
  duration: 1000,
  once: true
});

/* ================= LOADING SCREEN ================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 1200);
});

/* ================= DARK / LIGHT MODE ================= */
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      themeToggle.textContent = "☀️ Light Mode";
    } else {
      themeToggle.textContent = "🌙 Dark Mode";
    }
  });
}

/* ================= TYPING ANIMATION ================= */
const typingText = document.querySelector(".typing");

const messages = [
  "Frontend Web Developer",
  "UI Builder",
  "Freelancer",
  "Problem Solver"
];

let msgIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentMsg = messages[msgIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  // FIX: clamp values so no ghost character appears
  const displayText = currentMsg.substring(0, Math.max(0, charIndex));
  typingText.textContent = displayText;

  let speed = isDeleting ? 60 : 100;

  // when word is fully typed
  if (!isDeleting && charIndex === currentMsg.length) {
    speed = 1200;
    isDeleting = true;
  }

  // when word is fully deleted
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    msgIndex = (msgIndex + 1) % messages.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

/* ================= SMOOTH SCROLL OFFSET FIX ================= */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});

/* ================= EMAILJS FORM ================= */
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const button = form.querySelector("button");
  button.textContent = "Sending...";

  emailjs.sendForm(
    "service_tk82fp9",
    "template_qva68rr",
    this
  ).then(
    function () {
      button.textContent = "Message Sent ✔";

      setTimeout(() => {
        button.textContent = "Send Message";
        form.reset();
      }, 2000);
    },
    function (error) {
      console.log(error);
      button.textContent = "Failed to Send ❌";

      setTimeout(() => {
        button.textContent = "Send Message";
      }, 2000);
    }
  );
});
/* ================= PARTICLE SYSTEM ================= */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2;
    this.speedX = (Math.random() * 0.5) - 0.25;
    this.speedY = (Math.random() * 0.5) - 0.25;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > canvas.width) this.x = 0;
    if (this.x < 0) this.x = canvas.width;
    if (this.y > canvas.height) this.y = 0;
    if (this.y < 0) this.y = canvas.height;
  }

  draw() {
    ctx.fillStyle = "rgba(109, 94, 252, 0.5)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  for (let i = 0; i < 80; i++) {
    particlesArray.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });

  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});
/* ================= CURSOR MOVE ================= */
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

if (cursor && follower && window.innerWidth > 768) {
  window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    follower.style.left = e.clientX + "px";
    follower.style.top = e.clientY + "px";
  });
}
/* ================= LINK TRANSITION POLISH ================= */
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    document.body.style.opacity = "0.9";
    setTimeout(() => {
      document.body.style.opacity = "1";
    }, 150);
  });
});
/* ================= COPY EMAIL ================= */
function copyEmail() {
  const email = "zpaladan@gmail.com";
  navigator.clipboard.writeText(email);
  alert("Email copied!");
}
function showToast(msg) {
  const toast = document.createElement("div");
  toast.textContent = msg;
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.background = "#111";
  toast.style.color = "#fff";
  toast.style.padding = "10px 15px";
  toast.style.borderRadius = "8px";
  toast.style.zIndex = "99999";

  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 2000);
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach(sec => {
  observer.observe(sec);
});
/* ================= AI HERO PARALLAX ================= */

const hero = document.querySelector(".hero");

if (hero && window.innerWidth > 768) {
  hero.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    document.querySelectorAll(".ai-orb").forEach((orb, index) => {
      const speed = (index + 1) * 5;
      orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
  });
}