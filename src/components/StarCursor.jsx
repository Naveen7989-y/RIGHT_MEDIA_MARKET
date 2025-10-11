import { useEffect, useRef, useState } from 'react';

const StarCursor = () => {
  const cursorRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const mediaQuery = window.matchMedia('(pointer: fine)');

    const updateEnabled = () => {
      setEnabled(mediaQuery.matches);
    };

    updateEnabled();
    mediaQuery.addEventListener('change', updateEnabled);

    return () => {
      mediaQuery.removeEventListener('change', updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const cursorEl = cursorRef.current;
    if (!cursorEl) {
      return undefined;
    }

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      requestAnimationFrame(() => {
        if (!cursorRef.current) return;
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
        cursorRef.current.style.opacity = '1';
      });
    };

    const handleDown = () => {
      cursorRef.current?.classList.add('scale-90');
    };

    const handleUp = () => {
      cursorRef.current?.classList.remove('scale-90');
    };

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerdown', handleDown);
    window.addEventListener('pointerup', handleUp);
    window.addEventListener('pointerleave', handleUp);
    window.addEventListener('pointercancel', handleUp);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerdown', handleDown);
      window.removeEventListener('pointerup', handleUp);
      window.removeEventListener('pointerleave', handleUp);
      window.removeEventListener('pointercancel', handleUp);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 transform transition-transform duration-150 ease-out"
      style={{ opacity: 0, left: '-100px', top: '-100px' }}
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-heading-500/25 animate-ping" />
        <span className="relative flex h-6 w-6 items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-heading-500 drop-shadow-[0_0_10px_rgba(47,142,122,0.6)] animate-[spin_3s_linear_infinite]"
            aria-hidden="true"
          >
            <path d="M12 2l2.6 5.93 6.4.55-4.85 4.2 1.5 6.32L12 16.9l-5.65 2.9 1.5-6.32-4.85-4.2 6.4-.55L12 2z" />
          </svg>
        </span>
      </span>
    </div>
  );
};

export default StarCursor;