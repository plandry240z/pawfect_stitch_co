import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {useEffect} from 'react';
import Home from './components/Home';
import Stitch from './components/Stitch';
import Upcycle from './components/Upcycle';
import Minigame from './components/minigame';
import NavBar from './components/NavBar';
import Footer from './components/footer';
import './index.css';

function ScrolltoTopOnMount() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App(){
  return (
    <Router>
      <NavBar />
      <ScrolltoTopOnMount />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/stitch' element={<Stitch />} />
        <Route path='/minigame' element={<Minigame />} />
        <Route path='/upcycle' element={<Upcycle />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;