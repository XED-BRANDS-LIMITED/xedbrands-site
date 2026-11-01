document.addEventListener('DOMContentLoaded',()=>{const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';}));}const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();const current=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('.nav a').forEach(a=>{if(a.getAttribute('href')===current)a.setAttribute('aria-current','page');});});
// Festive snowfall on every page; decorative only and does not modify any product artwork.
document.addEventListener('DOMContentLoaded',()=>{
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const layer=document.createElement('div');layer.className='snowfall-layer';layer.setAttribute('aria-hidden','true');
  const glyphs=['❄','❅','❆','•'];
  for(let i=0;i<58;i++){const flake=document.createElement('span');flake.className='snowflake';flake.textContent=glyphs[Math.floor(Math.random()*glyphs.length)];
    flake.style.setProperty('--left',Math.random()*100+'vw');flake.style.setProperty('--size',(8+Math.random()*19)+'px');flake.style.setProperty('--opacity',(0.42+Math.random()*0.55).toFixed(2));flake.style.setProperty('--duration',(9+Math.random()*15)+'s');flake.style.setProperty('--delay',(-Math.random()*22)+'s');flake.style.setProperty('--sway',(-55+Math.random()*110)+'px');layer.appendChild(flake);}
  document.body.appendChild(layer);
});
