import React from 'react'
import altPic from './alt.jpg';
import './cast.css';

const  CastComponent=({name,pic})=> {
  return (
    <div className='cast-fulldiv'>
        <img src={pic||altPic} alt={''} />
        <p>{name}</p>
    </div>
  )
}

export default CastComponent