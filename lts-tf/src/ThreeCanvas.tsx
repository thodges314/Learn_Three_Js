import { useCallback, useState } from 'react';
import * as THREE from 'three';

const initThreeJsScene = (node: HTMLDivElement) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor(0xffffff);
  renderer.setSize(500, 500);
  node.appendChild(renderer.domElement);
  camera.position.z = 5;
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshNormalMaterial();
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  animate();
};

export const ThreeCanvas = () => {
  const [initialised, setInitialised] = useState(false);
  const threeDivRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node !== null && !initialised) {
        initThreeJsScene(node);
        setInitialised(true);
      }
    },
    [initialised]
  );

  return (
    <div
      ref={threeDivRef}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    />
  );
};
