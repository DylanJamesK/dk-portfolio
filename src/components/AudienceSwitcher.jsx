// components/AudienceSwitcher.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const audienceData = {
  everyone: "Hello, I'm a designer who creates elegant and functional solutions to improve people's lives.",
  recruiters: "I’m a product designer with 6 years of experience across UI/UX and various facets of product creation. I’m actively looking for a new role.",
  directors: "I'm passionate about tackling ambiguous design challenges with a user-centered approach and I'm eager to learn and grow within a supportive team.",
  designers: "From big ideas to final details, we'll achieve a quality we're proud to share.",
  managers: "I expertly collaborate across the entire product lifecycle, ensuring seamless communication for everyone involved.",
  engineers: "I'm {tech_savvy} and consider myself an (Artist && Engineer) so I can /navigate technical 'discussions' with you; I built (this.site) from scratch.",
};

const tabs = [
  { id: 'everyone', label: 'For everyone' },
  { id: 'recruiters', label: 'Recruiters' },
  { id: 'directors', label: 'Design Directors' },
  { id: 'designers', label: 'Product Designers' },
  { id: 'managers', label: 'Product Managers' },
  { id: 'engineers', label: 'Engineers' },
];

export default function AudienceSwitcher() {
  const [selected, setSelected] = useState('everyone');

  return (
    <div className="bg-dynamic flex flex-col items-start space-y-6 pt-52 pr-10 pl-10 md:pl-10 xl:pl-[25%] xl:pr-10">
        {/* Tab Selector */}
        <div className="flex overflow-x-auto no-scrollbar whitespace-nowrap space-x-6 text-md">
        {tabs.map(({ id, label }) => (
            <button
            key={id}
            onClick={() => setSelected(id)}
            className={`transition-colors duration-200 shrink-0 ${
                selected === id
                ? 'txt-dynamic underline-offset-4 font-bold'
                : 'txt-link-dynamic hover:txt-link-dynamic'
            }`}
            >
            {label}
            </button>
        ))}
        </div>

      {/* Animated Message */}
      <div className="min-h-[4rem] max-w-8xl w-full">
        <AnimatePresence mode="wait">
          <motion.h1
            key={selected}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1 }}
            className="text-[clamp(2rem,5.5vw,8rem)] leading-[1] font-semibold tracking-tight txt-dynamic"
          >
            {audienceData[selected]}
          </motion.h1>
        </AnimatePresence>
      </div>
    </div>
  );
}
