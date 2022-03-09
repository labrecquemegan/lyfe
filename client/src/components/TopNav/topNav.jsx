import React, {useEffect} from 'react'
import gsap from 'gsap'
import SplitText from '../../utils/Split3.min'
import './style.scss'
import logo from '../../images/png/logo-white.png'

// Href Imports

export default function Header() {
  useEffect(() => {
    const split = new SplitText('.nav_links', {
      type: 'lines',
      linesClass: 'lineChildren'
    });

    const splitParent = new SplitText('.nav_links', {
      type: 'lines',
      linesClass: 'lineParent'
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2"
    })
  })
  return (
    <header data-scroll-section>
        <img 
        className='logo'
        src={logo} />
      <nav>
        <ul class="nav_links hide">
          <li><a href='#'>Exercise</a></li>
          <li><a href='#'>Nutrition</a></li>
          <li><a href="#">Mindfulness</a></li>
          <li><a href="#">Water Intake</a></li>
          <a class="end-button" href="#"><button>Log In</button></a>
        </ul>
      </nav>
    </header>
  )
}
