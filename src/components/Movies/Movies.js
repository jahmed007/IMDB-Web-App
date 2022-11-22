import './Movies.css';
import React from 'react';

const Movies = (props) => {
    return (
        <div>
            <div className='movies'>
                <h2 className='movies-popular-title'>Popular Movies<hr></hr></h2>
                {props.movies.map((movie, index) => <img className='movie-poster' src={movie.show.image.medium}></img>)}
            </div>
        </div>
    );
}



export default Movies;