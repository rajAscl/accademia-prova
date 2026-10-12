/* Perché nove punti - i disegni vivi del saggio (prototipo, laboratorio Accademia).
   Niente librerie: SVG e un po' di Web Audio. Parametri nell'indirizzo per mostrare uno stato preciso
   (servono alle prove): ?fermo  f1=9  f2=fila  f3=100  f4=13 f4a=2 tri=1  f6=nessuno|mifa|sido|entrambi
   f7=proc&tappa=4 | f7=pers&tipo=5  vai=fig4 */
(() => {
  'use strict';
  const NS = 'http://www.w3.org/2000/svg';
  const C = { petrolio: '#155263', notte: '#0E3A46', oro: '#F0B917', oroScuro: '#A87F00', crema: '#F9F8EB', acqua: '#76B39D', carta: '#FFFDF4' };
  const Q = new URLSearchParams(location.search);
  const FERMO = Q.has('fermo') || matchMedia('(prefers-reduced-motion: reduce)').matches;
  const NOMI = ['', 'Uno', 'Due', 'Tre', 'Quattro', 'Cinque', 'Sei', 'Sette', 'Otto', 'Nove'];
  const ESADE = [1, 4, 2, 8, 5, 7, 1];
  const TRIANGOLO = [9, 6, 3, 9];

  // ---------- attrezzi ----------
  function el(tag, attrs, parent) {
    const e = document.createElementNS(NS, tag);
    if (attrs) for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  const $ = id => document.getElementById(id);
  const ang = n => (-90 + 40 * (n % 9)) * Math.PI / 180;           // 9 in alto, senso orario
  const pos = (n, r, cx = 200, cy = 200) => [cx + r * Math.cos(ang(n)), cy + r * Math.sin(ang(n))];
  const cerchioDal9 = (cx, cy, r) => `M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx} ${cy + r} A ${r} ${r} 0 1 1 ${cx} ${cy - r}`;
  const linea = nums => nums.map((n, i) => (i ? 'L' : 'M') + pos(n, 1, 0, 0).map(v => v.toFixed(5)).join(' ')).join(' ');
  const lineaR = (nums, r, cx = 200, cy = 200) => nums.map((n, i) => (i ? 'L ' : 'M ') + pos(n, r, cx, cy).map(v => v.toFixed(2)).join(' ')).join(' ');
  const facile = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const voc = n => n === 1 || n === 8;                                   // l'1 e l'8 vogliono l'apostrofo
  const al = n => (voc(n) ? 'all’' : 'al ') + n, dal = n => (voc(n) ? 'dall’' : 'dal ') + n, sul = n => (voc(n) ? 'sull’' : 'sul ') + n;
  function traccia(path, ms, ritardo = 0) {               // disegna un tratto come a mano
    const L = path.getTotalLength();
    path.style.strokeDasharray = L + ' ' + L;
    if (FERMO || ms === 0) { path.style.strokeDashoffset = 0; return Promise.resolve(); }
    path.style.strokeDashoffset = L;
    const a = path.animate([{ strokeDashoffset: L }, { strokeDashoffset: 0 }], { duration: ms, delay: ritardo, easing: 'cubic-bezier(.55,0,.3,1)', fill: 'forwards' });
    return a.finished.then(() => { path.style.strokeDashoffset = 0; });
  }
  function rangeColore(inp) { const p = (inp.value - inp.min) / (inp.max - inp.min) * 100; inp.style.setProperty('--p', p + '%'); }
  function visibile(elem, cb, soglia = 0.25) {
    const io = new IntersectionObserver(es => es.forEach(e => cb(e.isIntersecting)), { threshold: soglia });
    io.observe(elem);
  }
  function rng(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function numeri(g, r, opz = {}) {
    const out = {};
    for (let n = 1; n <= 9; n++) {
      const [x, y] = pos(n, r);
      out[n] = el('text', { x, y, class: 'numero', ...(opz.attr || {}) }, g);
      out[n].textContent = n;
    }
    return out;
  }
  function svgPunto(svg, ev) {
    const p = svg.createSVGPoint(); p.x = ev.clientX; p.y = ev.clientY;
    return p.matrixTransform(svg.getScreenCTM().inverse());
  }

  // ---------- comparsa dolce delle sezioni ----------
  const entrate = document.querySelectorAll('.entra');
  if (FERMO || !('IntersectionObserver' in window)) entrate.forEach(e => e.classList.add('dentro'));
  else {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('dentro'); io.unobserve(e.target); } }), { threshold: 0.08 });
    entrate.forEach(e => io.observe(e));
  }

  // ============ APERTURA: il simbolo si disegna da solo ============
  (function apertura() {
    const svg = $('simbolo-apertura');
    const defs = el('defs', null, svg);
    const pat = el('pattern', { id: 'oro-trama', patternUnits: 'userSpaceOnUse', x: 0, y: 0, width: 400, height: 400 }, defs);
    el('rect', { width: 400, height: 400, fill: C.oro }, pat);
    el('image', { href: 'img/accademia-trama-oro.jpg', width: 400, height: 500, preserveAspectRatio: 'xMidYMid slice' }, pat);
    const R = 170;
    el('circle', { cx: 200, cy: 200, r: R, fill: 'none', stroke: 'rgba(249,248,235,.08)', 'stroke-width': 9 }, svg);
    const cerchio = el('path', { d: cerchioDal9(200, 200, R), fill: 'none', stroke: 'url(#oro-trama)', 'stroke-width': 9, 'stroke-linecap': 'round' }, svg);
    const tri = el('path', { d: lineaR(TRIANGOLO, R), fill: 'none', stroke: C.acqua, 'stroke-width': 4, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }, svg);
    const esa = el('path', { d: lineaR(ESADE, R), fill: 'none', stroke: C.acqua, 'stroke-width': 4, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }, svg);
    const g = el('g', null, svg);
    const nn = numeri(g, R + 30, { attr: { style: 'fill:#F9F8EB;font-size:22px;opacity:0;transition:opacity .5s' } });
    [cerchio, tri, esa].forEach(p => { const L = p.getTotalLength(); p.style.strokeDasharray = L + ' ' + L; p.style.strokeDashoffset = L; });
    (async () => {
      await sleep(FERMO ? 0 : 350);
      for (let n = 1; n <= 9; n++) setTimeout(() => nn[n].style.opacity = 1, FERMO ? 0 : 1700 * n / 9);
      await traccia(cerchio, 1700);
      await traccia(tri, 1000);
      await traccia(esa, 1500);
    })();
  })();

  // ============ il piccolo simbolo che si costruisce mentre si legge ============
  (function cantiere() {
    const box = $('cantiere');
    const svg = el('svg', { viewBox: '0 0 100 100' }, box);
    el('circle', { cx: 50, cy: 50, r: 36, fill: 'none', stroke: 'rgba(21,82,99,.15)', 'stroke-width': 4 }, svg);
    const giro = el('path', { d: cerchioDal9(50, 50, 36), fill: 'none', stroke: C.oro, 'stroke-width': 5, 'stroke-linecap': 'round' }, svg);
    const tri = el('path', { d: lineaR(TRIANGOLO, 36, 50, 50), fill: 'none', stroke: C.petrolio, 'stroke-width': 2.6, 'stroke-linejoin': 'round', opacity: 0, style: 'transition:opacity .6s' }, svg);
    const esa = el('path', { d: lineaR(ESADE, 36, 50, 50), fill: 'none', stroke: C.petrolio, 'stroke-width': 2.6, 'stroke-linejoin': 'round', opacity: 0, style: 'transition:opacity .6s' }, svg);
    const L = giro.getTotalLength(); giro.style.strokeDasharray = L + ' ' + L;
    const s2 = $('fig3'), s3 = $('fig4'), fine = $('fig7');
    function su() {
      const y = scrollY, h = innerHeight;
      const top = $('inizio').offsetTop, fondo = fine.offsetTop + fine.offsetHeight - h;
      const p = Math.max(0, Math.min(1, (y - top + h * .3) / (fondo - top + h * .3)));
      giro.style.strokeDashoffset = L * (1 - p);
      box.classList.toggle('visibile', y > top - h * .5);
      tri.setAttribute('opacity', y + h * .6 > s2.offsetTop ? 1 : 0);
      esa.setAttribute('opacity', y + h * .6 > s3.offsetTop + s3.offsetHeight * .5 ? 1 : 0);
    }
    addEventListener('scroll', su, { passive: true }); addEventListener('resize', su); su();
  })();

  // ============ FIGURA 1: dividere il cerchio ============
  (function figura1() {
    const svg = $('f1'), inp = $('f1-n'), out = $('f1-out'), cap = $('f1-cap');
    const R = 140;
    const cerchio = el('path', { d: cerchioDal9(200, 200, R), fill: 'none', stroke: C.petrolio, 'stroke-width': 2.5 }, svg);
    const g = el('g', { transform: 'translate(200 200)' }, svg);
    const punti = [], etichette = [];
    for (let i = 0; i < 12; i++) {
      const p = el('g', { class: 'p1' }, g); el('circle', { r: 7.5, fill: C.petrolio, stroke: C.carta, 'stroke-width': 2.5 }, p);
      const e = el('g', { class: 'p1' }, g); const t = el('text', { class: 'numero', style: 'font-size:19px' }, e);
      punti.push(p); etichette.push({ g: e, t });
    }
    function mostra(n) {
      out.textContent = n; inp.value = n; rangeColore(inp);
      for (let i = 0; i < 12; i++) {
        const dentro = i < n;
        const a = dentro ? -90 + 360 * i / n : 270;
        punti[i].style.transform = `rotate(${a}deg) translateX(${R}px) rotate(${-a}deg)`;
        etichette[i].g.style.transform = `rotate(${a}deg) translateX(${R + 30}px) rotate(${-a}deg)`;
        punti[i].style.opacity = dentro ? 1 : 0; etichette[i].g.style.opacity = dentro ? 1 : 0;
        etichette[i].t.textContent = i === 0 ? n : i;
        const nove = n === 9;
        punti[i].firstChild.setAttribute('fill', nove ? C.notte : C.petrolio);
        punti[i].firstChild.setAttribute('r', nove ? 9 : 7.5);
      }
      cerchio.setAttribute('stroke', n === 9 ? C.oro : C.petrolio);
      cerchio.setAttribute('stroke-width', n === 9 ? 5 : 2.5);
      cap.innerHTML = n === 1 ? 'Un punto solo e tutto il cerchio intorno.'
        : n === 9 ? '<b>Nove punti.</b> Il 9 in alto, poi l’1, il 2, il 3 e avanti in senso orario fino all’8.'
        : n > 9 ? `<b>${n} punti.</b> La figura dell’enneagramma ne usa nove: torna indietro.`
        : `<b>${n} punti</b> alla stessa distanza l’uno dall’altro. Il numero più alto sta sempre in cima.`;
    }
    inp.addEventListener('input', () => mostra(+inp.value));
    mostra(+(Q.get('f1') || 1));
  })();

  // ============ FIGURA 2: tre punti, un cerchio ============
  (function figura2() {
    const svg = $('f2'), cap = $('f2-cap');
    svg.style.overflow = 'hidden';
    const W = 560, H = 380;
    let P = Q.get('f2') === 'fila' ? [[120, 300], [280, 200], [440, 100]] : [[150, 250], [300, 110], [420, 268]];
    const colori = [C.petrolio, C.oro, C.acqua];
    const cerchio = el('circle', { fill: 'rgba(240,185,23,.07)', stroke: C.oro, 'stroke-width': 3.5 }, svg);
    const retta = el('line', { stroke: C.oro, 'stroke-width': 3.5, 'stroke-linecap': 'round', opacity: 0 }, svg);
    const tri = el('path', { fill: 'none', stroke: 'rgba(21,82,99,.35)', 'stroke-width': 1.5, 'stroke-dasharray': '5 6' }, svg);
    const centro = el('g', null, svg);
    el('circle', { r: 3.5, fill: C.petrolio }, centro);
    const raggio = el('line', { stroke: 'rgba(21,82,99,.4)', 'stroke-width': 1.2, 'stroke-dasharray': '2 5' }, svg);
    const suggerimento = el('text', { class: 'asse-t', style: 'font-size:13px;font-style:italic;font-family:Lora,serif', 'text-anchor': 'middle' }, svg);
    suggerimento.textContent = 'trascinami';
    const maniglie = P.map((p, i) => {
      const g = el('g', { class: 'trascina', tabindex: 0, role: 'slider', 'aria-label': 'Punto ' + (i + 1) }, svg);
      el('circle', { r: 26, fill: 'transparent' }, g);
      el('circle', { r: 13, fill: colori[i], stroke: C.carta, 'stroke-width': 3.5, style: 'filter:drop-shadow(0 2px 3px rgba(14,58,70,.35))' }, g);
      return g;
    });
    function calcola() {
      const [a, b, c] = P;
      const d = 2 * (a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1]));
      if (Math.abs(d) < 1e-9) return null;
      const A = a[0] ** 2 + a[1] ** 2, B = b[0] ** 2 + b[1] ** 2, Cc = c[0] ** 2 + c[1] ** 2;
      const ux = (A * (b[1] - c[1]) + B * (c[1] - a[1]) + Cc * (a[1] - b[1])) / d;
      const uy = (A * (c[0] - b[0]) + B * (a[0] - c[0]) + Cc * (b[0] - a[0])) / d;
      return { x: ux, y: uy, r: Math.hypot(a[0] - ux, a[1] - uy) };
    }
    function disegna() {
      P.forEach((p, i) => maniglie[i].setAttribute('transform', `translate(${p[0]} ${p[1]})`));
      tri.setAttribute('d', `M${P[0]} L${P[1]} L${P[2]} Z`);
      const k = calcola();
      const inFila = !k || k.r > 2600;
      cerchio.setAttribute('opacity', inFila ? 0 : 1); centro.setAttribute('opacity', inFila ? 0 : 1); raggio.setAttribute('opacity', inFila ? 0 : 1);
      if (!inFila) {
        cerchio.setAttribute('cx', k.x); cerchio.setAttribute('cy', k.y); cerchio.setAttribute('r', k.r);
        centro.setAttribute('transform', `translate(${k.x} ${k.y})`);
        raggio.setAttribute('x1', k.x); raggio.setAttribute('y1', k.y); raggio.setAttribute('x2', P[1][0]); raggio.setAttribute('y2', P[1][1]);
      }
      // la retta per i punti più lontani
      let best = [0, 1], dmax = -1;
      for (const [i, j] of [[0, 1], [0, 2], [1, 2]]) { const dd = Math.hypot(P[i][0] - P[j][0], P[i][1] - P[j][1]); if (dd > dmax) { dmax = dd; best = [i, j]; } }
      const [p, q] = [P[best[0]], P[best[1]]]; const ux = (q[0] - p[0]) / (dmax || 1), uy = (q[1] - p[1]) / (dmax || 1);
      retta.setAttribute('x1', p[0] - ux * 2000); retta.setAttribute('y1', p[1] - uy * 2000); retta.setAttribute('x2', p[0] + ux * 2000); retta.setAttribute('y2', p[1] + uy * 2000);
      retta.setAttribute('opacity', inFila ? 1 : 0);
      cap.innerHTML = inFila
        ? '<b>I tre punti sono in fila.</b> Il cerchio si è aperto fino a diventare una retta. Spostane uno e il cerchio torna.'
        : '<b>Un cerchio solo</b> passa per tutti e tre i punti, dovunque tu li metta. Prova a metterli in fila.';
    }
    let attivo = -1;
    maniglie.forEach((m, i) => {
      m.addEventListener('pointerdown', ev => { attivo = i; try { m.setPointerCapture(ev.pointerId); } catch (e) { } suggerimento.style.display = 'none'; ev.preventDefault(); });
      m.addEventListener('pointermove', ev => {
        if (attivo !== i) return;
        const p = svgPunto(svg, ev);
        let x = Math.max(18, Math.min(W - 18, p.x)), y = Math.max(18, Math.min(H - 18, p.y));
        // un piccolo aiuto per metterli in fila: se il punto è quasi sulla retta degli altri due, ci si appoggia
        const o = P.filter((_, j) => j !== i); const dx = o[1][0] - o[0][0], dy = o[1][1] - o[0][1], L = Math.hypot(dx, dy) || 1;
        const dist = ((x - o[0][0]) * dy - (y - o[0][1]) * dx) / L;
        if (Math.abs(dist) < 7) { x -= dist * dy / L; y += dist * dx / L; }
        P[i] = [x, y]; disegna();
      });
      const lascia = () => { attivo = -1; };
      m.addEventListener('pointerup', lascia); m.addEventListener('pointercancel', lascia);
      m.addEventListener('keydown', ev => {
        const d = { ArrowLeft: [-8, 0], ArrowRight: [8, 0], ArrowUp: [0, -8], ArrowDown: [0, 8] }[ev.key];
        if (d) { P[i] = [Math.max(18, Math.min(W - 18, P[i][0] + d[0])), Math.max(18, Math.min(H - 18, P[i][1] + d[1]))]; disegna(); ev.preventDefault(); }
      });
    });
    suggerimento.setAttribute('x', P[1][0]); suggerimento.setAttribute('y', P[1][1] - 26);
    disegna();
  })();

  // ============ FIGURA 3: la polarità e il polo neutro ============
  (function figura3() {
    const svg = $('f3'), inp = $('f3-t'), out = $('f3-out'), cap = $('f3-cap');
    const R = 140;
    el('circle', { cx: 200, cy: 200, r: R, class: 'cerchio-base' }, svg);
    for (let n = 1; n <= 9; n++) { const [x, y] = pos(n, R); el('circle', { cx: x, cy: y, r: n % 3 ? 3 : 0, fill: 'rgba(21,82,99,.3)' }, svg); }
    const nn = numeri(svg, R + 26);
    for (let n = 1; n <= 9; n++) if (n % 3) nn[n].classList.add('spento');
    const p3 = pos(3, R), p6 = pos(6, R), p9 = pos(9, R);
    const alone9 = el('circle', { cx: p9[0], cy: p9[1], r: 22, fill: C.oro, opacity: 0 }, svg);
    const base = el('line', { x1: p3[0], y1: p3[1], x2: p6[0], y2: p6[1], stroke: C.petrolio, 'stroke-width': 4, 'stroke-linecap': 'round' }, svg);
    const lati = el('path', { d: `M ${p9[0]} ${p9[1]} L ${p3[0]} ${p3[1]} M ${p9[0]} ${p9[1]} L ${p6[0]} ${p6[1]}`, fill: 'none', stroke: C.oro, 'stroke-width': 4, 'stroke-linecap': 'round' }, svg);
    const latiOmbra = el('path', { d: lati.getAttribute('d'), fill: 'none', stroke: 'rgba(21,82,99,.22)', 'stroke-width': 1.5, 'stroke-dasharray': '4 6' }, svg);
    svg.insertBefore(latiOmbra, lati);
    const Lato = Math.hypot(p9[0] - p3[0], p9[1] - p3[1]);
    const scia = el('polyline', { fill: 'none', stroke: C.oro, 'stroke-width': 3, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', opacity: .55 }, svg);
    const pallino = el('circle', { r: 8, fill: C.notte, stroke: C.carta, 'stroke-width': 3 }, svg);
    [p3, p6, p9].forEach(p => el('circle', { cx: p[0], cy: p[1], r: 7, fill: C.petrolio, stroke: C.carta, 'stroke-width': 2.5 }, svg));
    const tPol = el('text', { x: 200, y: p3[1] + 28, class: 'asse-t', 'text-anchor': 'middle', style: 'font-size:13px' }, svg); tPol.textContent = 'la polarità';
    const tNeu = el('text', { x: p9[0] + 22, y: p9[1] - 26, class: 'asse-t', 'text-anchor': 'start', 'dominant-baseline': 'central', style: 'font-size:13px' }, svg); tNeu.textContent = 'il polo neutro';
    let t = 0;
    function imposta(v) {
      t = v / 100; inp.value = v; out.textContent = v; rangeColore(inp);
      lati.style.strokeDasharray = `${Lato * t} ${Lato * 2}`;
      alone9.setAttribute('opacity', (.12 + .25 * t) * (t > 0 ? 1 : 0));
      cap.innerHTML = t < .15
        ? 'Con la sola polarità tutto funziona in modo meccanico: avanti e indietro fra due poli.'
        : t < .95 ? 'Il 9 comincia a scendere verso la base e il moto cambia strada.'
        : 'Con la terza forza il moto non torna più sui suoi passi e la realtà può trasformarsi.';
    }
    inp.addEventListener('input', () => imposta(+inp.value));
    imposta(+(Q.get('f3') || 0));
    // il moto: andata sulla base 3 -> 6, ritorno 6 -> 3 sollevato verso il 9 quanto vale la terza forza
    const storia = [];
    function punto(s) {
      if (s < 1) return [p3[0] + (p6[0] - p3[0]) * s, p3[1] + (p6[1] - p3[1]) * s];
      // ritorno: 6 -> vertice -> 3, con il vertice che sale dalla base verso il 9
      const mx = (p3[0] + p6[0]) / 2, my = (p3[1] + p6[1]) / 2;
      const vx = mx + (p9[0] - mx) * t, vy = my + (p9[1] - my) * t;
      const w = s - 1;
      if (w < .5) { const k = w / .5; return [p6[0] + (vx - p6[0]) * k, p6[1] + (vy - p6[1]) * k]; }
      const k = (w - .5) / .5; return [vx + (p3[0] - vx) * k, vy + (p3[1] - vy) * k];
    }
    let s = 0, gira = false, prima = 0;
    function passo(ora) {
      if (!gira) return;
      const dt = Math.min(50, ora - (prima || ora)); prima = ora;
      s = (s + dt / 1500) % 2;
      const [x, y] = punto(s);
      pallino.setAttribute('cx', x); pallino.setAttribute('cy', y);
      storia.push(x.toFixed(1) + ',' + y.toFixed(1)); if (storia.length > 26) storia.shift();
      scia.setAttribute('points', storia.join(' '));
      requestAnimationFrame(passo);
    }
    const [x0, y0] = punto(FERMO ? 1.5 : 0); pallino.setAttribute('cx', x0); pallino.setAttribute('cy', y0);
    if (!FERMO) visibile(svg, v => { if (v && !gira) { gira = true; prima = 0; requestAnimationFrame(passo); } else if (!v) gira = false; }, 0.05);
  })();

  // ============ FIGURA 4: uno diviso sette ============
  (function figura4() {
    const svg = $('f4'), inp = $('f4-k'), out = $('f4-out'), cap = $('f4-cap'), passo = $('f4-passo');
    const str = $('f4-str'), conta = $('f4-conta'), fr = $('f4-fr'), titolo = $('f4-titolo');
    const bPlay = $('f4-play'), bTri = $('f4-tri');
    const R = 140, MAX = 12;
    el('circle', { cx: 200, cy: 200, r: R, fill: 'none', stroke: C.petrolio, 'stroke-width': 2 }, svg);
    const triG = el('path', { d: lineaR(TRIANGOLO, R), fill: 'none', stroke: C.acqua, 'stroke-width': 4.5, 'stroke-linejoin': 'round', 'stroke-linecap': 'round', opacity: 0 }, svg);
    const lineeG = el('g', null, svg);
    const pallini = {};
    for (let n = 1; n <= 9; n++) { const [x, y] = pos(n, R); pallini[n] = el('circle', { cx: x, cy: y, r: 6.5, fill: C.carta, stroke: C.petrolio, 'stroke-width': 2.5 }, svg); }
    const nn = numeri(svg, R + 27);
    const penna = el('g', { opacity: 0 }, svg);
    el('circle', { r: 17, fill: C.oro, opacity: .28 }, penna); el('circle', { r: 9, fill: C.oro, stroke: C.notte, 'stroke-width': 2.5 }, penna);
    penna.style.transition = 'transform .45s cubic-bezier(.5,0,.3,1)';

    // la divisione in colonna
    let a = +(Q.get('f4a') || 1), k = 0, tri = false;
    function cifre(a) { const d = [], r = [a]; for (let i = 0; i < MAX; i++) { d.push(Math.floor(10 * r[i] / 7)); r.push(10 * r[i] % 7); } return { d, r }; }
    // le frazioni
    const bottoniFr = [];
    for (let i = 1; i <= 6; i++) {
      const b = document.createElement('button'); b.type = 'button'; b.textContent = i + '/7'; b.setAttribute('aria-pressed', i === a);
      b.addEventListener('click', () => { a = i; bottoniFr.forEach((x, j) => x.setAttribute('aria-pressed', j + 1 === a)); mostra(k, false); });
      fr.appendChild(b); bottoniFr.push(b);
    }
    // la striscia delle cifre
    str.innerHTML = '<span class="zero">0,</span>';
    const caselle = [];
    for (let i = 0; i < MAX; i++) { const c = document.createElement('span'); c.className = 'cifra' + (i >= 6 ? ' giro2' : ''); str.appendChild(c); caselle.push(c); }
    const pp = document.createElement('span'); pp.className = 'puntini'; pp.textContent = '…'; str.appendChild(pp);
    // il conteggio
    const box = {};
    for (let n = 1; n <= 9; n++) { const d = document.createElement('div'); d.innerHTML = `<b>${n}</b><span>0</span>`; conta.appendChild(d); box[n] = d; }

    let linee = [];
    function mostra(nuovoK, anima) {
      const prec = k; k = nuovoK; inp.value = k; out.textContent = k; rangeColore(inp);
      const { d, r } = cifre(a);
      titolo.textContent = `${a} ÷ 7 =`;
      caselle.forEach((c, i) => { c.textContent = i < k ? d[i] : ''; c.classList.toggle('scritta', i < k); c.classList.toggle('ora', i === k - 1); });
      // conteggio
      const quante = {}; for (let n = 1; n <= 9; n++) quante[n] = 0;
      for (let i = 0; i < k; i++) quante[d[i]]++;
      for (let n = 1; n <= 9; n++) {
        box[n].querySelector('span').textContent = quante[n];
        box[n].classList.toggle('vista', quante[n] > 0);
        box[n].classList.toggle('mai', n % 3 === 0 && k >= 6);
        box[n].classList.toggle('acceso', n % 3 === 0 && tri);
      }
      // le linee
      lineeG.innerHTML = ''; linee = [];
      const fatte = new Set();
      for (let i = 0; i < k - 1; i++) {
        const chiave = [d[i], d[i + 1]].sort().join('-');
        const ultima = i === k - 2;
        if (fatte.has(chiave) && !ultima) continue;
        fatte.add(chiave);
        const p = el('path', { d: lineaR([d[i], d[i + 1]], R), fill: 'none', stroke: ultima ? C.oro : C.petrolio, 'stroke-width': ultima ? 5 : 3.5, 'stroke-linecap': 'round' }, lineeG);
        linee.push(p);
        if (ultima && anima && k > prec) traccia(p, 420);
      }
      for (let n = 1; n <= 9; n++) {
        const toccato = d.slice(0, k).includes(n);
        pallini[n].setAttribute('fill', toccato ? C.petrolio : C.carta);
        nn[n].classList.toggle('spento', n % 3 === 0 && k >= 6 && !tri);
      }
      if (k > 0) { const [x, y] = pos(d[k - 1], R); penna.setAttribute('opacity', 1); penna.style.transform = `translate(${x}px, ${y}px)`; }
      else penna.setAttribute('opacity', 0);
      bTri.disabled = k < 7;
      if (k < 7 && tri) { tri = false; triG.setAttribute('opacity', 0); bTri.setAttribute('aria-pressed', 'false'); }
      // il passo della divisione
      if (k === 0) passo.innerHTML = 'Sposta il cursore: ogni cifra che esce dalla divisione è un punto da raggiungere.';
      else {
        const i = k - 1, prima = i === 0;
        passo.innerHTML = `<b>${10 * r[i]} ÷ 7</b> fa <b>${d[i]}</b> con il resto di <b>${r[i + 1]}</b>. ` +
          (prima ? `La penna si posa ${sul(d[i])}.` : `La penna va ${dal(d[i - 1])} ${al(d[i])}.`) +
          (r[i + 1] === a && i === 5 ? ' Il resto è tornato quello di partenza: da qui le cifre si ripetono.' : '');
      }
      const seq = d.slice(0, 6).join(', ');
      cap.innerHTML = tri ? '<b>Il 3, il 6 e il 9</b> non escono mai dalla divisione. Uniti fra loro formano il triangolo e il simbolo è completo.'
        : k >= 7 ? `<b>Sei cifre e la linea si chiude:</b> ${seq} e di nuovo ${d[0]}. Questa è l’esade.` + (a > 1 ? ` Con ${a}/7 il giro parte da un altro punto e la figura è la stessa.` : ' Prova con un’altra frazione.')
        : a > 1 ? `Con ${a}/7 le cifre partono ${dal(d[0])}.` : 'Ogni cifra è un punto sul cerchio e la penna li unisce nell’ordine in cui escono.';
    }
    inp.addEventListener('input', () => { ferma(); mostra(+inp.value, true); });
    let timer = null;
    function ferma() { if (timer) { clearInterval(timer); timer = null; bPlay.textContent = 'Scrivi le cifre'; } }
    bPlay.addEventListener('click', () => {
      if (timer) { ferma(); return; }
      if (k >= MAX) mostra(0, false);
      bPlay.textContent = 'Ferma';
      timer = setInterval(() => { if (k >= MAX) { ferma(); return; } mostra(k + 1, true); }, 720);
    });
    bTri.addEventListener('click', () => {
      tri = !tri; bTri.setAttribute('aria-pressed', tri);
      triG.setAttribute('opacity', tri ? 1 : 0);
      if (tri) traccia(triG, 900);
      mostra(k, false);
    });
    const k0 = Math.min(MAX, +(Q.get('f4') || 0));
    mostra(k0, false);
    if (Q.get('tri') === '1' && k0 >= 7) bTri.click();
  })();

  // ============ FIGURA 5: l'ottava ============
  (function figura5() {
    const svg = $('f5'), bPlay = $('f5-play');
    const NOTE = ['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si', 'Do'];
    const SEMI = [0, 2, 4, 5, 7, 9, 11, 12];
    const FREQ = [261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88, 523.25];
    const X0 = 20, KW = 65, KH = 170, Y0 = 14;
    const bianchi = [], gradini = [];
    for (let i = 0; i < 8; i++) {
      const r = el('rect', { x: X0 + i * KW, y: Y0, width: KW, height: KH, rx: 5, class: 'tasto-b', tabindex: 0, role: 'button', 'aria-label': NOTE[i] }, svg);
      r.addEventListener('pointerdown', () => suona(i)); r.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { suona(i); e.preventDefault(); } });
      bianchi.push(r);
      const t = el('text', { x: X0 + i * KW + KW / 2, y: Y0 + KH - 16, class: 'nome-nota' }, svg); t.textContent = NOTE[i];
    }
    // tasti neri dove ci sono, contorno tratteggiato dove mancano
    for (let i = 0; i < 7; i++) {
      const x = X0 + (i + 1) * KW - 19;
      if (i === 2 || i === 6) {
        el('rect', { x, y: Y0 + 2, width: 38, height: 102, rx: 4, class: 'manca' }, svg);
        const t = el('text', { x: x + 19, y: Y0 + 58, class: 'manca-t' }, svg); t.textContent = '?';
        t.setAttribute('style', 'font-size:22px');
      } else el('rect', { x, y: Y0, width: 38, height: 104, rx: 3, class: 'tasto-n' }, svg);
    }
    // la scala a gradini: altezza in semitoni da Do
    const BASE = 392, U = 9.5, GW = 44;
    el('line', { x1: X0, y1: BASE, x2: X0 + 8 * KW, y2: BASE, stroke: 'rgba(14,58,70,.35)', 'stroke-width': 1.2 }, svg);
    const tAsse = el('text', { x: X0, y: 222, class: 'asse-t' }, svg); tAsse.textContent = 'quanto sale ogni nota, in mezzi toni da Do';
    for (let i = 0; i < 8; i++) {
      const cx = X0 + i * KW + KW / 2, h = 10 + SEMI[i] * U;
      const int = i === 3 || i === 7;
      const g = el('rect', { x: cx - GW / 2, y: BASE - h, width: GW, height: h, rx: 4, class: 'gradino' + (int ? ' int' : '') }, svg);
      gradini.push(g);
      if (i > 0) {
        const salto = SEMI[i] - SEMI[i - 1];
        const lx = X0 + i * KW, ly = BASE - h - 10;
        const t = el('text', { x: lx, y: ly, 'text-anchor': 'middle', class: salto === 1 ? 'manca-t' : 'asse-t', style: 'font-size:' + (salto === 1 ? 12 : 11) + 'px' }, svg);
        t.textContent = salto === 1 ? '½' : '1';
      }
    }
    const tInt1 = el('text', { x: X0 + 3 * KW, y: BASE - (10 + 5 * U) - 28, class: 'manca-t' }, svg); tInt1.textContent = 'INTERVALLO';
    const tInt2 = el('text', { x: X0 + 7 * KW - 8, y: BASE - (10 + 12 * U) - 28, class: 'manca-t' }, svg); tInt2.textContent = 'INTERVALLO';
    let ctx = null;
    function suona(i) {
      bianchi[i].classList.add('suona'); gradini[i].classList.add('suona');
      setTimeout(() => { bianchi[i].classList.remove('suona'); gradini[i].classList.remove('suona'); }, 380);
      try {
        ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
        const t0 = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain();
        o.type = 'triangle'; o.frequency.value = FREQ[i];
        g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(0.22, t0 + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.1);
        o.connect(g).connect(ctx.destination); o.start(t0); o.stop(t0 + 1.15);
      } catch (e) { /* senza audio resta la luce */ }
    }
    let suonando = false;
    bPlay.addEventListener('click', async () => {
      if (suonando) return; suonando = true; bPlay.disabled = true;
      for (let i = 0; i < 8; i++) { suona(i); await sleep(i === 2 || i === 6 ? 380 : 520); }
      suonando = false; bPlay.disabled = false;
    });
  })();

  // ============ FIGURA 6: il cammino verso nord ============
  (function figura6() {
    const svg = $('f6'), info = $('f6-info'), cap = $('f6-cap'), inp = $('f6-n'), out = $('f6-out');
    const bVai = $('f6-vai'), bMF = $('f6-mifa'), bSD = $('f6-sido'), bBosco = $('f6-bosco');
    svg.style.overflow = 'hidden';
    const W = 560, H = 420;
    let seme = 7, urti = { mifa: false, sido: false };
    const modo = Q.get('f6');
    if (modo === 'mifa' || modo === 'entrambi') urti.mifa = true;
    if (modo === 'sido' || modo === 'entrambi') urti.sido = true;
    bMF.setAttribute('aria-pressed', urti.mifa); bSD.setAttribute('aria-pressed', urti.sido);
    el('rect', { width: W, height: H, fill: '#FBFAEF' }, svg);
    const mondo = el('g', null, svg);
    const alberiG = el('g', null, mondo), rottaG = el('g', null, mondo), segniG = el('g', null, mondo);
    const percorso = el('polyline', { fill: 'none', stroke: C.petrolio, 'stroke-width': 3, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }, mondo);
    const passiG = el('g', null, mondo);
    const viandante = el('g', null, mondo);
    el('circle', { r: 13, fill: C.oro, opacity: .3 }, viandante); el('circle', { r: 7, fill: C.oro, stroke: C.notte, 'stroke-width': 2.5 }, viandante);
    // bussola
    const bus = el('g', { transform: `translate(${W - 42} 42)` }, svg);
    el('circle', { r: 28, fill: C.carta, stroke: 'rgba(21,82,99,.3)', 'stroke-width': 1.5 }, bus);
    const tN = el('text', { y: -15, class: 'asse-t', 'text-anchor': 'middle', 'dominant-baseline': 'central', style: 'font-weight:800;font-size:10px' }, bus); tN.textContent = 'N';
    const ago = el('path', { d: 'M 0 -19 L 5 4 L 0 1 L -5 4 Z', fill: C.notte, class: 'bussola-ago' }, bus);

    function costruisci(N) {
      const caso = rng(seme * 7919 + 13);
      let segno = caso() < .5 ? -1 : 1;
      let x = 0, y = 0, dir = 0;            // gradi, 0 = nord, positivi in senso orario
      const pt = [[0, 0]], segni = [];
      for (let o = 0; o < N; o++) {
        for (let s = 0; s < 7; s++) {
          const intervallo = s === 2 ? 'mifa' : s === 6 ? 'sido' : null;
          if (intervallo) {
            const albero = [x + Math.sin(dir * Math.PI / 180) * .45 + Math.cos(dir * Math.PI / 180) * .18 * segno, y - Math.cos(dir * Math.PI / 180) * .45 + Math.sin(dir * Math.PI / 180) * .18 * segno];
            if (caso() < .15) segno = -segno;
            const dev = segno * (14 + caso() * 16);
            if (urti[intervallo]) { dir = (caso() - .5) * 4; segni.push({ x, y, tipo: 'shock', intervallo, o, albero }); }
            else { dir += dev; segni.push({ x, y, tipo: 'devia', intervallo, o, albero }); }
          }
          dir += (caso() - .5) * 4;
          x += Math.sin(dir * Math.PI / 180); y -= Math.cos(dir * Math.PI / 180);
          pt.push([x, y]);
        }
      }
      return { pt, segni, dir, N, caso };
    }
    function inquadra(c) {
      let x0 = -1, x1 = 1, y0 = -7 * c.N, y1 = 0;
      c.pt.forEach(([x, y]) => { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); });
      const pad = 2.2; x0 -= pad; x1 += pad; y0 -= pad; y1 += pad;
      const s = Math.min((W - 30) / (x1 - x0), (H - 30) / (y1 - y0));
      const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
      return { s, tx: W / 2 - cx * s, ty: H / 2 - cy * s, box: [x0, x1, y0, y1] };
    }
    let corsa = 0;
    async function cammina(anima) {
      const id = ++corsa;
      const N = +inp.value;
      const c = costruisci(N), v = inquadra(c), S = v.s;
      const T = (x, y) => [v.tx + x * S, v.ty + y * S];
      mondo.setAttribute('transform', '');
      // alberi sparsi di sfondo, poi quelli degli intervalli
      alberiG.innerHTML = ''; rottaG.innerHTML = ''; segniG.innerHTML = ''; passiG.innerHTML = '';
      const sc = rng(seme * 31 + 5);
      const nAlb = 110;
      for (let i = 0; i < nAlb; i++) {
        el('circle', { cx: sc() * W, cy: sc() * H, r: 3 + sc() * 6, fill: 'rgba(118,179,157,.16)' }, alberiG);
      }
      c.segni.forEach(sg => { const [x, y] = T(...sg.albero); el('circle', { cx: x, cy: y, r: Math.max(5, S * .2), fill: 'rgba(118,179,157,.55)', stroke: 'rgba(21,82,99,.35)', 'stroke-width': 1 }, alberiG); });
      // la rotta voluta: dritto a nord
      const [sx, sy] = T(0, 0), [nx, ny] = T(0, -7 * N);
      el('line', { x1: sx, y1: sy, x2: nx, y2: ny, stroke: 'rgba(21,82,99,.3)', 'stroke-width': 1.5, 'stroke-dasharray': '3 7' }, rottaG);
      const meta = el('g', { transform: `translate(${nx} ${ny})` }, rottaG);
      el('circle', { r: 12, fill: 'none', stroke: C.oroScuro, 'stroke-width': 2 }, meta);
      el('circle', { r: 4, fill: C.oroScuro }, meta);
      const tm = el('text', { x: 18, y: 1, class: 'asse-t', 'dominant-baseline': 'central', style: 'font-weight:800;fill:#A87F00' }, meta); tm.textContent = 'nord';
      el('circle', { cx: sx, cy: sy, r: 5, fill: C.petrolio }, rottaG);
      const tp = el('text', { x: sx + 10, y: sy + 16, class: 'asse-t' }, rottaG); tp.textContent = 'partenza';
      // il cammino, passo dopo passo
      const punti = c.pt.map(p => T(...p));
      let disegnati = [];
      const durPasso = anima && !FERMO ? Math.max(70, 150 - N * 12) : 0;
      ago.style.transform = 'rotate(0deg)';
      cap.innerHTML = 'Il punto parte verso nord. Ogni nota è un passo.';
      info.innerHTML = '';
      for (let i = 0; i < punti.length; i++) {
        if (id !== corsa) return;
        disegnati.push(punti[i][0].toFixed(1) + ',' + punti[i][1].toFixed(1));
        percorso.setAttribute('points', disegnati.join(' '));
        viandante.setAttribute('transform', `translate(${punti[i][0]} ${punti[i][1]})`);
        el('circle', { cx: punti[i][0], cy: punti[i][1], r: 2.2, fill: C.petrolio }, passiG);
        // i segni degli intervalli quando ci si arriva
        c.segni.forEach(sg => {
          const idx = sg.o * 7 + (sg.intervallo === 'mifa' ? 2 : 6);
          if (idx !== i) return;
          const [x, y] = T(sg.x, sg.y);
          const g = el('g', { transform: `translate(${x} ${y})` }, segniG);
          if (sg.tipo === 'shock') { el('circle', { r: 9, fill: 'none', stroke: C.oro, 'stroke-width': 3 }, g); el('circle', { r: 15, fill: 'none', stroke: C.oro, 'stroke-width': 1.2, opacity: .7 }, g); }
          else el('circle', { r: 5, fill: C.carta, stroke: C.oroScuro, 'stroke-width': 2 }, g);
          if (sg.o === 0) {
            const t = el('text', { x: 14, y: 4, class: 'asse-t', style: 'font-weight:700;font-size:11px' }, g);
            t.textContent = sg.intervallo === 'mifa' ? 'Mi–Fa' : 'Si–Do';
          }
        });
        if (i > 0) {
          const dx = punti[i][0] - punti[i - 1][0], dy = punti[i][1] - punti[i - 1][1];
          ago.style.transform = `rotate(${Math.atan2(dx, -dy) * 180 / Math.PI}deg)`;
        }
        if (durPasso) await sleep(durPasso);
      }
      // il resoconto
      const fin = c.pt[c.pt.length - 1];
      let gradi = Math.round(((c.dir % 360) + 360) % 360); if (gradi > 180) gradi = 360 - gradi;
      const lontano = Math.hypot(fin[0], fin[1] + 7 * N);
      info.innerHTML = `<span>Ottave: <b>${N}</b></span><span>Direzione finale: <b>${gradi}°</b> dal nord</span><span>Distanza dalla meta: <b>${lontano.toFixed(1).replace('.', ',')}</b> passi</span>`;
      const quanti = (urti.mifa ? 1 : 0) + (urti.sido ? 1 : 0);
      cap.innerHTML = quanti === 2 ? '<b>Con gli shock al posto giusto</b> la linea riprende ogni volta la direzione di partenza.'
        : quanti === 1 ? '<b>Con uno shock solo</b> la linea si piega all’altro intervallo e resta storta fino allo shock successivo.'
        : '<b>Senza shock</b> a ogni intervallo si vira di qualche grado e l’ottava si spezza prima di compiersi.';
    }
    bVai.addEventListener('click', () => cammina(true));
    bMF.addEventListener('click', () => { urti.mifa = !urti.mifa; bMF.setAttribute('aria-pressed', urti.mifa); cammina(true); });
    bSD.addEventListener('click', () => { urti.sido = !urti.sido; bSD.setAttribute('aria-pressed', urti.sido); cammina(true); });
    bBosco.addEventListener('click', () => { seme++; cammina(true); });
    inp.addEventListener('input', () => { out.textContent = inp.value; rangeColore(inp); cammina(false); });
    rangeColore(inp);
    if (modo || FERMO) cammina(false);
    else { cammina(false); let fatto = false; visibile(svg, v => { if (v && !fatto) { fatto = true; cammina(true); } }, 0.5); }
  })();

  // ============ FIGURA 7: due letture della stessa figura ============
  (function figura7() {
    const svg = $('f7'), tappa = $('f7-tappa'), avviso = $('f7-avviso'), comandi = $('f7-comandi');
    const bProc = $('f7-proc'), bPers = $('f7-pers');
    const R = 135;
    // nella lettura dei processi solo le note dell'ottava: il 3 e il 6 restano agli intervalli (Luca, 12/10/2026)
    const NOTE = { 9: 'Do', 1: 'Re', 2: 'Mi', 4: 'Fa', 5: 'Sol', 7: 'La', 8: 'Si' };
    el('circle', { cx: 200, cy: 200, r: R, fill: 'none', stroke: 'rgba(21,82,99,.25)', 'stroke-width': 2.5 }, svg);
    const arco = el('path', { fill: 'none', stroke: C.oro, 'stroke-width': 6, 'stroke-linecap': 'round' }, svg);
    const interne = el('g', null, svg);
    el('path', { d: lineaR(TRIANGOLO, R), fill: 'none', stroke: 'rgba(118,179,157,.75)', 'stroke-width': 2.5, 'stroke-linejoin': 'round' }, interne);
    el('path', { d: lineaR(ESADE, R), fill: 'none', stroke: 'rgba(118,179,157,.75)', 'stroke-width': 2.5, 'stroke-linejoin': 'round' }, interne);
    const evid = el('g', null, svg);
    const urti = el('g', null, svg);
    [3, 6].forEach(n => { const [x, y] = pos(n, R); el('circle', { cx: x, cy: y, r: 17, fill: 'none', stroke: C.oro, 'stroke-width': 2, 'stroke-dasharray': '3 4' }, urti); });
    const nodi = {};
    for (let n = 1; n <= 9; n++) {
      const [x, y] = pos(n, R);
      const g = el('g', { class: 'nodo', style: 'cursor:pointer', tabindex: 0, role: 'button', 'aria-label': 'Punto ' + n }, svg);
      el('circle', { cx: x, cy: y, r: 22, fill: 'transparent' }, g);
      const c = el('circle', { cx: x, cy: y, r: 8, fill: C.petrolio, stroke: C.carta, 'stroke-width': 2.5 }, g);
      nodi[n] = { g, c };
      g.addEventListener('click', () => scegli(n)); g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { scegli(n); e.preventDefault(); } });
    }
    const nn = numeri(svg, R + 28);
    const note = el('g', { class: 'note-ottava' }, svg);
    Object.keys(NOTE).forEach(k => {
      const [x, y] = pos(+k, R + 30);
      const t = el('text', { x, y, 'text-anchor': 'middle', 'dominant-baseline': 'central', 'font-size': 19, 'font-weight': 700, fill: C.notte, style: 'font-family: var(--titoli)' }, note);
      t.textContent = NOTE[k];
    });
    let modo = Q.get('f7') === 'pers' ? 'pers' : 'proc', tipo = +(Q.get('tipo') || 2);
    function scegli(n) {
      if (modo === 'pers') { tipo = n; disegna(); }
    }
    function comandiPers() {
      comandi.innerHTML = '';
      const riga = document.createElement('div'); riga.className = 'segmenti'; riga.setAttribute('role', 'group'); riga.setAttribute('aria-label', 'Scegli il tipo');
      for (let n = 1; n <= 9; n++) {
        const b = document.createElement('button'); b.type = 'button'; b.textContent = n; b.setAttribute('aria-pressed', n === tipo);
        b.onclick = () => { tipo = n; disegna(); };
        riga.appendChild(b);
      }
      comandi.appendChild(riga);
    }
    function legami(n) {
      const vicini = [n === 1 ? 9 : n - 1, n === 9 ? 1 : n + 1];
      let linee;
      if (n % 3 === 0) linee = [3, 6, 9].filter(m => m !== n);
      else { const i = ESADE.indexOf(n); const cic = ESADE.slice(0, 6); linee = [cic[(i + 5) % 6], cic[(i + 1) % 6]]; }
      linee.sort((x, y) => x - y);
      return { vicini, linee };
    }
    function elenco(arr) { const a = arr.map(m => 'il Tipo ' + NOMI[m]); return a.length === 2 ? a[0] + ' e ' + a[1] : a.join(', '); }
    function disegna() {
      bProc.setAttribute('aria-pressed', modo === 'proc'); bPers.setAttribute('aria-pressed', modo === 'pers');
      evid.innerHTML = '';
      for (let n = 1; n <= 9; n++) { nodi[n].c.setAttribute('fill', C.petrolio); nodi[n].c.setAttribute('r', 8); nn[n].classList.remove('spento'); }
      if (modo === 'proc') {
        comandi.innerHTML = ''; comandi.dataset.m = 'proc';
        interne.setAttribute('opacity', .35); urti.setAttribute('opacity', 1);
        arco.setAttribute('d', '');
        note.setAttribute('opacity', 1);
        for (let n = 1; n <= 9; n++) nn[n].style.display = 'none';
        tappa.innerHTML = '<small>Enneagramma dei Processi</small>Do · Re · Mi · Fa · Sol · La · Si · Do';
        avviso.innerHTML = 'Queste sono le basi. La lettura dei processi si approfondisce con lo studio della Quarta Via.';
      } else {
        note.setAttribute('opacity', 0);
        for (let n = 1; n <= 9; n++) nn[n].style.display = '';
        if (comandi.dataset.m !== 'pers') { comandiPers(); comandi.dataset.m = 'pers'; }
        else comandi.querySelectorAll('button').forEach((b, i) => b.setAttribute('aria-pressed', i + 1 === tipo));
        interne.setAttribute('opacity', .5); urti.setAttribute('opacity', 0);
        arco.setAttribute('d', '');
        const { vicini, linee } = legami(tipo);
        vicini.forEach(m => { // l'arco fra il tipo e il vicino
          const a1 = ang(tipo), a2 = ang(m); let d = a2 - a1; if (d > Math.PI) d -= 2 * Math.PI; if (d < -Math.PI) d += 2 * Math.PI;
          const [x1, y1] = pos(tipo, R), [x2, y2] = pos(m, R);
          el('path', { d: `M ${x1} ${y1} A ${R} ${R} 0 0 ${d > 0 ? 1 : 0} ${x2} ${y2}`, fill: 'none', stroke: C.oro, 'stroke-width': 6, 'stroke-linecap': 'round' }, evid);
        });
        linee.forEach(m => el('path', { d: lineaR([tipo, m], R), fill: 'none', stroke: C.oroScuro, 'stroke-width': 4, 'stroke-linecap': 'round' }, evid));
        for (let n = 1; n <= 9; n++) if (n !== tipo && !vicini.includes(n) && !linee.includes(n)) nn[n].classList.add('spento');
        nodi[tipo].c.setAttribute('fill', C.oro); nodi[tipo].c.setAttribute('r', 11);
        tappa.innerHTML = `<small>Enneagramma delle Personalità</small>Tipo ${NOMI[tipo]}`;
        avviso.innerHTML = `Sul cerchio il Tipo ${NOMI[tipo]} confina con ${elenco(vicini)}. Le linee interne lo collegano con ${elenco(linee)}.`;
      }
    }
    bProc.addEventListener('click', () => { modo = 'proc'; disegna(); });
    bPers.addEventListener('click', () => { modo = 'pers'; disegna(); });
    disegna();
  })();

  // ---------- vai a una figura (per le prove) ----------
  if (Q.get('vai')) { const t = $(Q.get('vai')); if (t) setTimeout(() => t.scrollIntoView({ block: 'center', behavior: 'instant' }), 60); }
})();
