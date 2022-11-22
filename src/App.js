import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import Movies from './components/Movies/Movies';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovies = async (searchValue) => {
    const url = `https://api.tvmaze.com/search/shows?q=${searchValue}`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    setMovies(responseJSON);
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  return (
    <>
      <NavBar/>
      <div className='app'>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
        <Movies movies={movies}/>
      </div>
    </>
  );
}

export default App;