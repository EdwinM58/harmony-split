import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import * as random from "maath/random/dist/maath-random.esm";

const MusicNotes = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 2.5 })
  );
  const texture = useLoader(TextureLoader, "./music-note.png");

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <>
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points
          ref={ref}
          positions={sphere}
          stride={3}
          frustumCulled
          {...props}
        >
          <PointMaterial
            map={texture}
            transparent
            color="#f272c8"
            size={0.02}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    </>
  );
};

const MusicNotesBG = () => {
  return (
    <Canvas height={100} camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <MusicNotes />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default MusicNotesBG;
