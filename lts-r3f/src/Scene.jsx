export const Scene = () => {
  const color = "blue";
  const opacity = 0.8;
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color={0xffffff} intensity={0.2} position={[0, 0, 5]} />
      <mesh rotation={[0.3, 0.6, 0.3]}>
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
