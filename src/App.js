import logo from './logo.svg';
import './App.css';
import MainLayout from './layout/MainLayout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About';
import Moreinfo from './components/Moreinfo';
import Reservation from './components/Reservation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path='about' element={<About/>}/>
          <Route path='info/:slug' element={<Moreinfo/>}/>
          <Route path='info/:slug/reservation' element={<Reservation/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
