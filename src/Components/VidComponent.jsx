import React, { useState } from 'react';
import { Scene } from 'aframe-react';

function VidComponent({ markerPath, VidPath, position, rotation }) {
  // State to manage video scale
  const [scale, setScale] = useState({ x: 2, y: 2, z: 2 });

  // Function to increase video scale
  const increaseScale = () => {
    setScale({ x: scale.x + 0.1, y: scale.y + 0.1, z: scale.z + 0.1 });
  };

  // Function to decrease video scale
  const decreaseScale = () => {
    setScale({ x: scale.x - 0.1, y: scale.y - 0.1, z: scale.z - 0.1 });
  };

  // Function to toggle video playback
  const toggleVideoPlayback = () => {
    const video = document.querySelector('#video');
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  return (
    <div>
      <Scene arjs='sourceType: webcam; smoothing: true; smoothingAmount: 0.9;'>
        <a-assets>
          <video id="video" src={VidPath} loop></video>
        </a-assets>
        <a-marker preset="hiro">
          <a-video
            src="#video"
            scale={`${scale.x} ${scale.y} ${scale.z}`}
            position={position}
            rotation={rotation}
          ></a-video>
        </a-marker>

        <a-entity camera></a-entity>
      </Scene>

      <div style={{position: 'absolute', zIndex: 10, bottom: '20px', left: '20px'}}>
        <button style={{position: 'relative',top:'40px' }} onClick={toggleVideoPlayback}>Play/Pause Video</button>
        <div style={{position: 'relative', left: '40vw'}}>
        <button onClick={increaseScale}>+</button>
        <button onClick={decreaseScale}>-</button>
        </div>
        
        
      </div>
    </div>
  );
}

export default VidComponent;