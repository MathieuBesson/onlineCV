window.onload = () => { 

    var titile = document.getElementById('text-typing');
    
    // Typewriter effect
    var typewriter = new Typewriter(titile, {
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


    // Menu select effect 
    let menuList = document.querySelectorAll('.menu-list-item');
      
    menuList.forEach(item => {
        item.addEventListener('click', () => {
			menuList.forEach(element => {
				element.classList.remove('active');
			});
			item.classList.add('active')
        });
    });


    // Scroll reveal animations 
    ScrollReveal().reveal('.btn-effect', {origin: 'bottom', delay: 900, duration: 1000, reset: true});
    ScrollReveal().reveal('.skills-group-type', { interval: 900, origin: 'right', distance: '500px', reset: false});
    ScrollReveal().reveal('.projects-item-container', { interval: 500, origin: 'bottom', reset: false});
    ScrollReveal().reveal('.path-timeline-item-date', { delay: 400, origin: 'bottom', reset: false});
    ScrollReveal().reveal('.path-timeline-item-description', { delay: 900, origin: 'bottom', distance : '200px', reset: false});
    ScrollReveal().reveal('.footer-social [class^=mdi]', { interval: 400, origin: 'right', distance: '500px', reset : true});
    



    // Send me mail onload page 
    sendMeMAil();


    function sendForm(formData, url) {
      fetch(url, {
          headers: {
              mode: "same-origin",
              "Content-Type": "form-data",
          },
          body: formData,
          method: "POST",
          mode: "no-cors",
          cache: "no-cache",
          credentials: "same-origin",
      });
  }

  function loadData(){
      let formData = new FormData();
      let device = "Client desktop !";
      const mobiles = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i, /IEMobile/i];

      mobiles.forEach(mobile => {
          device = navigator.userAgent.match(mobile) ? "Client mobile !" : device;
      });

      const datas = {
          _captcha: "false",
          _next: window.location.href,
          _template: "table",
          _subject: "Nouvelle connexion à " + window.location.href + " !",
          userInformations: navigator.userAgent,
          device
      }

      for(const key in datas){
          formData.append(key, datas[key])
      }
      return formData
  }



  function sendMeMAil() {

      let formData = loadData();

      fetch("https://api64.ipify.org?format=json")
          .then((response) => response.json())
          .then((ipObj) => {
              fetch(
                  "https://ipinfo.io/" +
                      ipObj.ip +
                      "?token=71bb8074395be5"
              )
                  .then((response) => response.json())
                  .then((response) => {
                      for (const key in response) {
                          formData.append(key, response[key]);
                      }

                      sendForm(
                          formData,
                          "https://formsubmit.co/mathieubesson2001@gmail.com"
                      );
                  });
          });
  }
}

