import React from 'react'
import { NavLink,Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from './Logo'
import HomeIcon from './HomeIcon'
import MoviesIcon from './MoviesIcon'
import TvShowsIcon from './TvShowsIcon'
import BookmarksIcon from './BookmarksIcon'
import Avatar from '../assets/image-avatar.png'
import { logOut } from '../LocalStorage'
export default function Navigation() {
    let  location = useLocation()
    let navigate = useNavigate()
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
            <div style={{display:'flex', alignItems:'center'}}><img style={{ border: '1px solid white', borderRadius: '50%', width: '40px' }} src={Avatar} alt="" />
                <button onClick={() => { logOut(); navigate('/entertainment-reactapp/') }} className="logout">Log Out</button></div>
            
        </nav>
    )
}
