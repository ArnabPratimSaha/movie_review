import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider,Route,createRoutesFromElements,BrowserRouter, Outlet } from "react-router-dom";
import Movie from './pages/movie/movie';
import ErrorBoundary from './pages/errorBoundary/error';
import Home from './pages/home/home';
import { movieLoader } from './loaders/movie';
import Loading from './components/loading/loading';
import Navbar from './components/navbar/navbar';



const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' errorElement={<ErrorBoundary />} element={<><Navbar/><Outlet/></>}>
    <Route  path='/' element={<Home/>}/>
    <Route  loader={movieLoader}  path='movie/:id' element={<Movie/>} />
  </Route>
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <App/>
    </BrowserRouter> */}
    <RouterProvider router={router} fallbackElement={<Loading/>}/>
  </React.StrictMode>
);
