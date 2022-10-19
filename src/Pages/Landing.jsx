import React, { useContext, useEffect, useState } from 'react'
import 'swiper/scss';
import Recommended from '../Components/Recommended';
import Trendings from '../Components/Trendings';
import { Context } from '../Context';
import Searched from './Searched';
export default function Landing() {
    const [show,setShow] = useState(true)
    let context = useContext(Context)
    useEffect(()=>{
        if (context.search !=='Search for movies or TV series' && context.search.length > 0){
            setShow(false)
        }else{
            setShow(true)
        }
    }, [context.search])
    return (
        <section className="landing">
            {show && <Trendings  />}
            {show  && <Recommended  />}
            {!show && <Searched category='All'/>}
        </section>
    )
}
