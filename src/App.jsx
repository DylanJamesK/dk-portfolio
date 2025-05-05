import { useRef, useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import TopNav from './components/TopNav';
import IntroOverlay from './components/IntroOverlay';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const scrollRef = useRef(null);
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroFinish = () => {
    setIntroComplete(true);
  };

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {!introComplete && (
          <IntroOverlay key="intro" onFinish={handleIntroFinish} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {introComplete && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex bg-dynamic"
          >
            <Sidebar scrollRef={scrollRef} />
            <TopNav scrollRef={scrollRef} />
            <MainContent onScrollRef={scrollRef} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
