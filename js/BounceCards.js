/**
 * BounceCards — vanilla JS/CSS port of React Bits' BounceCards (JS-CSS variant)
 * https://reactbits.dev/components/bounce-cards
 *
 * Usage:
 *   initBounceCards({
 *     containerSelector: '#myContainer',
 *     images: [...],
 *     containerWidth: 500,
 *     containerHeight: 250,
 *     animationDelay: 1,
 *     animationStagger: 0.08,
 *     easeType: 'elastic.out(1, 0.5)',
 *     transformStyles: [...],
 *     enableHover: true
 *   });
 */
function initBounceCards({
  containerSelector,
  images = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = 'elastic.out(1, 0.8)',
  transformStyles = [
    'rotate(10deg) translate(-170px)',
    'rotate(5deg) translate(-85px)',
    'rotate(-3deg)',
    'rotate(-10deg) translate(85px)',
    'rotate(2deg) translate(170px)'
  ],
  enableHover = true
} = {}) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  if (typeof gsap === 'undefined') {
    console.warn('BounceCards: gsap not found, skipping init for', containerSelector);
    return;
  }

  container.classList.add('bounceCardsContainer');
  container.style.width = containerWidth + 'px';
  container.style.height = containerHeight + 'px';
  container.innerHTML = '';

  images.forEach((src, idx) => {
    const card = document.createElement('div');
    card.className = `bc-card bc-card-${idx}`;
    card.style.transform = transformStyles[idx] ?? 'none';

    const img = document.createElement('img');
    img.className = 'bc-image';
    img.src = src;
    img.alt = `Besnik Ajdini — ${idx + 1}`;
    img.loading = 'lazy';
    card.appendChild(img);
    container.appendChild(card);

    if (enableHover) {
      card.addEventListener('mouseenter', () => pushSiblings(idx));
      card.addEventListener('mouseleave', resetSiblings);
    }
  });

  const cards = container.querySelectorAll('.bc-card');

  gsap.fromTo(
    cards,
    { scale: 0 },
    { scale: 1, stagger: animationStagger, ease: easeType, delay: animationDelay }
  );

  function getNoRotationTransform(transformStr) {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) return transformStr.replace(/rotate\([\s\S]*?\)/, 'rotate(0deg)');
    if (transformStr === 'none') return 'rotate(0deg)';
    return `${transformStr} rotate(0deg)`;
  }

  function getPushedTransform(baseTransform, offsetX) {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    }
    return baseTransform === 'none' ? `translate(${offsetX}px)` : `${baseTransform} translate(${offsetX}px)`;
  }

  function pushSiblings(hoveredIdx) {
    if (!enableHover) return;
    images.forEach((_, i) => {
      const target = container.querySelector(`.bc-card-${i}`);
      if (!target) return;
      gsap.killTweensOf(target);
      const baseTransform = transformStyles[i] || 'none';

      if (i === hoveredIdx) {
        gsap.to(target, {
          transform: getNoRotationTransform(baseTransform),
          duration: 0.4,
          ease: 'back.out(1.4)',
          overwrite: 'auto'
        });
      } else {
        const offsetX = i < hoveredIdx ? -230 : 230;
        const distance = Math.abs(hoveredIdx - i);
        gsap.to(target, {
          transform: getPushedTransform(baseTransform, offsetX),
          duration: 0.4,
          ease: 'back.out(1.4)',
          delay: distance * 0.05,
          overwrite: 'auto'
        });
      }
    });
  }

  function resetSiblings() {
    if (!enableHover) return;
    images.forEach((_, i) => {
      const target = container.querySelector(`.bc-card-${i}`);
      if (!target) return;
      gsap.killTweensOf(target);
      gsap.to(target, {
        transform: transformStyles[i] || 'none',
        duration: 0.4,
        ease: 'back.out(1.4)',
        overwrite: 'auto'
      });
    });
  }
}
