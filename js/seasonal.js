/* LAYER C - temporary seasonal effects (snow, gold sparkle, lights). Safe to delete. */
(function(){
  if(!document.body.hasAttribute('data-season'))return;
  var hero=document.getElementById('home');if(!hero)return;
  var lights=document.createElement('div');lights.className='lights';lights.setAttribute('aria-hidden','true');
  for(var k=0;k<28;k++)lights.appendChild(document.createElement('i'));
  hero.appendChild(lights);
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var c=document.createElement('canvas');c.id='season-fx';c.setAttribute('aria-hidden','true');hero.appendChild(c);
  var g=c.getContext('2d'),W,H,P=[];
  function size(){W=c.width=hero.clientWidth;H=c.height=hero.clientHeight}
  size();window.addEventListener('resize',size);
  var N=W<600?35:70;
  for(var n=0;n<N;n++)P.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*2.2+.6,v:Math.random()*.8+.3,d:Math.random()*6,gold:Math.random()<.3});
  var run=true;document.addEventListener('visibilitychange',function(){run=!document.hidden;if(run)tick()});
  function tick(){
    if(!run)return;g.clearRect(0,0,W,H);
    P.forEach(function(p){
      p.y+=p.v;p.d+=.02;p.x+=Math.sin(p.d)*.4;
      if(p.y>H){p.y=-5;p.x=Math.random()*W}
      g.beginPath();g.arc(p.x,p.y,p.r,0,6.283);
      g.fillStyle=p.gold?'rgba(232,184,48,.75)':'rgba(255,255,255,.7)';g.fill();
    });
    requestAnimationFrame(tick);
  }
  tick();
})();
