(function(){
  var b=document.querySelector('.burger'),m=document.getElementById('menu');
  function set(o){b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Fechar menu':'Abrir menu');m.classList.toggle('open',o)}
  b.addEventListener('click',function(){set(b.getAttribute('aria-expanded')!=='true')});
  m.addEventListener('click',function(e){if(e.target.tagName==='A')set(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
  try{
    var wd=new Intl.DateTimeFormat('en-US',{weekday:'short',timeZone:'America/Sao_Paulo'}).format(new Date());
    var d={Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6}[wd];
    var r=document.querySelector('.hours tr[data-d="'+d+'"]');if(r)r.classList.add('today');
  }catch(e){}
})();
