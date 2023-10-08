import React from 'react'
import figlet from 'figlet'
import doom from 'figlet/importable-fonts/Doom'
import Help from '../Help/Help'
import './BannerMessage.css'

figlet.parseFont('Doom', doom)

function BannerMessage() {
    return (
        <div>
            <div id="bmod-header">
                <div id="bmod-name">
                    <pre>
                        <code>{figlet.textSync('Luke', 'Doom')}</code>
                    </pre>
                    <pre>
                        <code>{figlet.textSync("Harrison's", 'Doom')}</code>
                    </pre>
                </div>
                <div id="bmod-helloworld">
                    <pre>
                        <code>{figlet.textSync('Hello World', 'Doom')}</code>
                    </pre>
                </div>
            </div>
            <span>
                Welcome to Luke Harrison's Hello World, a site dedicated to the
                works and accomplishments of Luke Harrison. Below is a list of
                commands you can use to navigate the site:
            </span>
            <Help />
        </div>
    )
}

export default BannerMessage
