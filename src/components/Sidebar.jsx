import { useState, useEffect, useRef } from 'react';
import { Sun } from 'lucide-react';
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
  

export default function Sidebar({ scrollRef }) {
  const [activeSection, setActiveSection] = useState('intro');
  const [currentTheme, setCurrentTheme] = useState('default');
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const themeMenuRef = useRef(null);

  // Apply selected theme to document root
  useEffect(() => {
    document.documentElement.className = `theme-${currentTheme}`;
  }, [currentTheme]);

  // Highlight active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollRef.current;

      const offsets = sections.map(({ id }) => {
        const el = document.getElementById(id);
        return {
          id,
          offset:
            el && scrollContainer
              ? el.getBoundingClientRect().top -
                scrollContainer.getBoundingClientRect().top
              : Infinity,
        };
      });

      const visibleSection =
        offsets.find((section) => section.offset >= 0) || offsets[0];

      setActiveSection(visibleSection.id);
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [scrollRef]);

  // Forward scroll to main content when scrolling over sidebar
  useEffect(() => {
    const sidebar = document.getElementById('sidebar');

    const forwardScroll = (e) => {
      if (scrollRef?.current) {
        scrollRef.current.scrollBy({
          top: e.deltaY,
          behavior: 'smooth',
        });
      }
    };

    if (sidebar) {
      sidebar.addEventListener('wheel', forwardScroll);
    }

    return () => {
      if (sidebar) {
        sidebar.removeEventListener('wheel', forwardScroll);
      }
    };
  }, [scrollRef]);

  // Close theme menu when clicking outside
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

  return (
    <aside
      id="sidebar"
      className="lg:flex flex-col hidden lg:block w-48 pl-10 fixed h-full bg-dynamic"
    >
      <div className="pt-9 txt-dynamic font-bold"><DKLogo/></div>

      <nav className="space-y-0 pt-40">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`block transition-all duration-100 px-0 py-1 rounded-md ${
              activeSection === id
                ? 'text-md font-bold txt-dynamic'
                : 'text-md txt-link-dynamic hover:txt-link-dynamic'
            }`}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Theme Toggle */}
      <div className="relative pb-10 mt-auto flex justify-start" ref={themeMenuRef}>
        <div className="relative">
          <button
            onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
            className="w-10 h-10 rounded-full bg-dynamic border-1 border-dynamic flex items-center justify-center hover:scale-105 transition-all duration-300"
            title="Change theme"
          >
            <Sun className="w-5 h-5 txt-dynamic" />
          </button>

          {/* Circular Theme Menu */}
          <div
            className={`theme-menu absolute left-1/2 -translate-x-1/2 bottom-12 bg-dynamic border-1 border-dynamic rounded-full shadow-lg transition-all duration-300 ease-in-out overflow-hidden flex flex-col items-center z-20 ${
              isThemeMenuOpen ? 'h-60 py-1 px-1' : 'h-0 py-0'
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
      </div>
    </aside>
  );
}
