import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function Home() {
  return <h2>Welcome to My Website</h2>;
}

function About() {
  return <h2>About Our Company</h2>;
}

function Contact() {
  return <h2>Contact Us at contact@example.com</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 10, background: "#f0f0f0" }}>
        <Link to="/" style={{ marginRight: 10 }}>Home</Link>
        <Link to="/about" style={{ marginRight: 10 }}>About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
