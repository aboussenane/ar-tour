//state variable for isDisplayed
//if isDisplayed -> link pause/play, scale buttons
//if playing -> pause + vice versa
//pass play value in as a prop, set it based on state
//have all videos inside a div, and have a button to toggle the div play pause, and scale buttons
//for vid-D have another div with buttons to change the video, with an array for the vid paths

import ArComponent from './Components/ArComponent'
import VidComponent from './Components/VidComponent'
import './App.css'


function App() {
  

  return (
    <>
      <VidComponent markerpath="/Patterns/pattern-A.patt" VidPath="/Videos/video-A.mp4" scale="3 3 3" position="0 0 0" rotation="90 180 0" />
      <VidComponent markerpath="/Patterns/pattern-B.patt" VidPath="/Videos/video-B.mp4" scale="3 3 3" position="0 0 0" rotation="90 180 0" />
      <VidComponent markerpath="/Patterns/pattern-C.patt" VidPath="/Videos/video-C.mp4" scale="3 3 3" position="0 0 0" rotation="90 180 0" />
      <VidComponent markerpath="/Patterns/pattern-D.patt" VidPath="/Videos/video-D.mp4" scale="3 3 3" position="0 0 0" rotation="90 180 0" />
      <VidComponent markerpath="/Patterns/pattern-E.patt" VidPath="/Videos/video-E.mp4" scale="3 3 3" position="0 0 0" rotation="90 180 0" />
      <VidComponent markerpath="/Patterns/pattern-F.patt" VidPath="/Videos/video-F.mp4" scale="3 3 3" position="0 0 0" rotation="90 180 0" />
      <VidComponent markerpath="/Patterns/pattern-G.patt" VidPath="/Videos/video-G.mp4" scale="3 3 3" position="0 0 0" rotation="90 180 0" />
      <VidComponent markerpath="/Patterns/pattern-H.patt" VidPath="/Videos/video-H.mp4" scale="3 3 3" position="0 0 0" rotation="90 180 0" />
      <ArComponent markerPath="/Patterns/pattern-A.patt" modelPath="/Puppy/scene.gltf" scale="0.5 0.5 0.5" position="0 0 0" rotation="90 180 0" />
    </>
  )
}

export default App
