import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

interface FilterProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filterRegion: string;
  setFilterRegion: React.Dispatch<React.SetStateAction<string>>;
}

const Filter = ({ search, setSearch, setFilterRegion }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [region, setRegion] = useState("Filter by Region");

  return (
    <>
      <div className="custom-container w-full flex flex-col gap-8 justify-between md:flex-row ">
        <div className="flex items-center gap-4 bg-white dark:bg-[#2b3945] py-4 px-6 text-[clamp(1rem,1.1vw,1.1rem)] shadow-[0_2px_3px_1px_#00000020] rounded-[5px]">
          <FaSearch className="text-[#808080] dark:text-white" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a country..."
            className="w-full text-[#808080] dark:text-white"
          />
        </div>

        <div className="w-48 md:w-60 relative">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center justify-between bg-white dark:bg-[#2b3945] dark:text-white p-4 w-full rounded-lg shadow-[0_2px_3px_2px_#00000010] cursor-pointer"
          >
            {region}
            <BiChevronDown className={`transition-all duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`} />
          </button>
          <ul className={`absolute z-10 w-full flex flex-col gap-2 bg-white dark:bg-[#2b3945] dark:text-white px-2 py-4 rounded-[10px] shadow-[0_2px_3px_2px_#00000010] transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-2 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
            <li onClick={() => { setIsOpen(false); setRegion('Filter by Region'); setFilterRegion('') }} className="cursor-pointer py-[0.3rem] px-2 rounded-[5px] transition-all hover:bg-[#f1f1f1] dark:hover:bg-[#415363]">All</li>
            <li onClick={() => { setIsOpen(false); setRegion('Africa'); setFilterRegion('Africa') }} className="cursor-pointer py-[0.3rem] px-2 rounded-[5px] transition-all hover:bg-[#f1f1f1] dark:hover:bg-[#415363]">Africa</li>
            <li onClick={() => { setIsOpen(false); setRegion('Americas'); setFilterRegion('Americas') }} className="cursor-pointer py-[0.3rem] px-2 rounded-[5px] transition-all hover:bg-[#f1f1f1] dark:hover:bg-[#415363]">Americas</li>
            <li onClick={() => { setIsOpen(false); setRegion('Asia'); setFilterRegion('Asia') }} className="cursor-pointer py-[0.3rem] px-2 rounded-[5px] transition-all hover:bg-[#f1f1f1] dark:hover:bg-[#415363]">Asia</li>
            <li onClick={() => { setIsOpen(false); setRegion('Europe'); setFilterRegion('Europe') }} className="cursor-pointer py-[0.3rem] px-2 rounded-[5px] transition-all hover:bg-[#f1f1f1] dark:hover:bg-[#415363]">Europe</li>
            <li onClick={() => { setIsOpen(false); setRegion('Oceania'); setFilterRegion('Oceania') }} className="cursor-pointer py-[0.3rem] px-2 rounded-[5px] transition-all hover:bg-[#f1f1f1] dark:hover:bg-[#415363]">Oceania</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Filter;
