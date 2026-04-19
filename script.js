(function () {
  const STORAGE_KEY = 'tb_lang';
  const body = document.body;
  const buttons = document.querySelectorAll('.lang-btn');

  function applyLang(lang) {
    if (lang !== 'en' && lang !== 'th') lang = 'en';
    body.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-en]').forEach(function (el) {
      const key = 'data-' + lang;
      const val = el.getAttribute(key);
      if (val == null) return;

      // For <title> and <meta name="description">, set their respective properties.
      if (el.tagName === 'TITLE') {
        document.title = val;
        return;
      }
      if (el.tagName === 'META') {
        el.setAttribute('content', val);
        return;
      }

      // Preserve <br/> breaks encoded in data attributes
      if (val.indexOf('<br') !== -1) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    buttons.forEach(function (btn) {
      const active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
  }

  // Initial language: stored > browser > fallback
  let initial = 'en';
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'th') {
      initial = saved;
    } else if ((navigator.language || '').toLowerCase().startsWith('th')) {
      initial = 'th';
    }
  } catch (_) {}
  applyLang(initial);

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  // Smooth-scroll with a little offset for the sticky nav
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const id = a.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
})();
