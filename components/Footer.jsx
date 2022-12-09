import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 gap-y-10  md:grid-cols-4 px-32 py-14 bg-gray-100 text-gray-600">
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
          </div>
          
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>COMMUNITY</h5>
        <p>Accessibility</p>
        <p>Disaster relief</p>
        <p>Combating Discrimination</p>
          </div>
          
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>HOSTING</h5>
        <p>Airbnb your home</p>
        <p>AirCover for Hosts</p>
        <p>How to hose responsibly</p>
        <p>visit our community</p>
        <p>Explore hosting resources</p>
          </div>
          
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SUPPORT</h5>
        <p>AirCover</p>
        <p>Help Center</p>
        <p>Cancellation options</p>
        <p>Report a neighborhood concern</p>
        <p>Supporting people with disabilities</p>
      </div>
    </footer>
  );
};

export default Footer;
