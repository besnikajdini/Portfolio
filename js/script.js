  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- footer copyright year ---------- */
  document.querySelectorAll('#copyYear').forEach(el => { el.textContent = new Date().getFullYear(); });

  /* ---------- BounceCards (About, left column) ---------- */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const aboutImages = shuffle([
    'images/WhatsApp Image 2026-08-21 at 18.24.17.jpeg',
    'images/WhatsApp Image 2026-08-21 at 18.25.02 (1).jpeg',
    'images/WhatsApp Image 2026-08-21 at 18.25.02.jpeg',
    'images/WhatsApp Image 2026-08-21 at 18.34.12.jpeg',
    'images/WhatsApp Image 2026-09-02 at 21.03.31.jpeg'
  ]).map(encodeURI);

  if (!reduceMotion) {
    initBounceCards({
      containerSelector: '#aboutBounceCards',
      images: aboutImages,
      containerWidth: 760,
      containerHeight: 360,
      animationDelay: 1,
      animationStagger: 0.08,
      easeType: 'elastic.out(1, 0.5)',
      transformStyles: [
        'rotate(8deg) translate(-220px)',
        'rotate(-6deg) translate(-110px)',
        'rotate(3deg)',
        'rotate(-4deg) translate(110px)',
        'rotate(6deg) translate(220px)'
      ],
      enableHover: true
    });
  } else {
    const bc = document.getElementById('aboutBounceCards');
    if (bc) bc.style.display = 'none';
  }

  /* ---------- loader ---------- */
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').classList.add('hidden');
      document.querySelector('.social-rail')?.classList.add('is-visible');
      playHeroEntrance();
    }, reduceMotion ? 0 : 2300);
  });

  /* ---------- nav scroll state ---------- */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  /* ---------- mobile nav ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    navToggle.textContent = isOpen ? '✕' : '☰';
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.textContent = '☰';
  }));

  /* ---------- hero entrance ---------- */
  function playHeroEntrance(){
    if (reduceMotion){
      document.querySelectorAll('.hero h1 .word span').forEach(s => s.style.transform = 'translateY(0)');
      ['heroQuote','heroCta','scrollCue'].forEach(id => document.getElementById(id).style.opacity = 1);
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({ defaults:{ ease:'power4.out' } });
    tl.to('.hero h1 .word span', { y:0, duration:1, stagger:.12 })
      .to('#heroQuote', { opacity:1, duration:.9 }, 0)
      .to('#heroCta', { opacity:1, duration:.7 }, '-=.6')
      .to('#scrollCue', { opacity:1, duration:.7 }, '-=.5');
  }

  /* ---------- scroll parallax + reveals ---------- */
  window.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap !== 'undefined' && !reduceMotion){
      gsap.registerPlugin(ScrollTrigger);

      gsap.to('.hero', {
        backgroundPosition: '50% 30%',
        scrollTrigger: { trigger:'.hero', start:'top top', end:'bottom top', scrub:true }
      });

      document.querySelectorAll('.reveal').forEach(el => {
        gsap.fromTo(el, { y:36, opacity:0 }, {
          y:0, opacity:1, duration:1, ease:'power3.out',
          scrollTrigger:{ trigger:el, start:'top 85%' }
        });
      });
    } else {
      // fallback: simple IntersectionObserver reveal, no library
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting){
            e.target.classList.add('is-visible');
            obs.unobserve(e.target);
          }
        });
      }, { threshold:.2 });
      document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    }
  });
