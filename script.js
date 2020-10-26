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
    console.log(menuList);
}

