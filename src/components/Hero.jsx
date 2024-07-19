import React from 'react';
import Banner from '../assets/banner.png'
const Hero = () => {
  return (
    <div className='flex'>
        <div className='w-full flex mt-28 px-6 bg-white'>
          <div className='w-full h-[480px] bg-cover bg-center rounded-3xl flex items-center pl-24' style={{ backgroundImage : `url(${Banner})` }}>
            <div>
            <h1 className='font-medium text-5xl text-white'>Phase 4 of <br />Season of Discovery</h1>
            <button className='p-4 bg-[#f03827] font-medium rounded-md mt-4 text-white'>Buy WOW Clasic Era Gold</button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Hero;
