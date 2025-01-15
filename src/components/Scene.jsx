import React from "react"
import { Environment, ScrollControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Model } from "./Model"

export default function Scene(){
    return <Canvas
        camera={{fov:65, position:[0,2,4]}}
    >
    <ScrollControls pages={6} damping={1.5}>
        <Model/>
    </ScrollControls>
    <ambientLight intensity={0.5}/>
    <Environment files="/models/abandoned_tiled_room_1k.hdr"/>
    </Canvas>
}