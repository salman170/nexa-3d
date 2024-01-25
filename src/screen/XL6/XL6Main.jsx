import { Canvas } from "@react-three/fiber";

import { XLThree } from "./XLThree";
import { Suspense } from "react";

import {
  Center,
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  OrbitControls,
  Lightformer,
} from "@react-three/drei";

export default function XL6Main() {
  return (
    <div className="h-full">

    <Canvas
      gl={{ antialias: false, preserveDrawingBuffer: true }}
      shadows
      camera={{ position: [4, 0, 6], fov: 35 }}
    >
      <Suspense fallback={null}>
        <color attach="background" args={["#15151a"]} />
        <group position={[0, -1.2, 0]}>
          <Center top>
            <XLThree />
          </Center>
          <AccumulativeShadows>
            <RandomizedLight position={[2, 5, 5]} />
          </AccumulativeShadows>
        </group>

        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />

        {/* <Environment
          files="/back.hdr"
          ground={{ height: 30, radius: 300, scale: 200 }}
        /> */}
        <Environment resolution={512}>
          {/* Ceiling */}
          <Lightformer
            intensity={6}
            rotation-x={Math.PI / 2}
            position={[0, 4, -9]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={6}
            rotation-x={Math.PI / 2}
            position={[0, 4, -6]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={6}
            rotation-x={Math.PI / 2}
            position={[0, 4, -3]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={6}
            rotation-x={Math.PI / 2}
            position={[0, 4, 0]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={6}
            rotation-x={Math.PI / 2}
            position={[0, 4, 3]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={6}
            rotation-x={Math.PI / 2}
            position={[0, 4, 6]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={50}
            rotation-x={Math.PI / 2}
            position={[0, 4, 9]}
            scale={[10, 1, 1]}
          />

          {/* Sides */}
          <Lightformer
            intensity={50}
            rotation-y={Math.PI / 2}
            position={[-50, 2, 0]}
            scale={[100, 2, 1]}
          />
          <Lightformer
            intensity={50}
            rotation-y={-Math.PI / 2}
            position={[50, 2, 0]}
            scale={[100, 2, 1]}
          />
          {/* Key */}
          {/* <Lightformer form="ring" color="red" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} /> */}
        </Environment>
      </Suspense>
    </Canvas>
    </div>
  );
}
