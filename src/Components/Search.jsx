import React, { useState } from 'react'
import Icon from '../assets/icon-search.svg'
export default function Search(props) {
    const [opacity,setOpacity] = useState('0.5')
    function active(){
        setOpacity('1')
    }
  return (
    <form className='search' autoComplete='off' autofill='off'>
        <label htmlFor="search">
            <img src={Icon} alt="Search" />
        </label>
        <input onClick={()=>{active();props.onClick()}} id='search' style={{opacity:opacity}} autoComplete='off' autofill='off' type="text" value={props.search} onChange={props.onChange}/>
    </form>
  )
}
