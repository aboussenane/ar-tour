import { useState } from 'react'
import ArComponent from './Components/ArComponent'
import './App.css'


function App() {
  

  return (
    <>
      <ArComponent markerPath="/Patterns/pattern-A.patt" modelPath="/Puppy/scene.gltf" scale="0.5 0.5 0.5" position="0 0 0" rotation="180 270 90" />
      
    </>
  )
}

export default App
