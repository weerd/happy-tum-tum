import { useEffect, useState } from 'react';

export function useDebounce(value, delay, setImmediately = false) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Conditional to ignore debouncing effect and set value immediately.
    if (!value && setImmediately) {
      return setDebouncedValue(value);
    }

    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // This cleanup function is called before the component utilizing this
    // useEffect hook is removed or re-rendered.
    // @see https://reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect
    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}
