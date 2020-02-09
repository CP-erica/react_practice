import React, { Component } from 'react'

export default class HoverCounter extends Component {
    render() {
        const {count,increamentCount} = this.props
        return (
            <div>
                <h1 onMouseEnter={increamentCount}>Hover {count} times</h1>
            </div>
        )
    }
}
