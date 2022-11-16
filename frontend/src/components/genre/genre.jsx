import React from 'react'
import './genre.css';

let genre = new Map([
    ['action','#FC4F4F'],
['comedy','#FF9F45'],
['drama','#4D77FF'],
['fantasy','#125C13'],
['horror','#41AEA9'],
['mystery','#F4A442'],
['romance','#2C394B'],
['thriller','#56BBF1'],
['western','#F2FA5A'],
['sci-fi','#FC5185']
  ]);

const GenreComponent=({name})=> {
  return (
    <div className='genre-fulldiv' style={{background:genre.get(name)||'#364F6B'}} >{name}</div>
  )
}

export default GenreComponent