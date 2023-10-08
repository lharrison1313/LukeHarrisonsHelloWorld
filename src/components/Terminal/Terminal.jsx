import React, { useState } from 'react'
import DummyPrompt from './components/DummyPrompt/DummyPrompt'
import './Terminal.css'
import CommandResponse from './components/CommandResponse/CommandResponse'

function Terminal() {
    const [terminalOutput, setTerminalOutput] = useState([
        processCommands('bmod', []),
    ])
    const [promptValue, setPromptValue] = useState('')

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            let newOutput = processCommands(promptValue.trim(), terminalOutput)
            setTerminalOutput(newOutput)
            setPromptValue('')
            setTimeout(updateScroll, 50)
        }
    }

    const handlePromptChange = (event) => {
        setPromptValue(event.target.value)
    }

    function updateScroll() {
        var element = document.getElementById('terminal-container')
        element.scrollTop = element.scrollHeight
    }

    return (
        <div id="terminal-container">
            {terminalOutput.map((element) => element)}
            <div className="prompt">
                <span className="prompt-prefix">luke-harrison@helloworld:</span>
                <input
                    className="prompt-input"
                    type="text"
                    value={promptValue}
                    onChange={handlePromptChange}
                    onKeyUp={handleKeyPress}
                />
            </div>
        </div>
    )
}

function processCommands(command, terminalOutput) {
    let newOutput = terminalOutput.map((element) => {
        return element
    })
    newOutput.push(<DummyPrompt value={command} />)
    if (command === 'clear') {
        newOutput = []
    } else {
        newOutput.push(<CommandResponse command={command} />)
    }
    return newOutput
}

export default Terminal
