import Image from "next/image";
import React from "react";

const SmallCard = ({ img, distance, location }) => {
  return (
    <div className='flex hover:scale-105 transition transform duration-200 ease-out hover:bg-gray-100 items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer'>
      {/* left */}

      <div className='relative h-16 w-16'>
        <Image src={img} alt='' fill className=' rounded-lg' />
      </div>

      {/* Right */}

      <div className=''>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
