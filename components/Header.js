import Link from 'next/link';

import PropTypes from 'prop-types';

const Header = ({ children }) => (
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

      {children}
    </header>
  </>
);

Header.propTypes = {
  children: PropTypes.object,
};

Header.defaultProps = {
  children: null,
};

export default Header;
