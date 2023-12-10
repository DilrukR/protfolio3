import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { Avatar } from "../Models/Avatar";

const width = window.innerWidth;
const height = window.innerHeight;

const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Falling", "Standing"],
    },
  });
  return (
    <>
      <Canvas
        style={{ width: width / 2, height: height }}
        camera={{ position: [0, 2, 5], fov: 30 }}
      >
        <ambientLight position={[1, 0, 0]} intensity={2} />

        <group position-y={-1} scale={1.2}>
          <ContactShadows />
          <Avatar animation={animation} />
        </group>
      </Canvas>
    </>
  );
};

export default Experience;
