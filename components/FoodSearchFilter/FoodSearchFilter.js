import { useEffect, useState } from 'react';

import Results from '../Results/Results';

export default function FoodSearchFilter({ data }) {
  const [foods, setFoods] = useState(data);

  const [searchInput, setSearchInput] = useState('');

  function findMatches(query, list) {
    const regex = new RegExp(query, 'gi');

    return list.filter((item) => {
      return item.name.match(regex) || item.category.match(regex);
    });
  }

  function handleOnChange(e) {
    setSearchInput(e.target.value);

    const sanitizedValue = e.target.value.replace(/[^a-z\s]/gi, '');

    const matches = findMatches(sanitizedValue, data);

    setFoods(matches);
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          // Allow submitting the form so it works with the enter key.
          // Maybe drop cursor to first item in list when hitting enter key?

          console.log(searchInput);
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
