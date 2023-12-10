import React, { useRef, useLayoutEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Iphone } from "../Models/Iphone";

const Skills = (props) => {
  console.log("value", props.value);
  const ref = useRef();

  const value = props.value;

  useFrame(() => {
    ref.current.rotation.y = value?.x;
    ref.current.position.x = value?.positionX;
    ref.current.position.y = value?.positionY;
  });

  return (
    <group>
      <ambientLight color='white' />
      <spotLight />
      <pointLight />
      <mesh ref={ref}>
        <Iphone />
      </mesh>
    </group>
  );
};

export default Skills;
