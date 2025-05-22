import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const FadedContainer = ({ children, triggerStart = 'top 85%' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const childrenElements = containerRef.current.children;

      gsap.fromTo(
        childrenElements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: triggerStart,
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert(); // Clean up khi unmount
  }, [triggerStart]);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
};

export default FadedContainer;
