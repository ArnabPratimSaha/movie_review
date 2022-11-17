import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom'
import Movie from '../../pages/movie/movie';
import { movieLoader } from '../movie';

function Loader() {
    const { id } = useParams();
    const [status, setStatus] = useState('LOADING');
    useEffect(() => {
        movieLoader({ params: id }).then(res=>{
            setStatus(res);
        })
    }, [id])
    if (status === 'LOADING')
        return (
            <div>Loading </div>
        )
    return (<Movie movieData={status} />)
}

export default Loader