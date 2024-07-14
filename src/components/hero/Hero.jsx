import React from 'react'
import profile_img from '../../assets/profile_img.svg'
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero">
        <img src={profile_img} alt="" />
        <h1><span>I'm Abhijith Rajesh</span>, Software Developer based in India.</h1>
        <p>I am a Full Stack Developer from Kerala, India with 2 years of experience in multiple projects</p>
        <div className="hero-action">
            <div className="hero-connect">
                Connect with me
            </div>
            <div className="hero-resume"> My resume</div>
        </div>
    </div>
  )
}

export default Hero