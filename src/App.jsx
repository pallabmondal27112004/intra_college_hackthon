import { useEffect, useState } from 'react'
import './App.css'
import Header1 from './components/headers/header1/Header1'
import Header2 from './components/headers/header2/Header2'
import Header3 from './components/headers/header3/Header3'
// import CarouselSlider from './components/sliderCaresole/caresole'
import Notice from './components/admisionOpenNotice/Notice'
// import About from './components/about/About'
// import SplashScreen from './components/splashScreen/splashScreen'
// import CourceSection   from './components/courceSection/CourceSection'
import Contect from './components/contect/Contect'
import HeroBanner from './components/sliderCaresole/caresole'
// import Test from './components/courceSection/Test'
import CoursesSection from './components/courceSection/Test'
import Footer from './components/footer/Footer'
import GallerySection from './components/gallary/Gallery'
// import NewCource from './components/CourceNew/NewCource'
import WelcomeSection from './components/about/About.jsx'
import { TessellateModifier } from 'three/examples/jsm/Addons.js'
import Testimonials from './components/testimonial/Testimonial'
function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const utterance = new SpeechSynthesisUtterance("Welcome to cclms.");
    // speechSynthesis.speak(utterance);
  }, []);

  return (
    <div className="app-container">
      {/* Background Image */}
      {/* <div className="background-container"></div> */}

      {/* App Components */}
      <div className='content d-flex align-items-center flex-column' style={{ width: '99.9%' }}>
        <Header1 /> 
       <Header2 /> 
         <Header3 />
        {/* <StickyNavbar/> */}
        {/* <Notice /> */}
        {/* <CarouselSlider /> */}
        <HeroBanner/>
        {/* <About className="transparent-component" />  */}
        <WelcomeSection/>
        {/* <CourceSection className="" /> */}
        {/* <Test/> */}
        <GallerySection/> 
        {/* <TessellateModifier/> */}
        <CoursesSection/>
        <Testimonials/>
        <Contect/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
