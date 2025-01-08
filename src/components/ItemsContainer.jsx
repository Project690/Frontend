import React from 'react'
import ItemCard from './ItemCard'
import db from './db.json'
const ItemsContainer = () => {


  return (
    <div className='w-[90%] md:w-4/5 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2vw] md:gap-[1vw] py-[80px]'>
      {db.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ItemsContainer