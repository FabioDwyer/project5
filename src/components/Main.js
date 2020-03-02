import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';
import ShowsToDisplay from './ShowsToDisplay';


class Main extends Component {
    constructor() {
        super();
        this.state= {
            shows: []
        }
    }

    componentDidMount() {
        axios({
            url: 'https://app.ticketmaster.com/discovery/v2/events.json',
            method: 'GET',
            responseType: 'json',
            params: {
                apikey: apikey,
                classificationName: 'music',
                countryCode: this.state.countrySelection,
                genreId: this.state.genreSelection,
            }
        }).then((response) => {
            console.log(response.data);

            this.setState({
                shows: response.data._embedded.events.classificationName
            })
        })
    }

// Function to get the user selection from the Form (childrenComponent) to to Main (parentComponent)
    showsRequested = (e, userChoice) => {
        e.preventDefault();
        console.log(userChoice);
        console.log('Which shows ', userChoice);
        this.findShows(userChoice);
    }

// Function to use the user selections to filter through events-music array, find the chosen shows, then narrow THAT group down to de country and genre. Then save that to state.
findShows = (countrySelection, genreSelection) => {
    console.log('Find the shows ', countrySelection, genreSelection);

    const copyOfAllShows = [...this.state.shows];

    const userShows = copyOfAllShows.filter( (show) => {
        return show[countrySelection] === true && show[genreSelection] === true;
    });
    
    console.log(userShows);

    this.state({
        selectedShows: userShows
    }, () => {
    });
}

    render() {
        console.log(this.props);  
        return (
            <main className="App-main">
                <div className="wrapper">
                    <div className="formContainer">
                        <h2>Select a Country and a Musical Genre</h2> 
                    {/* Parent sending the function to children (form). Not the whole function, just the part necessary, showsRequested. Don't call it here, or you'll render it again in the wrong place! */}
                    <Form fromMain={this.showsRequested} />
                    <ShowsToDisplay results={this.state.selectedShows} />
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;