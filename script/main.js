	document.addEventListener('DOMContentLoaded', function() {
	  // Add Google Fonts
	  var link = document.createElement('link');
	  link.rel = 'stylesheet';
	  link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap';
	  document.head.appendChild(link);
	  
	  // Scroll animation
	  const animatedElements = document.querySelectorAll('.card, .animated-section, h2, h3, .row > div');
	  
	  function checkScroll() {
		animatedElements.forEach(element => {
		  const elementTop = element.getBoundingClientRect().top;
		  const elementVisible = 150;
		  
		  if (elementTop < window.innerHeight - elementVisible) {
			if (element.classList.contains('col-md-6') || element.classList.contains('col-lg-6')) {
			  if (Array.from(element.parentNode.children).indexOf(element) % 2 === 0) {
				element.classList.add('fade-in-left');
				element.classList.add('visible');
			  } else {
				element.classList.add('fade-in-right');
				element.classList.add('visible');
			  }
			} else {
			  element.classList.add('fade-in-up');
			  element.classList.add('visible');
			}
		  }
		});
	  }
	  
	  window.addEventListener('scroll', checkScroll);
	  checkScroll(); // Check on load
	  
	  // Navbar color change on scroll
	  const navbar = document.querySelector('.navbar');
	  
	  window.addEventListener('scroll', function() {
		if (window.scrollY > 50) {
		  navbar.classList.add('scrolled');
		  navbar.style.padding = '10px 0';
		} else {
		  navbar.classList.remove('scrolled');
		  navbar.style.padding = '15px 0';
		}
	  });
	});