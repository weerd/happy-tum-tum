const Header = (props) => (
  <>
    <header className='bg-gray-700'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-screen-md mx-auto px-4'>
        {/* lg:max-w-3xl lg:mx-auto pt-8 px-3 md:px-16 */}
        <div className='md:col-span-1'>
          <img
            alt='happy tum tum logo'
            className='mx-auto'
            src='/happy_tum_tum.svg'
            style={{ width: 110 }}
          />
        </div>

        <div className='md:col-span-2 text-center md:text-left'>
          <h2 className='font-normal mb-2 text-lg text-gray-600 uppercase'>
            FODMAP Food Reference
          </h2>

          <h1 className='font-bold text-4xl text-gray-300'>Happy Tum-Tum</h1>
        </div>

        <p className='md:col-span-3 text-gray-100'>
          Search for food items below and find out whether they are considered
          low or high FODMAP foods that could impact your digestion.
        </p>
      </div>
    </header>
  </>
);

export default Header;
