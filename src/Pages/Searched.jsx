import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context'
import Card from '../Components/Card'
export default function Searched(props) {
  const [found,setFound] = useState(0)
  let context = useContext(Context)
  useEffect(()=>{
    let x = 0;
    if(props.bookmarked){
      context.movies.forEach((movie) => {
        let name = movie.title.toLowerCase()
        let search = context.search.toLowerCase()
        if ((movie.isBookmarked && name.includes(search)) || (movie.isBookmarked && name.includes(search))) {
          x++;
        }
      })
    }else{
      context.movies.forEach((movie) => {
        let name = movie.title.toLowerCase()
        let search = context.search.toLowerCase()
        if ((props.category === 'All' && name.includes(search)) || (props.category === movie.category && name.includes(search))) {
          x++;
        }
      })
    }
    setFound(x)
  },[context.search,context.movies,props.category,props.bookmarked])
  return (
    <section className="movies">
      <h1>Found {found} results for '{context.search}'</h1>
      <div className="containerBox">
        {context.movies.map((movie,index) => {
          let name = movie.title.toLowerCase()
          let search = context.search.toLowerCase()
          if(props.bookmarked){
            if ((movie.isBookmarked && name.includes(search)) || (movie.isBookmarked && name.includes(search))) {
              return <Card movie={movie} title={movie.title} isBookmarked={movie.isBookmarked} key={movie.title + movie.category + 'movie'} />
            } else {
              return false
            }
          }else{
            if ((props.category === 'All' && name.includes(search)) || (props.category === movie.category && name.includes(search))) {
              return <Card movie={movie} title={movie.title} isBookmarked={movie.isBookmarked} key={movie.title + movie.category + 'movie'} />
            } else {
              return false
            }
          }
        })}
      </div>
    </section>
  )
}
