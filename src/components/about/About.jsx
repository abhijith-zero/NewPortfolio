import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_image from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
          <div className="article-box">
            <article className='about-card'>
              {/* <BsBookmarkStar className='about__icon'/> */}
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className='about-card'>
              {/* <BsBookmarkStar className='about__icon'/> */}
              <h5>Projects </h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <div className="about-para">
            <p>I am a software engineer with one year experience in developing with frontend and backend technologies.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
