import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MyLogo from './Icons/MyLogo';
import IntroLogo from './Icons/IntroLogo';

export default function IntroOverlay({ onFinish }) {
  const [startExit, setStartExit] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setStartExit(true); // Trigger logo/name exit
    }, 2000); // Pause before reverse animation

    const endTimer = setTimeout(() => {
      setIsVisible(false);
      onFinish(); // Notify parent it's finished
    }, 3000); // After exit completes, fade away

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(endTimer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
    {isVisible && (
      <div className="fixed inset-0 z-[100] bg-dynamic flex items-center justify-start px-12">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: startExit ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <motion.div
            initial={{ x: '-100vw', opacity: 0 }}
            animate={
              startExit
                ? { x: '-100vw', opacity: 0 }
                : { x: 0, opacity: 1 }
            }
            transition={{
              x: { type: 'spring', stiffness: 60, damping: 15 },
              opacity: { duration: 0.5 },
            }}
            className="text-left"
          >
            <div className="flex items-center gap-12 left-0">
              <div>
                <IntroLogo />
              </div>
              <h1 className="text-[clamp(2rem,5.5vw,8rem)] font-bold txt-dynamic w-200 left-0">
                Dylan J Kerr
              </h1>
            </div>
          </motion.div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);
}
