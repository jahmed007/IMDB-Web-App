import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Movies from './components/Movies/Movies';

const App = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const url = 'https://api.tvmaze.com/search/shows?q=girls';
    const response = await fetch(url);
    const responseJSON = await response.json();
    setMovies(responseJSON);
    console.log(responseJSON)
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
 

export default App;