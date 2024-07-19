import React, { useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SiBoosty } from "react-icons/si";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import 'swiper/css/bundle';
import CustomPagination from './CustomPagination';

const Services = () => {
  const [swiper, setSwiper] = useState(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const slides = Array.from({ length: 16 }, (_, index) => index + 1);

  useEffect(() => {
    if (swiper) {
      setShowPrev(swiper.activeIndex > 0);
      setShowNext(swiper.isEnd === false);

      swiper.on('slideChange', () => {
        setShowPrev(swiper.activeIndex > 0);
        setShowNext(!swiper.isEnd);
      });
    }
  }, [swiper]);

  return (
    <div className='max-w-[1240px] mx-auto '>
<div className='py-8  flex items-center mx-6 justify-center relative'>
      {showPrev && (
        <button
          onClick={() => swiper?.slidePrev()}
          className='mr-1 bg-white border rounded-full p-1'
        >
          <MdOutlineChevronLeft size={20} />
        </button>
      )}
      
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={8}
        slidesPerGroup={8}
        onSwiper={setSwiper}
        spaceBetween={50}
        // spaceBetween={spaceBetweenInPx}
      >
        {slides.map((slide) => (
            <SwiperSlide key={slide} >
              <div className='flex items-center justify-center aspect-square  rounded-3xl' style={{ backgroundColor: getRandomColor() }}>
                
                <div className='transition-transform duration-300 hover:scale-[120%]'>
                <SiBoosty size="2.5rem" color='white' />
                </div>
              </div>
              <p className='text-center mt-2'>Software</p>
            </SwiperSlide>
          ))}
      </Swiper>
      
      {showNext && (
        <button
          onClick={() => swiper?.slideNext()}
          className='ml-1 bg-white border rounded-full p-1'
        >
          <MdOutlineChevronRight size={20} />
        </button>
      )}
    </div>
<CustomPagination swiper={swiper} slidesCount={slides.length} />
    </div>
    
  );
};

export default Services;
