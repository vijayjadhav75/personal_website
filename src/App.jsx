import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />

      <Banner />
      <About />
      <Services />
      <Expertise />

      <Routes>
        <Route path="/skills" element={<Expertise />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
