import './Movies.css';
import React, { useState } from 'react';
import MoviesInfo from './MoviesInfo';

const Movies = (props) => {
    const [movieInfo, setmovieInfo] = useState(false);
    const toggleInfo = event => {
        setmovieInfo(!movieInfo);
    };


    return (
        <div>
            <div className='movies'>
                <h2 className='movies-popular-title'>Popular Movies<hr></hr></h2>
                {props.movies.map((movie) => <div><img className='movie-poster' src={movie.show.image.medium} alt={movie.movie} onClick={(toggleInfo)}>
                </img>{movieInfo ? <MoviesInfo movie={movie}/> : ""}</div>
                )};

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

{/* <img className='movie-poster' src={"https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg"} alt={movie.movie} onClick={handleClick}>
</img>{ showDetails ? <MovieDetails movie={movie} /> : "" } */}

