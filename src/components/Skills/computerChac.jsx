import React, { useRef, useLayoutEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Iphone } from "../Models/Iphone";
import { Computer } from "./Computer";

const ComputerChac = (props) => {
  console.log("value", props.value);
  const ref = useRef();

  const value = props.value;

  useFrame(() => {
    ref.current.rotation.y = value?.x;
    ref.current.position.x = value?.positionX;
    ref.current.position.y = value?.positionY;
  });

  return (
    <group position={[0.2, 0.2, 0.2]}>
      <ambientLight color='white' />
      <spotLight />
      <mesh ref={ref} scale={0.1}>
        <Computer />
      </mesh>
    </group>
  );
};

export default ComputerChac;
