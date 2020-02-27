import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();

        console.log('FormComponent is created');
    }

    componentDidMount() {
        console.log('FormComponent has mounted!');
    }

    componentDidUpdate() {
        console.log('FormComponent is updated!');
    }

    componentWillUnmount() {
        console.log('HeaderComponent is unmounted!');
    }
    
    handleClick = () => {
        console.log('BUTTON PRESSED!');
        this.setState({
            // Do some shit inside here!
        })
    }

    render() {
        console.log('FormComponent is being rendered..');

        return (
            <form className="App-form">
                <button onClick={this.handleClick}>Submit</button>
            </form>
        );
    }
}

export default Form;