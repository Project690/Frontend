import React from 'react';
import Header from '../components/Header';
import CategoryBar from '../components/CategoryBar';
import Banner from '../components/Banner';
import ItemsContainer from '../components/ItemsContainer';
import db from '../components/db.json';
const Homepage = () => {
  return (
    <div>
      <Header />
      <CategoryBar />
      <Banner />
      <div className='w-[90vw] md:w-[80vw] mx-auto'>
        <ItemsContainer items={db} gridCols="4"/> 
      </div>
    
    </div>
  )
}

export default Homepage
