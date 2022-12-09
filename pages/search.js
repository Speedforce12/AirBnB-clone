import React from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";

function Search() {
  const router = useRouter();

  const { location, startDate, endDate, guests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>
            300+ Stays from -{range}- for {guests} guests
          </p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>
            Stays in {location}
          </h1>

          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='search-filter'>Cancellation Flexibility</p>
            <p className='search-filter'>Type of Place</p>
            <p className='search-filter'>Price</p>
            <p className='search-filter'>Rooms & Beds</p>
            <p className='search-filter'>More filters</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Search;
