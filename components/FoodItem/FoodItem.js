import classnames from 'classnames';

import ArrowUpIcon from '../Icons/ArrowUpIcon';
import ArrowDownIcon from '../Icons/ArrowDownIcon';

const FoodItem = ({ food }) => (
  <div className='flex bg-white rounded-full overflow-hidden'>
    <p className='py-3 px-6 w-4/6 text-gray-800'>
      {food.name}

      {food.servingSize ? (
        <span className='ml-3 text-gray-600'>({food.servingSize})</span>
      ) : null}
    </p>

    <span
      className={classnames(
        'inline-block flex justify-end pr-6 w-2/6 items-center',
        {
          'text-green-500': food.rating === 'low',
          'text-red-500': food.rating === 'high',
        },
      )}
    >
      {food.rating === 'low' ? (
        <ArrowDownIcon className='h-6 w-6' />
      ) : (
        <ArrowUpIcon className='h-6 w-6' />
      )}

      <span className='ml-2 font-bold w-12'>{food.rating.toUpperCase()}</span>
    </span>
  </div>
);

export default FoodItem;
