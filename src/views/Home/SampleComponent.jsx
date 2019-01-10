import React, { Component } from 'react'

export default class SampleComponent extends Component {
    render(props) {
        console.log(this.props)
        return (
            <div>
                Sample component
            </div>
        )
    }
}
