import SearchIcon from '../Icons/SearchIcon';

const SearchForm = ({ inputText, onChange, onSubmit }) => (
  <form
    className='sticky top-0 bg-gray-600 rounded-br-full p-4 shadow-md'
    onSubmit={onSubmit}
  >
    <div className='border-b-4 border-solid border-gray-500 flex items-center max-w-screen-sm mx-auto mr-16 md:mr-auto'>
      <SearchIcon className='text-gray-500 h-6 w-6' />

      <input
        className='bg-transparent outline-none placeholder-gray-500 px-4 py-3 text-gray-300 w-full'
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
