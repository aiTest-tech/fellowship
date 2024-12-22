// @ts-nocheck
import React from 'react'
import '../index.css'

interface BannerProps {
    img: string;
    text: string;
}


const Banner = (props:BannerProps) => {
  return (
    <>
        <div className={`w-full h-1/2 bg-[url(${props.img})] flex justify-center items-center`} >
            
        </div>
    </>
  )
}

export default Banner