import React from 'react';

const CustomPagination = ({ swiper, slidesCount }) => {
  if (!swiper) return null;

  const totalPages = Math.ceil(slidesCount / 8); // 8 is the number of slides per view

  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => swiper.slideTo(index * 8)}
          className={`w-9 h-3 rounded-full ${
            swiper.activeIndex >= index * 8 && swiper.activeIndex < (index + 1) * 8
              ? 'bg-[#f03827]'
              : 'bg-gray-300'
          }`}
        ></button>
      ))}
    </div>
  );
};

export default CustomPagination;
