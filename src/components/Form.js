import React, { Component } from 'react';
// import axios from 'axios';

class Form extends Component {
    constructor() {
        super();

        this.state = {
            countrySelection: "",
            genreSelection: "",
        }
        // console.log('FormComponent is created');
    }
    
    handleCountryChange = (e) => {
        // console.log('Selection Country has changed', e.target.value);

        this.setState({
            countrySelection: e.target.value
        }) 
    }

    handleGenreChange = (e) => {
        // console.log('Selection Genre has changed', e.target.value);

        this.setState({
            genreSelection: e.target.value,
        })
    }
    
    handleClick = (e) => {
        e.preventDefault();
        console.log('BUTTON PRESSED!');
        
        // Axios Call here
        const apikey = 'xJRCV569Cb2TTGYIhYRCDph0aALGV9q1';

        
        // axios({
        //     url: 'https://app.ticketmaster.com/discovery/v2/events.json' ,
        //     method: 'GET',
        //     responseType: 'json',
        //     params: {
        //         apikey: apikey,
        //         classificationName: 'music',
        //         countryCode: this.state.countrySelection,
        //         genreId: this.state.genreSelection,
        //     }
        // }).then((response) => {
        //     console.log(response.data);

        //     this.setState({
        //         : response.data._embedded.events.classificationName,
        //     })
        // })
    }

    // componentDidUpdate() {
    //     this.state = {
            
    //     }
    // }

    render() {
        // console.log('FormComponent is being rendered..');

        return (
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
                <button type="submit" onClick={ (e) => this.props.fromMain(e, this.state.countrySelection, this.state.genreSelection)}>Find Shows</button>
            </form>

            <div className="resultsArea">
                {this.state.shows.map((show, index) => {
                    return (
                        <ShowsToDisplay />
                    )
                })}
            </div>
        );
    }

    // componentDidMount() {
    //     console.log('FormComponent has mounted!');
    // }

    // componentDidUpdate() {
    //     console.log('FormComponent is updated!');
    // }

    // componentWillUnmount() {
    //     console.log('HeaderComponent is unmounted!');
    // }
}

export default Form;