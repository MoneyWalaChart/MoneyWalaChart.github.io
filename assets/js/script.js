
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('show')}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
