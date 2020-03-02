import React, { Component } from 'react';

class Header extends Component {
    // constructor() {
    //     super();
        
    //     console.log('HeaderComponent is created');
    // }


    render() {
        // console.log('HeaderComponent is being rendered..');

        return(
            <header className="App-header">
                <h1>Jazz and Blues Concerts Finder</h1>
            </header>
        ); 
    }
}

export default Header;