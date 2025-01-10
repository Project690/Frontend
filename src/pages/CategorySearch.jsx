import React from 'react';
import { useParams } from 'react-router-dom';
import ItemsContainer from '../components/ItemsContainer';
import db from '../components/db.json';
import Header from '../components/Header';
import CategoryBar from '../components/CategoryBar';

const CategorySearch = () => {
  const { '*': categoryPath } = useParams(); // Extract the full category path

  // Mapping of searchKeywords to display names
  const categoryDisplayNames = {
    "Books": "Books",
    "Books/CS": "Computer Science Books",
    "Books/Mathematics": "Mathematics Books",
    "Books/Accounting": "Accounting Books",
    "Books/Medical": "Medical Books",
    "Books/Chemistry": "Chemistry Books" ,
    "Books/Physics": "Physics Books",
    "Books/Economics": "Economics Books",
    "Books/Finance": "Finance Books",
    "Dorms": "Dorm Essentials",
    "Dorms/Electronics": "Dorm Electronics",
 "Dorms/Electronics/Microwave": "Microwaves",
 "Dorms/Electronics/Microwave": "Refrigerators",
    "Dorms/Decor": "Dorm Decor",
    "Clothing": "Clothing",
    "Clothing/Men": "Men's Clothing",
    "Clothing/Men/Shirt": "Men's Shirts",
    "Clothing/Women": "Women's Clothing",
    "Clothing/Women/Shoes": "Women's Shoes",
    "Bikes": "Bikes",
    "Bikes/Men": "Men's Bikes",
    "Bikes/Women": "Bikes for Females",
    "Bikes/Unisex": "Unisex Bikes",
    "Electronics": "Electronics",
    "Electronics/Phone": "Phones",
    "Electronics/Accessories": "Accessories",
    "Electronics/Accessories/Cables": "Cables",
  };

  // Filter items based on the searchKeywords
  const filteredItems = db.filter((item) => {
    const keywords = item.searchKeywords.split(', '); // Split searchKeywords into an array
    return keywords.some((keyword) => {
      // Check if the category path matches any part of the keyword path
      const keywordParts = keyword.split('/');
      const categoryParts = categoryPath.split('/');
      return categoryParts.every((part, index) => keywordParts[index] === part);
    });
  });
 // Get the display name for the category
 const getDisplayName = (path) => {
  // Try to find the closest match in categoryDisplayNames
  const parts = path.split('/');
  for (let i = parts.length; i > 0; i--) {
    const partialPath = parts.slice(0, i).join('/');
    if (categoryDisplayNames[partialPath]) {
      return categoryDisplayNames[partialPath];
    }
  }
  // If no match is found, return the last part of the path
  return parts[parts.length - 1];
};

  // Get the display name for the category
  const displayName = getDisplayName(categoryPath);

  return (
    <div>
      <Header />
      <CategoryBar />
      <h2 className="px-[5vw] md:px-[10vw] text-[24px] sm:text-[26px] md:text-[30px] lg:text-[36px] font-medium pt-[70px]">
        Showing Results For: {displayName}
      </h2>
      {filteredItems.length > 0 ? (
        <ItemsContainer items={filteredItems} /> // Pass filtered items to ItemsContainer
      ) : (
        <p className="px-[5vw] md:px-[10vw]">No items found for this category.</p> // Message for no items found
      )}
    </div>
  );
};

export default CategorySearch;