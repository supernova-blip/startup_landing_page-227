// ===============================
// MelodyHub Landing Page Scripts
// ===============================

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Dark mode toggle
const darkToggle = document.querySelector("#darkToggle");
darkToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkToggle.textContent = 
    document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Navbar active link highlight on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Contact form validation
const form = document.querySelector("form");
form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.querySelector("input[placeholder='Your Name']").value.trim();
  const email = form.querySelector("input[placeholder='Your Email']").value.trim();
  const message = form.querySelector("textarea").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email.");
    return;
  }

  alert("Thank you for reaching out! We'll get back to you soon.");
  form.reset();
});
