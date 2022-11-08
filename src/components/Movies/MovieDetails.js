import './Movies.css';
import React from 'react';
import { useState } from 'react'
import { Movie } from '@mui/icons-material';

export function MovieDetails({ movie }) {

    return (
        <div>
            <ul>
                <p>{movie.Title}</p>
                <p>{movie.Year}</p>
            </ul>
        </div>
    )
}
