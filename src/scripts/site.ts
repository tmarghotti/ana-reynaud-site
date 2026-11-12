// JavaScript mínimo: menu móvel, filtro da galeria e lightbox. Sem dependências.
const nav = document.querySelector<HTMLElement>('#nav');
const menuBtn = document.querySelector<HTMLButtonElement>('#mb');

function setMenu(open: boolean): void {
  if (!nav || !menuBtn) return;
  nav.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  menuBtn.textContent = open ? '✕' : '☰';
}
menuBtn?.addEventListener('click', () => setMenu(!nav?.classList.contains('open')));
nav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

const bar = document.querySelector<HTMLElement>('#bar');
const grid = document.querySelector<HTMLElement>('#g');
function filter(cat: string): void {
  bar?.querySelectorAll<HTMLButtonElement>('button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.f === cat)));
  grid?.querySelectorAll<HTMLElement>('figure').forEach((f) => { f.hidden = cat !== 'todos' && f.dataset.cat !== cat; });
}
bar?.addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest<HTMLButtonElement>('button');
  if (b?.dataset.f) filter(b.dataset.f);
});
// Clicar num serviço abre a galeria já filtrada (o filtro pode ser trocado manualmente).
document.querySelectorAll<HTMLAnchorElement>('a[data-f]').forEach((a) => a.addEventListener('click', () => filter(a.dataset.f ?? 'todos')));

const lb = document.querySelector<HTMLElement>('#lb');
const lbImg = lb?.querySelector<HTMLImageElement>('img');
let list: HTMLImageElement[] = [];
let idx = 0;
let lastFocus: HTMLElement | null = null;

const show = (): void => { if (lbImg && list[idx]) { lbImg.src = list[idx].src; lbImg.alt = list[idx].alt; } };
const step = (d: number): void => { idx = (idx + d + list.length) % list.length; show(); };
function openLb(container: HTMLElement, img: HTMLImageElement): void {
  list = [...container.querySelectorAll<HTMLImageElement>('figure:not([hidden]) img')];
  idx = Math.max(0, list.indexOf(img));
  lastFocus = img;
  show();
  lb?.classList.add('on');
  lb?.querySelector<HTMLButtonElement>('.x')?.focus();
}
function closeLb(): void { lb?.classList.remove('on'); lastFocus?.focus?.(); }

['g', 'cg'].forEach((id) => {
  const c = document.getElementById(id);
  c?.addEventListener('click', (e) => { const t = e.target; if (t instanceof HTMLImageElement) openLb(c, t); });
});
lb?.querySelector('.x')?.addEventListener('click', closeLb);
lb?.querySelector('.pv')?.addEventListener('click', () => step(-1));
lb?.querySelector('.nx')?.addEventListener('click', () => step(1));
lb?.addEventListener('click', (e) => { if (e.target === lb) closeLb(); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { setMenu(false); if (lb?.classList.contains('on')) closeLb(); }
  if (lb?.classList.contains('on')) {
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'Tab') { // mantém o foco dentro do lightbox
      const f = [...lb.querySelectorAll<HTMLButtonElement>('button')];
      const i = f.indexOf(document.activeElement as HTMLButtonElement);
      e.preventDefault();
      f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  }
});
// Deslizar é complementar; os botões continuam sendo o meio principal.
let sx = 0;
lb?.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive: true });
lb?.addEventListener('touchend', (e) => { const d = e.changedTouches[0].clientX - sx; if (Math.abs(d) > 50) step(d < 0 ? 1 : -1); });
export {};
