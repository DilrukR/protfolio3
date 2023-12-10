import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Charchter from "../Character/Character";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [colorState, setColorState] = useState(false);
  const [animations, setAnimations] = useState(true);

  const spanRef = useRef();
  const h1Ref = useRef();
  const cercleRef = useRef();

  const myRef = useRef();

  useEffect(() => {
    const el1 = spanRef.current;
    const el2 = h1Ref.current;
    const el3 = cercleRef.current;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-hello",
          start: "bottom bottom",
          end: "+=500 ",
          scrub: 1,
          pin: true,
        },
      });
      // const tl2 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: "#trig2",
      //     start: "bottom bottom",
      //     end: "+=600 ",
      //     scrub: 2,
      //     pin: true,
      //   },
      // });

      tl.fromTo(
        [el1, el2],
        {
          translateX: function (index) {
            return index === 0 ? 1000 : -1000;
          },
        },
        {
          translateX: 0,
        }
      );

      tl.fromTo(
        el3,
        {
          scale: 0,
        },
        {
          scale: 5,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div
        className='h-screen w-screen flex items-center justify-center hero-hello overflow-hidden'
        ref={myRef}
      >
        <div>
          <span
            id='heroSpan'
            className={`${"text-yellowText-dark"} text-4xl  absolute -mt-8`}
            ref={spanRef}
          >
            Let's Begin
          </span>

          <span className='text-black text-3xl'>Welcome to </span>
          <h1
            className={` ${colorState ? "text-white" : "text-white"} text-5xl`}
            ref={h1Ref}
          >
            My Journey
          </h1>
        </div>
        <div
          className='h-96 w-96 bg-yellowText-dark rounded-full absolute -z-40'
          ref={cercleRef}
        ></div>
      </div>

      <div className='h-screen w-screen flex items-center justify-between'>
        <div className=' h-full w-1/2 flex  justify-center flex-col  pl-10'>
          <h1 className='text-5xl'>Hello I am Rishan Dilruk</h1>
          <h1 className='text-7xl text-secondory font-bold'>
            <span className=' text-yellowText-light font-bolder'>Frontend</span>{" "}
            Developer
          </h1>
          <div>
            <h1 className='text-7xl'>Mobile Application</h1>
          </div>

          {/* <div>
            <h1 className='text-7xl'>Web Animation Specelist</h1>
          </div> */}
        </div>

        <div className='absolute right-0 '>
          <Charchter />
        </div>
      </div>
    </div>
  );
};

export default Hero;
