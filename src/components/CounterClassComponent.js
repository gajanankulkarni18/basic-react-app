import React, { Component } from 'react'

export class CounterClassComponent extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    incrementCount() {
        console.log(this.state.count)
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={() => this.incrementCount()}>Increment</button>
            </div>
        )
    }
}

export default CounterClassComponent
