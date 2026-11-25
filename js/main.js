/* =========================================================
   Pastry House Hippo — Interactions
   ========================================================= */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------- Header: scrolled state ---------- */
  const header = $("#header");
  const fab = $(".call-fab");
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 12);
    if (fab) fab.classList.toggle("is-visible", y > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile navigation ---------- */
  const toggle = $("#navToggle");
  const setNav = (open) => {
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  toggle.addEventListener("click", () => setNav(!document.body.classList.contains("nav-open")));
  $$("#nav a").forEach((a) => a.addEventListener("click", () => setNav(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setNav(false); });
  window.addEventListener("resize", () => { if (window.innerWidth > 960) setNav(false); });

  /* ---------- Active nav link on scroll ---------- */
  const navLinks = $$(".nav__link");
  const sections = navLinks.map((l) => $(l.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === "#" + entry.target.id));
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const siblings = Array.from(el.parentElement.children).filter((c) => c.classList.contains("reveal"));
          el.style.transitionDelay = Math.min(siblings.indexOf(el), 5) * 80 + "ms";
          el.classList.add("is-visible");
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Open / closed status (Chicago time) ---------- */
  const HOURS = { 0: [9, 20], 1: [9, 19.5], 2: [9, 19.5], 3: [9, 19.5], 4: [9, 19.5], 5: [9, 20], 6: [9, 20] };
  const fmt = (h) => {
    const hr = Math.floor(h), min = Math.round((h - hr) * 60);
    const suffix = hr >= 12 ? "PM" : "AM";
    const h12 = ((hr + 11) % 12) + 1;
    return h12 + (min ? ":" + String(min).padStart(2, "0") : "") + " " + suffix;
  };
  function chicagoNow() {
    try {
      const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Chicago", weekday: "short", hour: "numeric", minute: "numeric", hour12: false
      }).formatToParts(new Date());
      const get = (t) => parts.find((p) => p.type === t).value;
      const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
      return { day, time: (parseInt(get("hour"), 10) % 24) + parseInt(get("minute"), 10) / 60 };
    } catch (e) {
      const d = new Date();
      return { day: d.getDay(), time: d.getHours() + d.getMinutes() / 60 };
    }
  }
  function updateStatus() {
    const { day, time } = chicagoNow();
    const [open, close] = HOURS[day];
    const el = $("#openStatus");
    const isOpen = time >= open && time < close;
    el.classList.toggle("is-open", isOpen);
    el.classList.toggle("is-closed", !isOpen);
    if (isOpen) {
      el.textContent = "Open now · until " + fmt(close);
    } else if (time < open) {
      el.textContent = "Closed · opens today at " + fmt(open);
    } else {
      el.textContent = "Closed · opens tomorrow at " + fmt(HOURS[(day + 1) % 7][0]);
    }
    $$("#hoursList li").forEach((li) => {
      li.classList.toggle("is-today", li.dataset.days.split(",").map(Number).includes(day));
    });
  }
  updateStatus();
  setInterval(updateStatus, 60 * 1000);

  /* ---------- Menu: tabs + search ---------- */
  const MENU = window.HIPPO_MENU || [];
  const tabsEl = $("#menuTabs");
  const panel = $("#menuPanel");
  const searchInput = $("#menuSearch");
  let activeId = MENU.length ? MENU[0].id : null;

  const TAG_LABELS = { signature: ["Must-try", "tag--signature"], gf: ["Gluten-free", "tag--gf"], veg: ["No meat", "tag--veg"] };
  const escapeHTML = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const highlight = (text, q) => {
    const safe = escapeHTML(text);
    if (!q) return safe;
    const re = new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
    return safe.replace(re, "<mark>$1</mark>");
  };
  const itemHTML = (item, q, catName) => `
    <li class="menu-item">
      ${catName ? `<span class="menu-item__cat">${escapeHTML(catName)}</span>` : ""}
      <div class="menu-item__name">${highlight(item.name, q)}
        ${(item.tags || []).filter((t) => TAG_LABELS[t]).map((t) => `<span class="tag ${TAG_LABELS[t][1]}">${TAG_LABELS[t][0]}</span>`).join("")}
      </div>
      ${item.desc ? `<p class="menu-item__desc">${highlight(item.desc, q)}</p>` : ""}
    </li>`;

  function renderTabs() {
    tabsEl.innerHTML = MENU.map((cat) => `
      <button class="tab" role="tab" id="tab-${cat.id}" aria-controls="menuPanel" aria-selected="${cat.id === activeId}" data-id="${cat.id}">
        ${escapeHTML(cat.name)}<span class="tab__count">${cat.items.length}</span>
      </button>`).join("");
  }

  function renderCategory() {
    const cat = MENU.find((c) => c.id === activeId);
    if (!cat) return;
    panel.setAttribute("aria-labelledby", "tab-" + cat.id);
    panel.innerHTML = `
      <div class="menu-panel__head">
        <h3>${escapeHTML(cat.name)}</h3>
        <p>${escapeHTML(cat.note || "")}</p>
      </div>
      <ul class="menu-list">${cat.items.map((i) => itemHTML(i)).join("")}</ul>`;
  }

  function renderSearch(q) {
    const needle = q.toLowerCase();
    const results = [];
    MENU.forEach((cat) => cat.items.forEach((item) => {
      if ((item.name + " " + (item.desc || "")).toLowerCase().includes(needle)) results.push({ item, cat });
    }));
    panel.removeAttribute("aria-labelledby");
    if (!results.length) {
      panel.innerHTML = `<div class="menu-empty"><strong>No matches for “${escapeHTML(q)}”</strong>Try another word, or give us a call — we may have it today.</div>`;
      return;
    }
    panel.innerHTML = `
      <div class="menu-panel__head">
        <h3>Results for “${escapeHTML(q)}”</h3>
        <p>${results.length} item${results.length > 1 ? "s" : ""} found</p>
      </div>
      <ul class="menu-list">${results.map((r) => itemHTML(r.item, q, r.cat.name)).join("")}</ul>`;
  }

  function render() {
    const q = searchInput.value.trim();
    tabsEl.classList.toggle("is-searching", !!q);
    $$(".tab", tabsEl).forEach((t) => t.setAttribute("aria-selected", String(!q && t.dataset.id === activeId)));
    q ? renderSearch(q) : renderCategory();
  }

  if (MENU.length) {
    renderTabs();
    render();
    tabsEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".tab");
      if (!btn) return;
      activeId = btn.dataset.id;
      searchInput.value = "";
      btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      render();
    });
    tabsEl.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const tabs = $$(".tab", tabsEl);
      const i = tabs.indexOf(document.activeElement);
      if (i < 0) return;
      const next = tabs[(i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length];
      next.focus();
      next.click();
    });
    let t;
    searchInput.addEventListener("input", () => { clearTimeout(t); t = setTimeout(render, 120); });
  }

  /* ---------- Contact form (opens the visitor's email app) ---------- */
  const form = $("#contactForm");
  const msg = $("#formMsg");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    $$("input, textarea", form).forEach((f) => {
      const ok = f.checkValidity() && f.value.trim() !== "";
      f.classList.toggle("is-invalid", !ok);
      if (!ok) valid = false;
    });
    if (!valid) {
      msg.textContent = "Please fill in all fields with a valid email.";
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent("Website inquiry from " + data.get("name"));
    const body = encodeURIComponent(data.get("message") + "\n\n— " + data.get("name") + " (" + data.get("email") + ")");
    window.location.href = "mailto:hananmayachicago@gmail.com?subject=" + subject + "&body=" + body;
    msg.textContent = "Thank you! Your email app should open now.";
    form.reset();
  });

  /* ---------- Footer year ---------- */
  $("#year").textContent = new Date().getFullYear();
})();
