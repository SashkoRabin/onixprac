/* eslint-disable no-unused-vars */
import { useRef, useEffect } from 'react';

export const useObserver = (ref, canLoad, clicked, isLoading, callback) => {
  const observer = useRef();
  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    let cb;
    cb = (entries, observer) => {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };
    if (clicked) {
      observer.current = new IntersectionObserver(cb);
      observer.current.observe(ref.current);
    }
  }, [isLoading, clicked]);
};
