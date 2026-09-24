(function () {
  var strip = document.querySelector('.jump .wrap');
  var links = document.querySelectorAll('.jump a');
  var last = -2;
  var sections = Array.prototype.map.call(links, function (a) {
    return document.querySelector(a.getAttribute('href'));
  });
  function onScroll() {
    var y = window.scrollY + 140, active = -1;
    sections.forEach(function (s, i) { if (s && s.offsetTop <= y) active = i; });
    if (active === last) return;
    last = active;
    links.forEach(function (a, i) {
      a.classList.toggle('is-active', i === active);
      if (i === active && strip.scrollWidth > strip.clientWidth) {
        var target = a.offsetLeft - (strip.clientWidth - a.offsetWidth) / 2;
        if (Math.abs(strip.scrollLeft - target) > 4) strip.scrollTo({ left: target, behavior: 'smooth' });
      }
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
