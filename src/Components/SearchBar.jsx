import React from 'react'
import './StyleSheets/SearchBar.css'
import { useRef } from "react";
const SearchBar = ({Searchfunction,setcolor1,setcolor2}) => {
    let SearchValue =useRef();
  return (
    <div className="search-parent">
      <div className="search-bar">
        <input ref={SearchValue}  placeholder="Search for restaurants and foods" type="text" />
        <button onClick={(e)=>{
          console.log(SearchValue.current.value);
           Searchfunction(SearchValue.current.value);
          setcolor1('#b3b3b3');
          setcolor2('#b3b3b3');
        }}>Search</button>
      </div>
      </div>
  )
}

export default SearchBar
