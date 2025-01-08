import React from 'react'

const CategoryBar = () => {
  return (
      <div className='px-[7%] sm:px-[5%] border-b-[1px] border-grayy'>
        <div className="wrapper">
    <input type="radio" name="slider" id="menu-btn" />
    <input type="radio" name="slider" id="close-btn" />
    <ul className="nav-links">
      <label htmlFor="close-btn" className="btn close-btn"><svg className='w-[40px] h-[40px]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 8L8 16M8.00001 8L16 16" stroke="#41004C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg></label>
      <li><a href="#">All Categories</a></li>


      <li>
      <a href="#" className="desktop-item booksitem flex">Books <span className='flexCol ml-[0.3em]'><svg className='w-[0.8em]' viewBox="0 0 1024.00 1024.00" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(90)" stroke="#000000" strokeWidth="0.01024"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"></path></g></svg></span></a>
        <input type="checkbox" id="showMega"/>
        <label htmlFor="showMega" className="mobile-item flex">Books <span className=' flexCol ml-[0.3em]'><svg className='w-[0.8em]' viewBox="0 0 1024.00 1024.00" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(90)" stroke="#000000" strokeWidth="0.01024"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"></path></g></svg></span></label>
        <div className="mega-box">
          <div className=" md:grid md:grid-cols-4 lg:grid-cols-5 md:border-[1px] md:border-grayy md:px-[50px] py-[10px] md:py-[30px] md:text-center md:gap-x-[1.5em] text-nowrap bg-white">
                <li className='leading-[3em]'><a href="#">Computer Science</a></li>
                <li className='leading-[3em]'><a href="#">Accounting</a></li>
                <li className='leading-[3em]'><a href="#">Medical</a></li>
                <li className='leading-[3em]'><a href="#">Chemistry</a></li>
                <li className='leading-[3em]'><a href="#">Physics</a></li>
                <li className='leading-[3em]'><a href="#">Mathematics</a></li>
                <li className='leading-[3em]'><a href="#">Economics</a></li>
                <li className='leading-[3em]'><a href="#">Finance</a></li>
          </div>
        </div>
      </li>
      <li>
      <a href="#" className="desktop-item booksitem flex">Dorm essentials <span className='flexCol ml-[0.3em]'><svg className='w-[0.8em]' viewBox="0 0 1024.00 1024.00" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(90)" stroke="#000000" strokeWidth="0.01024"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"></path></g></svg></span></a>
        <input type="checkbox" id="showMega"/>
        <label htmlFor="showMega" className="mobile-item flex">Dorm essentials <span className=' flexCol ml-[0.3em]'><svg className='w-[0.8em]' viewBox="0 0 1024.00 1024.00" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(90)" stroke="#000000" strokeWidth="0.01024"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"></path></g></svg></span></label>
        <div className="mega-box">
          <div className=" md:grid md:grid-cols-4 md:border-[1px] md:border-grayy md:px-[50px] py-[10px] md:py-[30px] md:gap-[1.5em] text-nowrap bg-white">
            <ul className=''>
                <li className='text-[20px] font-medium leading-[2em]'>Electronics</li>
                <li className='leading-[2em]'><a href="#">Microwaves </a></li>
                <li className='leading-[2em]'><a href="#">Refrigerators</a></li>
                <li className='leading-[2em]'><a href="#">Lamps</a></li>

            </ul>
            <ul className=''>
                <li className='text-[20px]  font-medium leading-[2em]'>Decor</li>
                <li className='leading-[2em]'><a href="#">Shirts </a></li>
                <li className='leading-[2em]'><a href="#">Pants</a></li>
            </ul>
            <ul className=''>
                <li className='text-[20px]  font-medium leading-[2em]'>Men</li>
                <li className='leading-[2em]'><a href="#">Shirts </a></li>
                <li className='leading-[2em]'><a href="#">Pants</a></li>
            </ul>
            <ul className=''>
                <li className='text-[20px] font-medium leading-[2em]'>Men</li>
                <li className='leading-[2em]'><a href="#">Shirts </a></li>
                <li className='leading-[2em]'><a href="#">Pants</a></li>
            </ul>

          </div>
        </div>
      </li>
      <li>
      <a href="#" className="desktop-item booksitem flex">Clothing <span className='flexCol ml-[0.3em]'><svg className='w-[0.8em]' viewBox="0 0 1024.00 1024.00" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(90)" stroke="#000000" strokeWidth="0.01024"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"></path></g></svg></span></a>
        <input type="checkbox" id="showMega"/>
        <label htmlFor="showMega" className="mobile-item flex">Books <span className=' flexCol ml-[0.3em]'><svg className='w-[0.8em]' viewBox="0 0 1024.00 1024.00" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(90)" stroke="#000000" strokeWidth="0.01024"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"></path></g></svg></span></label>
        <div className="mega-box">
          <div className=" md:grid md:grid-cols-4 md:border-[1px] md:border-grayy md:px-[50px] py-[10px] md:py-[30px] md:gap-[1.5em] text-nowrap bg-white">
            <ul className=''>
                <li className='text-[20px]  font-medium leading-[2em]'>Men</li>
                <li className='leading-[2em]'><a href="#">Shirts </a></li>
                <li className='leading-[2em]'><a href="#">Pants</a></li>
            </ul>
            <ul className=''>
                <li className='text-[20px]  font-medium leading-[2em]'>Women</li>
                <li className='leading-[2em]'><a href="#">Shirts </a></li>
                <li className='leading-[2em]'><a href="#">Pants</a></li>
            </ul>
            <ul className=''>
                <li className='text-[20px]  font-medium leading-[2em]'>Men</li>
                <li className='leading-[2em]'><a href="#">Shirts </a></li>
                <li className='leading-[2em]'><a href="#">Pants</a></li>
            </ul>
            <ul className=''>
                <li className='text-[20px] font-medium leading-[2em]'>Men</li>
                <li className='leading-[2em]'><a href="#">Shirts </a></li>
                <li className='leading-[2em]'><a href="#">Pants</a></li>
            </ul>

          </div>
        </div>
      </li>

      <li><a href="#">Bikes</a></li>
    </ul>
    <label htmlFor="menu-btn" className="btn menu-btn"><svg className='w-[2em] h-[2em]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Hamburger_MD"> <path id="Vector" d="M5 17H19M5 12H19M5 7H19" stroke="#41004C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg></label>
    <form role="search" method="get" action="" className='md:hidden '>
  <div className="input-container">
    <input type="search" className="search-input text-[18px] block w-[40vw]" placeholder="Search" />
    <button type="submit" className="search-submit" name="submit"><svg className='h-[1.5em] w-[1.5em]'  fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 23.0563L17.7342 15.7906C19.2356 13.7973 19.9252 11.3087 19.6639 8.82687C19.4027 6.34504 18.21 4.05463 16.3264 2.41761C14.4428 0.780601 12.0085 -0.0812023 9.51444 0.00603065C7.02042 0.0932636 4.65227 1.12304 2.88766 2.88766C1.12304 4.65227 0.0932636 7.02042 0.00603065 9.51444C-0.0812023 12.0085 0.780601 14.4428 2.41761 16.3264C4.05463 18.21 6.34504 19.4027 8.82687 19.6639C11.3087 19.9252 13.7973 19.2356 15.7906 17.7342L23.0565 25L25 23.0563ZM9.94489 16.9697C8.55574 16.9697 7.19778 16.5578 6.04272 15.7861C4.88767 15.0143 3.9874 13.9174 3.45574 12.634C2.92409 11.3506 2.78492 9.93842 3.05585 8.57594C3.32678 7.21347 3.99563 5.96192 4.97783 4.97957C5.96003 3.99721 7.21147 3.32816 8.5739 3.05701C9.93634 2.78587 11.3486 2.92481 12.632 3.45626C13.9155 3.98771 15.0126 4.88781 15.7845 6.04274C16.5564 7.19767 16.9686 8.55556 16.9688 9.94471C16.9667 11.807 16.226 13.5925 14.9092 14.9094C13.5925 16.2264 11.8072 16.9673 9.94489 16.9697Z" fill="#41004C"/>
</svg></button>
  </div>
</form>
  </div>
</div>


  )
}

export default CategoryBar
