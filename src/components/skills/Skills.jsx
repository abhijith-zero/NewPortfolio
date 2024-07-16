import React from 'react'
import './Skills.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Skills = () => {
    return (
        <div className="skills">
            <div className="heading">
                <h2>My Experience</h2>
            </div>


            <div className="experience__container">

                <div className="experience__frontend">
                    <h3>Frontend Development</h3>

                    <div className="experience__content">

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>React JS</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Vue JS</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>CSS</h4>
                            </div>
                        </article>
                    </div>
                </div>
                {/* End of frontend part */}

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Java</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>MySQL</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Mongo Db</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>php</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Python</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Node JS</h4>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills