// ===== MAIN.JS (FINAL CLEAN FIXED VERSION) =====
document.addEventListener('DOMContentLoaded', () => {

  // ===== MOBILE MENU TOGGLE =====
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      // Prevent background scroll when mobile menu is open
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    });
  }

  // ===== CLOSE MENU ON LINK CLICK (MOBILE) =====
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });

  // ===== ACTIVE LINK HIGHLIGHT =====
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('class').split(' ')[0];
      }
    });

    navItems.forEach(li => {
      li.classList.remove('active');
      if (li.getAttribute('href').includes(current)) {
        li.classList.add('active');
      }
    });
  });

  // ===== SMOOTH SCROLL =====
  navItems.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // ===== BUTTON HOVER EFFECT =====
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'scale(1.05)';
      btn.style.transition = '0.3s';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'scale(1)';
    });
  });

  // ===== FADE-IN ANIMATION ON SCROLL =====
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = { threshold: 0.3, rootMargin: "0px 0px -50px 0px" };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // ===== CENTERED IMAGE MODAL (For Projects & Certificates) =====
  const imageModal = document.getElementById('imageModal');
  const modalImg = document.getElementById('imageModalImg');
  const modalCaption = document.getElementById('imageModalCaption');
  const modalClose = document.querySelector('.image-modal-close');

  if (imageModal && modalImg) {
    const clickableImgs = document.querySelectorAll('.cert-img, .projects-grid img');

    clickableImgs.forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => {
        modalImg.src = img.dataset.src || img.src;
        modalCaption.textContent = img.alt || '';
        imageModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // lock scroll
      });
    });

    // Close modal when clicking close button
    if (modalClose) {
      modalClose.addEventListener('click', () => {
        imageModal.classList.remove('active');
        modalImg.src = '';
        document.body.style.overflow = 'auto';
      });
    }

    // Close modal when clicking backdrop
    imageModal.addEventListener('click', (e) => {
      if (e.target.classList.contains('image-modal-backdrop')) {
        imageModal.classList.remove('active');
        modalImg.src = '';
        document.body.style.overflow = 'auto';
      }
    });

    // Close modal on ESC key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && imageModal.classList.contains('active')) {
        imageModal.classList.remove('active');
        modalImg.src = '';
        document.body.style.overflow = 'auto';
      }
    });
  }

});
// Responsive Navbar Toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});
// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open'); // optional for animation
  });
});


/* mobile view*/

document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Mobile menu toggle
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open'); // optional animation
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
  });

  // Close menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
        document.body.style.overflow = 'auto';
      }
    });
  });

  // Smooth scroll
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
      const target = link.getAttribute('href');
      if (target.startsWith('#')) {
        e.preventDefault();
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Fade-in sections
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = { threshold: 0.3, rootMargin: "0px 0px -50px 0px" };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));

});
