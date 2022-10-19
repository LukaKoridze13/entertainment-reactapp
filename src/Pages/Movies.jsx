import React, { useContext,useEffect,useState} from 'react'
import { Context } from '../Context'
import Card from '../Components/Card'
import Searched from './Searched'
export default function Movies() {
  let context = useContext(Context)
  const [show, setShow] = useState(true)
  useEffect(() => {
    if (context.search !== 'Search for movies or TV series' && context.search.length > 0) {
      setShow(false)
    } else {
      setShow(true)
    }
  }, [context.search])
  return (
    <>
    { show ? <section className="movies">
      <h1>Movies</h1>
      <div className="containerBox">
        {context.movies.map((movie) => {
          if (movie.category === 'Movie') {
            return <Card movie={movie} title={movie.title} isBookmarked={movie.isBookmarked} key={movie.title + movie.category + 'movie'} />
          } else {
            return false
          }
        })}
      </div>
    </section> : <Searched category='Movie' />}
    </>
  )
}
