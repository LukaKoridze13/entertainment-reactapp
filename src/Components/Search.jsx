import React, { useContext, useState } from 'react'
import Icon from '../assets/icon-search.svg'
import { Context } from '../Context'
export default function Search(props) {
    const [opacity,setOpacity] = useState('0.5')
    let context= useContext(Context)
    function active(){
        setOpacity('1')
    }
  return (
    <form className='search' autoComplete='off' autofill='off'>
        <label htmlFor="search">
            <img src={Icon} alt="Search" />
        </label>
      <input onClick={() => { active(); context.search ==='Search for movies or TV series' && context.setSearch('')}} id='search' style={{opacity:opacity}} autoComplete='off' autofill='off' type="text" value={context.search} onChange={(e)=>{context.setSearch(e.target.value)}}/>
    </form>
  )
}
