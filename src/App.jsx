import { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import Singin from './pages/Singin';
import FooterPage from './pages/components/Footer';
import Navbar from './pages/components/Navbar';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  useEffect(() => {
  AOS.refresh();
}, []);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/news" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path='/singin' element={<Singin/>} />
        </Routes>
      </main>
      <FooterPage />
    </>
  );
}

export default App;
