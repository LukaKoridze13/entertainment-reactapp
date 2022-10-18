import React, { useContext, useEffect, useState } from 'react'
import BE from '../assets/icon-bookmark-empty.svg'
import BF from '../assets/icon-bookmark-full.svg'
import { Context } from '../Context'
export default function AddBookmark(props) {
    const [img,setImg]=useState(BE)
    const [clicked,setClicked] = useState(false)
    const context = useContext(Context)
    function click(){
        if(!clicked){
            context.addToBookmarks(props.title)
            setImg(BF)
            setClicked(true)
        }else{
            context.removeFromBookmarks(props.title)
            setClicked(false)
            setImg(BE)
        }
    }
    useEffect(()=>{
        props.isBookmarked && setClicked(true)
        props.isBookmarked && setImg(BF)
    }, [props.isBookmarked])
    return (
        <div onClick={click} style={{cursor:'pointer'}} onMouseOver={()=>{setImg(BF)}} onMouseLeave={()=>{!clicked && setImg(BE)}} className="img"><img src={img} alt="Bookmark" /></div>
    )
}
