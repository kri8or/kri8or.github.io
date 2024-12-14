document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      // Get the target div ID from the href attribute
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Smooth scroll to the target element
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });