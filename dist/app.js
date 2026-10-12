document.documentElement.classList.add('js');
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
function setMenu(open){
 nav.classList.toggle('open',open);
 menu.setAttribute('aria-expanded',String(open));
 menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');
}
menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){setMenu(false);menu.focus()}});
document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!menu.contains(e.target))setMenu(false)});
window.matchMedia('(min-width:641px)').addEventListener('change',e=>{if(e.matches)setMenu(false)});
const dialog=document.querySelector('#article-dialog');document.querySelector('#read-article').addEventListener('click',()=>dialog.showModal());document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
