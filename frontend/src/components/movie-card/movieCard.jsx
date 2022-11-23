import React from 'react'
import { useEffect } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import './movieCard.css';
const  MovieCard=({poster,title})=> {
  const {state}=useNavigation();
  return (
    <div className='moviecard-fulldiv' onClick={()=>window.location=`/movie/${title}`}>
        <img src={poster} alt="" />
        <p>{title}</p>
    </div>
  )
}

export default MovieCard