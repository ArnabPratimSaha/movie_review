import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import { prominent } from 'color.js'
import './movie.css';
import GenreComponent from '../../components/genre/genre';
import CastComponent from '../../components/cast/cast';
import MovieCard from '../../components/movie-card/movieCard';
import Footer from '../../components/footer/footer';


function Movie() {
    let image='https://m.media-amazon.com/images/M/MV5BM2VhYjIwMDQtZjY4OS00Yjk2LWI5YjktNjQxOTE0MjE4NjBkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@.jpg'
    const [color, setColor] = useState();
    useEffect(() => {
        prominent(image, { amount: 1,format:'hex' }).then(color => {
            setColor(color)
          })
    }, [])
    
  return (
    <div className='movie-fulldiv'>
        <div className="movie-topdiv" >
            <div className='color_background' style={{background: color}}></div>
            <img className='movie_background' src={image}/>
            <div className="movie-main_container">
                <div className="movie-poster">
                    <img src={image} />
                </div>
                <div className="movie-details">
                    <span className='movie_title'>AVATAR</span>
                    <div className="genre-div">
                        <GenreComponent name={'sci-fi'}/>
                        <GenreComponent name={'action'}/>
                    </div>
                    <div className="movie-description">
                        Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their planet.
                    </div>
                    <h3 className='movie_runtime'>3 hours 10 minutes</h3>
                    <div className="movie-casts">
                        <h2>Casts</h2>
                        <div className="movie-casts_casts">
                            <CastComponent pic={'https://m.media-amazon.com/images/M/MV5BMTM2MjIwOTc0Nl5BMl5BanBnXkFtZTcwNzQ5ODM1Mw@@._V1_UX32_CR0,0,32,44_AL_.jpg'} name={'zoe saldana'}/>
                            <CastComponent pic={'https://m.media-amazon.com/images/M/MV5BZWUwNmEwZTUtYzMxMS00ODg5LTlmYjItMGU4ZjNmN2Q1NjkwXkEyXkFqcGdeQXVyMTM1MjAxMDc3._V1_UX32_CR0,0,32,44_AL_.jpg'} name={'Sam Worthington'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="movie-recommendation" style={{background:color}}>
            <h2 className='rec-heading'>Movies Recommended For You</h2>
            <div className="movie-card-div">
                <MovieCard poster={image} title={'avatar'}/>
                <MovieCard poster={image} title={'avatar'}/>
                <MovieCard poster={image} title={'avatar'}/>
                <MovieCard poster={image} title={'avatar'}/>
                <MovieCard poster={image} title={'avatar'}/>
                <MovieCard poster={image} title={'avatar'}/>
                <MovieCard poster={image} title={'avatar'}/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Movie