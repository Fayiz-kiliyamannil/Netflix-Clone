import React, { useEffect, useState } from 'react'
import { API_KEY,imgUrl  } from '../../Constants/Constants';
import axios from '../../axios'
import './Banner.css'
const Banner = () => {
   
    const [movie,setMovie] =useState([]);
    useEffect(()=>{
       axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[0]);
        const  RandomSelection = Math.floor(Math.random()*response.data.results.length)
        setMovie(response.data.results[RandomSelection]);
       })
    },[])
    return (

        <div style={{backgroundImage:` url(${movie ? imgUrl+movie.backdrop_path :''}) `}}
        className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ?movie.title :''}</h1>
               <div className='banner_button'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
               </div>
               <h1 className='description'>{movie ? movie.overview :''}</h1>

         </div>
         <div className='fade_bottom'></div>

        </div>
    ) 
}

export default Banner;




