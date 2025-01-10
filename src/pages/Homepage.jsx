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
      
      <ItemsContainer items={db} /> 
    
    
    </div>
  )
}

export default Homepage
