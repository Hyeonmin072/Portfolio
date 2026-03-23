import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Menu, X } from 'lucide-react';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

function Header({ theme, toggleTheme }) {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#projects', label: t('nav.projects') },
    { href: '#about', label: t('nav.about') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const name = i18n.language === 'ko' ? '김현민' : '金炫敃';

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-space-950/85 backdrop-blur-xl border-b border-slate-200/40 dark:border-white/5 shadow-sm shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center gap-4">
        {/* 브랜드 */}
        <a href="#" className="flex-1 font-bold text-lg gradient-text select-none">
          {name}
        </a>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden sm:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <LanguageSwitcher />

          {/* 다크/라이트 토글 */}
          <button
            onClick={toggleTheme}
            aria-label="테마 전환"
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-colors"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="sm:hidden p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="메뉴"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* 모바일 네비게이션 */}
      {menuOpen && (
        <div className="sm:hidden bg-white/90 dark:bg-space-950/90 backdrop-blur-xl border-t border-slate-200/40 dark:border-white/5">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
