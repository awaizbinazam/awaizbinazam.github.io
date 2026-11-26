import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import {
  CONTACT_LINKS,
  ContactLink,
  DEGUOS_URL,
  Language,
  PageId,
  RELIEF_URL,
  translations,
} from './i18n/translations';

const PAGE_HASHES: Record<PageId, string> = {
  about: '#about',
  contact: '#contact',
};

function parseHashToPage(hash: string): PageId {
  switch (hash.toLowerCase()) {
    case '#contact':
      return 'contact';
    case '#about':
    default:
      return 'about';
  }
}

interface LinkGroupProps {
  title: string;
  links: ContactLink[];
}

function ContactLinkGroup({ title, links }: LinkGroupProps) {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-lg font-semibold text-[#18181B]">
        {title}
      </h2>
      <ul className="divide-y divide-[#E4E0D8] border-y border-[#E4E0D8]">
        {links.map((item) => (
          <li key={item.url}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[48px] items-center justify-between gap-4 py-3 text-sm transition-colors hover:text-[#1F513B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F513B]"
            >
              <span className="font-medium text-[#18181B] group-hover:text-[#1F513B] whitespace-nowrap shrink-0">
                {item.label}
              </span>
              <span className="flex items-center gap-2 min-w-0 text-xs text-[#71717A] group-hover:text-[#1F513B]">
                <span dir="ltr" className="truncate">
                  {item.url}
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
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

      <main className="flex-1">
        {page === 'about' && (
          <article
            aria-label={t.nav.about}
            className="mx-auto max-w-[780px] px-5 py-12 md:px-8 md:py-16 space-y-12"
          >
            {/* Intro */}
            <header className="space-y-5">
              <h1
                className={`font-display text-3xl font-semibold tracking-tight text-[#18181B] sm:text-4xl [text-wrap:balance] ${
                  lang === 'ur' ? 'leading-[1.9]' : 'leading-[1.15]'
                }`}
              >
                {t.aboutContent.title}
              </h1>
              <p className="text-base text-[#27272A] leading-relaxed">
                {t.aboutContent.intro}
              </p>
              <div className="space-y-2.5 pt-1">
                <p className="text-sm text-[#52525B] leading-relaxed">
                  {t.aboutContent.organizationsLead}
                </p>
                <ul className="space-y-1.5 text-sm font-medium text-[#18181B]">
                  {t.aboutContent.organizationsList.map((org) => (
                    <li key={org.name} className="flex items-center gap-2">
                      <span aria-hidden="true" className="text-[#1F513B]">
                        ·
                      </span>
                      {org.url ? (
                        <a
                          href={org.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#1F513B] underline decoration-[#1F513B]/40 underline-offset-4 hover:decoration-[#1F513B]"
                        >
                          <span>{org.name}</span>
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      ) : (
                        <span>{org.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </header>

            {/* Palestine Relief Network */}
            <section className="space-y-6 border-t border-[#E4E0D8] pt-10">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h2 className="font-display text-2xl font-semibold text-[#18181B]">
                  {t.aboutContent.reliefSection.title}
                </h2>
                <a
                  href={RELIEF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#1F513B] underline decoration-[#1F513B]/40 underline-offset-4 hover:decoration-[#1F513B] whitespace-nowrap shrink-0"
                >
                  <span>{t.aboutContent.reliefSection.linkLabel}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#3F3F46] leading-relaxed">
                {t.aboutContent.reliefSection.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="rounded-xl border border-[#E4E0D8] bg-[#F2EFE9]/60 p-6 sm:p-7 space-y-4">
                <h3 className="font-display text-lg font-semibold text-[#18181B]">
                  {t.aboutContent.reliefSection.policyTitle}
                </h3>
                <p className="text-sm font-medium text-[#27272A]">
                  {t.aboutContent.reliefSection.policyIntro}
                </p>
                <ul className="space-y-2.5 text-sm text-[#3F3F46] leading-relaxed">
                  {t.aboutContent.reliefSection.policyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span aria-hidden="true" className="text-[#1F513B] shrink-0">
                        —
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-3 pt-2 text-sm text-[#3F3F46] leading-relaxed">
                  {t.aboutContent.reliefSection.policyOutro.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
                <p className="pt-2 font-display text-base font-semibold text-[#1F513B]">
                  {t.aboutContent.reliefSection.closingStatement}
                </p>
              </div>
            </section>

            {/* DeguOS */}
            <section className="space-y-3 border-t border-[#E4E0D8] pt-10">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h2 className="font-display text-2xl font-semibold text-[#18181B]">
                  {t.aboutContent.deguSection.title}
                </h2>
                <a
                  href={DEGUOS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#1F513B] underline decoration-[#1F513B]/40 underline-offset-4 hover:decoration-[#1F513B] whitespace-nowrap shrink-0"
                >
                  <span>{t.aboutContent.deguSection.linkLabel}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
              <p className="text-sm sm:text-base text-[#3F3F46] leading-relaxed">
                {t.aboutContent.deguSection.description}
              </p>
            </section>

            {/* Closing */}
            <footer className="border-t border-[#E4E0D8] pt-8">
              <p className="text-sm sm:text-base text-[#27272A] leading-relaxed">
                {t.aboutContent.closing}
              </p>
            </footer>
          </article>
        )}

        {page === 'contact' && (
          <section
            aria-label={t.nav.contact}
            className="mx-auto max-w-[800px] px-5 py-12 md:px-8 md:py-16 space-y-10"
          >
            <ContactLinkGroup
              title={t.contactSections.personal}
              links={CONTACT_LINKS.personal}
            />
            <ContactLinkGroup
              title={t.contactSections.reliefPages}
              links={CONTACT_LINKS.reliefPages}
            />
            <ContactLinkGroup
              title={t.contactSections.reliefCommunity}
              links={CONTACT_LINKS.reliefCommunity}
            />
          </section>
        )}
      </main>
    </div>
  );
}
