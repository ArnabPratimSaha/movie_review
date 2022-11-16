import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,createBrowserRouter,RouterProvider,Route,createRoutesFromElements } from "react-router-dom";
import Movie from './pages/movie/movie';
import ErrorBoundary from './pages/errorBoundary/error';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' errorElement={<ErrorBoundary />} >
    <Route  path='movie' >
      <Route
      element={<Movie />}
      path="new"
      />
    </Route>
  </Route>

));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
