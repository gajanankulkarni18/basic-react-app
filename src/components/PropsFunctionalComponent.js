import React from 'react'

function PropsFunctionalComponent(props) {
    console.log(props)
    return (
        <div>
            <h1>{props.name} : {props.Location}</h1>
        </div>
    )
}

export default PropsFunctionalComponent
