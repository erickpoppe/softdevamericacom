(function(){
  var navbar = document.getElementById('navbar');
  var burgerBtn = document.getElementById('burgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');

  function onScroll(){
    if(window.scrollY > 24){ navbar.classList.add('scrolled'); }
    else { navbar.classList.remove('scrolled'); }
  }
  if(navbar){
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }

  if(burgerBtn && mobileMenu){
    burgerBtn.addEventListener('click', function(){
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ mobileMenu.classList.remove('open'); });
    });
  }

  // Reveal on scroll
  var els = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
    els.forEach(function(el){ observer.observe(el); });
  } else {
    els.forEach(function(el){ el.classList.add('in-view'); });
  }

  // Contact form demo submit
  var contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      var btn = document.getElementById('cfSubmit');
      var note = document.getElementById('cfNote');
      if(btn){ btn.textContent = 'Message Sent'; btn.style.opacity = '0.7'; }
      if(note){ note.textContent = "Thanks — we'll be in touch shortly."; note.style.color = 'var(--burgundy)'; }
    });
  }
})();
