import { Routes,Route } from "react-router-dom";
import Login from "./Pages/Login";
import './CSS/reset.css'
import './CSS/style.css'
import Register from "./Pages/Register";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/entertainment-reactapp/" element={<Login />}/>
        <Route path="/entertainment-reactapp/register" element={<Register />} />
        <Route path="/entertainment-reactapp/home" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
