import { useEffect, useState } from 'react';

export const useDebounce = <T,>(value: T, time = 500): T | null => {
  const [text, setText] = useState<T | null>(null);

  useEffect(() => {
    const x = setTimeout(() => {
      setText(value);
    }, time);

    return () => {
      clearTimeout(x);
    };
  }, [time, value]);

  return text;
};
