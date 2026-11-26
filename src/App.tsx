import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import {
  Language,
  PageId,
  RELIEF_URL,
  translations,
} from './i18n/translations';

const PAGE_HASHES: Record<PageId, string> = {
  about: '#about',
  services: '#services',
  contact: '#contact',
};

function parseHashToPage(hash: string): PageId {
  switch (hash.toLowerCase()) {
    case '#services':
      return 'services';
    case '#contact':
      return 'contact';
    case '#about':
    default:
      return 'about';
  }
}

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [page, setPage] = useState<PageId>(() =>
    parseHashToPage(typeof window !== 'undefined' ? window.location.hash : '')
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
  }, [lang, t.dir]);

  useEffect(() => {
    const onHashChange = () => {
      setPage(parseHashToPage(window.location.hash));
      setMobileMenuOpen(false);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigateTo = (target: PageId) => {
    setPage(target);
    setMobileMenuOpen(false);
    if (window.location.hash !== PAGE_HASHES[target]) {
      window.history.pushState(null, '', PAGE_HASHES[target]);
    }
  };

  const navPages: { id: PageId; label: string }[] = [
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'contact', label: t.nav.contact },
  ];

  const languageList: Language[] = ['en', 'ur', 'ar', 'zh'];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#18181B]">
      {/* Top Bar: Brand — Navigation Links — Language Switcher */}
      <header className="sticky top-0 z-30 border-b border-[#E4E0D8] bg-[#FAF9F6]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1160px] items-center justify-between gap-4 px-5 py-3.5 md:gap-8 md:px-8">
          <a
            href={PAGE_HASHES.about}
            onClick={(e) => {
              e.preventDefault();
              navigateTo('about');
            }}
            className="font-display text-lg font-semibold tracking-tight text-[#18181B] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F513B]"
          >
            {t.brand}
          </a>

          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#52525B]"
          >
            {navPages.map((item) => {
              const isActive = page === item.id;
              return (
                <a
                  key={item.id}
                  href={PAGE_HASHES[item.id]}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(item.id);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F513B] ${
                    isActive
                      ? 'text-[#18181B] underline decoration-[#1F513B] decoration-2 underline-offset-8'
                      : 'hover:text-[#18181B] hover:underline hover:decoration-[#D4CFC4] hover:underline-offset-8'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <a
              href={RELIEF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative py-1 whitespace-nowrap shrink-0 text-[#1F513B] transition-colors duration-150 hover:underline hover:decoration-[#1F513B] hover:underline-offset-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F513B]"
            >
              {t.nav.relief}
            </a>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <div
              role="group"
              aria-label="Language"
              className="flex items-center rounded-lg border border-[#E4E0D8] bg-[#F2EFE9] p-0.5"
            >
              {languageList.map((code) => {
                const active = lang === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    aria-pressed={active}
                    className={`min-h-[34px] px-2.5 py-1 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F513B] ${
                      active
                        ? 'bg-[#FFFFFF] text-[#18181B] shadow-xs'
                        : 'text-[#52525B] hover:text-[#18181B]'
                    }`}
                  >
                    {t.languageNames[code]}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.menu}
              className="lg:hidden inline-flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-[#E4E0D8] bg-[#FFFFFF] text-[#18181B] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F513B]"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav
            aria-label="Mobile"
            className="lg:hidden border-t border-[#E4E0D8] bg-[#FAF9F6] px-5 py-3"
          >
            <div className="flex flex-col gap-1">
              {navPages.map((item) => {
                const isActive = page === item.id;
                return (
                  <a
                    key={item.id}
                    href={PAGE_HASHES[item.id]}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(item.id);
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    className={`min-h-[44px] flex items-center rounded-lg px-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#F2EFE9] text-[#1F513B]'
                        : 'text-[#52525B] hover:bg-[#F2EFE9] hover:text-[#18181B]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                href={RELIEF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center rounded-lg px-3 text-sm font-medium text-[#1F513B] hover:bg-[#F2EFE9] transition-colors"
              >
                {t.nav.relief}
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Clean empty pages with zero body content */}
      <main className="flex-1">
        {page === 'about' && <section aria-label={t.nav.about} className="mx-auto max-w-[1160px] px-5 py-12 md:px-8" />}
        {page === 'services' && <section aria-label={t.nav.services} className="mx-auto max-w-[1160px] px-5 py-12 md:px-8" />}
        {page === 'contact' && <section aria-label={t.nav.contact} className="mx-auto max-w-[1160px] px-5 py-12 md:px-8" />}
      </main>
    </div>
  );
}
