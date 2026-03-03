import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Stitch from './components/Stitch';
import Upcycle from './components/Upcycle'; 
import Minigame from './components/minigame';
import NavBar from './components/NavBar';
import Footer from './components/footer';

function App(){
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/home' element={<Home />} /> 
        <Route path='/stitch' element={<Stitch />} />
        <Route path='/minigame' element={<Minigame />} />
        <Route path='/upcycle' element={<Upcycle />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
        <Footer />
    </Router>
  )
}

export default App;