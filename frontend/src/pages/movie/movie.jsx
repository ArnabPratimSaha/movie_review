import React from 'react'
import {useLoaderData,Await} from 'react-router-dom';
import './movie.css';
import GenreComponent from '../../components/genre/genre';
import CastComponent from '../../components/cast/cast';
import MovieCard from '../../components/movie-card/movieCard';
import Footer from '../../components/footer/footer';


function Movie({}) {
    const movieData = useLoaderData();
  return (
    <div className='movie-fulldiv'>
        <Await resolve={movieData}>
        </Await>
        <div className="movie-topdiv" >
            <div className='color_background' style={{background: movieData.color}}></div>
            <div className='color_background' ></div>
            <img className='movie_background' src={movieData.res.poster}/>
            <div className="movie-main_container">
                <div className="movie-poster">
                    <img src={movieData.res.poster} />
                </div>
                <div className="movie-details">
                    <span className='movie_title'>{movieData.res.title}</span>
                    <div className="genre-div">
                        {movieData.res.genres.map(g=>
                            <GenreComponent key={g} name={g}/>
                        )}
                    </div>
                    <div className="movie-description">
                       {movieData.res.description}
                    </div>
                    <h3 className='movie_runtime'>{movieData.res.runtime}</h3>
                    <div className="movie-casts">
                        <h2>Casts</h2>
                        <div className="movie-casts_casts">
                            {movieData.res.casts.map(c=><CastComponent key={c.name} name={c.name} pic={c.pic}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="movie-recommendation" style={{background:movieData.color}}>
            <h2 className='rec-heading'>Movies Recommended For You</h2>
            <div className="movie-card-div">
                {movieData.rec.map(m=><MovieCard key={m.title} poster={m.poster} title={m.title} />)}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Movie