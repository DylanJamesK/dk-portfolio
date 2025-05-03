import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import projectData from '../projects/projectData';
import ProjectModal from './ProjectModal';

const categories = ['UI/UX', '3D', 'ID', 'XR', 'Play'];

export default function WorkGallery() {
  const [activeCategory, setActiveCategory] = useState('UI/UX');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projectData.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="w-full pt-35 pr-10 pl-10 md:pl-10 xl:pl-[25%] xl:pr-10">
      {/* Category Filter */}
      <div className="w-full inline-flex items-center justify-between bg-tir-dynamic rounded-full p-1 md:p-2 lg:p-3 mb-6 mx-auto mb-10 md:mb-15 lg:mb-20">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="relative z-10 w-full flex-1 px-4 py-2 md:py-3 lg:py-4 text-sm md:text-base font-medium text-center rounded-full transition-colors duration-200"
          >
            {cat === activeCategory && (
              <motion.div
                layoutId="pill"
                className="absolute inset-0 bg-sec-dynamic rounded-full z-0"
                transition={{ type: 'spring', stiffness: 500, damping: 50 }}
              />
            )}
            <span
              className={`relative z-10 ${
                cat === activeCategory
                  ? 'txt-tir-dynamic font-bold'
                  : 'txt-tir-dynamic hover:font-bold'
              }`}
            >
              {cat}
            </span>
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
            loading = "lazy"
              key={project.title}
              layoutId={`card-${project.title}`}
              className="relative block rounded-xl overflow-hidden cursor-pointer"
              initial={{ opacity: .1, scale: .9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: .6, ease: 'easeOut'}}
              onClick={() => setSelectedProject(project)}
            >
              {/* Media Container */}
              <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden">
                <img
                  loading="lazy"
                  src={project.thumbnail || project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover bg-white rounded-lg"
                />
              </div>

              {/* Title Below Card */}
              <div className="mt-3 text-center text-lg font-medium txt-sec-dynamic">
                {project.title}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
