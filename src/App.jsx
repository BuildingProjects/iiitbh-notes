import "./App.css";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from './components/AboutUs'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
import Notes from './components/Notes'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/Coding" element={<Notes />} />
          <Route path="/PYQ" element={<Notes />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
