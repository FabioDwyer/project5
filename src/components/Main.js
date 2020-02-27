import React, { Component } from 'react';
import Form from './data/Form';
import saxPlayer from '../assets/saxPlayer.jpg';

class Main extends Component {
    constructor() {
        super();

        console.log('MainComponent is created');
    }

    componentDidMount() {
        console.log('MainComponent has mounted!');
    }

    componentDidUpdate() {
        console.log('MainComponent is updated!');
    }

    componentWillUnmount() {
        console.log('HeaderComponent is unmounted!');
    }

    render() {
        console.log('MainComponent is being rendered..');

        return (
            <main className="App-main">
                <div className="wrapper">
                    <div class='flexContainer'>
                        <div className="imgConatiner">
                            <img src={saxPlayer} alt="Jazz sax player"/>
                        </div>
                        <div className="formContainer">
                            <h2>Select a Country and a Musical Genre</h2>
                            <Form />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;