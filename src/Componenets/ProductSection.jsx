import React from 'react'
import ProductCard from './ProductCard'
import {GiClothes} from 'react-icons/gi'


export default function ProductSection(props) {
  return (
    <>
    <div className="container my-5">
      <h2 className='text-center my-5'>Our {props.sectionTitle} <GiClothes size={50} color='red'/></h2>
        <div className="row gap-5">
          <ProductCard brandName="Bonanza" collectionName="Summer" categoryName="Female"/>
          <ProductCard brandName="Sana Safinaz" collectionName="Winter" categoryName="Male"/>
          <ProductCard brandName="MTJ" collectionName="Summer" categoryName="Male"/>
          <ProductCard brandName="J." collectionName="Summer" categoryName="Female"/>
         

        </div>
    </div>
    </>
  )
}
