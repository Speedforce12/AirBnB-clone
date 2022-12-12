import Image from "next/image";
import React from "react";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className='flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
      <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
        <Image
          src={img}
          fill
          className='object-cover rounded-2xl'
        />
      </div>
      <div className='flex flex-col flex-grow pl-5'>
        <div className='flex justify-between'>
          <p>{location}</p>
          <AiOutlineHeart size={28} className='cursor-pointer' />
        </div>

        <h4 className='text-xl'>{title}</h4>
        <div className='border-b w-10 pt-2' />
        <p className='text-sm text-gray-500 pt-2 flex-grow'>{description}</p>
        <div className='flex justify-between items-end pt-5'>
          <p className='flex items-center'>
            {star}
            <AiOutlineStar className='text-red-400' size={20} />
          </p>
          <div>
            <p className='font-semibold pb-2 text-lg lg:text-2xl'>{price}</p>
            <p className='text-right font-extralight'>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
