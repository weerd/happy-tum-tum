import React from 'react';
import classnames from 'classnames';

import foods from '../foods';
import Header from '../components/Header';

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
        <Header />

        <main role='main' className='p-8'>
          <form className='mb-4' onSubmit={this.handleOnSubmit}>
            <input
              className='border border-gray-500 p-2 w-full'
              type='search'
              placeholder='Search foods'
              autoFocus
              onChange={this.handleOnChange}
              value={this.state.searchInput}
            />
          </form>

          {this.state.foodList ? (
            <ul>
              {this.state.foodList.map((food, index) => (
                <li
                  key={index}
                  className='flex bg-white mb-2 rounded overflow-hidden'
                >
                  <p className='p-2 w-3/4'>
                    {food.name}
                    {food.servingSize ? (
                      <span className='ml-3 text-gray-600'>
                        ({food.servingSize})
                      </span>
                    ) : null}
                  </p>
                  <span
                    className={classnames(
                      'inline-block w-1/4 text-center',
                      food.rating === 'low' ? 'bg-green-400' : 'bg-red-400',
                    )}
                  >
                    {food.rating.toUpperCase()}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
        </main>
      </>
    );
  }
}

export default App;
