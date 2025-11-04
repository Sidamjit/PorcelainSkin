(function () {
  const reviews = [
    {
      quote:
        "Great experience. First time I’ve use that Salon I’m on a Walking frame they were very caring and helped me get up on the bed. Service was excellent. Will definitely be returning",
      name: "DEBBIE H",
      role: "Oct 2025 • Fresha review",
    },
    {
      quote:
        "Highly recommend, she made me feel so comfortable in my treatment and very caring thanks ♥️",
      name: "Angeline M",
      role: "Nov 2025 • Fresha review",
    },
    {
      quote: "Awesome as usual. Would highly recommend",
      name: "Brigitte M",
      role: "Oct 2025 • Fresha review",
    },
    {
      quote: "Ruhi always does a fantastic job!",
      name: "Jenny B",
      role: "Oct 2025 • Fresha review",
    },
    {
      quote: "Very professional & lovely ladies ❤️",
      name: "Debbie H",
      role: "Oct 2025 • Fresha review",
    },
  ];

  const ROTATION_DELAY = 7000;
  const rotator = document.querySelector('[data-testimonial-rotator]');
  if (!rotator || !reviews.length) {
    return;
  }

  const body = rotator.querySelector('[data-rotator-body]');
  const dotsHost = document.querySelector('[data-rotator-dots]');
  const prevButton = rotator.querySelector('[data-rotator-prev]');
  const nextButton = rotator.querySelector('[data-rotator-next]');

  if (!body || !dotsHost || !prevButton || !nextButton) {
    return;
  }

  const quoteEl = body.querySelector('[data-rotator-quote]');
  const citeEl = body.querySelector('[data-rotator-cite]');

  if (!quoteEl || !citeEl) {
    return;
  }

  let activeIndex = 0;
  let intervalId = null;
  let isTransitioning = false;
  const dots = [];

  const formatSignature = (review) => {
    if (review.role) {
      return `${review.name} • ${review.role}`;
    }
    return review.name;
  };

  const updateDots = (index) => {
    dots.forEach((dot, dotIndex) => {
      if (dotIndex === index) {
        dot.classList.add('is-active');
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.classList.remove('is-active');
        dot.removeAttribute('aria-current');
      }
    });
  };

  const renderReview = (index, { animate } = { animate: true }) => {
    const review = reviews[index];
    const applyContent = () => {
      quoteEl.textContent = `“${review.quote}”`;
      citeEl.textContent = formatSignature(review);
    };

    if (!animate) {
      applyContent();
      updateDots(index);
      activeIndex = index;
      return;
    }

    if (isTransitioning) {
      return;
    }

    isTransitioning = true;
    body.classList.add('is-fading');

    window.setTimeout(() => {
      applyContent();
      updateDots(index);
      activeIndex = index;
      window.requestAnimationFrame(() => {
        body.classList.remove('is-fading');
        isTransitioning = false;
      });
    }, 200);
  };

  const showReview = (index, options) => {
    const nextIndex = (index + reviews.length) % reviews.length;
    if (nextIndex === activeIndex) {
      return;
    }
    renderReview(nextIndex, options);
  };

  const handlePrev = () => {
    stopRotation();
    showReview(activeIndex - 1);
    startRotation();
  };

  const handleNext = () => {
    stopRotation();
    showReview(activeIndex + 1);
    startRotation();
  };

  const stopRotation = () => {
    if (intervalId) {
      window.clearInterval(intervalId);
      intervalId = null;
    }
  };

  const startRotation = () => {
    if (reviews.length <= 1) {
      return;
    }
    stopRotation();
    intervalId = window.setInterval(() => {
      showReview(activeIndex + 1, { animate: true });
    }, ROTATION_DELAY);
  };

  reviews.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', `Show review ${index + 1}`);
    dot.addEventListener('click', () => {
      stopRotation();
      showReview(index);
      startRotation();
    });
    if (index === 0) {
      dot.classList.add('is-active');
      dot.setAttribute('aria-current', 'true');
    }
    dots.push(dot);
    dotsHost.appendChild(dot);
  });

  prevButton.addEventListener('click', handlePrev);
  nextButton.addEventListener('click', handleNext);

  rotator.addEventListener('mouseenter', stopRotation);
  rotator.addEventListener('mouseleave', startRotation);
  rotator.addEventListener('focusin', stopRotation);
  rotator.addEventListener('focusout', () => {
    if (!rotator.contains(document.activeElement)) {
      startRotation();
    }
  });

  renderReview(0, { animate: false });
  startRotation();
})();
