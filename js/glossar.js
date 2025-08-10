/* JS: Glossar – Suche, Filter, Navigation, Zeitstempel */
(function () {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  function formatLastModified() {
    const el = $('#lastUpdated');
    if (!el) return;
    const lm = document.lastModified; // Browserseitiger Zeitstempel der gespeicherten Datei
    const date = new Date(lm);
    if (Number.isNaN(date.getTime())) return;
    const fmt = new Intl.DateTimeFormat('de-DE', {
      dateStyle: 'medium', timeStyle: 'short'
    });
    el.textContent = fmt.format(date);
    el.setAttribute('datetime', date.toISOString());
  }

  function stripHighlights(node) {
    $$('mark.highlight', node).forEach(mark => {
      const parent = mark.parentNode;
      if (!parent) return;
      parent.replaceChild(document.createTextNode(mark.textContent), mark);
      parent.normalize();
    });
  }

  function highlightText(element, query) {
    if (!query) return;
    const walk = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue) return NodeFilter.FILTER_REJECT;
        return node.nodeValue.toLowerCase().includes(query) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const matches = [];
    while (walk.nextNode()) matches.push(walk.currentNode);
    matches.forEach(textNode => {
      const val = textNode.nodeValue;
      const idx = val.toLowerCase().indexOf(query);
      if (idx === -1) return;
      const before = document.createTextNode(val.slice(0, idx));
      const match = document.createElement('mark');
      match.className = 'highlight';
      match.textContent = val.slice(idx, idx + query.length);
      const after = document.createTextNode(val.slice(idx + query.length));
      const frag = document.createDocumentFragment();
      frag.append(before, match, after);
      textNode.parentNode.replaceChild(frag, textNode);
    });
  }

  function initSearchAndFilter() {
    const searchInput = $('#suchfeld');
    const cards = $$('#termListe .card');
    const status = $('#suche-status');
    const noResults = $('.no-results');

    function applyFilter() {
      const activeBtn = $('.filter-btn.is-active');
      const activeCat = activeBtn ? activeBtn.dataset.category : 'alle';
      const q = (searchInput.value || '').trim().toLowerCase();
      let visibleCount = 0;

      cards.forEach(card => {
        // Reset previous highlights for stable re-rendering
        stripHighlights(card);

        const cat = card.dataset.category;
        const title = $('.term-title', card).textContent;
        const desc = $('.term-description', card).textContent;
        const hay = `${title} ${desc}`.toLowerCase();

        const matchQuery = q === '' || hay.includes(q);
        const matchCat = activeCat === 'alle' || cat === activeCat;
        const show = matchQuery && matchCat;

        card.hidden = !show;
        if (show) {
          visibleCount++;
          if (q) {
            highlightText($('.term-title', card), q);
            highlightText($('.term-description', card), q);
          }
        }
      });

      if (noResults) noResults.hidden = visibleCount !== 0;
      if (status) status.textContent = `${visibleCount} Ergebnis${visibleCount === 1 ? '' : 'se'} gefunden`;
    }

    if (searchInput) {
      searchInput.addEventListener('input', applyFilter);
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          searchInput.value = '';
          applyFilter();
        }
      });
    }

    $$('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.filter-btn').forEach(b => { b.classList.remove('is-active'); b.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
        applyFilter();
      });
    });

    applyFilter();
  }

  function initResponsiveNav() {
    const toggle = $('.nav-toggle');
    const nav = $('#site-nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    formatLastModified();
    initSearchAndFilter();
    initResponsiveNav();
  });
})();
