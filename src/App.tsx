
import './App.css'
import { Hero, Navbar, Skills } from './Components'
import { ParallaxProvider } from 'react-scroll-parallax';
function App() {


  return (
    <ParallaxProvider> 
    <Navbar/>
    <Hero/>
    <Skills/>
    </ParallaxProvider>
  )
}

export default App
