import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../components/db.json';
import members from '../components/members.json';
import Header from '../components/Header.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ItemPage = () => {
  const { id } = useParams();
  const item = db.find(item => item.id === parseInt(id));
  const seller = members.find(member => member.id === item.sellerId);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const filteredKeys = Object.keys(item).filter(key => key !== 'id' && key !== 'pictures' && key !== 'sellerId');

  const handleImageClick = (image) => {
    setFullScreenImage(image);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };
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
  
  return (
    <div>
      <Header />
      <div className='PicturesCarousel'>
      <div className='w-[100%] md:w-[85%] mx-auto'>
        {/* Swiper Image Carousel */}
        {item.pictures && (
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {item.pictures.map((picture, index) => (
              <SwiperSlide key={index}>
                <div className='w-[80vw] md:w-[68vw] mx-auto aspect-video bg-[#000]'>
                  <img 
                    src={picture} 
                    alt={`Picture ${index + 1}`} 
                    className='h-full mx-auto cursor-pointer' 
                    onClick={() => handleImageClick(picture)}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Full-Screen Image Overlay */}
      {fullScreenImage && (
        <div className='fixed top-0 left-0 w-full h-full bg-[#000] bg-opacity-90 z-[1000] flex justify-center items-center p-[5%]'
          
          onClick={closeFullScreen}
        >
          <img 
            src={fullScreenImage} 
            alt="Full Screen" 
            className='w-full h-full object-scale-down cursor-pointer'
          />
        </div>
      )}
    </div>

      <div className='DescriptionBlocks py-[3vw]'>
        <div className='flex w-[80vw] md:w-[68vw] mx-auto justify-between gap-[2vw] md:gap-[1vw]'>
          <div className='infoBlock w-full  w-full'> 
            <h2 className='font-bold text-primary text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px]'>{item.title}</h2>
            <p className='text-[14px] sm:text-[16px] md:text-[20px]'>Posted On:  {item.date_posted}</p>
          </div>
          <div className='infoBlock '> 
            <div className='flexCol h-full'>
              <h2 className='flex text-nowrap font-bold text-[26px] sm:text-[30px] lg:text-[36px] xl:text-[44px]'>$ {item.price}</h2>
              {item.negotiable && (<p className='text-[14px] sm:text-[16px] lg:text-[18px] font-light text-grayy'>(Flexible)</p>)}
            </div>
          </div>
        </div>

        <div className='sm:flex w-[80vw] md:w-[68vw] mx-auto justify-between gap-[2vw] md:gap-[1vw] mt-[2vw] md:mt-[1vw]'>
          <div className='infoBlock w-full h-fit'> 
            <h2 className='font-bold text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px'>Description</h2>
            <div className=''>
              {filteredKeys.map(key => (
                <p key={key}><span className='font-semibold text-[14px] sm:text-[16px] sm:text-[20px] '>
                  {key.replace(/_/g, ' ').replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</span>: {item[key]}
                </p>
              ))}
            </div>
          </div>

          <div className='infoBlock mt-[2vw] sm:mt-0 h-fit'> 
            <h2 className='font-medium text-center'>About Seller</h2>
            <div className='flex gap-[1em] mt-[1em] justify-left'>
              <div className='w-[100px] aspect-square rounded-[50%] border-[1px] border-grayy bg-[#FAFAFA] overflow-hidden'> 
                <img src={seller.ProfilePic} className='w-full h-full'></ img>
              </div>
              <div className='flexCol'>
                <p className='font-bold text-[16px] md:text-[18px] text-primary text-nowrap'>{seller.name}</p>
                <p className='text-grayy text-[16px] md:text-[18px] font-light text-nowrap'>{calculateGraduationClassification(seller.graduationMonth)}</p>
              </div>
            </div>
            <p className='mt-[1em]  text-[16px] md:text-[18px] text-nowrap'><span className='font-semibold'>Member Since:</span> {seller.memberSince}</p>
            <p className=' text-[16px] md:text-[18px] text-nowrap'><span className='font-semibold'>Seller Rating:</span> {seller.rating}/5</p>
            <a className='mt-[1em] text-center solidBtn block'>Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;