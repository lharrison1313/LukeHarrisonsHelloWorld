import React from 'react'

function DummyPrompt(props) {
    return (
        <div className="prompt">
            <span className="prompt-prefix">luke-harrison@helloworld:</span>
            <span>{props.value}</span>
        </div>
    )
}

export default DummyPrompt
