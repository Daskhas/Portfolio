import React from 'react'
import { Suspense,useEffect,useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'

import CanvasLoader from "../Loader"

const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf")
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight 
        position={[-20,50,10]}
        angle ={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSizw={1024}
        />
      <primitive 
      object={computer.scene}
      scale={isMobile?0.5:0.4}
      position ={isMobile?[-3,-4.2,-1]:[0,-3.6,-1.2]}
      rotation ={[-0.01,-0.2,-0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas=()=>{
  const [isMobile,setIsMobile] = useState(false);
  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches);
    
    //define callback function to handle changes to the media query
    const handleMediaQueryChange = (event)=>{
      setIsMobile(event.matches);
    }

    //add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change',handleMediaQueryChange)

    //remove the listener when the component is unmounted
      return ()=>{
        mediaQuery.removeEventListener('change',handleMediaQueryChange)
      }
  },[])
  return(
    <Canvas frameloop='demand'
      shadows
      camera={{position:[20,4,5],fov:25}}
      gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>} >
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  ) 
}

export default ComputersCanvas