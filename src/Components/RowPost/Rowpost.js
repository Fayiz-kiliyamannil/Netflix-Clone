import Youtube from 'react-youtube';
import React, { useEffect, useState } from 'react'
import axios from '../../axios';
import { API_KEY, imgUrl } from '../../Constants/Constants';
import './Rowpost.css'

const Rowpost = ({ title, isSmall, url }) => {
  const [movie, setMovie] = useState([]);
  const [urlId, setUrlId] = useState('');

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data.results[0]);
      setMovie(response.data.results)
    }).catch((err) => {
      console.log("network error");
    })
  }, [])
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  
  const handleMovie = (id) => {
    // console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0])
      } else {
        console.log('arry empty');
      }
    }).catch(err => {
      console.error('url error');
    })
  }
  return (
    <div className='row'>
      <h2 style={{ display: 'flex' }} >{title}</h2>
      <div className='posters'>
        {movie.map((movie) => (
          <img onClick={() => handleMovie(movie.id)} className={isSmall ? 'smallposter' : 'poster'} src={`${imgUrl + movie.backdrop_path}`} alt="" srcset="" />
        ))}

      </div>
      {urlId && <Youtube className='Youtube' videoId={urlId.key} opts={opts} />}
    </div>

  )
}

export default Rowpost;



