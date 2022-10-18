import React, { useContext } from 'react'
import { Context } from '../Context';
import Card from './Card';
export default function Recommended() {
    const movies = useContext(Context).movies
  return (
    <div id="recommendeds">
          <h1>Recommended for you</h1>
          <div className="containerBox">
            {movies.map((movie)=>{
                return <Card movie={movie} title={movie.title} isBookmarked={movie.isBookmarked} key={movie.title+movie.category} />
            })}
          </div>
    </div>
  )
}
