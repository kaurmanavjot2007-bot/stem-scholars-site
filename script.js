const b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
document.querySelectorAll('.card,.tile').forEach((el,i)=>el.classList.add('p'+(i%4)));
