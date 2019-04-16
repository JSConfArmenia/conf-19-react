import * as React from 'react';

import './Background.scss';

function useTranslateOnScroll(ref, ratio = 1) {
  const frame = React.useRef(0);

  const setStyle = (y) => {
    if (ref.current) {
      // we are bypassing React as the direct DOM changes are faster,
      // wheres React state updates cause FPS drop
      ref.current.style.transform = `translateY(${ratio * y}px)`; // eslint-disable-line no-param-reassign
    }
  };

  React.useEffect(() => {
    const handler = () => {
      cancelAnimationFrame(frame.current);

      frame.current = requestAnimationFrame(() => {
        setStyle(window.scrollY);
      });
    };

    window.addEventListener('scroll', handler, {
      capture: false,
      passive: true,
    });

    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener('scroll', handler);
    };
  }, []);
}

const Background = () => {
  const ref = React.useRef(null);
  useTranslateOnScroll(ref, 0.4);

  return (
    <div
      ref={ref}
      className="BackgroundIllustration"
    />
  );
};

export default Background;
