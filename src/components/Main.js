import React, { Component } from 'react';

// Custom Imports:
import Form from './Form';

class Main extends Component {

    render() { 
        return (
            <main className="App-main">
                <div className="wrapper">
                    <div className="formContainer">
                        <h2>Select a Country and a Musical Genre</h2> 
                        <Form />
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;