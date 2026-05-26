// ── CURSOR PERSONALIZADO ──
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});

document.querySelectorAll('a, button, .project-card, .passion-tag').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
});

// ── NAV COM EFEITO AO ROLAR ──
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ── ANIMAÇÕES DE ENTRADA (FADE IN) ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Dispara as animações do hero imediatamente (sem precisar rolar)
setTimeout(() => {
  document.querySelectorAll('#home .fade-in, .stats-bar .fade-in').forEach(el => {
    el.classList.add('visible');
  });
}, 100);