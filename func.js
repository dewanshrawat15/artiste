  
//set the variables
var a = document.getElementById('canvas'),
    c = a.getContext('2d'),
    w = a.width = window.outerWidth,
    h = a.height = window.outerHeight,
    area = w * h,
    /* increase particle number */
    particleNum = 500,
    ANIMATION;

var particles = [];


//create the particles
function Particle(i) {
  this.id = i;
  this.hue =  rand(50, 10, 1);
  this.active = false;
}

Particle.prototype.build = function() {
  this.x = w / 2;
  this.y = h / 2;
  this.r = rand(11, 5, 5);
  this.vx = Math.random() * 10 - 5;
  this.vy = Math.random() * 10 - 5;
  this.gravity = 0;
  this.opacity = Math.random() + 5;
  this.active = true;

  c.beginPath();
      c.arc(this.x, this.y, this.r, 10, 0 * Math.PI, false);
  c.fillStyle = "hsla(" + this.hue + ",100%,50%,1)";
  c.fill();
};

Particle.prototype.draw = function() {
  this.active = true;
  this.x += this.vx;
  this.y += this.vy;
  this.vy += this.gravity;
  this.hue -= 0.5;
  this.r = Math.abs(this.r - .05);

  c.beginPath();
      c.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
  c.fillStyle = "hsla(" + this.hue + ",100%,50%,1)";
  c.fill();

  // reset particle
  if(this.r <= 0.005) {
    this.active = false;
  }
};


//functionality
function drawScene() {
  c.fillStyle = "#22263a";
  c.fillRect(0,0,w,h);

  for(var i = 0; i < particles.length; i++) {
    if(particles[i].active === true) {
      particles[i].draw();
    } else {
      particles[i].build();
    }
  }

      ANIMATION = requestAnimationFrame(drawScene);
}

function initCanvas() {
  var s = getComputedStyle(a);

  if(particles.length) {
    particles = [];
    cancelAnimationFrame(ANIMATION);
  }

  w = a.width = window.innerWidth;
    h = a.height = window.innerHeight;

  for(var i = 0; i < particleNum; i++) {
    particles.push(new Particle(i));
  }

  drawScene();
}


//init
(function() {
  initCanvas();
  addEventListener('resize', initCanvas, false);
})();


//helper functions
function rand(max, min, _int) {
  var max = (max === 0 || max)?max:1, 
      min = min || 0, 
      gen = min + (max - min) * Math.random();

  return (_int) ? Math.round(gen) : gen;
};


    /* BootUp */
    setTimeout(function(){
      $('.vector').removeClass('opa')
      $('.vector').addClass('img-active')
    }, 500)

    setTimeout(function(){
      $('.tag-line').removeClass('opa')
      $('.tag-line').addClass('tag-line-active')
    }, 800)

    setTimeout(function(){
      $('.ham').removeClass('opa')
      $('.ham').addClass('menu-slide-in')
    }, 1100)


  
  $(function(){
    var counter=1;
    var pakodaparty=function(){
      var h=setInterval(function(){
        if(counter>=6){
          clearInterval(h);
        }
        $('.img'+counter).removeClass('opa')
        $('.img'+counter).addClass('pop')
        ++counter;
      }, 750)
    }

    $(window).scroll(function(){
      var l=document.scrollingElement.scrollTop, a=$('.about').offset().top, w=$('.works').offset().top, p=$('.pricing').offset().top, c=$('.contact').offset().top;
        if(l>=a && l<w){
          setTimeout(function(){
            $('.about-title').removeClass('opa')
            $('.about-title').addClass('title-slide-down')
          }, 500)
          setTimeout(function(){
            $('.about-line').addClass('line-up')
          }, 800)
          setTimeout(function(){
            $('.about-text').removeClass('opa')
            $('.about-text').addClass('text-slide-up')
          }, 1100)
        }
        else if(l>=w && l<p){
          setTimeout(function(){
            $('.works-title').removeClass('opa')
            $('.works-title').addClass('title-slide-up')
          }, 500)
          setTimeout(function(){
            $('.works-line').addClass('line-up')
          }, 800)
          setTimeout(function(){
            pakodaparty();
          }, 1100)
        }
        else if(l>=p && l<c){
            setTimeout(function(){
              $('.pricing-title').removeClass('opa')
              $('.pricing-title').addClass('title-slide-in-left')
            }, 500)
            setTimeout(function(){
              $('.pricing-line').addClass('line-up')
            }, 800)
            setTimeout(function(){
              $('.scheme').removeClass('opa')
              $('.scheme').addClass('scheme-chop-down')
            }, 1100)
            setTimeout(function(){
              $('.box1 .price, .box1 .details').removeClass('opa')
            }, 1250)
            setTimeout(function(){
              $('.box2 .price, .box2 .details').removeClass('opa')
            }, 1400)
            setTimeout(function(){
              $('.box3 .price, .box3 .details').removeClass('opa')
            }, 1550)
        }
        else if(l>=c){
          setTimeout(function(){
              $('.contact-title').removeClass('opa')
              $('.contact-title').addClass('title-slide-down')
            }, 500)
            setTimeout(function(){
              $('.contact-line').addClass('line-up')
            }, 800)
            setTimeout(function(){
              $('.in-fields, .bttn').removeClass('opa')
            }, 1100)
            setTimeout(function(){
              $('.text, .sub-text').removeClass('opa')
            }, 1400)
        }
    })

    /* MENU */
    $('.ham').hover(function(){
      $('.bar2').toggleClass('bar2-active')
      $('.bar3').toggleClass('bar3-active')
    })
    
    $('.ham').click(function(){
      $('.bar2').toggleClass('bar-disappear')
      $('.bar1').toggleClass('bar1-rot')
      $('.bar3').toggleClass('bar3-rot')
      $('.menu').toggleClass('menu-active')
    })

    $('.list-bar').hover(function(){
      $(this).toggleClass('lbar-active')
    })

    $('.lbar1, .lbar2, .lbar3, .lbar4, .lbar5').click(function(){
      $('.menu').removeClass('menu-active')
      $('.bar1').removeClass('bar1-rot')
      $('.bar2').removeClass('bar-disappear')
      $('.bar3').removeClass('bar3-rot')
    })

    $('.lbar1').click(function(){
      $('html, body').animate({scrollTop: $('.home').offset().top}, 800)
    })

    $('.lbar2').click(function(){
      $('html, body').animate({scrollTop: $('.about').offset().top}, 800)
    })

    $('.lbar3').click(function(){
      $('html, body').animate({scrollTop: $('.works').offset().top}, 800)
    })

    $('.lbar4').click(function(){
      $('html, body').animate({scrollTop: $('.pricing').offset().top}, 800)
    })

    $('.lbar5').click(function(){
      $('html, body').animate({scrollTop: $('.contact').offset().top}, 800)
    })

})