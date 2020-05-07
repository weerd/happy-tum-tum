import Link from 'next/link';
import { useState } from 'react';
import classnames from 'classnames';

import Footer from '../components/Footer';
import Header from '../components/Header';
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
    <>
      <div className='bg-pink-400 h-2 w-full fixed top-0 left-0 z-10'></div>

      <Header>
        <p className='max-w-screen-sm mx-auto text-gray-300'>
          Search for food items below and find out whether they are considered
          low or high{' '}
          <Link href='about'>
            <a className='underline'>FODMAP foods</a>
          </Link>{' '}
          that could impact your digestion.
        </p>
      </Header>

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

      <Footer />
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
