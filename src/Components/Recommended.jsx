import React, { useContext } from 'react'
import { Context } from '../Context';
import Card from './Card';
export default function Recommended() {
    let context = useContext(Context)

  return (
    <div id="recommendeds">
      <h1 style={{ marginBottom: '30px' }}>Recommended for you</h1>
          <div className="containerBox">
            {context.movies.map((movie)=>{
              return <Card movie={movie} title={movie.title} isBookmarked={movie.isBookmarked} key={movie.title + movie.category}  />
            })}
          </div>
    </div>
  )
}
