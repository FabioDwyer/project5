import React, { Component } from 'react';

class Header extends Component {
    // constructor() {
    //     super();
        
    //     console.log('HeaderComponent is created');
    // }


    render() {

        return(
            <header className="App-header">
                <div className="wrapper">
                    <h1>Jazz and Blues Concerts Finder</h1>
                </div>
            </header>
        ); 
    }
}

export default Header;