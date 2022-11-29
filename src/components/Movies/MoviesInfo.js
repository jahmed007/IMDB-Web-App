import './MoviesInfo.css';
import React from 'react';

const MoviesInfo = ({movie}) => {
    return (
        <div className='movies-info'>
            <ul>
                <h2>{String(movie.show.name)}</h2>
                <p>{String(movie.show.summary)}</p>
                <p>{String(movie.show.premiered)}</p>
            </ul>
        </div>
    );
};

export default MoviesInfo;