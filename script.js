// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxVideo = document.getElementById('lightbox-video');
const closeBtn = document.querySelector('.lightbox-close');
const lightboxOverlay = document.querySelector('.lightbox-overlay');

document.querySelectorAll('.portfolio-card').forEach(card => {
  card.addEventListener('click', () => {
    const video = card.getAttribute('data-video');
    if (!video) return;
    lightboxVideo.src = video;
    lightbox.classList.add('show');
    lightboxVideo.play();
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('show');
  lightboxVideo.pause();
  lightboxVideo.currentTime = 0;
  lightboxVideo.src = '';
});

lightboxOverlay.addEventListener('click', () => {
  lightbox.classList.remove('show');
  lightboxVideo.pause();
  lightboxVideo.currentTime = 0;
  lightboxVideo.src = '';
});

document.addEventListener('keydown', e => {
  if ((e.key === 'Escape' || e.key === 'Esc') && lightbox.classList.contains('show')) {
    closeBtn.click();
  }
});

// Fade-in animations
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

// Smooth scrolling for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

