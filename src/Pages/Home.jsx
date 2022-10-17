import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../Components/Navigation'
import { checkLogin } from '../LocalStorage'

export default function Home() {
    let navigate = useNavigate()
    useEffect(() => {
        if (!checkLogin()) {
            navigate('/entertainment-reactapp/')
        }
    })
    return (
        <div className="home">
            <Navigation />
        </div>
    )
}
