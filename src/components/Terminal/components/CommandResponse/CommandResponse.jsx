import React from 'react'
import Help from '../Help/Help'
import BannerMessage from '../Banner/BannerMessage'
import Skills from '../Skills/Skills'
import Experience from '../Experience/Experience'
import Education from '../Education/Education'
import Projects from '../Projects/Projects'

const commands = {
    help: <Help />,
    h: <Help />,
    bmod: <BannerMessage />,
    skill: <Skills />,
    exp: <Experience />,
    edu: <Education />,
    proj: <Projects />,
}

function CommandResponse(props) {
    return (
        commands[props.command] || (
            <span>{props.command}: command not found</span>
        )
    )
}

export default CommandResponse
