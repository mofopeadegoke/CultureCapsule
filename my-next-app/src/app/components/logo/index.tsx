"use client";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef, MutableRefObject } from "react";
import * as THREE from "three";
import { useEffect } from "react";

export default function Logo() {
  const { scene } = useGLTF("/logo.gltf");
  const logoRef = useRef<THREE.Object3D>() as MutableRefObject<THREE.Object3D>;
  const { camera } = useThree();

  useEffect(() => {
    scene.traverse((child: THREE.Object3D) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh: THREE.Mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        const material: THREE.MeshStandardMaterial =
          new THREE.MeshStandardMaterial({
            color: "silver", // Adjust color as needed
            metalness: 0.9, // Adjust metalness for a more metallic look
            roughness: 0.2, // Lower roughness for a shinier look
          });
        mesh.material = material;
      }
    });
  }, [scene]);

  useFrame(({ clock }) => {
    logoRef.current.position.y =
      logoRef.current.position.y + Math.sin(clock.elapsedTime) * 0.01;
    logoRef.current.position.x =
      logoRef.current.position.x + Math.sin(clock.elapsedTime) * 0.01;
  });

  useEffect(() => {
    if (logoRef.current) {
      const box = new THREE.Box3().setFromObject(logoRef.current);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = (camera as THREE.PerspectiveCamera).fov * (Math.PI / 180);
      const distance = Math.abs(maxDim / Math.sin(fov / 2));

      camera.position.set(center.x, center.y, distance * 1.2);
      camera.lookAt(center);
      logoRef.current.rotation.y = -Math.PI / 3; // Try 90° rotation if needed
    }
  }, [camera, logoRef]);

  return (
    <>
      <primitive object={scene} ref={logoRef} castShadow receiveShadow />
      <directionalLight position={[5, 10, 5]} intensity={3} castShadow />
    </>
  );
}
