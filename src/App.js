
import { Canvas } from "@react-three/fiber";
import {
  // Center,
  // AccumulativeShadows,
  // RandomizedLight,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import { XLThree } from "./screen/XL6/XLThree";
import { Suspense } from "react";


export default function App() {
  return (
    <Canvas shadows camera={{ position: [4, 2.5, 8], fov: 35 }}>
      <color attach="background" args={['#15151a']} />
      <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <XLThree />
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2}   />
        <Environment preset="city" />
        {/* <Environment files="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/hdris/noon-grass/noon_grass_1k.hdr" background /> */}
      </Suspense>
    </Canvas>
  );
}


