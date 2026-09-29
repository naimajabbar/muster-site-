/* Muster Support — main.js
   Mobile nav toggle + FAQ accordion */

(function () {
  'use strict';

  /* ── Mobile nav toggle ── */
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      const open = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!open));
      links.classList.toggle('is-open', !open);
    });

    /* Close on outside click */
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
        toggle.setAttribute('aria-expanded', 'false');
        links.classList.remove('is-open');
      }
    });

    /* Close on Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        toggle.setAttribute('aria-expanded', 'false');
        links.classList.remove('is-open');
        toggle.focus();
      }
    });
  }

  /* ── FAQ Accordion ── */
  const accordionBtns = document.querySelectorAll('.accordion-btn');

  accordionBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      const body     = document.getElementById(this.getAttribute('aria-controls'));

      /* Optionally close all others in the same section */
      const section = this.closest('.faq-section') || this.closest('.accordion-list') || document;
      section.querySelectorAll('.accordion-btn[aria-expanded="true"]').forEach(function (other) {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          const otherBody = document.getElementById(other.getAttribute('aria-controls'));
          if (otherBody) otherBody.classList.remove('is-open');
        }
      });

      this.setAttribute('aria-expanded', String(!expanded));
      if (body) body.classList.toggle('is-open', !expanded);
    });
  });

})();
