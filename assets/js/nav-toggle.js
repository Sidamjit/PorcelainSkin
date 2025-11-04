document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });

    // close nav when a link is clicked (mobile)
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const focusContactNameField = function () {
    const nameInput = document.getElementById('contact-name');
    if (!nameInput) return;
    // focus and highlight text so guests can start typing straight away
    nameInput.focus({ preventScroll: true });
    nameInput.select();
  };

  const scrollToContactSection = function (behavior) {
    const contactSection = document.getElementById('contact-section');
    const contactForm = document.getElementById('contact-form');
    const target = contactSection || contactForm;
    if (!target) return false;

    target.scrollIntoView({ behavior: behavior || 'smooth', block: 'start' });

    const delay = behavior === 'auto' ? 0 : 350;
    window.setTimeout(focusContactNameField, delay);
    return true;
  };

  document.querySelectorAll('a[href$="#contact-section"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      if (!scrollToContactSection('smooth')) return;

      event.preventDefault();
      if (window.location.hash !== '#contact-section') {
        history.replaceState(null, '', '#contact-section');
      }
    });
  });

  if (window.location.hash === '#contact-section' || window.location.hash === '#contact-form') {
    scrollToContactSection('auto');
    if (window.location.hash === '#contact-form') {
      history.replaceState(null, '', '#contact-section');
    }
  }

  const userAgent = window.navigator.userAgent || '';
  const isIosChrome = /CriOS/i.test(userAgent);
  if (isIosChrome) {
    document.querySelectorAll('[data-ios-chrome-self]').forEach((link) => {
      link.removeAttribute('target');
      link.removeAttribute('rel');
    });
  }
});
