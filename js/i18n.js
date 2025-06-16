const defaultLang = localStorage.getItem('lang') || 'da';

function loadLanguage(lang) {
  fetch(`./lang/${lang}.json`)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then(translations => {
      // swap all the text
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) el.innerHTML = translations[key];
      });

      // update the <html> tag
      document.documentElement.lang = lang;
      document.documentElement.dataset.lang = lang; 
      localStorage.setItem('lang', lang);

      // highlight the active flag
      document.querySelectorAll('#language-switcher button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
      });
    })
    .catch(err => {
      console.error(`Translation load error for ${lang}:`, err);
    });
}

// wire up clicks
document.querySelectorAll('#language-switcher button').forEach(button => {
  button.addEventListener('click', () => {
    loadLanguage(button.dataset.lang);
  });
});

// initial load
document.addEventListener('DOMContentLoaded', () => {
  loadLanguage(defaultLang);
});
