import React from 'react'
import 'swiper/scss';
import Recommended from '../Components/Recommended';
import Trendings from '../Components/Trendings';
export default function Landing() {
    return (
        <section className="landing">
            <Trendings  />
            <Recommended  />
        </section>
    )
}
