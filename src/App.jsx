import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header/Header';
import ProjectGrid from './components/ProjectGrid/ProjectGrid';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { PROJECTS } from './data/projects';

function App() {
  const { i18n, t } = useTranslation();

  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return 'dark';
  });

  // 테마 클래스를 <html>에 적용
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // 언어 변경 시 <html lang> 속성 업데이트
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // 언어 변경 시 document.title 업데이트
  useEffect(() => {
    document.title = t('header.title');
  }, [i18n.language, t]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-navy-950 text-gray-900 dark:text-white/87 transition-colors duration-200">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1">
        <ProjectGrid projects={PROJECTS} />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
