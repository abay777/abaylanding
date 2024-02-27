
import './App.css'
import { ChooseMe, Contact, Hero, Navbar, ProjectIntro, Skills } from './Components'
import { ParallaxProvider } from 'react-scroll-parallax';
function App() {


  return (
    <ParallaxProvider> 
      <Navbar/>
      <Hero/>
      <Skills/>
      <ChooseMe/>
      <ProjectIntro/>
      <Contact/>
    </ParallaxProvider>
  )
}

export default App
