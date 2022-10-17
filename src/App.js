import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import './CSS/reset.css'
import './CSS/style.scss'
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import TvSeries from "./Pages/TvSeries";
import Bookmarks from "./Pages/Bookmarks";
import Landing from "./Pages/Landing";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/entertainment-reactapp/" element={<Login />} />
        <Route path="/entertainment-reactapp/register" element={<Register />} />
        <Route path="/entertainment-reactapp/home/" element={<Home />}>
          <Route index element={<Landing />} />
          <Route path="movies" element={<Movies />} />
          <Route path="tv-series" element={<TvSeries />} />
          <Route path="bookmarks" element={<Bookmarks />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
