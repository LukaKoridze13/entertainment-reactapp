import React from 'react'
import MoviesIcon from './MoviesIcon'
export default function InfoBox(props) {
  let movie = props.movie
  return (
    <div id='info-box'>
      <p>{movie.year} &#x2022; <MoviesIcon /> {movie.category} &#x2022; {movie.rating}</p>
      <h2 className="name">{movie.title}</h2>
    </div>
  )
}
