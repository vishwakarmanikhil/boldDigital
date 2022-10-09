// var slider = tns({
//   container: '#autoplay',
//   items: 3,
//   slideBy: 1,
//   autoplay: true,
//   controls: false,
//   lazyload: true,
//   swipeAngle: false,
//   speed: 400,
//   nav: false,
//   autoplayButton: false,
//   autoplayButtonOutput: false,
//   fixedWidth: 300,
// });

var slider = tns({
  container: '#clientInfoDetails',
  items: 3,
  slideBy: 1,
  autoplay: true,
  controls: false,
  lazyload: true,
  swipeAngle: false,
  speed: 400,
  nav: false,
  autoplayButton: false,
  autoplayButtonOutput: false,
  fixedWidth: 330,
  gutter: 50,
  responsive: {
    1201: {
      items: 4,
    },
    1200: {
      items: 3,
    },
    991: {
      items: 2,
    },
    600: {
      items: 1,
    },
  }
});

var slider = tns({
  container: '#reviewCarousel',
  slideBy: 1,
  autoplay: true,
  controls: false,
  lazyload: true,
  swipeAngle: false,
  speed: 400,
  nav: false,
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    992: {
      items: 2
    },
    991: {
      items: 1,
    },
  }
});

AOS.init({
  debounceDelay: 50,
  throttleDelay: 99,
});

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };