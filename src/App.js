import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Movies from './components/Movies/Movies';

const App = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const url = 'http://www.omdbapi.com/?s=avengers&apikey=b4e8a7d8';
    const response = await fetch(url);
    const responseJSON = await response.json();
    setMovies(responseJSON.Search);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <NavBar/>
      <div className='app'>
        <Movies movies={movies}/>
      </div>
    </>
  );
}

test

export default App;