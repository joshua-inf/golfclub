import './App.css';
import Navitem from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Events from './components/pages/Events';
import Contact from './components/pages/Contact';
import Shop from './components/pages/Shop';
import GolfTips from './components/pages/GolfTips';
import Team from './components/pages/underAbout/OMTeam';
import History from './components/pages/underAbout/CourseHistory';
import Tour from './components/pages/underAbout/Tour';
import Sign from './components/pages/underAbout/Signature';
import Awards from './components/pages/underAbout/Awards';

function App() {
  return (
    <>
      <BrowserRouter>
        <div style={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'space-between',
        }}>
          <Navitem />

          <div>
            <Routes>
              <Route path='/golfclub/' element={<Home />} />
              <Route path='/golfclub/Events' element={<Events />} />
              <Route path='/golfclub/ContactUs' element={<Contact />} />
              <Route path='/golfclub/Shop' element={<Shop />} />
              <Route path='/golfclub/GolfTips' element={<GolfTips/>} />
              <Route path='/OurManagementTeam' element={<Team/>} />
              <Route path='/CourseHistory' element={<History/>} />
              <Route path='/CourseTour' element={<Tour/>} />
              <Route path='/SignatureDesign' element={<Sign/>} />
              <Route path='/Awards' element={<Awards/>} />




            </Routes>
          </div>

          <Footer/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
