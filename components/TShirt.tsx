import React, { useRef, useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Tshirt(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/Shirt.glb") as any;

  // Load the CustomGear logo texture
  const logoTexture = useTexture("/image.png");

  useEffect(() => {
    if (group.current) {
      const box = new THREE.Box3().setFromObject(group.current);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 2 / maxDim;
      group.current.scale.setScalar(scale);
    }

    // Configure the texture
    logoTexture.anisotropy = 16;
  }, [logoTexture]);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
      />
      <mesh
        position={[0, 0.3, 0.15]} // Adjusted to be on the chest
        rotation={[0, 0, 0]}
        scale={[0.2, 0.2, 0.2]} // Scaled down to fit on the chest
      >
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          map={logoTexture}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Shirt.glb");
