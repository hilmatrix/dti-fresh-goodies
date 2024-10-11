"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface FilterContextType {
    searchKeyword: string | undefined;
    setSearchKeyword: (category: string | undefined) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

const useFilterContext = () => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error("Context usage out of provider");
    }
    return context;
};

export const FilterContextProvider : React.FC<{children : ReactNode}> = ({children}) => {
    const [searchKeyword, setSearchKeyword] = useState<string | undefined>();

    const updateSearchKeyword = (searchKeyword : string | undefined) => {
        setSearchKeyword(searchKeyword);
    }

    return (
        <FilterContext.Provider
          value={{ searchKeyword, setSearchKeyword: updateSearchKeyword }}
        >
          {children}
        </FilterContext.Provider>
      ); 
}

export default useFilterContext;