import Image from "next/image";
import { BiSearch, BiUserCircle, BiUser } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai"
import {HiOutlineGlobeAlt} from "react-icons/hi"

const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* left */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src='https://links.papareact.com/qd3'
          fill
          alt=''
          className='object-contain object-left'
        />
      </div>

      <div className='flex  items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input
          type='text'
          className='pl-5 bg-transparent outline-none flex-grow text-gray-600 text-sm placeholder-gray-400'
          placeholder='Start your search here'
        />
        <BiSearch
          size={32}
          className='hidden md:inline-flex md:mx-2 bg-red-400 text-white rounded-full p-2 cursor-pointer'
        />
      </div>

      {/* right */}
      <div className="space-x-4 flex items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
              <HiOutlineGlobeAlt size={24} className='cursor-pointer' />
              
              <div className="flex items-center border-2 shadow space-x-2 p-2 rounded-full">
                  <AiOutlineMenu size={24}/>
                  <BiUserCircle size={24}/>
              </div>
      </div>
    </header>
  );
};

export default Header;
