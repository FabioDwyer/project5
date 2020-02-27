import React, { Component } from 'react';

class Footer extends Component {
    constructor() {
        super();

        console.log('FooterComponent is created');
    }

    render() {
        console.log('FooterComponent is being rendered..');

        return (
            <footer className="App-footer">
                <h4>App created with React by Fabio Dwyer for Juno College, 2020.</h4>
                <h5>API courtesy of Ticketmaster &copy;</h5>
                <h6>&copy; Fabio Dwyer</h6>
            </footer>
        );
    }
}

export default Footer;