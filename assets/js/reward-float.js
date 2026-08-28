(function () {
  const widget = document.querySelector('[data-reward-float]');
  if (!widget) return;

  const trigger = widget.querySelector('[data-reward-trigger]');
  const panel = widget.querySelector('[data-reward-panel]');
  const closeButton = widget.querySelector('[data-reward-close]');

  if (!trigger || !panel || !closeButton) return;

  const openWidget = () => {
    widget.classList.add('is-open');
    trigger.setAttribute('aria-expanded', 'true');
    panel.setAttribute('aria-hidden', 'false');
  };

  const closeWidget = () => {
    widget.classList.remove('is-open');
    trigger.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');
  };

  trigger.addEventListener('click', () => {
    if (widget.classList.contains('is-open')) {
      closeWidget();
    } else {
      openWidget();
    }
  });

  closeButton.addEventListener('click', closeWidget);

  document.addEventListener('click', (event) => {
    if (!widget.classList.contains('is-open')) return;
    if (widget.contains(event.target)) return;
    closeWidget();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeWidget();
    }
  });
})();
