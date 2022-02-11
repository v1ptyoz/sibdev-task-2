import './App.css';
import Login from './pages/Login';
import Main from './pages/Main';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Main /> } />
    </Routes>
    </div>
  );
}

export default App;
