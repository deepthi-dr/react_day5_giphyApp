
import './App.css';

import { BrowserRouter as Router, Route,Routes,Link } from "react-router-dom";
import Home from './home';
import Saved from './saved';
import Search from './search';

function App() {
  return (
    <Router>
       <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/saved">Saved</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Saved' element={<Saved />} />
      </Routes>
    </Router>
  )
}

export default App;
