import './App.css';
import Login from './pages/Login';
import Main from './pages/Main';
import { Routes, Route } from "react-router-dom";
import Favorites from './pages/Favorites';
import Results from './pages/Results';
import Search from './pages/Search';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Main /> }>
          <Route path="favorites" element={<Favorites />} />
          <Route path="results" element={<Results />} />
          <Route path="search" element={<Search />} />
        </Route>
    </Routes>
    </div>
  );
}

export default App;
