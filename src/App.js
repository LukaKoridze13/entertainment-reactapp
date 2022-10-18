import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import './CSS/reset.css'
import './CSS/style.scss'
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import TvSeries from "./Pages/TvSeries";
import Bookmarks from "./Pages/Bookmarks";
import Landing from "./Pages/Landing";
import data from './data.json'
import { useEffect, useState } from "react";
import {  getUserMovies, setUserMovies } from "./LocalStorage";
import { Context } from './Context'
function App() {
  const [movies, setMovies] = useState(data)
  function addToBookmarks(movieTitle) {
    let newMovies = movies.map((movie)=>{
      if(movie.title === movieTitle){
        movie.isBookmarked = true
        return movie
      }else{
        return movie
      }
    })
    setMovies(newMovies)
    setUserMovies(newMovies)
  }
  function removeFromBookmarks(movieTitle) {
    let newMovies = movies.map((movie) => {
      if (movie.title === movieTitle) {
        movie.isBookmarked = false
        return movie
      } else {
        return movie
      }
    })
    setMovies(newMovies)
    setUserMovies(newMovies)
  }
  useEffect(() => {
    let bookmarked = getUserMovies(data)
    setMovies(bookmarked);
  }, [])
  return (
    <Context.Provider value={{ movies, addToBookmarks, removeFromBookmarks }}>
      <div className="container">
        <Routes>
          <Route path="/entertainment-reactapp/" element={<Login />} />
          <Route path="/entertainment-reactapp/register" element={<Register />} />
          <Route path="/entertainment-reactapp/home/" element={<Home />}>
            <Route index element={<Landing />} />
            <Route path="movies" element={<Movies />} />
            <Route path="tv-series" element={<TvSeries />} />
            <Route path="bookmarks" element={<Bookmarks />} />
          </Route>
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
