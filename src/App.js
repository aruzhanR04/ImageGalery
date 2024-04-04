import React from 'react';
import Gallery from './components/Gallery';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import PerformanceInfo from './components/PerformanceInfo';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Моя галерея</h1>
        <nav>
          <ul>
            <li><Link to="/">Галерея</Link></li>
            <li><Link to="/performance">Информация о производительности</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/performance" element={<PerformanceInfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;