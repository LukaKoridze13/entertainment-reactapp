import { Routes,Route } from "react-router-dom";
import Login from "./Pages/Login";
import './CSS/reset.css'
import './CSS/style.css'
import Register from "./Pages/Register";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/entertainment-reactapp/" element={<Login />}/>
        <Route path="/entertainment-reactapp/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
