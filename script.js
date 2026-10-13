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
  var g=document.getElementById('galeria'),lb=document.getElementById('lb');
  if(g&&lb){
    g.querySelectorAll('.tile').forEach(function(t){
      var i=t.querySelector('img');
      function ok(){t.classList.add('ok');g.hidden=false}
      if(i.complete&&i.naturalWidth)ok();else i.addEventListener('load',ok);
      t.addEventListener('click',function(){var im=lb.querySelector('img');im.src=i.src;im.alt=i.alt;lb.showModal()});
    });
    lb.addEventListener('click',function(e){if(e.target===lb||e.target.className==='lb-x')lb.close()});
  }
  var rv=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}})},{threshold:.15});
    rv.forEach(function(el){o.observe(el)});
  }else rv.forEach(function(el){el.classList.add('in')});
})();
