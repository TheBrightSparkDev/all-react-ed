import React, { Component } from 'react'

export class LifeCyclesCDU extends Component {
    constructor(props) {
        console.log("Constructor Called")
        super(props)
        this.state = {
            greeting: 'Hello!'
        }
    }

    updateGreeting = () => {
        this.setState(prevState => {
            console.log("Update Greeting called")
            return {
                greeting: prevState.greeting === "Hello!" ? "Goodbye": "Hello!"
            }
        })
    }
    
    componentDidUpdate() {
        console.log("Component Updated")
    }

    render() {
        console.log("render method called")
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreeting} >Update Greeting</button>
            </div>
        )
    }
}

export default LifeCyclesCDU