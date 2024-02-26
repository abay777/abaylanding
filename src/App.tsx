
import './App.css'
import { ChooseMe, Hero, Navbar, ProjectIntro, Skills } from './Components'
import { ParallaxProvider } from 'react-scroll-parallax';
function App() {


  return (
    <ParallaxProvider> 
      <Navbar/>
      <Hero/>
      <Skills/>
      <ChooseMe/>
      <ProjectIntro/>
    </ParallaxProvider>
  )
}

export default App
