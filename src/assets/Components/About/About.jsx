import React from 'react'
import './About.css'
import about_img from '../../../assets/about.png'
import play_icon from '../../../assets/play-icon.png'

function About({setPlayState}) {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero ducimus molestiae, quod minima soluta possimus quia earum deserunt at provident, expedita perspiciatis quasi blanditiis harum ab fuga ad veritatis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero error quam quibusdam officiis rerum nam culpa repellendus nemo nostrum nihil.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quod! Quos omnis eligendi eius sapiente delectus saepe suscipit ullam. Sed! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptates odio cumque error eaque, odit eius vitae doloremque expedita officiis?
            </p>
        </div>
    </div>
  )
}

export default About