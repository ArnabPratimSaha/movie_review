
import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Movie from './pages/movie/movie';
import Loader from './loaders/loader.jsx/loader';


function App() {
  return (
    <Routes>
      <Route path='movie' >
        <Route path=':id' element={<Loader/>}/>
      </Route>
    </Routes>
  );
}

export default App;
