/* Great Learners Montessori — shared behaviour: mobile nav toggle,
   scroll-reveal, restrained magnetic hero CTA. */
(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.querySelector(".nav__menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      menu.setAttribute("data-open", String(!open));
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        menu.setAttribute("data-open", "false");
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.getAttribute("data-open") === "true") {
        toggle.setAttribute("aria-expanded", "false");
        menu.setAttribute("data-open", "false");
        toggle.focus();
      }
    });
  }

  /* ---- Scroll-reveal ---- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  revealEls.forEach(function (el) {
    var delay = el.getAttribute("data-reveal-delay");
    if (delay) el.style.setProperty("--reveal-delay", delay);
  });
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { observer.observe(el); });
  }

  /* ---- Restrained magnetic pull on the single hero CTA (opt-in via
     .btn--magnetic), gated behind reduced-motion. Hovers the stable
     .magnetic-wrap and animates the button child, not the hovered
     element itself. ---- */
  if (!reduceMotion) {
    document.querySelectorAll(".magnetic-wrap").forEach(function (wrap) {
      var btn = wrap.querySelector(".btn--magnetic");
      if (!btn) return;
      wrap.addEventListener("pointermove", function (e) {
        var rect = wrap.getBoundingClientRect();
        var x = e.clientX - (rect.left + rect.width / 2);
        var y = e.clientY - (rect.top + rect.height / 2);
        btn.style.transform = "translate(" + (x * 0.12).toFixed(1) + "px, " + (y * 0.22).toFixed(1) + "px)";
      });
      wrap.addEventListener("pointerleave", function () {
        btn.style.transform = "";
      });
    });
  }

  /* ---- Current-page nav highlight (in case a page forgets aria-current) ---- */
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__menu a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === here || (here === "" && href === "index.html")) {
      link.setAttribute("aria-current", "page");
    }
  });
})();
