import { PerspectiveCamera, Grid, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import { ConceptDto } from "./interfaces";

function AxisCylinder(props: any) {
  return (
      <mesh {...props} scale={[1, 10, 1]}>
          <cylinderGeometry args={[0.05, 0.05, 5, 32]} />
          <meshBasicMaterial color={props.color} />
      </mesh>
  );
}

function Sphere(props: any) {
  const mesh = useRef(null);

  return (
    <mesh
      {...props}
      ref={mesh}>
      <sphereGeometry args={[1, 16, 16]}/>
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
}

export const Panel3D = ({
  concepts,
  onHoverConcept,
  spherePos,
}: {
  concepts: ConceptDto[], 
  onHoverConcept: (index: number) => void,
  spherePos: number[],
}) => {
  function Box(props: any) {
    const mesh = useRef(null);
  
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={() => setActive(!active)}
        onPointerOver={() => {setHover(true); onHoverConcept(props.index);} }
        onPointerOut={() => {setHover(false); onHoverConcept(-1);}}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : (props.color || 'orange')} />
      </mesh>
    )
  }
  return (
    <Canvas id="three-canvas" className='Panel3D'>
      {/* PerspectiveCamera from drei automatically becomes the default camera */}
      <PerspectiveCamera
        makeDefault
        position={[20, 20, 20]}
        fov={75}
        near={0.1}
        far={1000}
      />

      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      
      {/* Grid helper */}
      <Grid
          args={[60, 60, 30, 30]} // size, divisions, xDivisions, yDivisions
          rotation={[0, 0, 0]} // Rotate to horizontal plane
          position={[0, 0, 0]}
          cellColor="green"
      />

      {concepts.map(x => (
        <Box position={x.position} color={x.color} key={"box"+x.index} index={x.index}/>
      ))};

      <Sphere position={spherePos} color={"black"}/>

      {/* X Axis in Red */}
      <AxisCylinder position={[0, 0, 0]} rotation={[0, 0, -Math.PI / 2]} color="red" />
      {/* Y Axis in Green */}
      <AxisCylinder position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} color="green" />
      {/* Z Axis in Blue */}
      <AxisCylinder position={[0, 0, 0]} rotation={[0, 0, 0]} color="blue" />
        
      {/* Controls to rotate the scene */}
      <OrbitControls />
    </Canvas>
  );

}