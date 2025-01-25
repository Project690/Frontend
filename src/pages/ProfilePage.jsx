import { useParams } from 'react-router-dom';
import members from '../components/members.json';
import Header from '../components/Header';
import CategoryBar from '../components/CategoryBar';
import ItemsContainer from '../components/ItemsContainer'; // Import ItemsContainer

import db from '../components/db.json'; // Import db

const calculateGraduationClassification = (graduationMonth) => {
  const currentYear = new Date().getFullYear();
  const graduationYear = parseInt(graduationMonth.split('/')[1]);
  const yearsSinceGraduation = currentYear - graduationYear;

  if (yearsSinceGraduation < 1) {
    return 'Freshman';
  } else if (yearsSinceGraduation < 2) {
    return 'Sophomore';
  } else if (yearsSinceGraduation < 3) {
    return 'Junior';
  } else if (yearsSinceGraduation < 4) {
    return 'Senior';
  } else {
    return 'Alumni';
  }
};


const ProfilePage = () => {
  const { id } = useParams();
  const seller = members.find((member) => member.id === parseInt(id));
  const ratingPercentage = (seller.rating / 5) * 100;
  const sellerAds = db.filter((item) => item.sellerId === parseInt(id));

  // Render the seller's profile information
  return (
    <div>
      <Header/>
      <CategoryBar/>
      <div className='x-container py-[50px]'>
        <div className='flex'>
          <div className='w-[30vw] sm:w-[20vw] '>
            <img src={seller.profilePic} alt={seller.name} className='rounded-full w-[70%]'/>
          </div>
          <div className='w-[70vw] sm:w-[80vw]'>
            <h1 className='font-bold text-[18px] sm:text-[24px] md:text-[30px] lg:text-[40px] xl:text-[48px]'>{seller.name}</h1>
            <p className='text-primary text-[16px] md:text-[18px] lg:text-[24px] font-semibold text-nowrap'>{calculateGraduationClassification(seller.graduationMonth)}</p>
            <p className='text-[16px] md:text-[18px] lg:text-[22px] text-grayy'>Member Since: {seller.memberSince}</p>
            <br/>
            <p className='text-[16px] md:text-[18px] lg:text-[22px] text-grayy'>Level:</p>
            <span class="score" style={{ '--_score': `${ratingPercentage}%` }}></span>



            </div>
        </div>
        <div className="ml-0 sm:ml-[18vw] md:ml-[16vw] mt-[50px]">
          <h2 className="font-medium text-[24px] sm:text-[26px] md:text-[30px] lg:text-[36px] text-center sm:text-left">
            Previous Ads
          </h2>
          {sellerAds.length > 0 ? (
            <ItemsContainer items={sellerAds} gridCols="3"/>
          ) : (
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-grayy">
              No previous ads found.
            </p>
          )}
        </div>

      </div>
      
    </div>
  );
};
export default ProfilePage
