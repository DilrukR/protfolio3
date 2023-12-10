import { useRef, useEffect } from "react";
import gsap from "gsap";
import BgImage from "../../assets/wallpaperflare.com_wallpaper.jpg";

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
    <div className='h-screen w-screen bg-sky-600  bg-opacity-75 backdrop-blur-xl  flex  justify-center flex-col'>
      <div className='absolute top-4 right-4'>
        <div className='h-10 overflow-hidden'>
          <h1
            className='cursor-pointer translate-y-14 font-fontNav text-white text-2xl text-item '
            onClick={closeNav}
          >
            Close
          </h1>
        </div>
      </div>
      {menuItems.map((menuItem, index) => (
        <div
          className=' pl-24 my-5 h-20  flex items-center  overflow-hidden'
          key={index}
        >
          <a href={menuItem.link}>
            <h1 className='text-7xl text-white translate-y-20 hover:- text-item font-fontNav'>
              {menuItem.name}
            </h1>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Header;
