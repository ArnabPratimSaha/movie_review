import React from 'react'
import './movieCard.css';
const  MovieCard=({poster,title})=> {
  return (
    <div className='moviecard-fulldiv'>
        <img src={poster} alt="" />
        <p>{title}</p>
    </div>
  )
}

export default MovieCard