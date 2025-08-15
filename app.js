
const toggle = document.querySelector('[data-toggle]');
const drawer = document.querySelector('[data-drawer]');
if(toggle && drawer){
  toggle.addEventListener('click', ()=>{
    drawer.style.display = drawer.style.display === 'block' ? 'none' : 'block';
  });
}
const io = new IntersectionObserver((entries)=>{
  entries.forEach(ent=>{
    if(ent.isIntersecting){
      ent.target.classList.add('visible'); io.unobserve(ent.target);
    }
  });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=> io.observe(el));

document.querySelectorAll('[data-demo-form]').forEach(form=>{
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const msg = form.querySelector('[data-msg]');
    if(btn){ btn.disabled = true; btn.textContent = btn.dataset.label || 'Submitting…'; }
    setTimeout(()=>{
      if(msg){ msg.textContent = 'Received! This is a prototype.'; }
      if(btn){ btn.disabled = false; }
      form.reset();
    }, 900);
  });
});


