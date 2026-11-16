  const sections = [...document.querySelectorAll('article section')];
  const links = [...document.querySelectorAll('.toc a')];
  const stickyBottom = () => Math.max(...[...document.querySelectorAll('header.nav, .filter, .toc')]
    .filter(el => getComputedStyle(el).position === 'sticky')
    .map(el => el.getBoundingClientRect().bottom));
  let ticking = false;
  const updateActive = () => {
    const line = Math.max(stickyBottom() + 40, innerHeight * 0.5);
    let current = sections[0];
    sections.forEach(s => { if (s.getBoundingClientRect().top <= line) current = s; });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current.id));
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(updateActive); } }, { passive: true });
  addEventListener('resize', updateActive);
  updateActive();

  const btns = [...document.querySelectorAll('.seg button')];
  btns.forEach(b => b.addEventListener('click', () => {
    const f = b.dataset.f;
    btns.forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    sections.forEach(s => {
      const off = f !== 'all' && !s.dataset.cap.split(' ').includes(f);
      s.classList.toggle('dim', off);
      links.find(a => a.getAttribute('href') === '#' + s.id)?.classList.toggle('dim', off);
    });
    const first = sections.find(s => f === 'all' || s.dataset.cap.split(' ').includes(f));
    if (f !== 'all' && first) first.scrollIntoView({ block: 'start' });
  }));
