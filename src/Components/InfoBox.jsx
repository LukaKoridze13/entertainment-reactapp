import React from 'react'
import Movie from '../assets/icon-category-movie.svg'
import TvShow from '../assets/icon-category-tv.svg'

export default function InfoBox(props) {
  let movie = props.movie
  let img;
  movie.category === 'Movie' ? img = Movie : img = TvShow
  return (
    <div id='info-box' style={{marginTop:props.marginTop}}>
      <div className="top">
        <p>{movie.year}&nbsp; &#x2022; &nbsp;<img src={img} alt="Movie Icom" /> {movie.category}&nbsp; &#x2022;&nbsp; {movie.rating}</p>
      </div>
      <h2 className="name">{movie.title}</h2>
    </div>
  )
}
