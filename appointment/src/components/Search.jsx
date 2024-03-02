import { BiSearch, BiCaretDown , BiCheck} from "react-icons/bi";
const DropDown =() => (
<div className=" orgin-top-right absolute">
    <div>
        <div 
        role="menuitem"
        className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between  cursor-pointer">
            Pet name <BiCheck />
        </div>
        <div
         role="menuitem"
         className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer">
            Owner name <BiCheck />
        </div>
        <div
         role="menuitem"
         className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer">
           Date <BiCheck />
        </div>
        <div
         role="menuitem"
         className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer">
           Acending <BiCheck />
        </div>
        <div
         role="menuitem"
         className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer">
           Decending <BiCheck />
        </div>
    </div>
</div>
);


const Search = () => {
    return (
        <div className="py-5">
        <div className="mt-1 relative rounded-md Shadow-sm">
            <div className="absolute insert-y-0 left-0 pl-3 flex item-center">
          <BiSearch />
          <label htmlFor="query" className="sr-only" />
        </div>
        <input 
           type="text"
           name="query"
           id="query"
           value=""
           placeholder="Search"
           className=" pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" 
           />
        <div className="absolute insert-y-0 right-0 flex items-center">           
        </div>
        <button
         type="button"
         id="options-menu"
         className=" absolute top-0 right-0 px-4 py-2 bg-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-offset-2 flex items-center  ">
            sortby
            <BiCaretDown className="ml-2"/>
            </button>
            <DropDown  />
        </div>
        </div>
    );
};

export default Search;