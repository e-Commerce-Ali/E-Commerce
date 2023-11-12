import React from 'react'
import bannerImg from '../../assets/img/close-up-cobbler-working-with-leather.webp'
import './Banner.css'

function Banner() {
    return (
        <div style={{ overflow: "hidden", position: "relative" }}>
            <div className='banner'></div>
            <h1 className='banner-title'>PASHA DERİ</h1>
        </div>
    )
}

export default Banner