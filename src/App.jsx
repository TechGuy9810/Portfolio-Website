import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import React from 'react';
import Layout from './Layout/Layout';
import Home from './components/Home';
import { gsap } from "gsap";
import { useRef, useEffect } from 'react';
const Project = React.lazy(() => import('./components/Project'));
const About = React.lazy(() => import('./components/About'));

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className='App cursor-fancy'>
      
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <div
      ref={cursorRef}
      className="w-8 h-8 bg-white rounded-full fixed top-0 left-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-difference lg:flex md:hidden hidden"
    />
    </div>
  );
}

export default App;
