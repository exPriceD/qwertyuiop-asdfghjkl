const tabs = document.querySelectorAll('.screen-tab[data-target]');
const panels = document.querySelectorAll('.screen-panel[data-panel]');
const requestForm = document.querySelector('#request-form');

function activateScreen(target) {
  tabs.forEach((tab) => {
    const isActive = tab.dataset.target === target;
    tab.classList.toggle('active', isActive);
  });

  panels.forEach((panel) => {
    panel.classList.toggle('active', panel.dataset.panel === target);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    activateScreen(tab.dataset.target);
  });
});

requestForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!requestForm.checkValidity()) {
    requestForm.reportValidity();
    return;
  }

  requestForm.classList.add('is-submitted');
  requestForm.reset();
});

const revealTargets = document.querySelectorAll(
  '.hero-copy, .hero-device-wrap, .section-heading, .work-card, .showcase, .catalog-copy, .catalog-board article, .module-card, .flow-line article, .complete-card, .complete-list article, .proof-copy, .proof-grid article, .request-form, .request-aside article, .launch-panel, .final-cta, .support-section, .site-footer',
);

revealTargets.forEach((target) => target.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 },
);

revealTargets.forEach((target) => revealObserver.observe(target));
