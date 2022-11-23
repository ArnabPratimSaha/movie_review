import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { NavLink, useNavigate } from 'react-router-dom';
import './navbar.css';
function Navbar() {
    const [value,setValue]=useState('');
    const [searchResult,setSearchResult]=useState([]);
    const [focus,setFocus]=useState(false);
    const navigate=useNavigate();
    useEffect(()=>{
        if(value===''){
            setSearchResult([]);
            return;
        }
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        axios({
            url:`${process.env.REACT_APP_BACKEND}/movie/${value}`,
            method:'get',
            cancelToken:source.token
        }).then(res=>{
            setSearchResult(res.data);
        }).catch(err=>{
            if(axios.isCancel(err))console.log('cancelled');
            setSearchResult([]);
        })
        return ()=>{
            source.cancel('refresh')
        }
    },[value])

  return (
    <div className='navbar-fulldiv'>
        <span className='navbar-logo'>Movie</span>
        <div className='navbar-searchdiv'>
              <BsSearch className='navbar-search-logo' />
              <div  type='button' className='search-bar' >
                <input placeholder='Search For Movies' list='suggestions' type="text" autoComplete='off' name="search" id="myInput" value={value} onChange={(e) => setValue(e.target.value)} />
                <datalist id="suggestions" className='navbar-suggestion'>
                    {searchResult.map(r => <option key={r} className={'search-result-button'} >{r}</option>)}
                </datalist>
              </div>
              <button className='navbar-btn' onClick={()=>value && navigate(`/movie/${value}`)}>Search</button>
          </div>
      </div>
  )
}

export default Navbar