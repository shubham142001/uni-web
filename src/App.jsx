import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'  
import Navbar from './assets/Components/Navbar/Navbar'
import Hero from './assets/Components/Hero/Hero'
import Programs from './assets/Components/Hero/Programs/programs'
import Title from './assets/Components/Title/Title'
import About from './assets/Components/About/About'
import Campus from './assets/Components/Campus/Campus'
import Testimonial from './assets/Components/Testimonial/Testimonial'
import Contact from './assets/Components/Contact/Contact'
import Footer from './assets/Components/Footer/Footer'
import Videoplayer from './assets/Components/Videoplayer/Videoplayer'


function App() {

  const [playState, setPlayState]=useState(false)

  return (
    <div>
    <Navbar />
    <Hero />
    <div className='container'>
    <Title subTitle='Our Program' title='What We Offer'/>
    <Programs /> 
    <About setPlayState={setPlayState}/>
    <Title subTitle='Gallery' title='Campus Photos'/>
    <Campus />
    <Title subTitle='Testimonials' title='What Student Says'/>
    <Testimonial />
    <Title subTitle='Contact Us' title='Get in Touch'/>
    <Contact />
    <Footer />
    </div>
    <Videoplayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
