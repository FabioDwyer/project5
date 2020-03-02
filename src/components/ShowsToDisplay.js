import React from 'react';

// Component to print the shows to the page
// No state needed here! FUNCTION COMPONENT

function ShowsToDisplay(props) {
    console.log(props);

    return (
        <div className='results'>
            <h2>Results for your search:</h2>
            { props.results.map( (shows) => 
                {
                    return (
                            <ul>
                                <li key={index}
                                key={shows.name}
                                key={shows.date}
                                key={shows.venue}>
                                    <p>{shows.name}</p>
                                    <p>{shows.date}</p>
                                    <p>{shows.venue}</p>
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