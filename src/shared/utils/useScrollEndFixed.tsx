import { useState, useEffect } from 'react';

export const useScrollEndFixed = (isFixed = false) => {
  const [menubarFixed, setMenubarFixed] = useState(isFixed);

  useEffect(() => {
    const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
    if (isAtBottom) {
      setMenubarFixed(false);
    }
    const handleScroll = () => {
      setMenubarFixed(false);
    };

    window.addEventListener('scrollend', handleScroll);

    return () => {
      window.removeEventListener('scrollend', handleScroll);
    };
  }, []);

  return { menubarFixed };
};
