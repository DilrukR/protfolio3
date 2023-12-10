import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";

const works = [
  {
    name: "component",
    image:
      "https://images.unsplash.com/photo-1701893852514-e079530f6bb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    width: 24,
    background: "bg-primery",
    colSpan: "col-span-2",
  },
  {
    name: "component",
    image:
      "https://images.unsplash.com/photo-1682686581218-82326951f4ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
    width: 24,
    background: "bg-secondory",
    colSpan: "col-span-1",
  },
  {
    name: "component",
    image:
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29kaW5nfGVufDB8fDB8fHww",
    width: 24,
    background: "bg-yellowText-light",
    colSpan: "col-span-1",
  },
  {
    name: "component",
    image:
      "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    width: 24,
    background: "bg-yellowText-light",
    colSpan: "col-span-1",
  },
  {
    name: "component",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    width: 24,
    background: "bg-primery",
    colSpan: "col-span-2",
  },
  {
    name: "component",
    image:
      "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    width: 24,
    background: "bg-secondory",
    colSpan: "col-span-1",
  },
  {
    name: "component",
    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    width: 24,
    background: "bg-primery",
    colSpan: "col-span-2",
  },
  {
    name: "component",
    image:
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29kaW5nfGVufDB8fDB8fHww",
    width: 24,
    background: "bg-secondory",
    colSpan: "col-span-1",
  },
  {
    name: "component",
    image:
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29kaW5nfGVufDB8fDB8fHww",
    width: 24,
    background: "bg-yellowText-light",
    colSpan: "col-span-1",
  },
];

const height = window.innerHeight;

const Works = () => {
  const [mouseState, setMouseState] = useState(false);

  const containerRef = useRef();

  useLayoutEffect(() => {
    gsap.to(".container", {
      xPercent: 100,
    });
  }, [mouseState]);

  const onEnter = (e) => {
    setMouseState(true);

    const container = e.currentTarget.querySelector(".container");

    gsap.to(container, {
      xPercent: 0,
      duration: 0.5,
    });
  };

  const onLeave = (e) => {
    const container = e.currentTarget.querySelector(".container");

    gsap.to(container, {
      xPercent: 100,
      duration: 0.5,
    });
  };

  return (
    <div className='grid grid-cols-4 h-screen'>
      {works.map((item, index) => (
        <div
          style={{ backgroundImage: "url(" + item.image + ") " }}
          key={index}
          className={`${item.colSpan} h-full relative overflow-hidden bg-no-repeat bg-cover bg-center cursor-pointer`}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          <div
            ref={containerRef}
            className={`w-full h-full ${item.background} absolute container flex items-center justify-center`}
          >
            <h1 className='text-white'> {item.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Works;
