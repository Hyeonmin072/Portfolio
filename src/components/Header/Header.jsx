import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

function Header({ theme, toggleTheme }) {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#projects', label: t('nav.projects') },
    { href: '#about', label: t('nav.about') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-navy-800/95 backdrop-blur border-b border-violet-500/25 px-4 sm:px-8 py-4 transition-colors duration-200">
      <div className="max-w-6xl mx-auto flex items-center gap-4">
        {/* 브랜드 */}
        <div className="flex-1 min-w-0">
          <h1 className="text-xl sm:text-2xl font-bold text-violet-500 leading-none">
            {t('header.title')}
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-white/67 mt-0.5 truncate">
            {t('header.subtitle')}
          </p>
        </div>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden sm:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-gray-700 dark:text-white/87 hover:text-violet-500 dark:hover:text-violet-500 text-sm font-medium transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <LanguageSwitcher />

        {/* 다크/라이트 토글 */}
        <button
          onClick={toggleTheme}
          aria-label="테마 전환"
          className="p-2 rounded-lg text-gray-600 dark:text-white/67 hover:bg-gray-100 dark:hover:bg-navy-700 transition-colors text-base"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="sm:hidden p-2 rounded-lg text-gray-600 dark:text-white/67 hover:bg-gray-100 dark:hover:bg-navy-700 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="메뉴 열기/닫기"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* 모바일 네비게이션 */}
      {menuOpen && (
        <nav
          className="sm:hidden mt-3 border-t border-violet-500/20 pt-3 pb-1 flex flex-col gap-3 px-1"
          aria-label="Mobile navigation"
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-gray-700 dark:text-white/87 hover:text-violet-500 dark:hover:text-violet-500 text-sm font-medium transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
