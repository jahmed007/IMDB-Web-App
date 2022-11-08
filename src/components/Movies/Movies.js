import './Movies.css';
import React from 'react';
import { useState } from 'react'
import { MovieDetails } from './MovieDetails'

const Movies = (props) => {

    const [showDetails, setShowDetails] = useState(false)
    const handleClick = event => {
        setShowDetails(!showDetails)
        console.log('Image clicked');
    };
    return (
        <div>
            <div className='movies'>
                <h2 className='movies-popular-title'>Popular Movies<hr></hr></h2>
                {props.movies.map((movie, index) => <div><img className='movie-poster' src={movie.Poster} alt={movie.movie} onClick={handleClick}>
                </img>{showDetails ? <MovieDetails movie={movie} /> : ""}</div>
                )}
                )
            </div>
        </div >
    );
}

export default Movies;

// { showDetails && (
//     <div>
//         <h2>{movie.Title}</h2>
//     </div>

// { showDetails && <MovieDetails/>}