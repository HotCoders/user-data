import Home from './Home';
import './App.scss';
import About from './About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
