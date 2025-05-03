import { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun } from 'lucide-react';
import DKLogo from './Icons/DKLogo';

const sections = [
  { id: 'intro', label: 'Intro' },
  { id: 'work', label: 'Work' },
  { id: 'background', label: 'Background' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const themes = [
    { value: 'default', label: 'Default' },
    { value: 'blue-mode', label: 'Blue Mode' },
    { value: 'orange-mode', label: 'Orange Mode' },
    { value: 'green-mode', label: 'Green Mode' },
    { value: 'red-mode', label: 'Red Mode' },
    { value: 'dark-mode', label: 'Dark Mode' },
  ];

export default function TopNav({ scrollRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  const [currentTheme, setCurrentTheme] = useState('default');
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const themeMenuRef = useRef(null);

  useEffect(() => {
    document.documentElement.className = `theme-${currentTheme}`;
  }, [currentTheme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollRef.current;
      const offsets = sections.map(({ id }) => {
        const el = document.getElementById(id);
        return {
          id,
          offset: el && scrollContainer
            ? el.getBoundingClientRect().top - scrollContainer.getBoundingClientRect().top
            : Infinity,
        };
      });

      const visibleSection = offsets.find((section) => section.offset >= 0) || offsets[0];
      setActiveSection(visibleSection.id);
    };

    const el = scrollRef.current;
    if (el) el.addEventListener('scroll', handleScroll);
    return () => {
      if (el) el.removeEventListener('scroll', handleScroll);
    };
  }, [scrollRef]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        themeMenuRef.current &&
        !themeMenuRef.current.contains(e.target)
      ) {
        setIsThemeMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Top Navbar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 border-border-dynamic px-10 pt-8 flex items-center justify-between">
        <div className="text-2xl font-bold txt-dynamic"><DKLogo/></div>
        <div className="flex gap-4 items-center">
          {/* Theme toggle button with pill menu */}
          <div className="relative" ref={themeMenuRef}>
            <button
              onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
              className="w-10 h-10 rounded-full bg-dynamic border border-dynamic flex items-center justify-center hover:scale-105 transition-all duration-300"
              title="Change theme"
            >
              <Sun className="w-5 h-5 txt-dynamic" />
            </button>

            <div
              className={`theme-menu absolute pr-1 mt-2 bg-dynamic border border-dynamic rounded-full shadow-lg transition-all duration-300 ease-in-out overflow-hidden flex flex-col items-center z-50 ${
                isThemeMenuOpen ? 'h-60 py-1 px-1' : 'h-0 py-0 px-1'
              }`}
            >
              {themes.map((theme) => (
                <button
                  key={theme.value}
                  onClick={() => {
                    setCurrentTheme(theme.value);
                    setIsThemeMenuOpen(false);
                  }}
                  className={`w-8 h-8 rounded-full mb-2 last:mb-0 ${
                    currentTheme === theme.value
                      ? 'border-accent'
                      : 'border-border-dynamic'
                  } hover:scale-120 transition-transform`}
                  style={{
                    backgroundColor:
                    theme.value === 'default'
                      ? '#B3B9C4'
                      : theme.value === 'blue-mode'
                      ? '#85B8FF'
                      : theme.value === 'orange-mode'
                      ? '#FEA362'
                      : theme.value === 'green-mode'
                      ? '#4BCE97'
                      : theme.value === 'red-mode'
                      ? '#ac4b4b'
                      : theme.value === 'dark-mode'
                      ? '#738496'
                      : '#000',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Hamburger menu toggle */}
          <button
            onClick={toggleMenu}
            className="text-white w-10 h-10 flex items-center justify-center"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6 txt-dynamic" /> : <Menu className="w-6 h-6 txt-dynamic" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-dynamic z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="pt-58 px-10 space-y-6">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`block text-xl transition-all duration-100 ${
                activeSection === id
                  ? 'font-bold txt-dynamic'
                  : 'txt-link-dynamic hover:txt-link-dynamic'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
