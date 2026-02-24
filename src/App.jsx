import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Learn from './components/Learn';
import Stitch from './components/Stitch';
import Upcycle from './components/Upcycle'; 
import NavBar from './components/NavBar';

function App(){
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/stitch' element={<Stitch />} />
        <Route path='/upcycle' element={<Upcycle />} />
      </Routes>
    </Router>
  )
}

export default App;