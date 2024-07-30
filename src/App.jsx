import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import CodingSlide from "./components/CodingSlide";
import UploadSection from "./components/UploadSection";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Notes from "./components/Notes";

function App() {
  return (
    <>
      <Header />
      <Notes />
      {/* {/* <Hero /> */}
      <CodingSlide />
      <UploadSection />
      <AboutUs />
      <ContactUs />
      {/* <Footer /> */}
    </>
  );
}

export default App;
