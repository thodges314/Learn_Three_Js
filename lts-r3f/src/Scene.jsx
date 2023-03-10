import { useState, useRef } from "react";
import "./App.css";
import { OrbitControls, Sky } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export const Scene = () => {
  // run on each render of react
  const size = useThree((state) => state.size);
  const mesh = useRef();
  const [color, setColor] = useState("red");
  const [opacity, setOpacity] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  // run on each rerender of react
  useFrame(() => {
    if (isRotating) mesh.current.rotation.y += 0.01;
  });
  return (
    <>
      <Sky
        distance={450000}
        sunPosition={[0, 1, 0]}
        inclination={0}
        azimuth={0.25}
      />
      <ambientLight intensity={0.1} />
      <directionalLight color={0xffffff} intensity={0.2} position={[0, 0, 5]} />
      <mesh
        ref={mesh}
        rotation={[0.3, 0.6, 0.3]}
        onClick={() => setColor("yellow")}
        onPointerEnter={() => {
          setOpacity(0.5);
          setIsRotating(true);
        }}
        onPointerLeave={() => {
          setOpacity(1);
          setIsRotating(false);
        }}
      >
        <boxGeometry args={[2, 5, 1]} />
        <meshStandardMaterial
          color={color}
          opacity={opacity}
          transparent={true}
        />
      </mesh>
    </>
  );
};
