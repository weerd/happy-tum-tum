const Header = props => (
  <>
    <header className='bg-gray-600 pb-2 pt-6 px-4'>
      {/* grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-screen-md mx-auto px-4 */}
      {/* lg:max-w-3xl lg:mx-auto pt-8 px-3 md:px-16 */}

      <div className='flex justify-center mb-4'>
        <div className='flex items-center'>
          {/* md:col-span-1 */}
          <div className=''>
            <img
              alt='happy tum tum logo'
              className='mx-auto'
              src='/happy_tum_tum.svg'
              style={{ width: 80 }}
            />
          </div>

          {/* md:col-span-2 text-center md:text-left */}
          <div className='ml-4'>
            {/* font-normal mb-2 text-lg text-gray-600 */}
            <h2 className='text-gray-500 uppercase'>FODMAP Food Reference</h2>

            {/* text-4xl */}
            <h1 className='font-bold text-3xl md:text-4xl text-gray-300'>
              Happy Tum-Tum
            </h1>
          </div>
        </div>
      </div>

      <p className='mx-auto text-gray-300 md:w-3/4'>
        Search for food items below and find out whether they are considered low
        or high FODMAP foods that could impact your digestion.
      </p>
    </header>
  </>
);

export default Header;
