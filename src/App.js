import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import axios from 'axios';
import MovieScreen from './Components/MovieScreen';
import Watchlist from './Components/Watchlist';


function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

  const addMovie = (movie) => setWatchList([...movieList, movie])

  const removeMovie = (movie) => {
    const newState = movieList.filter((mov) => {
      return mov !== movie
    })
    setMovieList(newState)
  } 

  const getData = (props) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then((res) => {
        console.log(res.data.results)
        setMovieList(res.data.results)
      })
  };

  useEffect(() => {
    getData();
  }, [page]);



  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen 
        addMovie={addMovie}
        movieList={movieList}
        page={page}
        setPage={setPage}
        watchList={watchList}
        removeMovie={removeMovie}
        />
        <Watchlist list={movieList} removeMovie={removeMovie}/>
      </main>
    </div>
  );
}

export default App;
