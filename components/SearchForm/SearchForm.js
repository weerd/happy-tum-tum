import SearchIcon from '../Icons/SearchIcon';

const SearchForm = ({ inputText, onChange, onSubmit }) => (
  <form
    className='sticky top-0 bg-gray-600 rounded-br-full p-4 shadow-md'
    onSubmit={onSubmit}
  >
    {/* py-8 pl-6 pr-12 lg:pl-16 lg:pr-16  */}
    {/* pl-3 md:pl-6 pr-16 pt-12 lg:max-w-3xl lg:mx-auto */}
    <div className='border-b-4 border-solid border-gray-500 flex items-center mr-16 md:mr-auto mx-auto md:w-3/4'>
      <SearchIcon className='text-gray-500 h-6 w-6' />

      {/* px-6 py-3 rounded-full */}
      <input
        className='bg-transparent outline-none px-4 py-3 text-gray-300 w-full'
        type='search'
        placeholder='Search foods'
        autoFocus
        onChange={onChange}
        value={inputText}
      />
    </div>
  </form>
);

export default SearchForm;
