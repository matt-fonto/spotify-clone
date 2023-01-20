import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <div className="min-h-[80px] flex items-center mt-8">
      <form
        autoComplete="off"
        className="p-2 text-gray-400 focus-within:text-gray-600"
        onSubmit={handleSubmit}
      >
        <label htmlFor="search-field" className="sr-only">
          Search All Songs
        </label>
        <div className="bg-transparent flex flex-row justify-start items-center gap-x-2 ml-4 duration-500 mt-2">
          <FiSearch />
          <input
            className="bg-transparent border outline-none border-gray-600 placeholder-gray-500 text-base text-gray-400 rounded p-2"
            name="search-field"
            autoComplete="off"
            id="search-field"
            placeholder="Search"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
