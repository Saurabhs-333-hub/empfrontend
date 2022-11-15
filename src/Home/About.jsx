import React from 'react'
import { useState } from 'react'
import Arrow from './forward.png'
const About = () => {
    const [x, setX] = useState(false)
    const handleclick = () => {
        setX((current) => !current)
    }
    return (
        <>
            <button className="aboutbtn" onClick={handleclick}>
                About Us <span><img src={Arrow} alt="" /></span>
            </button>
            <section className='about' style={{ right: x ? '120px' : '-1200px' }} >
                <h2>Employed Bharat</h2> is an online website which is developed to find jobs for all categories of employees in which an employer can post jobs according to his/her needs.
                It uses navigation for migrating from one screen to another. Also , for all crud operations seperate functions are used.
                Employed Bharat have a goal of connecting to your network for better job opportunities for all sections as per their skills.
                <div className="section">
                    <button className="aboutbtn" onClick={handleclick}>
                        Back
                    </button>
                </div>
            </section>
        </>
    )
}

export default About