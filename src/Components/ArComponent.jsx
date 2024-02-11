import React from 'react';
import { Entity, Scene } from 'aframe-react';

function ArComponent({markerPath, modelPath, scale, position, rotation}) {
  /*
  primitive="a-marker"
        preset="custom" 
        type="pattern"
        url={markerPath}
  */
  return (
    <Scene arjs='sourceType: webcam;smoothing: true; smoothingAmount: 0.9;'>
      <Entity
        primitive="a-marker"
        preset="hiro" 
        
        
        >
        <Entity
          gltf-model= {modelPath}
          scale={scale}
          position={position}
          rotation={rotation}
        />


      </Entity>

      <Entity camera></Entity>
    </Scene>
  );
}

export default ArComponent;