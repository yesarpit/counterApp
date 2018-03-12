import React, { Component } from 'react';



export class CounterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            count:this.props.counterCount
        }
    }

    updatedState(operation) {
        this.setState({ counter: operation === 'increment' ? this.state.counter + 1 : this.state.counter - 1 })
    }
    render() {
        return (
            <div className="counterContainer">
                <span className="counterCount">Counter:{this.state.count}</span>
                <div className="digitContainer">{this.state.counter}</div>
                <div className="buttonContainer">
                    <input className="increment" type='button' value="Increment" onClick={this.updatedState.bind(this, 'increment')} />
                    <input className="decrement" type='button' value="Decrement" onClick={this.updatedState.bind(this)} />
                    <input className="addCounter" type="button" value="Add counter" onClick={this.props.createCounter} />
                </div>
            </div>

        )
    }
}