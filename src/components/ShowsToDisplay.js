import React from 'react';

// Component to print the shows to the page
// No state needed here! FUNCTION COMPONENT

function ShowsToDisplay(props) {

    return (
        <div className='resultField'>
            <h2>Results for your search:</h2>
            <ul className = "results">
            
            { props.showResults.map( (show) => 
                {
                    console.log(show);
                    return (
                                <li key={show.id}>
                                    <h2>{show.name}</h2>
                                    <p>Date: {show.dates.start.localDate}</p> 
                                    <p>Time: {show.dates.start.localTime}</p>
                                    <h3>Venue: {show._embedded.venues[0].name}</h3>
                                    <h4>Link to Event at Ticketmaster: </h4>
                                    <div className="links">
                                    <a href={show.url} target="_blank">Click here for more info.</a> 
                                    </div>
                                </li>
                        )
                    }
                    )
                }
            </ul>
        </div>
    )
}

export default ShowsToDisplay;