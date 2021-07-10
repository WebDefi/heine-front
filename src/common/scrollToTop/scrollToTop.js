/* eslint-disable react-hooks/rules-of-hooks */
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const scrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);  

  return null;
};

export default scrollToTop;