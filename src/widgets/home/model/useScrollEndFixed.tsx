import { useState, useEffect } from 'react';

export const useScrollEndFixed = () => {
  const [menubarFixed, setMenubarFixed] = useState(true);

  useEffect(() => {
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
