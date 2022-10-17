import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import TrendingCard from '../Components/TrendingCard';
import data from '../data.json'
export default function Landing() {
    let trendings = data.filter((movie) => {
        return movie.isTrending
    })
    return (
        <section className="landing">
            <h1>Trending</h1>
            <Swiper
            slidesPerView={2.5}
                spaceBetween={50}
            >
                {trendings.map((movie) => {
                    return (<SwiperSlide key={`tr-${movie.title}`}>
                        <TrendingCard movie={movie}  />
                    </SwiperSlide>);
                })}
            </Swiper>
        </section>
    )
}
