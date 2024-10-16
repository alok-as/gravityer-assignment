import { useEffect, useRef } from 'react';

export const useDetectOutsideClick = (onClose: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onOutsideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };

    document.addEventListener('click', onOutsideClick);

    return () => {
      document.removeEventListener('click', onOutsideClick);
    };
  }, [onClose]);

  return { ref };
};
