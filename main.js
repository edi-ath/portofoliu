/* ============================================
   ELARA PHOTOGRAPHY — main.js
   ============================================ */

// ── NAV SCROLL ──────────────────────────────

const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ── MOBILE MENU ─────────────────────────────

const menuBtn  = document.getElementById('menuBtn');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');

function openMenu() {
  mobileMenu && mobileMenu.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu && mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

menuBtn  && menuBtn.addEventListener('click', openMenu);
menuClose && menuClose.addEventListener('click', closeMenu);

// ── GALLERY FILTER ───────────────────────────

const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    galleryItems.forEach(item => {
      const cat = item.dataset.category;
      if (filter === 'all' || cat === filter) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

// ── LIGHTBOX ─────────────────────────────────

const lightbox = document.getElementById('lightbox');
const lbContent = document.getElementById('lbContent');
const lbInfo    = document.getElementById('lbInfo');
const lbClose   = document.getElementById('lbClose');
const lbPrev    = document.getElementById('lbPrev');
const lbNext    = document.getElementById('lbNext');

// Build array of gallery data from DOM
const galleryData = [];
galleryItems.forEach(item => {
  const imgEl = item.querySelector('.gallery-img');
  const cat   = item.querySelector('.gallery-cat');
  const title = item.querySelector('.gallery-title');
  galleryData.push({
    bg:    imgEl ? imgEl.style.background : '',
    cat:   cat   ? cat.textContent  : '',
    title: title ? title.textContent : '',
  });
});

let currentIndex = 0;

function openLightbox(idx) {
  currentIndex = idx;
  renderLightbox();
  lightbox && lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox && lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function renderLightbox() {
  const d = galleryData[currentIndex];
  if (!d || !lbContent || !lbInfo) return;

  lbContent.style.opacity = '0';
  setTimeout(() => {
    lbContent.style.background = d.bg;
    lbContent.style.opacity = '1';
  }, 150);

  lbInfo.innerHTML = `
    <div class="lb-cat">${d.cat}</div>
    <div class="lb-title">${d.title}</div>
  `;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
  renderLightbox();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % galleryData.length;
  renderLightbox();
}

// Attach gallery click listeners
galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    openLightbox(parseInt(item.dataset.index, 10));
  });
});

lbClose && lbClose.addEventListener('click', closeLightbox);
lbPrev  && lbPrev.addEventListener('click', prevImage);
lbNext  && lbNext.addEventListener('click', nextImage);

lightbox && lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox || !lightbox.classList.contains('open')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   prevImage();
  if (e.key === 'ArrowRight')  nextImage();
});

// ── CONTACT FORM ─────────────────────────────

const contactForm   = document.getElementById('contactForm');
const formSuccess   = document.getElementById('formSuccess');
const submitBtn     = document.getElementById('submitBtn');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    // Simulate network delay
    setTimeout(() => {
      contactForm.style.display = 'none';
      if (formSuccess) formSuccess.style.display = 'block';
    }, 1200);
  });
}

// ── SCROLL REVEAL ─────────────────────────────

const revealEls = document.querySelectorAll(
  '.service-card, .about-portrait, .about-text, .contact-info-item'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    observer.observe(el);
  });
}
