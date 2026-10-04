document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.book-nav-toggle');
  const panel = document.querySelector('.book-nav-panel');

  if (!toggle || !panel) {
    return;
  }

  const setOpen = function (isOpen) {
    document.body.classList.toggle('book-nav-open', isOpen);
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  };

  toggle.addEventListener('click', function () {
    const isOpen = document.body.classList.contains('book-nav-open');
    setOpen(!isOpen);
  });

  panel.addEventListener('click', function (event) {
    const target = event.target;
    if (target instanceof HTMLElement && target.closest('a')) {
      setOpen(false);
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  });

  document.addEventListener('click', function (event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (!target.closest('.book-nav-toggle') && !target.closest('.book-nav-panel')) {
      setOpen(false);
    }
  });
});
