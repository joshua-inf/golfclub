import './App.css';
import Navitem from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Events from './components/pages/Events';
import Contact from './components/pages/Contact';
import Shop from './components/pages/Shop';
import GolfTips from './components/pages/GolfTips';

function App() {
  return (
    <>
      <BrowserRouter>
        <div style={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'space-between',
          backgroundColor:'#ddd'
        }}>
          <Navitem />

          <div>
            <Routes>
              <Route path='/golfclub/' element={<Home />} />
              <Route path='/golfclub/Events' element={<Events />} />
              <Route path='/golfclub/ContactUs' element={<Contact />} />
              <Route path='/golfclub/Shop' element={<Shop />} />
              <Route path='/golfclub/GolfTips' element={<GolfTips/>} />

            </Routes>
          </div>

          <Footer/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
