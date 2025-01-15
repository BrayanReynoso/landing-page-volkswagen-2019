/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Ddiaz Design (https://sketchfab.com/ddiaz-design)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/2019-volkswagen-lamando-280-tsi-0fe667aa57bc4bfc845d35069a35add9
Title: 2019 Volkswagen Lamando 280 TSI
*/

import React, { useLayoutEffect, useRef } from 'react'
import { OrbitControls, useGLTF, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';
import { gsap } from 'gsap';
export function Model(props) {

    const scrollCotrol = useScroll();
    const timeline = useRef();
    // mesh references 
    const generalGroupRef = useRef();
    const taillightRef = useRef();
    const controls = useRef();

    // Html div references
    const page_1_ref = useRef();
    const page_2_ref = useRef();
    const page_3_ref = useRef();
    const page_4_ref = useRef();
    const page_5_ref = useRef();
    const page_6_ref = useRef();

    //camera ref
    const camera = useThree((state) => state.camera);

    useLayoutEffect(() => {
        page_1_ref.current = document.getElementById("page-1");
        page_2_ref.current = document.getElementById("page-2");
        page_3_ref.current = document.getElementById("page-3");
        page_4_ref.current = document.getElementById("page-4");
        page_5_ref.current = document.getElementById("page-5");
        page_6_ref.current = document.getElementById("page-6");
    }, []);

    useLayoutEffect(() => {
        timeline.current = gsap.timeline();

        let AnimationsData = [];

        const InitialAnimation = [
            {
                // Html div
                // Restore previous animations
                objectToAnimate: page_1_ref.current,
                properties: {
                    opacity: 0,
                    duration: 0.3,
                },
                timelinePoint: 0.5,
            },
            // html div
            {
                objectToAnimate: page_2_ref.current,
                properties: {
                    opacity: 1,
                    duration: 0.8,
                },
                timelinePoint: 1.3,
            },
            //controls, camera and camera zoom
            {
                objectToAnimate: controls.current.target,
                properties: {
                    x: -1.7,
                    y: -0.7,
                    z: 1
                },
                timelinePoint: 0.8
            },
            {
                objejectToAnimate: camera.position,
                properties: {
                    x: 0,
                    y: 0,
                    z: 5,
                    duration: 0.8
                },
            },
            {
                objectToAnimate: camera,
                properties: {
                    zoom: 2,
                    duration: 0.8,
                    onUpdate: () => camera.updateProjectionMatrix()

                },
                timelinePoint: 1
            },
        ];
        AnimationsData = [...AnimationsData, ...InitialAnimation]
        const DesaingAnimation = [
            {
                objectToAnimate: page_2_ref.current,
                properties: {
                    opacity: 0,
                    duration: 0.3,
                },
                timelinePoint: 2.1,
            },

            //html div
            {
                objectToAnimate: page_3_ref.current,
                properties: {
                    opacity: 1,
                    duration: 0.3,
                },
                timelinePoint: 2.3,
            },
            // Controls, camera, camera zoom
            {
                objectToAnimate: controls.current.target,
                properties: {
                    x: -5,
                    y: 0,
                    z: 0,
                    duration: 0.8,
                },
                timelinePoint: 2,
            },
            {
                objectToAnimate: camera.position,
                properties: {
                    x: 7,
                    y: 1,
                    z: 4,
                    duration: 0.8,
                },
                timelinePoint: 2,
            },
            {
                objectToAnimate: camera,
                properties: {
                    zoom: 2,
                    duration: 0.3,
                    onUpdate: () => {
                        camera.updateProjectionMatrix();
                    },
                },
                timelinePoint: 2.3,
            },
            // General group
            {
                objectToAnimate: generalGroupRef.current.rotation,
                properties: {
                    x: -0,
                    y: -1,
                    z: -0.1,
                    duration: 0.8,
                },
                timelinePoint: 2.1,
            },
        ];
        AnimationsData = [...AnimationsData, ...DesaingAnimation]

        AnimationsData.map((animation) => {
            timeline.current.to(
                animation.objectToAnimate,
                {
                    ...animation.properties,
                },
                animation.timelinePoint
            );
        });
    }, []);

    useFrame(() => {
        timeline.current.seek(scrollCotrol.offset * timeline.current.duration())
    });
    const { nodes, materials } = useGLTF('/models/2019_volkswagen_lamando_280_tsi.glb')
    return (
        <>
            <group {...props} dispose={null} ref={generalGroupRef}>
                <group name="FINAL_MODELfbx" scale={0.01}>
                    <group name="_inner_map_c_6" rotation={[0, Math.PI / 2, 0]}>
                        <mesh
                            name="_inner_map_c_6_inner_map_0"
                            castShadow
                            receiveShadow
                            geometry={nodes._inner_map_c_6_inner_map_0.geometry}
                            material={materials.inner_map}
                        />
                        <mesh
                            name="_inner_map_c_6_mirror_0"
                            castShadow
                            receiveShadow
                            geometry={nodes._inner_map_c_6_mirror_0.geometry}
                            material={materials.mirror}
                        />
                    </group>
                    <mesh
                        name="_car_body1_car��int_1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['_car_body1_car��int_1_0'].geometry}
                        material={materials.carint_1}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_car_body_lf_door1_car��int_1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['_car_body_lf_door1_car��int_1_0'].geometry}
                        material={materials.carint_1}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_car_body_lf_door_2_car��int_1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['_car_body_lf_door_2_car��int_1_0'].geometry}
                        material={materials.carint_1}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_car_body_lr_door1_car��int_1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['_car_body_lr_door1_car��int_1_0'].geometry}
                        material={materials.carint_1}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_car_body_rf_door1_car��int_1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['_car_body_rf_door1_car��int_1_0'].geometry}
                        material={materials.carint_1}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_car_body_rf_door_2_car��int_1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['_car_body_rf_door_2_car��int_1_0'].geometry}
                        material={materials.carint_1}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_car_body_rr_door1_car��int_1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['_car_body_rr_door1_car��int_1_0'].geometry}
                        material={materials.carint_1}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_car_body_trunk1_car��int_1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['_car_body_trunk1_car��int_1_0'].geometry}
                        material={materials.carint_1}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_car_body_black_top1_black_glass_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._car_body_black_top1_black_glass_0.geometry}
                        material={materials.black_glass}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_car_black_plastic1_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._car_black_plastic1_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_car_plastic1_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._car_plastic1_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_car_metal1_metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._car_metal1_metal_0.geometry}
                        material={materials.metal}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_car_metal_2_metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._car_metal_2_metal_0.geometry}
                        material={materials.metal}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_car_metal3_metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._car_metal3_metal_0.geometry}
                        material={materials.metal}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_car_metal5_metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._car_metal5_metal_0.geometry}
                        material={materials.metal}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_car_black_plastic5_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._car_black_plastic5_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_car_metal7_metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._car_metal7_metal_0.geometry}
                        material={materials.metal}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_car_plastic5_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._car_plastic5_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_car_black_plastic7_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._car_black_plastic7_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_glass1_glass_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._glass1_glass_0.geometry}
                        material={materials.glass}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_headlight_glass1_glass_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._headlight_glass1_glass_0.geometry}
                        material={materials.glass}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_appearance_map_c1_badges_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._appearance_map_c1_badges_0.geometry}
                        material={materials.badges}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_appearance_map_c_2_badges_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._appearance_map_c_2_badges_0.geometry}
                        material={materials.badges}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_headlight_plastic1_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._headlight_plastic1_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_headlight_metal1_metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._headlight_metal1_metal_0.geometry}
                        material={materials.metal}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_headlight_map_c1_badges_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._headlight_map_c1_badges_0.geometry}
                        material={materials.badges}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_tire_map_c1_tire_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._tire_map_c1_tire_0.geometry}
                        material={materials.tire}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_hub_matel1_metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._hub_matel1_metal_0.geometry}
                        material={materials.metal}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_brake_map_c1_breaks_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._brake_map_c1_breaks_0.geometry}
                        material={materials.breaks}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_lf_door_plastic1_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._lf_door_plastic1_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_lf_door_glass1_glass_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._lf_door_glass1_glass_0.geometry}
                        material={materials.glass}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_lf_door_black_plastic1_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._lf_door_black_plastic1_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_lf_door_metal_2_metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._lf_door_metal_2_metal_0.geometry}
                        material={materials.metal}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_lf_door_metal_4_metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._lf_door_metal_4_metal_0.geometry}
                        material={materials.metal}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_lf_door_mirror1_mirror_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._lf_door_mirror1_mirror_0.geometry}
                        material={materials.mirror}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_lf_door_inner_map_c1_inner_chair_1_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._lf_door_inner_map_c1_inner_chair_1_0.geometry}
                        material={materials.inner_chair_1}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_lr_door_plastic1_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._lr_door_plastic1_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_lr_door_glass1_glass_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._lr_door_glass1_glass_0.geometry}
                        material={materials.glass}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_lr_door_black_plastic1_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._lr_door_black_plastic1_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_lr_door_metal_2_metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._lr_door_metal_2_metal_0.geometry}
                        material={materials.metal}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_lr_door_metal_4_metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._lr_door_metal_4_metal_0.geometry}
                        material={materials.metal}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_lr_door_inner_map_c1_inner_door_3_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._lr_door_inner_map_c1_inner_door_3_0.geometry}
                        material={materials.inner_door_3}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_rf_door_plastic1_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._rf_door_plastic1_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_rf_door_glass1_glass_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._rf_door_glass1_glass_0.geometry}
                        material={materials.glass}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_rf_door_black_plastic1_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._rf_door_black_plastic1_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_rf_door_mirror1_mirror_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._rf_door_mirror1_mirror_0.geometry}
                        material={materials.mirror}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_rf_door_metal1_metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._rf_door_metal1_metal_0.geometry}
                        material={materials.metal}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_rf_door_metal_3_metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._rf_door_metal_3_metal_0.geometry}
                        material={materials.metal}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_rf_door_inner_map_c1_inner_door_2_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._rf_door_inner_map_c1_inner_door_2_0.geometry}
                        material={materials.inner_door_2}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_rr_door_plastic1_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._rr_door_plastic1_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_rr_door_glass1_glass_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._rr_door_glass1_glass_0.geometry}
                        material={materials.glass}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_rr_door_black_plastic1_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._rr_door_black_plastic1_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_rr_door_metal_2_metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._rr_door_metal_2_metal_0.geometry}
                        material={materials.metal}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_rr_door_metal_4_metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._rr_door_metal_4_metal_0.geometry}
                        material={materials.metal}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_rr_door_inner_map_c1_inner_door_3_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._rr_door_inner_map_c1_inner_door_3_0.geometry}
                        material={materials.inner_door_3}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_inner_map_c1_inner_map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._inner_map_c1_inner_map_0.geometry}
                        material={materials.inner_map}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_inner_map_c_2_inner_map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._inner_map_c_2_inner_map_0.geometry}
                        material={materials.inner_map}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_inner_map_c_8_inner_map_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._inner_map_c_8_inner_map_0.geometry}
                        material={materials.inner_map}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_Taillight_map_c1_badges_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._Taillight_map_c1_badges_0.geometry}
                        material={materials.badges}
                        rotation={[0, Math.PI / 2, 0]}
                        ref={taillightRef}
                    />
                    <mesh
                        name="_Taillight_map_c3_badges_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._Taillight_map_c3_badges_0.geometry}
                        material={materials.badges}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_trunk_inner_map_c1_trink_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._trunk_inner_map_c1_trink_0.geometry}
                        material={materials.trink}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_trunk_plastic_map_c1_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._trunk_plastic_map_c1_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_trunk_metal1_metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._trunk_metal1_metal_0.geometry}
                        material={materials.metal}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_trunk_metal_low1_metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._trunk_metal_low1_metal_0.geometry}
                        material={materials.metal}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_trunk_black_plastic1_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._trunk_black_plastic1_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_trunk_glass1_glass_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._trunk_glass1_glass_0.geometry}
                        material={materials.glass}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_black_surface_door1_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._black_surface_door1_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_black_surface_door3_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._black_surface_door3_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_black_surface_door5_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._black_surface_door5_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_black_surface_door7_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._black_surface_door7_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_black_surface_door9_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._black_surface_door9_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_black_surface_door11_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._black_surface_door11_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_black_surface_trunk1_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._black_surface_trunk1_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_hub_black_matel3_black_metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._hub_black_matel3_black_metal_0.geometry}
                        material={materials.black_metal}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_inner_chair_map_c3_inner_chair_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._inner_chair_map_c3_inner_chair_0.geometry}
                        material={materials.inner_chair}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_car_radar_plastic1_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._car_radar_plastic1_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_car_top_biack_plastic1_plastic_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._car_top_biack_plastic1_plastic_0.geometry}
                        material={materials.plastic}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_hub_black_matel_xunhei1_black_metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._hub_black_matel_xunhei1_black_metal_0.geometry}
                        material={materials.black_metal}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_hub_metal_xunhei1_metal_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._hub_metal_xunhei1_metal_0.geometry}
                        material={materials.metal}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                    <mesh
                        name="_lf_door_map_c1_dmap_0"
                        castShadow
                        receiveShadow
                        geometry={nodes._lf_door_map_c1_dmap_0.geometry}
                        material={materials.dmap}
                        rotation={[0, Math.PI / 2, 0]}
                    />
                </group>
            </group>

            <OrbitControls enableZoom={false} ref={controls} />
        </>

    )
}

useGLTF.preload('/models/2019_volkswagen_lamando_280_tsi.glb')
