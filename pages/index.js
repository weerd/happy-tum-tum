import Link from 'next/link';
import { useState } from 'react';

import Layout from '../components/Layout';
import foods from '../resources/data/foods';
import FoodItem from '../components/FoodItem/FoodItem';
import SearchForm from '../components/SearchForm/SearchForm';

export default function Index({ foods }) {
  const [searchInput, setSearchInput] = useState('');
  const [foodList, setFoodList] = useState(foods);

  const findMatches = (wordToMatch, itemList) => {
    // @TODO: remove symbols since it breaks the search
    return itemList.filter((item) => {
      const regex = new RegExp(wordToMatch, 'gi');

      return item.name.match(regex) || item.category.match(regex);
    });
  };

  const handleOnChange = (event) => {
    const matches = findMatches(event.target.value, foods);

    setSearchInput(event.target.value);

    setFoodList(matches);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Layout page='home'>
      <main>
        <SearchForm
          inputText={searchInput}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        />

        <div className='px-4 py-8'>
          {foodList ? (
            <ul className='max-w-screen-sm mx-auto'>
              {foodList.map((food, index) => (
                <li key={index} className='mb-4'>
                  <FoodItem food={food} />
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      foods,
    },
  };
}
