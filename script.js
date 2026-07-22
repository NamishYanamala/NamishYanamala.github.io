// Typing effect for hero name/role
function typeText(el, text, speed, done) {
  let i = 0;
  el.textContent = '';
  const timer = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(timer);
      if (done) done();
    }
  }, speed);
}

document.addEventListener('DOMContentLoaded', () => {
  const nameEl = document.getElementById('typed-name');
  const roleEl = document.getElementById('typed-role');
  typeText(nameEl, 'Namish Yanamala', 55, () => {
    typeText(roleEl, '> Cybersecurity & AI Enthusiast | CS Student', 30);
  });

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Matrix rain background
(function () {
  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');
  let width, height, columns, drops;
  const chars = '01アイウエオカキクケコサシスセソ$#@&%!?<>/';
  const fontSize = 15;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.floor(width / fontSize);
    drops = new Array(columns).fill(1);
  }

  function draw() {
    ctx.fillStyle = 'rgba(5, 8, 10, 0.08)';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#39ff9c';
    ctx.font = fontSize + 'px monospace';
    for (let i = 0; i < drops.length; i++) {
      const text = chars.charAt(Math.floor(Math.random() * chars.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  window.addEventListener('resize', resize);
  resize();
  setInterval(draw, 50);
})();

// Reveal-on-scroll for sections
(function () {
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  sections.forEach((s) => {
    s.style.opacity = 0;
    s.style.transform = 'translateY(24px)';
    s.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(s);
  });
})();
