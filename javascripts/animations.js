document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const animatedElements = document.querySelectorAll('.animated-image, .scale-on-scroll, .slide-in-left, .slide-in-right');
  
  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});