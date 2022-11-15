import './Movies.css';
import React from 'react';
import { useState } from 'react'
import { Movie } from '@mui/icons-material';

export function MovieDetails({ movie }) {

    return (
        <div className='showDetails'>
            <ul>
                <h2>{movie.show.name}</h2>
                <p>{movie.show.summary}</p>
                <p>{movie.show.premiered}</p>
            </ul>
        </div>
    )
}
