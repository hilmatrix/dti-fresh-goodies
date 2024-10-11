"use client"

import useFilterContext from "@/context/FilterContext";
import FilterIcon from "@/public/icons/filter.svg";
import SearchIcon from "@/public/icons/search.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

const FilterAndSearch: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const {searchKeyword, setSearchKeyword} = useFilterContext();
  const [inputValue, setInputValue] = useState('');

  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchKeyword(inputValue);
      console.log(searchKeyword);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
    
  }, [searchKeyword, setSearchKeyword, inputValue]);

  const handleChange = (e: { target: { value: any; }; }) => {
    setInputValue(e.target.value);
  };


  return (
    <div className="flex gap-7">
      <Image src={FilterIcon} alt="Filter" className="w-6 h-6"/>
      <Image src={SearchIcon} alt="Search"  onClick={() => setShowSearch(!showSearch)} className="w-6 h-6"/>
      <input onChange={handleChange} type="text" className={`${showSearch ? "w-40 border-2" : "w-0 border-0"} border-[#000000]`}></input>
    </div>
  )
}

export default FilterAndSearch;