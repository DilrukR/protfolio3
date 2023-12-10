import React, { useRef, useLayoutEffect, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import ComputerChac from "./computerChac";
import Skills from "./Skills";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CanvasSkill = () => {
  const textRef = useRef();

  let positionRI = { x: -3, y: -3, positionX: 0, positionY: 0 };

  useEffect(() => {
    const el = textRef.current;
    const ctx2 = gsap.context(() => {
      const tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger123",
          start: "bottom bottom",
          end: "+=1000",
          scrub: 2,
          pin: true,
          markers: true,
        },
      });

      tl5.to(positionRI, {
        y: 2,
        x: 4,
        positionX: -0.8,
      });

      tl5.fromTo(
        el,
        {
          x: 600,
        },
        {
          x: 0,
        }
      );
    });

    return () => ctx2.revert();
  }, []);

  console.log(positionRI);

  return (
    <div className='h-screen w-screen trigger  relative top-0 trigger123 '>
      <div className='absolute w-64 right-48 top-48' ref={textRef}>
        <h1 className='text-white text-2xl font-bold font-fontNav'>
          Mobile Application Development
        </h1>
        <h1 className='text-white mt-5'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet numquam
          incidunt, aperiam, voluptatum ad nihil magni laboriosam eligendi
          aliquam at assumenda omnis totam fugiat! Ratione unde fugiat provident
          inventore alias delectus hic sunt obcaecati qui ullam aperiam quod
          vero vitae recusandae distinctio, tenetur rem assumenda. Ab
          repellendus rem ea numquam?
        </h1>
      </div>

      <Canvas camera={{ fov: 24, position: [0, 0, 5] }}>
        <Skills value={positionRI} />
        {/* <ComputerChac value={positionRI} positions={[]} /> */}
      </Canvas>
    </div>
  );
};

export default CanvasSkill;
