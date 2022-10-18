import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import TrendingCard from '../Components/TrendingCard';
import { Context } from '../Context';
export default function Trendings() {
    let movies = useContext(Context).movies
    let trendings = movies.filter((movie) => {
        return movie.isTrending
    })

    return (
        <div className="trendings">
            <h1>Trending</h1>
            
        </div>
    )
}
