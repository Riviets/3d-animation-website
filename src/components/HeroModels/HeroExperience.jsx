import { Canvas, useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import { OrbitControls, useHelper } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room'
import HeroLights from './HeroLights'

const HeroExperience = () => {

    const isTablet = useMediaQuery({query: '(max-width: 1024px)'})

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <group position={[0,-3.5,0]} rotation={[0, -Math.PI/4,0]}>
            <Room />
        </group>
        <HeroLights />
        <OrbitControls enablePan={false} enableZoom={!isTablet} maxDistance={15} minDistance={8} minPolarAngle={Math.PI/5} maxPolarAngle={Math.PI/2} maxAzimuthAngle={Math.PI /3.5}/>
    </Canvas>
  )
}

export default HeroExperience
