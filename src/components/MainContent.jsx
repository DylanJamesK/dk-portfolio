import { useRef, useEffect } from 'react';
import AudienceSwitcher from './AudienceSwitcher';
import WorkGallery from './WorkGallery';
import Background from './Background';
import About from './About';
import Contact from './Contact';

export default function MainContent({ onScrollRef }) {
  return (
    <main
      ref={onScrollRef}
      className="flex-1 ml-0 lg:ml-48 overflow-y-auto h-screen scroll-smooth"
    >
      <div className="space-y-32 px-0 py-6">
        <section id="intro" className="w-full min-h-screen scroll-mt-24">
          <AudienceSwitcher />
        </section>
        <section id="work" className="w-full min-h-screen scroll-mt-24">
          <WorkGallery/>
        </section>
        <section id="background" className="w-full min-h-screen scroll-mt-24">
          <Background/>
        </section>
        <section id="about" className="w-full scroll-mt-24">
          <About/>
        </section>
        <section id="contact" className="w-full scroll-mt-24">
          <Contact/>
        </section>
      </div>
    </main>
  );
}
