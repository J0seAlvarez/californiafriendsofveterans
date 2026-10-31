// Shared header behavior for inner pages. Vanilla JS, no dependencies.
(function () {
  "use strict";
  var header = document.getElementById("cfvh");
  var toggle = document.getElementById("cfvh-toggle");
  var nav = document.getElementById("cfvh-nav");
  var moreBtn = document.getElementById("cfvh-more-btn");
  var moreMenu = document.getElementById("cfvh-more-menu");
  function onScroll() { if (header) header.classList.toggle("scrolled", window.scrollY > 10); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }
  if (moreBtn && moreMenu) {
    moreBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = moreMenu.classList.toggle("open");
      moreBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function () { moreMenu.classList.remove("open"); moreBtn.setAttribute("aria-expanded", "false"); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { moreMenu.classList.remove("open"); moreBtn.setAttribute("aria-expanded", "false"); }
    });
  }
})();
