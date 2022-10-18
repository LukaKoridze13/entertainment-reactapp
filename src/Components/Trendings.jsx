import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import TrendingCard from '../Components/TrendingCard';
import "swiper/css";
import "swiper/css/pagination";
import { Context } from '../Context';
export default function Trendings() {
    let context = useContext(Context)
    return (
        <div className="trendings">
            <h1 style={{ marginBottom: '30px' }}>Trending</h1>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                className="mySwiper"
            >
                {context.movies.map((movie) => {
                    if (movie.isTrending) {
                        return <SwiperSlide key={movie.title + movie.category + 'trending'}><TrendingCard movie={movie} /></SwiperSlide>
                    }else{
                        return false
                    }
                })}
            </Swiper>
        </div>
    )
}




