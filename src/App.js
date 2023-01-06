
import './App.css';
import { Route, Routes } from "react-router-dom";
import Nutrition from './components/Nutrition'
import BMI from './components/BMI'
import OurBody from './components/OurBody'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/nutrition" element={<Nutrition />} />
        <Route exact path="/BMI" element={<BMI />} />
        <Route exact path="/ourbody" element={<OurBody />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
