window.onload = () => { 

    var app = document.getElementById('text-typing');
    
    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 150,
    });
    
    typewriter
      .pauseFor(1000)
      .typeString('Développeur Web Junior <i class="em em-rocket"></i>')
      .pauseFor(5000)
      .deleteChars(23)
      .typeString('À votre service ! <i class="em em-spock-hand"></i>')
      .pauseFor(5000)
      .start();



    let menuList = document.querySelectorAll('.menu-list-item');
      
    menuList.forEach(item => {
        item.addEventListener('click', () => {
			menuList.forEach(element => {
				element.classList.remove('active');
			});
			item.classList.add('active')
        });
    });
    ScrollReveal().reveal('.btn-effect', {origin: 'bottom', delay: 900, duration: 1000, reset: true});

    ScrollReveal().reveal('.skills-group-type', { interval: 900, origin: 'right', distance: '500px', reset: false});

    ScrollReveal().reveal('.projects-item-container', { interval: 500, origin: 'bottom', reset: false});

    ScrollReveal().reveal('.path-timeline-item-date', { delay: 400, origin: 'bottom', reset: false});

    ScrollReveal().reveal('.path-timeline-item-description', { delay: 900, origin: 'bottom', distance : '200px', reset: false});

    ScrollReveal().reveal('.footer-social [class^=mdi]', { interval: 400, origin: 'right', distance: '500px', reset : true});
    
}

