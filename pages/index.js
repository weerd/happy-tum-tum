import { useState } from 'react';
import classnames from 'classnames';

import Header from '../components/Header';
import foods from '../resources/data/foods';
import FoodItem from '../components/FoodItem/FoodItem';
import SearchForm from '../components/SearchForm/SearchForm';

export default function Index({ foods }) {
  const [searchInput, setSearchInput] = useState('');
  const [foodList, setFoodList] = useState(foods);

  const findMatches = (wordToMatch, itemList) => {
    // @TODO: remove symbols since it breaks the search
    return itemList.filter(item => {
      const regex = new RegExp(wordToMatch, 'gi');

      return item.name.match(regex) || item.category.match(regex);
    });
  };

  const handleOnChange = event => {
    const matches = findMatches(event.target.value, foods);

    setSearchInput(event.target.value);

    setFoodList(matches);
  };

  const handleOnSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <div className='bg-pink-400 h-2 w-full fixed top-0 left-0 z-10'></div>

      <Header />

      <main role='main'>
        <SearchForm
          inputText={searchInput}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        />

        <div className='lg:max-w-3xl lg:mx-auto px-3 md:px-6 py-8'>
          {foodList ? (
            <ul>
              {foodList.map((food, index) => (
                <li key={index} className='mb-4'>
                  <FoodItem food={food} />
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      foods,
    },
  };
}
