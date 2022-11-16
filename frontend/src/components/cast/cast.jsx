import React from 'react'
import './cast.css'
const  CastComponent=({name,pic})=> {
  return (
    <div className='cast-fulldiv'>
        <img src={pic} alt="" />
        <p>{name}</p>
    </div>
  )
}

export default CastComponent