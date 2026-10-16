// Galithrowing — Gartrell Design
(function () {
  // Mobile navigation
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Lexicon search and origin filter
  var search = document.getElementById("lexicon-search");
  var entries = Array.prototype.slice.call(document.querySelectorAll(".entry"));
  var filters = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
  var count = document.getElementById("lexicon-count");
  if (!search || !entries.length) return;

  var active = "all";
  function apply() {
    var q = search.value.trim().toLowerCase();
    var shown = 0;
    entries.forEach(function (el) {
      var matchText = !q || el.textContent.toLowerCase().indexOf(q) !== -1;
      var matchOrigin = active === "all" || el.getAttribute("data-origin") === active;
      var visible = matchText && matchOrigin;
      el.hidden = !visible;
      if (visible) shown++;
    });
    if (count) count.textContent = shown + " of " + entries.length + " entries";
  }
  search.addEventListener("input", apply);
  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      active = btn.getAttribute("data-filter");
      filters.forEach(function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
      apply();
    });
  });
  apply();
})();
