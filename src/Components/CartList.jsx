import React, { useEffect } from 'react'
import { useState } from 'react';
import UseCartsData from '../CustomeHooks/UseCartsData'
import Carts,{PromotedCarts} from './Carts'
import ShimmerList from './ShimmerList';
import SearchBar from './SearchBar';
import ButtonTag from './ButtonTag';
const CartList = () => {

const [RestList,SetRestList] =useState([]);
const Restaurants = UseCartsData(SetRestList);
const PromotedCartsWithLable =PromotedCarts(Carts);
    // SetRestList(Restaurants);


const [color1,setcolor1] = useState('blueviolet')
const [color2,setcolor2] = useState('#b3b3b3')

const FilterData =(e)=>{
  if(e==='Top Rated Restaurents'){
    let FilterList = RestList.filter((e)=>(e.info.avgRating>4.4))
    SetRestList(FilterList);
  }
  else{
    SetRestList(Restaurants);
  }
}

const SearchRestaurant=(RestarantName)=>{
console.log(RestarantName);

    let SearchResult = RestList.filter((e)=>{
      return e.info.name.toLocaleLowerCase().includes(RestarantName.toLocaleLowerCase());
    })
   SearchResult.length>0 ? SetRestList(SearchResult):'';
    console.log(SearchResult);
    // console.log(RestList);
}

 







if(RestList?.length===0){
    return <ShimmerList/>
   
}
else{
    return (
        <>
        <SearchBar Searchfunction ={SearchRestaurant}  setcolor1 ={setcolor1} setcolor2={setcolor2} />
        <ButtonTag FilterDataFunction ={FilterData} color1={color1} color2 ={color2} setcolor1 ={setcolor1} setcolor2={setcolor2}/>
        <div className="card-parent">
            {
                RestList?.map((e)=>{
                    let card =e.info;
                    if(!card.veg){
                      return <PromotedCartsWithLable key={card.id} cart={card} />
                    }
                    return <Carts key={card.id} cart={card} />
                })
            }
        </div>
        </>
      )
}


}

export default CartList
