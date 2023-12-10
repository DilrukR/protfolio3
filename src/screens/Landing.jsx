import React, { useRef, useEffect, useState } from "react";
import { Header, Hero, Works, Skills } from "../components";
import gsap from "gsap";
import CanvasSkill from "../components/Skills/CanvasSkill";

const Landing = () => {
  const menuRef = useRef();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const nav = menuRef.current;

    gsap.set(nav, { translateY: "-120%" });
  }, []);

  const openMenu = () => {
    const nav = menuRef.current;
    gsap.to(nav, { translateY: 0, duration: 0.5 });

    setTimeout(() => {
      setOpen(true);
    }, 700);
  };

  const closeNavigation = () => {
    const nav = menuRef.current;
    setOpen(false);
    setTimeout(() => {
      gsap.to(nav, { translateY: "-100%", duration: 0.5 });
    }, 700);
  };

  return (
    <div>
      <div className='w-screen absolute top-5 flex items-center justify-center -z-30'>
        <h1 className='text-3xl font-fontNav '>Scroll Down</h1>
      </div>
      <div className=' z-50 w-screen fixed '>
        <div
          className='w-screen flex  justify-end pr-24 mt-10 '
          onClick={openMenu}
        >
          <div className='w-12 flex flex-col justify-between gap-2 cursor-pointer  items-end'>
            <div className='h-2 w-10 bg-primery rounded-2xl'></div>
            <div className='h-2 w-7 bg-primery rounded-2xl'></div>
            <div className='h-2 w-5 bg-primery rounded-2xl'></div>
          </div>
        </div>
      </div>

      <div className='fixed z-50' ref={menuRef}>
        <Header openState={open} closeNav={closeNavigation} />
      </div>

      <div>
        <Hero />
      </div>

      <div className='relative'>
        <CanvasSkill />
      </div>

      <div>
        <Works />
      </div>

      <div className='h-screen w-screen bg-black'></div>
    </div>
  );
};

export default Landing;
