import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Keep the header across all routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Expertise />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer /> {/* Keep the footer across all routes */}
    </BrowserRouter>
  );
}

export default App;
