import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
