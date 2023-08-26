import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import "react-multi-carousel/lib/styles.css";
import toast  from 'react-hot-toast';


const VideoBar = () => {

  


  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


  
  return (
    <div className="relative h-[56.25vw] flex justify-center items-center">
      <div className="max-w-[90vw] mx-auto relative">
        <img className='rounded-lg border-o' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/274208439/original/702e9ba1c42093fcf5885e354ed2ca90643510b8/awesome-nft-banners-and-crypto-banners.jpg" alt="Monkey"></img>
        <p className="absolute top-0 left-0 ml-4 mt-4 text-white text-xl font-bold">
          <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We sell Nft ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We sell Image',
        1000,
        'We sell Collection',
        1000,
        'We sell Gaming',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '20px', display: 'inline-block' }}
      repeat={Infinity}
    />
          <div  className="flex flex-row mt-5 text-[15px]">
        <button  className="bg-white bg-opacity-50 p-2 rounded-md">Try ite mybe?</button>
        </div>
        </p>
        
      </div>
    </div>
  );
}

export default VideoBar;
