import { useState } from 'react';
import classnames from 'classnames';

import Header from '../components/Header';
import foods from '../resources/data/foods';
import ArrowUpIcon from '../components/ArrowUpIcon';
import ArrowDownIcon from '../components/ArrowDownIcon';

export default function Index({ foods }) {
  const [searchInput, setSearchInput] = useState('');
  const [foodList, setFoodList] = useState(foods);

  const findMatches = (wordToMatch, itemList) => {
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
      <div className='bg-blue-400 h-2 w-full fixed top-0 left-0 z-10'></div>

      <Header />

      <main role='main'>
        <form
          className='sticky top-0 bg-gray-700 rounded-br-full shadow-md'
          onSubmit={handleOnSubmit}
        >
          {/* py-8 pl-6 pr-12 lg:pl-16 lg:pr-16  */}
          <div className='pb-8 pl-3 md:pl-6 pr-16 pt-12 lg:max-w-3xl lg:mx-auto'>
            <input
              className='px-6 py-3 w-full rounded-full outline-none'
              type='search'
              placeholder='Search foods'
              autoFocus
              onChange={handleOnChange}
              value={searchInput}
            />
          </div>
        </form>

        <div className='lg:max-w-3xl lg:mx-auto px-3 md:px-6 py-8'>
          {foodList ? (
            <ul>
              {foodList.map((food, index) => (
                <li
                  key={index}
                  className='flex bg-white mb-4 rounded-full overflow-hidden'
                >
                  <p className='py-3 px-6 w-4/6 text-gray-800'>
                    {food.name}
                    {food.servingSize ? (
                      <span className='ml-3 text-gray-600'>
                        ({food.servingSize})
                      </span>
                    ) : null}
                  </p>

                  <span
                    className={classnames(
                      'inline-block flex justify-end pr-6 w-2/6 items-center',
                      {
                        'text-blue-400': food.rating === 'low',
                        'text-orange-400': food.rating === 'high',
                      },
                    )}
                  >
                    {food.rating === 'low' ? (
                      <ArrowDownIcon className='h-6 w-6' />
                    ) : (
                      <ArrowUpIcon className='h-6 w-6' />
                    )}

                    <span className='ml-2 font-bold w-12'>
                      {food.rating.toUpperCase()}
                    </span>
                  </span>
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
