const Header = props => (
  <>
    <header className='bg-gray-700'>
      <div className='lg:max-w-3xl lg:mx-auto pt-8 px-3 md:px-16'>
        <h2 className='font-normal mb-2 text-center text-lg text-gray-600 uppercase'>
          FODMAP Food Reference
        </h2>

        <h1 className='font-bold mb-4 text-center text-4xl text-gray-300'>
          Happy Tum-Tum
        </h1>

        <p className='text-gray-100'>
          Search for food items below and find out whether they are considered
          low or high FODMAP foods that could impact your digestion.
        </p>
      </div>
    </header>
  </>
);

export default Header;
