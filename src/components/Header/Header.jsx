import { useRef, useEffect } from "react";
import gsap from "gsap";
import BgImage from "../../assets/wallpaperflare.com_wallpaper.jpg";
import Lottie from "lottie-react";
import LotData from "../../assets/Animation - 1700983082094.json";
import Vid from "../../assets/video (2160p).mp4";

const menuItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/",
  },
  {
    name: "My Works",
    link: "/",
  },
  {
    name: "Contact",
    link: "/",
  },
];

const Header = ({ openState, closeNav }) => {
  useEffect(() => {
    if (openState) {
      gsap.to(".text-item", { translateY: -1, duration: 0.3 });
    }
    if (!openState) {
      gsap.to(".text-item", { translateY: 70, duration: 0.4 }); //
    }
  }, [openState]);

  return (
    <div className='h-screen w-screen  backdrop-blur-md  flex  justify-center flex-col overflow-hidden'>
      <div className='absolute top-4 right-12'>
        <div className='h-10 overflow-hidden'>
          <h1
            className='cursor-pointer translate-y-14 font-fontNav text-yellowText-dark text-2xl text-item '
            onClick={closeNav}
          >
            Close
          </h1>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div>
          {menuItems.map((menuItem, index) => (
            <div
              className=' pl-24 my-5 h-20  flex items-center  overflow-hidden'
              key={index}
            >
              <a
                href={menuItem.link}
                className='hover:scale-105 transition-all duration-500 hover:text-red-600'
              >
                <h1 className='text-7xl text-yellowText-dark translate-y-20 hover:- text-item font-fontNav '>
                  {menuItem.name}
                </h1>
              </a>
            </div>
          ))}
        </div>
        <div className='pr-48'>
          <div className='w-96 h-96 '>
            <Lottie animationData={LotData} loop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
