// Lisbon Tag Rugby — one-pager interactions
// One small script, no framework:
//   - reveal-on-scroll (IntersectionObserver)
//   - header + pinned CTA theming over light/dark sections
//   - hero video lifecycle (play/pause, reduced motion, tab visibility)
//   - "full video" popup (native <dialog>)

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* --- reveal on scroll ------------------------------------------------------ */
const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
if (reducedMotion) {
  revealEls.forEach((el) => el.classList.add("in"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add("in");
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
}

/* --- section contrast -> header / CTA theming ------------------------------ */
const header = document.querySelector<HTMLElement>(".site-header");
const coverBtn = document.querySelector<HTMLElement>(".cover-btn");

function setTheme(contrast: "light" | "dark" | null) {
  header?.classList.toggle("on-light", contrast === "light");
  coverBtn?.classList.toggle("on-light", contrast === "light");
}

const sections = Array.from(
  document.querySelectorAll<HTMLElement>("[data-contrast]")
);
const contrastIO = new IntersectionObserver(
  (entries) => {
    // pick the section closest to the middle of the viewport
    let best: Element | null = null;
    let bestDist = Infinity;
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const r = (e.target as HTMLElement).getBoundingClientRect();
      const dist = Math.abs(r.top + r.height / 2 - window.innerHeight / 2);
      if (dist < bestDist) {
        bestDist = dist;
        best = e.target;
      }
    }
    if (best) {
      setTheme(
        (best as HTMLElement).dataset.contrast as "light" | "dark"
      );
    }
  },
  { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
);
sections.forEach((s) => contrastIO.observe(s));
setTheme("dark"); // hero is dark at load

/* --- header hide on scroll down --------------------------------------------- */
let lastY = window.scrollY;
let ticking = false;
window.addEventListener(
  "scroll",
  () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      header?.classList.toggle("scrolled-away", y > lastY && y > 160);
      lastY = y;
      ticking = false;
    });
  },
  { passive: true }
);

/* --- full-video popup ---------------------------------------------------------- */
// When a real video replaces the placeholder still, add its play/pause
// lifecycle here (pause on tab hidden, honor prefers-reduced-motion).
const popup = document.getElementById("video-popup") as HTMLDialogElement | null;
let lastFocus: HTMLElement | null = null;

function openPopup() {
  if (!popup) return;
  lastFocus = document.activeElement as HTMLElement | null;
  popup.showModal();
}
function closePopup() {
  if (!popup) return;
  popup.close();
  lastFocus?.focus();
}

document.querySelectorAll<HTMLElement>("[data-popup-open]").forEach((btn) => {
  btn.addEventListener("click", openPopup);
});
document.querySelectorAll<HTMLElement>("[data-popup-close]").forEach((btn) => {
  btn.addEventListener("click", closePopup);
});
// backdrop click closes
popup?.addEventListener("click", (e) => {
  if (e.target === popup) closePopup();
});
popup?.addEventListener("cancel", (e) => {
  e.preventDefault();
  closePopup();
});
