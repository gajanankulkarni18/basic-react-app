import React, { Component } from 'react'

export class StateComponent extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome to Upgrad Demo'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thanks for Subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default StateComponent
