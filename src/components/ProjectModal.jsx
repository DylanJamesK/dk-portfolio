import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
<motion.div
  className="relative w-full h-full bg-dynamic overflow-y-auto px-15 pb-5 pt-10 md:pt-4 xl:pt-0 xl:px-[20%] rounded-none"
  initial={{ x: '100%' }}
  animate={{ x: 0 }}
  exit={{ x: '100%' }}
  transition={{ type: 'tween', duration: .7}}
  onClick={(e) => e.stopPropagation()}
>

            
            <h2 className="text-[clamp(2rem,5vw,8rem)] font-semibold mb-6 txt-dynamic">
              {project.title}
            </h2>

            <button
              onClick={onClose}
              className="absolute top-6 right-10 text-[clamp(3rem,4vw,6rem)] txt-link-dynamic transition z-10 pl-1"
            >
              &times;
            </button>

            <div className="space-y-6">
            {project.content.map((block, index) => {
  const layout = block.layout || '';
  const isTwoColumn = layout === 'two-column-left' || layout === 'two-column-right';

  // Two-column container wrapper
  if (isTwoColumn && index > 0 && project.content[index - 1].layout === 'two-column-left') {
    return null; // Avoid duplicate container rendering
  }

  if (isTwoColumn) {
    return (
      <div key={`twocol-${index}`} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="txt-dynamic">
            {project.content[index].layout === 'two-column-left' && project.content[index].value}
            {project.content[index].layout === 'two-column-right' && project.content[index - 1].value}
          </p>
        </div>
        <div>
          <p className="txt-dynamic">
            {project.content[index].layout === 'two-column-left' && project.content[index + 1]?.value}
            {project.content[index].layout === 'two-column-right' && ''}
          </p>
        </div>
      </div>
    );
  }

  // Single content block rendering
  switch (block.type) {
    case 'text':
      return (
        <p
          key={index}
          className={`text-md txt-dynamic ${
            layout === 'centered' ? 'text-center max-w-3xl mx-auto' : ''
          }`}
        >
          {block.value}
        </p>
      );

      case 'bold-text':
        return (
          <p
            key={index}
            className={`text-3xl txt-dynamic font-bold text-[clamp(1rem,4vw,4rem)] ${
              layout === 'centered' ? 'text-center max-w-3xl mx-auto' : ''
            }`}
          >
            {block.value}
          </p>
        );

    case 'image':
      return (
        <img
          loading="lazy"
          key={index}
          src={block.value}
          alt={`${project.title} image`}
          className={`rounded-lg txt-dynamic ${
            layout === 'full-bleed' ? 'w-full' : 'w-full md:w-3/4 mx-auto'
          }`}
        />
      );

      case 'gallery':
        const cols = layout === 'three-column' ? 'md:grid-cols-3' : 'md:grid-cols-2';
        return (
          <div key={index} className={`grid grid-cols-1 ${cols} gap-4`}>
            {block.value.map((media, mediaIndex) => (
              <figure key={mediaIndex}>
                {media.type === 'video' ? (
                  <video
                    src={media.src}
                    controls
                    muted
                    loop
                    playsInline
                    className="w-full txt-dynamic rounded-lg object-cover"
                  />
                ) : (
                  <img
                    loading="lazy"
                    src={media.src}
                    alt={media.caption || `Gallery image ${mediaIndex + 1}`}
                    className="w-full txt-dynamic rounded-lg object-cover"
                  />
                )}
                {media.caption && (
                  <figcaption className="text-xs txt-dynamic text-muted mt-1 text-center">
                    {media.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        );

        case 'video':
  return (
    <video
      key={index}
      src={block.value}
      controls
      muted
      loop
      playsInline
      className={`w-full txt-dynamic rounded-lg object-cover ${
        layout === 'full-bleed' ? 'w-full' : 'w-full md:w-3/4 mx-auto'
      }`}
    />
  );

      case 'four-column':
        return (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 gap-4 text-left leading-tight mb-10 txt-dynamic"
          >
            {block.value.map((item, i) => (
              <div key={i}>
                <p className="font-bold mb-1">{item.title}</p>
                {Array.isArray(item.details) ? (
                  item.details.map((line, j) => {
                    if (typeof line === 'object' && line.url) {
                      return (
                        <a
                          key={j}
                          href={line.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-default cursor-default txt-link-dynamic"
                        >
                          {line.text}
                        </a>
                      );
                    }
                    return <p key={j} className="text-default">{line}</p>;
                  })
                ) : (
                  <p className="text-default">{item.details}</p>
                )}
              </div>
            ))}
          </div>
        );

    case 'sketchfab':
        return (
            <div
            key={index}
            className={`aspect-video w-full ${
                layout === 'full-bleed' ? '' : 'md:w-3/4 mx-auto'
            }`}
            >
            <iframe
                title={block.title || 'Sketchfab Model'}
                frameBorder="0"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                mozAllowFullScreen="true"
                webkitAllowFullScreen="true"
                allowFullScreen
                src={block.value}
                className="w-full h-full rounded-lg"
            ></iframe>
            </div>
        );
      
    
    case 'custom-columns':
        if (block.layout === '25-75') {
          return (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
            <div className="md:col-span-1 txt-dynamic font-bold">{block.value[0]}</div>
            <div className="md:col-span-3 txt-dynamic">{block.value[1]}</div>
            </div>
          );
        }
        return null;    

    case 'hr':
    return (
        <hr
        key={index}
        className="w-full border-dynamic mt-8"
        />
    );      

    default:
      return null;
  }
})}

            </div>
            <div className="mt-10 flex items-center space-x-2 cursor-default txt-link-dynamic" onClick={onClose}>
                <span className="text-2xl">&larr;</span>
                <span className="underline underline-offset-4">Back to Work</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
