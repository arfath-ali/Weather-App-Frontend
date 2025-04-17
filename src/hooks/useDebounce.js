import { useState, useEffect } from 'react';

const useDebounce = (input, delay) => {
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(input), delay);

    return () => clearTimeout(timer);
  }, [input]);

  return debouncedValue;
};

export default useDebounce;
