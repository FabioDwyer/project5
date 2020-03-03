import React, { Component } from 'react';

class Footer extends Component {
    // constructor() {
    //     super();

    //     console.log('FooterComponent is created');
    // }

    render() {
        // console.log('FooterComponent is being rendered..');

        return (
            <footer className="App-footer">
                <div className="wrapper">
                    <h4>App created with React by Fabio Dwyer for Juno College, 2020. &copy;</h4>
                    <h5>API courtesy of Ticketmaster &copy; | Photo by Janine Robinson on Unsplash</h5>
                </div>
            </footer>
        );
    }
}

export default Footer;