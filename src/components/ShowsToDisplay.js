import React from 'react';

// Component to print the shows to the page
// No state needed here! FUNCTION COMPONENT

function ShowsToDisplay(props) {
    console.log(props);

    return (
        <div className='results'>
            <h2>Results for your search:</h2>
            { props.results.map( (events) => 
                {
                    return (
                            <ul>
                                <li                 key={events}>
                                <p>{events.name}</p>
                                <p>{events.date}</p>
                                <p>{events.venue}</p>
                                </li>
                            </ul>
                        )
                    }
                )
            }
        </div>
    )
}

export default ShowsToDisplay;