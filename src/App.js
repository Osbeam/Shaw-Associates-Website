import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import Blog from './Pages/Blog';
import Services from './Pages/Services';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
