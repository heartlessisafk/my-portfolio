// ========== Video Lightbox Functionality ==========
const lightbox = document.getElementById('lightbox');
const lightboxVideo = document.getElementById('lightbox-video');
const closeBtn = document.querySelector('.lightbox-close');

// Open on card/showreel click
document.querySelectorAll('[data-video]').forEach(card => {
  card.addEventListener('click', () => {
    const vidSrc = card.getAttribute('data-video');
    if (!vidSrc) return;
    lightboxVideo.src = vidSrc;
    lightbox.classList.add('show');
    setTimeout(() => lightboxVideo.focus(), 90);
  });
});

// Close actions
function closeLightbox() {
  lightbox.classList.remove('show');
  lightboxVideo.pause();
  lightboxVideo.currentTime = 0;
  lightboxVideo.src = '';
}
closeBtn.addEventListener('click', closeLightbox);
lightbox.querySelector('.lightbox-overlay').addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => {
  if (lightbox.classList.contains('show') && (e.key === 'Escape' || e.key === 'Esc')) {
    closeLightbox();
  }
});

// ========== Fade-In On Scroll ==========
function revealOnScroll() {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// ========== Smooth Nav Scroll ==========
document.querySelectorAll('.nav-link').forEach(nav => {
  nav.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    const section = document.querySelector(targetId);
    if (section) {
      e.preventDefault();
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
