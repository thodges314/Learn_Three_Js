import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Canvas
        style={{
          height: "100vh",
          width: "100vh",
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
