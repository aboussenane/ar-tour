//state variable for isDisplayed
//if isDisplayed -> link pause/play, scale buttons
//if playing -> pause + vice versa
import ArComponent from './Components/ArComponent'
import VidComponent from './Components/VidComponent'
import './App.css'


function App() {
  

  return (
    <>
      <VidComponent markerpath="/Patterns/pattern-A.patt" VidPath="/Images/video (10).mp4" scale="3 3 3" position="0 0 0" rotation="90 180 0" />
      
    </>
  )
}

export default App
