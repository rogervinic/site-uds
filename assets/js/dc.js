/* Mini motor de páginas da UDS.
   Lê o modelo em <template id="pagina">, preenche com os dados de Component.renderVals()
   e atualiza só o que mudou quando a página muda de estado (abas, carrossel, mapa, menu). */
(function () {
  class DCLogic {
    constructor() { this.props = {}; this.state = {}; }
    setState(p) { this.state = Object.assign({}, this.state, typeof p === 'function' ? p(this.state) : p); agendar(); }
  }
  window.DCLogic = DCLogic;

  let comp, tpl, raiz, pendente = false;
  const agendar = () => { if (pendente) return; pendente = true; requestAnimationFrame(() => { pendente = false; render(); }); };

  const get = (path, scope) => {
    path = path.trim();
    if (path === 'true') return true; if (path === 'false') return false;
    return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), scope);
  };
  const SO = /^\s*\{\{\s*([^}]+?)\s*\}\}\s*$/;
  const interp = (s, scope) => s.replace(/\{\{\s*([^}]+?)\s*\}\}/g, (_, k) => {
    const v = get(k, scope); return typeof v === 'function' ? '' : (v == null ? '' : v);
  });

  function walk(node, scope) {
    for (const c of Array.from(node.childNodes)) {
      if (c.nodeType === 3) { if (c.nodeValue.indexOf('{{') > -1) c.nodeValue = interp(c.nodeValue, scope); continue; }
      if (c.nodeType !== 1) continue;
      const tag = c.tagName.toLowerCase();
      if (tag === 'sc-if') {
        const m = (c.getAttribute('value') || '').match(SO);
        const v = m ? get(m[1], scope) : false;
        if (v) { walk(c, scope); c.replaceWith(...c.childNodes); } else c.remove();
        continue;
      }
      if (tag === 'sc-for') {
        const m = (c.getAttribute('list') || '').match(SO);
        const lista = (m && get(m[1], scope)) || [];
        const as = c.getAttribute('as');
        const frag = document.createDocumentFragment();
        lista.forEach((it, i) => {
          const cl = c.cloneNode(true);
          walk(cl, Object.assign({}, scope, { [as]: it, $index: i }));
          frag.append(...cl.childNodes);
        });
        c.replaceWith(frag);
        continue;
      }
      for (const a of Array.from(c.attributes)) {
        const nome = a.name;
        if (nome.indexOf('hint-') === 0) { c.removeAttribute(nome); continue; }
        if (/^on/i.test(nome)) {
          const m = a.value.match(SO);
          if (m) { const fn = get(m[1], scope); c.__on = c.__on || {}; c.__on[nome.slice(2).toLowerCase()] = fn; c.removeAttribute(nome); }
          continue;
        }
        if (nome === 'data-dc-src') { c.setAttribute('src', interp(a.value, scope)); c.removeAttribute(nome); continue; }
        if (a.value.indexOf('{{') > -1) c.setAttribute(nome, interp(a.value, scope));
      }
      walk(c, scope);
    }
  }

  function morph(velho, novo) {
    if (velho.nodeType !== novo.nodeType || velho.nodeName !== novo.nodeName) { velho.replaceWith(novo); return; }
    if (velho.nodeType === 3 || velho.nodeType === 8) { if (velho.nodeValue !== novo.nodeValue) velho.nodeValue = novo.nodeValue; return; }
    if (velho.nodeType === 1) {
      for (const a of Array.from(velho.attributes)) if (!novo.hasAttribute(a.name)) velho.removeAttribute(a.name);
      for (const a of Array.from(novo.attributes)) if (velho.getAttribute(a.name) !== a.value) velho.setAttribute(a.name, a.value);
      velho.__on = novo.__on;
    }
    morphFilhos(velho, novo);
  }
  function morphFilhos(velho, novo) {
    const vs = Array.from(velho.childNodes), ns = Array.from(novo.childNodes);
    const n = Math.max(vs.length, ns.length);
    for (let i = 0; i < n; i++) {
      if (i >= vs.length) velho.appendChild(ns[i]);
      else if (i >= ns.length) vs[i].remove();
      else morph(vs[i], ns[i]);
    }
  }

  function render() {
    const vals = comp.renderVals();
    const frag = tpl.content.cloneNode(true);
    const caixa = document.createElement('div');
    caixa.appendChild(frag);
    walk(caixa, vals);
    morphFilhos(raiz, caixa);
  }

  function despachar(ev) {
    let el = ev.target;
    while (el && el !== raiz.parentNode) {
      if (el.__on && typeof el.__on[ev.type] === 'function') el.__on[ev.type](ev);
      el = el.parentNode;
    }
  }

  window.iniciarPagina = function (Component) {
    tpl = document.getElementById('pagina');
    raiz = document.getElementById('app');
    comp = new Component();
    ['click', 'input', 'change', 'keydown'].forEach((t) => raiz.addEventListener(t, despachar));
    render();
    if (location.hash) { const alvo = document.getElementById(location.hash.slice(1)); if (alvo) alvo.scrollIntoView(); }
  };
})();
