
// header

    window.sr = ScrollReveal();
    sr.reveal('.showcase-top',{
      duration:2000,
      origin:'top',
      distance:'400px'
    });

    window.sr = ScrollReveal();
    sr.reveal('.register',{
      duration:2000,
      origin:'right',
      distance:'400px'
    });

    window.sr = ScrollReveal();
    sr.reveal('.mirusam-box',{
      duration:2000,
      origin:'bottom',
      distance:'400px'
    });

    window.sr = ScrollReveal();
    sr.reveal( '.scroll-btn',{
      duration:2000,
      origin:'bottom',
      distance:'300px'
    });

    // Nav-bar

    window.sr = ScrollReveal();
    sr.reveal('.navbar-brand',{
      duration:1000,
      origin:'left',
      distance:'500px',
     
    });

    // window.sr = ScrollReveal();
    // sr.reveal('.nav-item',{
    //   duration:1000,
    //   origin:'right',
    //   distance:'200px',
     
    // });

    // About Mirusam section 


    
    window.sr = ScrollReveal();
    sr.reveal('.info-top',{
      duration:2000,
      origin:'top',
      distance:'300px',
     
    });
    window.sr = ScrollReveal();
    sr.reveal('.info-left',{
      duration:2000,
      origin:'left',
      distance:'300px',
     
    });

    window.sr = ScrollReveal();
    sr.reveal('.info-right',{
      duration:2000,
      origin:'right',
      distance:'300px',
      viewFactor:0.2
     
     
    });

    // Galary 2k!9 section

    window.sr = ScrollReveal();
    sr.reveal('.img-top',{
      duration:2000,
      origin:'top',
      distance:'300px',
      viewFactor:0.2
     
    });
    
    window.sr = ScrollReveal();
    sr.reveal('.img-left',{
      duration:2000,
      origin:'left',
      distance:'300px',
      viewFactor:0.2
     
    });

    
    window.sr = ScrollReveal();
    sr.reveal('.img-bottom',{
      duration:2000,
      origin:'bottom',
      distance:'300px',
      viewFactor:0.2
     
    });

    // // finally footer section...
    // window.sr = ScrollReveal();
    // sr.reveal('.footer',{
    //   duration:2500,
    //   origin:'bottom',
    //   distance:'300px'
    // });


    // social media

    
    window.sr = ScrollReveal();
    sr.reveal('.i',{
      duration:1500,
      origin:'bottom',
      distance:'100px'
    });


    // team section


    
    window.sr = ScrollReveal();
    sr.reveal('.left',{
      duration:2000,
      origin:'left',
      distance:'300px'
    });

    
    window.sr = ScrollReveal();
    sr.reveal('.top',{
      duration:2000,
      origin:'top',
      distance:'300px'
    });


    
    window.sr = ScrollReveal();
    sr.reveal('.top',{
      duration:2000,
      origin:'top',
      distance:'300px'
    });


 
    
    window.sr = ScrollReveal();
    sr.reveal('.b',{
      duration:1000,
      origin:'bottom',
      distance:'300px'
    });
  

    // smoth-scroll

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);  //change this number here to modify how long the scroll takes
        return false;
      }
    }
  });
});

