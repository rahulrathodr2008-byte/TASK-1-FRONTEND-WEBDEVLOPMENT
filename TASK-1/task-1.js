// Safe helpers script — attach listeners only if elements exist
(function () {
  'use strict';

  // === Mobile nav toggle (only if present in your markup) ===
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('nav ul');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  } else {
    // optional: remove this console line if you don't want logs
    console.info('No mobile nav found (skipping nav toggle setup).');
  }

  // === Event card click helper (if event cards exist) ===
  // Use event delegation where possible, but simple attach if cards exist:
  const eventCards = document.querySelectorAll('.event-card');
  if (eventCards && eventCards.length > 0) {
    eventCards.forEach((card) => {
      // avoid double-binding: remove previously attached handler if any
      card.replaceWith(card.cloneNode(true)); // simple way to reset handlers
    });

    // re-query after cloneNode
    const freshCards = document.querySelectorAll('.event-card');
    freshCards.forEach((card) => {
      card.addEventListener('click', () => {
        alert('More details about this event will be added here!');
      });
    });
  } else {
    console.info('No .event-card elements found (skipping card click handlers).');
  }
})();
