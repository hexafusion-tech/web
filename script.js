document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initHeaderScroll();
    initMobileMenu();
    initEventTabs();
    initTestimonialSlider();
    initScrollToTop();
    initSmoothScroll();
    initContactForm();
});

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

function initHeaderScroll() {
    const header = document.getElementById('header');
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
    }
}

function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    window.addEventListener('scroll', updateActiveNavItem);
    updateActiveNavItem(); 
}

function updateActiveNavItem() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentSection}`) {
            item.classList.add('active');
        }
    });
}

function initEventTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });
}

function initTestimonialSlider() {
    const track = document.querySelector('.testimonial-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;
    const slideWidth = 100; 

    updateSliderPosition();

    nextBtn.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSliderPosition();
        } else {
            currentIndex = 0;
            updateSliderPosition();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        } else {
            currentIndex = slides.length - 1;
            updateSliderPosition();
        }
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSliderPosition();
        });
    });

    let autoSlideInterval = setInterval(autoSlide, 5000);

    function resetInterval() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(autoSlide, 5000);
    }

    prevBtn.addEventListener('click', resetInterval);
    nextBtn.addEventListener('click', resetInterval);
    dots.forEach(dot => dot.addEventListener('click', resetInterval));

    function autoSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSliderPosition();
    }

    function updateSliderPosition() {
        track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
}

function initScrollToTop() {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    const scrollThreshold = 300;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !phone || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            showToast('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 100); 

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300); 
    }, 3000); 
}


window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const heroSection = document.querySelector('.hero');

    if (heroSection && scrollPosition < window.innerHeight) {
        const parallaxSpeed = 0.5;
        heroSection.style.backgroundPosition = `center ${scrollPosition * parallaxSpeed}px`;
    }
});

const heroSection = document.querySelector('.hero');
const hexagons = document.querySelectorAll('.hexagon');

if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;

        hexagons.forEach((hexagon, index) => {
            const factor = (index + 1) * 10;
            hexagon.style.transform = `translate(${mouseX * factor}px, ${mouseY * factor}px)`;
        });
    });
}

const canvas = document.getElementById('wave-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let mouseX = 0;
let mouseY = 0;

const waves = [];
const waveCount = 5;

function resize() {
  width = canvas.width = canvas.offsetWidth;
  height = canvas.height = canvas.offsetHeight;
}

window.addEventListener('resize', resize);
resize();

document.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});

class Wave {
  constructor(y, amplitude, wavelength, speed, color, phase = 0) {
    this.y = y;
    this.amplitude = amplitude;
    this.wavelength = wavelength;
    this.speed = speed;
    this.color = color;
    this.phase = phase;
  }

  update(time) {
    this.phase += this.speed;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(0, height);
    ctx.lineTo(0, this.y);

    for (let x = 0; x <= width; x++) {
      let distanceToMouse = Math.abs(x - mouseX);
      let influence = Math.max(0, 1 - distanceToMouse / 200);
      let waveY = this.y + this.amplitude * Math.sin((x / this.wavelength) + this.phase) * influence * 0.6;
      ctx.lineTo(x, waveY);
    }

    ctx.lineTo(width, height);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

for (let i = 0; i < waveCount; i++) {
  waves.push(new Wave(
    height * (0.5 + i * 0.1),       
    20 + i * 10,                    
    200 - i * 20,                   
    0.02 + i * 0.005,               
    `rgba(255, 255, 255, ${0.1 + i * 0.1})`,  
    i * 2                          
  ));
}

function animate(time = 0) {
  ctx.clearRect(0, 0, width, height);

  for (let wave of waves) {
    wave.update(time);
    wave.draw(ctx);
  }

  requestAnimationFrame(animate);
}

animate();

document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });
});


  window.addEventListener("DOMContentLoaded", () => {
    const original = document.querySelector(".horizontal-scroll");
    const clone = document.querySelector(".horizontal-scroll.clone");
    clone.innerHTML = original.innerHTML;
  });

document.querySelectorAll('.job-card').forEach(card => {
    card.addEventListener('click', function (e) {
      if (
        e.target.closest('.apply-btn') ||
        e.target.closest('.know-more-link')
      ) return;

      window.location.href = 'careers.html';
    });
  });

  document.querySelectorAll('.apply-btn').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();

      const popup = document.getElementById('apply-popup');
      popup.classList.remove('hidden');

      const link = this.href;

      setTimeout(() => {
        popup.classList.add('hidden');
        window.open(link, '_blank'); 
      }, 3000);
    });
  });