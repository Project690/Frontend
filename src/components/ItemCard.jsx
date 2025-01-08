import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => {
  // Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const currentDate = new Date();
    const timeDifference = currentDate - date; // Difference in milliseconds
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days

    // If the date is within the last 7 days, show "x days ago"
    if (daysDifference <= 7) {
      return `${daysDifference} day${daysDifference !== 1 ? 's' : ''} ago`;
    }

    // Otherwise, format as "Month, date"
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className='w-full p-0 rounded-[5px] md:rounded-[8px] overflow-hidden itemCard'>
      <Link to={`/item/${item.id}`}>
        <img className='rounded-[0]' src={item.pictures[0]} alt={item.title} />
        <div className='ItemsDetails px-[12px] py-[10px] md:px-[15px] md:py-[12px] lg:px-[20px] lg:py-[12px]'>
          <p className='text-[#333333] text-[20px] md:text-[22px] xl:text-[28px] font-bold leading-[1.2em]'>${item.price}</p>
          <div className='flex justify-between items-center gap-[0.5em] text-[#B2B2B2]'>
            {/* Title with overflow handling */}
            <div className='flex-1 overflow-hidden'>
              <p className='text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px]  whitespace-nowrap overflow-hidden text-ellipsis'>
                {item.title}
              </p>
            </div>
            {/* Time with priority on the right */}
            <div className='flex-shrink-0'>
              <p className='text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px]  whitespace-nowrap'>
                 {formatDate(item.date_posted)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;