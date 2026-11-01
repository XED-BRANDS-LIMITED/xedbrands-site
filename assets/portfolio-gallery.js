
document.addEventListener('DOMContentLoaded',function(){
  var root=document.getElementById('slideshow');if(!root)return;
  var slides=Array.prototype.slice.call(root.querySelectorAll('.xed-slide'));
  var dotsBox=root.querySelector('.xed-dots'),index=0,timer=null;
  var reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var dots=slides.map(function(_,n){
    var b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Show product image '+(n+1));
    b.addEventListener('click',function(){show(n);restart()});dotsBox.appendChild(b);return b;
  });
  function show(n){slides[index].classList.remove('active');dots[index].classList.remove('active');index=(n+slides.length)%slides.length;slides[index].classList.add('active');dots[index].classList.add('active');}
  function restart(){if(timer)clearInterval(timer);if(!reduced)timer=setInterval(function(){show(index+1)},5000)}
  root.querySelector('.xed-prev').addEventListener('click',function(){show(index-1);restart()});
  root.querySelector('.xed-next').addEventListener('click',function(){show(index+1);restart()});
  root.addEventListener('mouseenter',function(){if(timer)clearInterval(timer)});
  root.addEventListener('mouseleave',restart);
  root.addEventListener('keydown',function(e){if(e.key==='ArrowLeft'){show(index-1);restart()}if(e.key==='ArrowRight'){show(index+1);restart()}});
  dots[0].classList.add('active');restart();
});
