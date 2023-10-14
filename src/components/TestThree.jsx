import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { Preload, OrbitControls } from "@react-three/drei";

import { Vector3 } from 'three';
import { Wobble } from '@alienkitty/alien.js/three';



const TestThree = () => {
 

    return (
      <Canvas height={100} camera={{ position: [0, 0, 1] }}>
        <OrbitControls/>
        <Suspense fallback={null}>
            <CComp/>
        </Suspense>
        <Preload all />
      </Canvas>
    );
};


const CComp = () => {
    const ref = useRef()
    const [wobble, setWobble] = useState(null)

    useEffect(()=>{
        const wobble = new Wobble(new Vector3(ref.current.position.x, ref.current.position.y, ref.current.position.z));
        wobble.scale = 100 
      setWobble(wobble)

      function animate(time) {
        requestAnimationFrame(animate);
    
        wobble.update(time * 0.001 * 0.005); // seconds * 0.5
    }

    requestAnimationFrame(animate)


    }, [])




    return <>
        <mesh ref={ref} >
            <planeGeometry args={[0.4,0.4]}/>
            <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader}/>
        </mesh> 
    </>
}
  
const vertexShader = /* glsl */ `
in vec3 position;
in vec2 uv;

out vec2 vUv;

void main() {
    vUv = uv;

    gl_Position = vec4(position, 1.0);
}
`;


const fragmentShader = /* glsl */ `
precision highp float;

uniform sampler2D tMap;
uniform float uRedOffset;
uniform float uGreenOffset;
uniform float uBlueOffset;
uniform float uIntensity;

in vec2 vUv;

out vec4 FragColor;

void main() {
    float ro = 0.001 * uRedOffset * uIntensity;
    float go = 0.001 * uGreenOffset * uIntensity;
    float bo = 0.001 * uBlueOffset * uIntensity;

    float r = texture(tMap, vUv * (1.0 + ro) - (ro / 2.0)).r;
    float g = texture(tMap, vUv * (1.0 + go) - (go / 2.0)).g;
    float b = texture(tMap, vUv * (1.0 + bo) - (bo / 2.0)).b;

    FragColor = vec4(r, g, b, 1.0);
}
`;


export default TestThree;
  