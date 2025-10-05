// app.js - navegación entre frames simple
(function(){
  const buttons = document.querySelectorAll('.mini-nav button');
  buttons.forEach(b=>{
    b.addEventListener('click', ()=> {
      const target = b.getAttribute('data-target');
      scrollToFrame(target);
    });
  });
})();

function scrollToFrame(id){
  const el = document.getElementById(id);
  if(!el) return;
  // scroll the canvas horizontally so the frame is centered
  const canvas = document.getElementById('canvas');
  const left = el.offsetLeft - (window.innerWidth - el.offsetWidth)/2;
  canvas.scrollTo({left, behavior:'smooth'});
}

// allow clicking on some buttons inside to navigate
document.querySelectorAll('[data-target]').forEach(btn=>{
  btn.addEventListener('click', e=>{
    const t = btn.getAttribute('data-target');
    if(t) scrollToFrame(t);
  });
});
