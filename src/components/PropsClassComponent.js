import React, { Component } from 'react'

export class PropsClassComponent extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name} : {this.props.Location}</h1>
            </div>
        )
    }
}

export default PropsClassComponent
