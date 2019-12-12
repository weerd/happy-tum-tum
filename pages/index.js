import React from 'react';
import classnames from 'classnames';

import foods from '../foods';
import UpArrowIcon from '../components/UpArrowIcon';
import DownArrowIcon from '../components/DownArrowIcon';
import Header from '../components/Header';

import '../styles/tailwind.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: '',
      foodList: foods,
    };
  }

  findMatches = (wordToMatch, itemList) => {
    return itemList.filter(item => {
      const regex = new RegExp(wordToMatch, 'gi');

      return item.name.match(regex) || item.category.match(regex);
    });
  };

  handleOnChange = event => {
    const matches = this.findMatches(event.target.value, foods);

    this.setState({
      searchInput: event.target.value,
      foodList: matches,
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <>
        <div className='bg-blue-400 h-2 w-full fixed top-0 left-0 z-10'></div>
        <Header />
        {/* lg:max-w-3xl lg:mx-auto */}
        <main role='main' className=''>
          <form
            className='sticky top-0 bg-gray-700 rounded-br-full shadow-md'
            onSubmit={this.handleOnSubmit}
          >
            {/* py-8 pl-6 pr-12 lg:pl-16 lg:pr-16  */}
            <div className='pb-8 pl-3 md:pl-6 pr-16 pt-12 lg:max-w-3xl lg:mx-auto'>
              <input
                className='px-6 py-3 w-full rounded-full outline-none'
                type='search'
                placeholder='Search foods'
                autoFocus
                onChange={this.handleOnChange}
                value={this.state.searchInput}
              />
            </div>
          </form>

          {/* p-8 */}
          <div className='lg:max-w-3xl lg:mx-auto px-3 md:px-6 py-8'>
            {this.state.foodList ? (
              <ul>
                {this.state.foodList.map((food, index) => (
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
                        <DownArrowIcon className='h-6 w-6' />
                      ) : (
                        <UpArrowIcon className='h-6 w-6' />
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
}

export default App;
