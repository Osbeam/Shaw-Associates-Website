import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import Blog from './Pages/Blog';
import Services from './Pages/Services';
import Blog_gst from './Pages/Blog_gst';
import Blog_itr from './Pages/Blog_itr';
import Blog_tax_plan from './Pages/Blog_tax_plan';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog-gst" element={<Blog_gst/>}/>
        <Route path="/blog-itr" element={<Blog_itr/>}/>
        <Route path="/blog-tax-plan" element={<Blog_tax_plan/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
