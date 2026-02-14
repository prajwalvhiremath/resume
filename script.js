// Mobile nav
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#navMenu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    menu.style.display = isOpen ? "none" : "flex";
  });

  // Close menu when clicking a link (mobile)
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 720px)").matches) {
        toggle.setAttribute("aria-expanded", "false");
        menu.style.display = "none";
      }
    });
  });
}

// Footer year
const yearEl = document.querySelector("#year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Contact form -> opens user's mail client
window.openMailDraft = function (event) {
  event.preventDefault();
  const form = event.target;
  const subject = encodeURIComponent(form.subject.value.trim());
  const body = encodeURIComponent(form.body.value.trim());
  const to = "prajwal.v.hiremath0@gmail.com";
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  return false;
};
