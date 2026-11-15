// Single client script for the whole site (budget: < 3 KB minified).
const root = document.documentElement;
const $$ = <T extends Element>(s: string) => document.querySelectorAll<T>(s);

// Colour transitions only after first paint (theme itself is set inline in <head>).
requestAnimationFrame(() => root.classList.add('theme-ready'));

// ---- Theme toggle ----
const themeBtn = document.getElementById('theme-toggle');
const syncTheme = () => {
  const dark = root.dataset.theme === 'dark';
  themeBtn?.setAttribute('aria-pressed', String(dark));
  themeBtn?.setAttribute('aria-label', (dark ? themeBtn.dataset.light : themeBtn.dataset.dark) ?? '');
};
syncTheme();
themeBtn?.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  try {
    localStorage.setItem('theme', root.dataset.theme);
  } catch {
    /* storage unavailable */
  }
  syncTheme();
});

// ---- Language switch: map the active section hash to the other language ----
// data-hashmap="projekte:projects,ueber-mich:about,…"
$$<HTMLAnchorElement>('[data-lang-link]').forEach((a) =>
  a.addEventListener('click', () => {
    const map = new Map((a.dataset.hashmap ?? '').split(',').map((p) => p.split(':') as [string, string]));
    const hash = location.hash.slice(1);
    if (hash) a.href = a.href.split('#')[0] + '#' + (map.get(hash) ?? hash);
  }),
);

// ---- Mobile menu ----
const menuBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');
const setMenu = (open: boolean) => {
  if (!menuBtn || !menu) return;
  menu.hidden = !open;
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', (open ? menuBtn.dataset.close : menuBtn.dataset.open) ?? '');
};
menuBtn?.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
menu?.addEventListener('click', (e) => (e.target as Element).closest('a') && setMenu(false));
addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuBtn?.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuBtn.focus();
  }
});

// ---- Copy e-mail with accessible confirmation ----
$$<HTMLButtonElement>('[data-copy-email]').forEach((btn) => {
  const label = btn.querySelector('.copy-label');
  const status = btn.querySelector('[data-copy-status]');
  const original = label?.textContent ?? '';
  let timer = 0;
  btn.addEventListener('click', async () => {
    const email = btn.dataset.copyEmail ?? '';
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      location.href = 'mailto:' + email;
      return;
    }
    btn.dataset.copied = 'true';
    if (label) label.textContent = btn.dataset.labelCopied ?? original;
    if (status) status.textContent = btn.dataset.srCopied ?? '';
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      delete btn.dataset.copied;
      if (label) label.textContent = original;
      if (status) status.textContent = '';
    }, 2200);
  });
});

// ---- Reveal on scroll + active nav item ----
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      }),
    { rootMargin: '0px 0px -8% 0px' },
  );
  $$('.reveal').forEach((el) => io.observe(el));

  const links = $$<HTMLAnchorElement>('[data-spy]');
  const spy = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting)
          links.forEach((a) =>
            a.dataset.spy === e.target.id ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current'),
          );
      }),
    { rootMargin: '-45% 0px -50% 0px' },
  );
  links.forEach((a) => {
    const s = document.getElementById(a.dataset.spy ?? '');
    if (s) spy.observe(s);
  });
} else {
  $$('.reveal').forEach((el) => el.classList.add('is-visible'));
}
