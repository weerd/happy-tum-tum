import Link from 'next/link';
import classnames from 'classnames';

import PropTypes from 'prop-types';

const Header = ({ page }) => (
  <>
    <header className='bg-gray-600 pb-2 pt-6 px-4'>
      <div className='flex justify-center mb-4'>
        <Link href='/'>
          <a className='flex items-center hover:pointer'>
            <div className=''>
              <img
                alt='happy tum tum logo'
                className='mx-auto'
                src='/happy_tum_tum.svg'
                style={{ width: 80 }}
              />
            </div>

            <div className='ml-4'>
              <h2 className='text-gray-500 uppercase'>FODMAP Food Reference</h2>

              <h1 className='font-bold text-3xl md:text-4xl text-gray-300'>
                Happy Tum-Tum
              </h1>
            </div>
          </a>
        </Link>
      </div>

      {page === 'home' ? (
        <p className='max-w-screen-sm mx-auto text-gray-300'>
          Search for food items below and find out whether they are considered
          low or high{' '}
          <Link href='about'>
            <a className='underline'>FODMAP foods</a>
          </Link>{' '}
          that could impact your digestion.
        </p>
      ) : null}
    </header>
  </>
);

Header.propTypes = {
  page: PropTypes.string,
};

Header.defaultProps = {
  page: null,
};

export default Header;
