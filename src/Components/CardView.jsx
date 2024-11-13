import React from 'react'
import { useParams } from 'react-router-dom'
import UseCartsData from '../CustomeHooks/UseCartsData';
const CardView = () => {
    const param =useParams();
    
    const cardData =UseCartsData();
    // console.log(cardData);
    const ViewCard =cardData.filter((e)=>{
        return e.info.id ===param.id;
    })
    console.log(ViewCard);
  return (
    <div>
      <li>{ViewCard[0]?.info?.name}</li>
    </div>
  )
}

export default CardView
