/* XED BRANDS - permanent behaviour: nav, slideshow, footer year */
(function(){
  document.getElementById('year').textContent=new Date().getFullYear();
  var nav=document.getElementById('nav'),tg=document.querySelector('.nav-toggle');
  tg.addEventListener('click',function(){var o=nav.classList.toggle('open');tg.setAttribute('aria-expanded',o)});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');tg.setAttribute('aria-expanded',false)}});

  var root=document.getElementById('slideshow');if(!root)return;
  var slides=[].slice.call(root.querySelectorAll('.slide')),dotsBox=root.querySelector('.dots'),i=0,timer=null;
  var still=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var dots=slides.map(function(s,n){var b=document.createElement('button');b.setAttribute('aria-label','Show image '+(n+1));b.onclick=function(){go(n);restart()};dotsBox.appendChild(b);return b});
  function go(n){
    slides[i].classList.remove('active');dots[i].classList.remove('on');
    i=(n+slides.length)%slides.length;
    var im=slides[i].querySelector('img');
    slides[i].classList.add('active');dots[i].classList.add('on');
  }
  function restart(){if(timer)clearInterval(timer);if(!still)timer=setInterval(function(){go(i+1)},5000)}
  root.querySelector('.prev').onclick=function(){go(i-1);restart()};
  root.querySelector('.next').onclick=function(){go(i+1);restart()};
  root.addEventListener('mouseenter',function(){clearInterval(timer)});
  root.addEventListener('mouseleave',restart);
  root.addEventListener('keydown',function(e){if(e.key==='ArrowLeft'){go(i-1);restart()}if(e.key==='ArrowRight'){go(i+1);restart()}});
  /* preload all slide images so fades are smooth */
  slides.forEach(function(s){var im=s.querySelector('img');im.loading='eager'});
  go(0);restart();
})();
