/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';

import Results from '../Results/Results';
import { useDebounce } from '../../helpers/useDebounce';

export default function FoodSearchFilter({ data }) {
  const [foods, setFoods] = useState(data);

  const [searchInput, setSearchInput] = useState('');

  const [debouncedInput] = useDebounce(searchInput);

  useEffect(() => {
    // Only run the effect (filtering list) if the debouncedInput changes.
    // Will only re-render if the input actually changed (character added/removed).
    if (debouncedInput) {
      const matches = findMatches(searchInput, data);

      setFoods(matches);
    } else {
      setFoods(data);
    }
  }, [debouncedInput]);

  function findMatches(query, list) {
    const regex = new RegExp(query, 'gi');

    return list.filter((item) => {
      return item.name.match(regex) || item.category.match(regex);
    });
  }

  function handleOnChange(e) {
    const sanitizedValue = e.target.value.replace(/[^a-z\s]/gi, '');

    setSearchInput(sanitizedValue);
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          // Allow submitting the form so it works with the enter key.
          // Maybe drop cursor to first item in list when hitting enter key?

          console.log('Form submitted and searching for... ', searchInput);
        }}
      >
        <div>
          <input type="search" value={searchInput} onChange={handleOnChange} />
        </div>
      </form>

      <Results foods={foods} />
    </>
  );
}
