
import './App.css'
import { ChooseMe, Hero, Navbar, Skills } from './Components'
import { ParallaxProvider } from 'react-scroll-parallax';
function App() {


  return (
    <ParallaxProvider> 
      <Navbar/>
      <Hero/>
      <Skills/>
      <ChooseMe/>
    </ParallaxProvider>
  )
}

export default App
