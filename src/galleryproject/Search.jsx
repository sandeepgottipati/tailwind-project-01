import { HiSearch } from "react-icons/hi";

const Search = () => {
  return (
    <div className="flex flex-col justify-between  space-y-5 md:flex-row md:space-y-0 md:space-x-4">
      <div className="flex justify-between border-b">
        <input
          placeholder="search"
          type="text"
          className="ml-6 border-none text-sm placeholder:font-thin focus:outline-none md:text-l"
        />
        <button>
          <HiSearch className="w-8 text-gray-300 duration-200 hover:scale-125 hover:text-blue-200" />
        </button>
      </div>
      <button className="px-14 py-3 text-lg bg-black rounded-md text-white text-center font-light duration-200 hover:bg-white hover:text-black ">
        Upload
      </button>
    </div>
  );
};
export default Search;
