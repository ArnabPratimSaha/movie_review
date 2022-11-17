import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import './navbar.css';
function Navbar() {
    const [value,setValue]=useState('');
    const [searchResult,setSearchResult]=useState([]);
    const [focus,setFocus]=useState(false);
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
              <a className='search-bar' onFocus={() => setFocus(true)} onBlur={()=>setFocus(false)} >
                  <input type="text" autocomplete='off' name="search" id="myInput" value={value} onChange={(e) => setValue(e.target.value)} />
                  {focus && searchResult.length !== 0 && <div className='search-result-div'>
                      {searchResult.map(r => <NavLink className={'search-result-button'} to={`/movie/${r}`}>{r}</NavLink>)}
                  </div>}
              </a>
          </div>
      </div>
  )
}

export default Navbar