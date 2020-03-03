import React, { Component } from 'react';
import axios from 'axios';
import ShowsToDisplay from './ShowsToDisplay';

class Form extends Component {
    constructor() {
        super();

        this.state = {
            countrySelection: "",
            genreSelection: "",
            shows: []
        }
    }
    
    handleCountryChange = (e) => {
        this.setState({
            countrySelection: e.target.value
        })
    }

    handleGenreChange = (e) => {       
        this.setState({
            genreSelection: e.target.value,
        })
    }
    
    handleClick = (e) => {
        e.preventDefault();
        // Error handling:
        this.state.genreSelection && this.state.countrySelection
            ?
                // axios call etc. if complete
                this.confirmSubmit()
            :
                //if either is falsy, "", produce alert informing of
                alert('Please select a Country and a Genre.')
    }

    confirmSubmit = () => {
        // Axios Call here
        const apikey = 'xJRCV569Cb2TTGYIhYRCDph0aALGV9q1';

        axios({
            url: 'https://app.ticketmaster.com/discovery/v2/events.json' ,
            method: 'GET',
            responseType: 'json',
            params: {
                apikey: apikey,
                classificationName: 'music',
                countryCode: this.state.countrySelection,
                genreId: this.state.genreSelection,
                id: this.state.shows.id
            }
        }).then((response) => {

            this.setState({
                shows: response.data._embedded.events
            })
        })
    }
    
    
    render() {
        return (
            <div>
                <form className="App-form" action="submit">
                    <div className="flexSelect">
                        <select name="country" id="country" onChange={this.handleCountryChange}>
                            <option value="">Select a Country</option>
                            <option value="CA">Canada</option>
                            <option value="US">United States</option>
                        </select>
                        <select name="genre" id="genre" onChange={this.handleGenreChange}>
                            <option value="">Select a Musical Genre</option>
                            <option value="KnvZfZ7vAvd">Blues</option>
                            <option value="KnvZfZ7vAvE">Jazz</option>
                        </select>
                    </div>
                    <button type="submit" 
                    onClick={this.handleClick}
                    >Find Shows</button>
                </form>
                <ShowsToDisplay showResults={this.state.shows} />
            </div>
        );
    }

}

export default Form;