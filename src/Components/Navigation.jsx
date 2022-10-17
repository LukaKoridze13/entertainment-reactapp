import React from 'react'
import { NavLink,Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import HomeIcon from './HomeIcon'
import MoviesIcon from './MoviesIcon'
import TvShowsIcon from './TvShowsIcon'
import BookmarksIcon from './BookmarksIcon'
import Avatar from '../assets/image-avatar.png'
export default function Navigation() {
    let  location = useLocation()
    return (
        <nav>
            <div className="left">
                <Logo />
                <div className="icons">
                    <Link to='/entertainment-reactapp/home'>
                        <HomeIcon loc={location.pathname} />
                    </Link>
                    <NavLink to='/entertainment-reactapp/home/movies'>
                        <MoviesIcon  />
                    </NavLink>
                    <NavLink to='/entertainment-reactapp/home/tv-series'>
                        <TvShowsIcon  />
                    </NavLink>
                    <NavLink to='/entertainment-reactapp/home/bookmarks'>
                        <BookmarksIcon  />
                    </NavLink>
                </div>

            </div>
            <img style={{ border: '1px solid white', borderRadius: '50%', width: '40px' }} src={Avatar} alt="" />
        </nav>
    )
}
