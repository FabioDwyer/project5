import React from 'react';

// Component to print the shows to the page
// No state needed here! FUNCTION COMPONENT

function ShowsToDisplay(props) {
    console.log('Show results ', props.showResults);

    return (
        <div className='results'>
            <h2>Results for your search:</h2>
            
            { props.showResults.map( (show, index) => 
                {
                    console.log(show);
                    return (
                            <ul>
                                <li key={index}>
                                <p>{show.name}</p>
                                <p>{show.dates.localDate}</p>
                                <p>{show.venues}</p>
                                <p>{show.price}</p>
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