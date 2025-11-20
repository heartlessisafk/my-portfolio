// script.js
const lightbox = document.getElementById('lightbox');
const lightboxVideo = document.getElementById('lightbox-video');
const closeBtn = document.querySelector('.lightbox-close');
const lightboxOverlay = document.querySelector('.lightbox-overlay');

// Open lightbox and play video when clicking thumbnail/card
document.querySelectorAll('.card-hover[data-video]').forEach(card => {
  card.addEventListener('click', () => {
    const videoSrc = card.getAttribute('data-video');
    if (!videoSrc) return;
    lightboxVideo.src = videoSrc;
    lightbox.classList.add('show');
    lightboxVideo.play();
    lightboxVideo.focus();
  });
  // support keyboard opening with Enter or Space
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.click();
    }
  });
});

// Close lightbox handler
function closeLightbox() {
  lightbox.classList.remove('show');
  lightboxVideo.pause();
  lightboxVideo.currentTime = 0;
  lightboxVideo.src = '';
}
closeBtn.addEventListener('click', closeLightbox);
lightboxOverlay.addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => {
  if ((e.key === 'Escape' || e.key === 'Esc') && lightbox.classList.contains('show')) {
    closeLightbox();
  }
});

// Fade-in on scroll for .fade-in elements
function revealOnScroll() {
  const elems = document.querySelectorAll('.fade-in');
  elems.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Smooth scrolling for nav links
document.querySelectorAll('.nav-link').forEach(navLink => {
  navLink.addEventListener('click', e => {
    e.preventDefault();
    const targetID = navLink.getAttribute('href');
    if (!targetID) return;
    const section = document.querySelector(targetID);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
