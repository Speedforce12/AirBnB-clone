import Image from "next/image";
import { BiSearch, BiUserCircle } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { useRouter } from "next/router";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 7));
  const [guests, setGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchTerm("");
  };
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchTerm,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guests,
      },
    });
    resetInput();
  };

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* left Logo*/}
      <div
        className='relative flex items-center h-10 cursor-pointer my-auto'
        onClick={() => router.push("/")}>
        <Image
          src='https://links.papareact.com/qd3'
          fill
          alt=''
          className='object-contain object-left'
        />
      </div>

      {/* middle search */}
      <div className='flex  items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input
          type='text'
          className='pl-5 bg-transparent outline-none flex-grow text-gray-600 text-sm placeholder-gray-400'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={
            router.query.location.toUpperCase() || "Start your search here"
          }
        />
        <BiSearch
          size={32}
          className='hidden md:inline-flex md:mx-2 bg-red-400 text-white rounded-full p-2 cursor-pointer'
        />
      </div>

      {/* right */}
      <div className='space-x-4 flex items-center justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <HiOutlineGlobeAlt size={24} className='cursor-pointer' />

        <div className='flex items-center border-2 shadow space-x-2 p-2 rounded-full'>
          <AiOutlineMenu size={24} />
          <BiUserCircle size={24} />
        </div>
      </div>

      {/* render the date picker base on if search term is present */}
      {searchTerm && (
        <div className='flex flex-col col-span-3 mx-auto shadow-lg'>
          <DateRangePicker
            months={2}
            direction='horizontal'
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5861"]}
            onChange={handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold'>
              Number of Guests
            </h2>
            <FaUsers size={20} />
            <input
              type='number'
              min={1}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className='w-12 pl-2 text-lg text-red-400 outline-none'
            />
          </div>
          <div className='flex mb-2'>
            <button onClick={resetInput} className='flex-grow text-gray-500'>
              Cancel
            </button>
            <button onClick={search} className='flex-grow text-red-500'>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
