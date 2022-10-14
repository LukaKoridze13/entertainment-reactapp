import { Routes,Route } from "react-router-dom";
import Login from "./Pages/Login";
import './CSS/reset.css'
import './CSS/style.css'
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/entertainment-reactapp/" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
