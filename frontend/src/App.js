
import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Movie from './pages/movie/movie';




function App() {
  return (
    <Routes>
      <Route path='movie' element={<Movie/>} />

    </Routes>
  );
}

export default App;
