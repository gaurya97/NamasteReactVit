import React from 'react'
import './StyleSheets/ButtonTags.css'
import { useState } from "react";
const ButtonTag = ({FilterDataFunction,color1,color2,setcolor1,setcolor2}) => {
  return (
    <div>
      <div className='res-tag'>
        <button   className='tag-btn' style={{color:color1}} onClick={(e)=>{
           setcolor1('blueviolet')
           setcolor2('#b3b3b3')
          FilterDataFunction(e.target.innerText);
        }}>All Restaurents</button>
        <button  className='tag-btn' style={{color:color2}} onClick={(e)=>{
           console.log(e.target.innerText);
           setcolor2('blueviolet')
           setcolor1('#b3b3b3')
           FilterDataFunction(e.target.innerText);
        }}>Top Rated Restaurents</button>
      </div>
    </div>
  )
}

export default ButtonTag
