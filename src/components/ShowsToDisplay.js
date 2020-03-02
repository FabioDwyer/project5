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
                            <ul className = "results">
                                <li key={index}>
                                    <h2>{show.name}</h2>
                                    <p>Date: {show.dates.start.localDate}</p> 
                                    <p>Time: {show.dates.start.localTime}</p>
                                    <h3>Venue: {show._embedded.venues[0].name}</h3>
                                    <div className="imgContainer">
                                        <img src={show.images[8].url} alt="Artist display" />
                                    </div>
                                    {/* <p>{show.priceRanges[0].currency}</p>  */}
                                    {/* <p>{show.priceRanges[0].min}</p> */}
                                    {/* <p>{show.priceRanges[0].max}</p>    */}
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