import { useState } from 'react';

const categories = ['2D', '3D', 'ID', 'R&D'];

const Hero = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <section className="h-fit min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-10">
      <h1 className="text-3xl md:text-5xl font-bold animate-fadeInUp mb-4">
        Hi, I’m Dylan. I build thoughtful experiences.
      </h1>
      <p className="text-lg text-gray-600 mb-6">UX | Product Design | AR/VR | Code</p>

      {/* Category Switcher */}
      <div className="flex gap-4 flex-wrap justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-sm px-4 py-2 border rounded-full transition-all duration-300 ${
              selectedCategory === cat
                ? 'bg-black text-black'
                : 'border-gray-400 text-gray-600 hover:border-black hover:text-black'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
