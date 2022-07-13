import React, { useEffect, useState } from "react";
import './App.css';
import Movie from './components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f886b00623c0bd554fcabe63f784c0e7&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=f886b00623c0bd554fcabe63f784c0e7&query="


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
      });
  };

const handleOnSubmit = (e) => {
  e.preventDefault();

  if(searchTerm){

      getMovies(SEARCH_API + searchTerm);
    setSearchTerm("");
  }
};

const handleOnChange = (e) => {
  setSearchTerm(e.target.value);
}
  return (
  <>
    <header>
      <form onSubmit={handleOnSubmit}>
    <input className="search" type="search" placeholder="Search.." value={searchTerm} onChange={handleOnChange}/> 
    </form>
    </header>
        <div className="movie-container">
          {movies.length > 0 && movies.map((movie) => 
          <Movie key={movie.id} {...movie} />)}
        </div> 
  </>
  );
}

export default App;
