import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Line, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const NODE_COUNT = 22;
const CONNECT_DIST = 2.6;

function useNetwork() {
  return useMemo(() => {
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * 6.5,
        (Math.random() - 0.5) * 4.5,
        (Math.random() - 0.5) * 3.5
      ),
      phase: Math.random() * Math.PI * 2,
    }));

    const edges = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].pos.distanceTo(nodes[j].pos) < CONNECT_DIST) {
          edges.push([nodes[i].pos, nodes[j].pos]);
        }
      }
    }
    return { nodes, edges };
  }, []);
}

function Nodes({ nodes, groupRef }) {
  const meshRefs = useRef([]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    nodes.forEach((n, i) => {
      const m = meshRefs.current[i];
      if (m) {
        const s = 1 + Math.sin(t * 0.8 + n.phase) * 0.18;
        m.scale.setScalar(s);
      }
    });
  });

  return (
    <group ref={groupRef}>
      {nodes.map((n, i) => (
        <mesh key={i} position={n.pos} ref={(el) => (meshRefs.current[i] = el)}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshStandardMaterial
            color="#6ee7b7"
            emissive="#2bd999"
            emissiveIntensity={0.9}
            roughness={0.3}
            metalness={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

function Edges({ edges }) {
  return (
    <group>
      {edges.map(([a, b], i) => (
        <Line
          key={i}
          points={[a, b]}
          color="#8b7cf6"
          transparent
          opacity={0.22}
          lineWidth={1}
        />
      ))}
    </group>
  );
}

function ParticleField() {
  const ref = useRef();
  const count = 260;
  const positions = useRef(
    Float32Array.from({ length: count * 3 }, () => (Math.random() - 0.5) * 11)
  ).current;

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.015;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#8b7cf6"
        size={0.016}
        sizeAttenuation
        depthWrite={false}
        opacity={0.45}
      />
    </Points>
  );
}

function Scene() {
  const { nodes, edges } = useNetwork();
  const groupRef = useRef();
  const { viewport } = useThree();
  const target = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    target.current.x = (state.pointer.x * viewport.width) / 24;
    target.current.y = (state.pointer.y * viewport.height) / 24;
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -target.current.y * 0.15,
        0.03
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        groupRef.current.rotation.y + target.current.x * 0.08,
        0.02
      );
    }
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, target.current.x * 0.3, 0.02);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, target.current.y * 0.3, 0.02);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <fog attach="fog" args={["#0a0b0f", 4, 11]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 4]} intensity={1.4} color="#6ee7b7" />
      <pointLight position={[-4, -2, -3]} intensity={0.9} color="#8b7cf6" />
      <group ref={groupRef}>
        <Nodes nodes={nodes} />
        <Edges edges={edges} />
      </group>
      <ParticleField />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
