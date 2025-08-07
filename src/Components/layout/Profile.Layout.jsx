import React from 'react'
import Navbar from '../pages/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'

function Profile() {
    return (
        <div>
            <Navbar />
            <div id="home">
                <Home />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    )
}

export default Profile
