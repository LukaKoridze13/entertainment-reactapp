import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context'
import Card from '../Components/Card'
import Searched from './Searched'
export default function Bookmarks() {
  let context = useContext(Context)
  const [movies, setMovies] = useState(false)
  const [shows, setShows] = useState(false)
  const [show, setShow] = useState(true)
  useEffect(() => {
    if (context.search !== 'Search for movies or TV series' && context.search.length > 0) {
      setShow(false)
    } else {
      setShow(true)
    }
  }, [context.search])
  useEffect(() => {
    context.movies.forEach((movie) => {
      if (movie.isBookmarked && movie.category === 'Movie') {
        setMovies(true)
      } else if (movie.isBookmarked){
        setShows(true)
      }
    })
  }, [context.movies])
  if (movies && shows && show) {
    return (<section className="movies">
      <h1>Bookmarked Movies</h1 >
      <div className="containerBox">
        {context.movies.map((movie) => {
          if (movie.category === 'Movie' && movie.isBookmarked) {
            return <Card movie={movie} title={movie.title} isBookmarked={movie.isBookmarked} key={movie.title + movie.category + 'movie'} />
          } else {
            return false
          }
        })}
      </div>
      <h1>Bookmarked TV Series</h1>
      <div className="containerBox">
        {context.movies.map((movie) => {
          if (movie.category === 'TV Series' && movie.isBookmarked) {
            return <Card movie={movie} title={movie.title} isBookmarked={movie.isBookmarked} key={movie.title + movie.category + 'movie'} />
          } else {
            return false
          }
        })}
      </div>
    </section >)
  }else if(movies && show){
    return (<section className="movies">
      <h1>Bookmarked Movies</h1 >
      <div className="containerBox">
        {context.movies.map((movie) => {
          if (movie.category === 'Movie' && movie.isBookmarked) {
            return <Card movie={movie} title={movie.title} isBookmarked={movie.isBookmarked} key={movie.title + movie.category + 'movie'} />
          } else {
            return false
          }
        })}
      </div>
      <h1>No Bookmarked TV Series</h1>
    </section >)
  }else if(shows && show){
    <section className="movies">
      <h1>No Bookmarked Movies</h1 >
      <h1>Bookmarked TV Series</h1>
      <div className="containerBox">
        {context.movies.map((movie) => {
          if (movie.category === 'TV Series' && movie.isBookmarked) {
            return <Card movie={movie} title={movie.title} isBookmarked={movie.isBookmarked} key={movie.title + movie.category + 'movie'} />
          } else {
            return false
          }
        })}
      </div>
    </section >
  }else if(show){
    return <section className='movies'><h1>No Bookmarked Movies or TV Shows</h1></section>
  }else if(!show){
    return <Searched category='All' bookmarked={true}/>
  }
}