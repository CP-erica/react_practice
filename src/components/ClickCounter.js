import React, { Component } from 'react'

export default class ClickCounter extends Component {
    render() {
        const {count, increamentCount} = this.props
        return (
            <div className='clickCounter'>
                <button onClick={increamentCount}>Clicked {count} times</button>
            </div>
        )
    }
}
