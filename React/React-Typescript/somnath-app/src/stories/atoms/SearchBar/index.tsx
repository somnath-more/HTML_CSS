import React, { ReactNode, useState } from 'react';

export interface SearchBarProps {
  placeholder: string;
  onSearch?: (value: string) => void;
  height?:string,
  width?:string,
  // icon:React.ReactNode |any,
   bordeRadius?:string,
   textalign?:string,
   onClick:any;
}

export const SearchBar: React.FC<SearchBarProps> = ({textalign="center",bordeRadius="5px",height='31px',width='344px' ,placeholder, onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    // console.log(searchValue);
    searchRows(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder={placeholder}  value={searchValue} onChange={handleSearchChange}
      style={{ height,width}} />
    </div>
  );
};
function searchRows(value: string) {
  console.log(value);

  //throw new Error('Function not implemented.');
}


