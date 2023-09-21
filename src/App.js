import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TableReactctVirtualized from "./TableReactctVirtualized";
import JustTablePlain from "./JustTablePlain";

// Sample components
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/1">TableReactctVirtualized</Link>
            </li>
            <li>
              <Link to="/2">JustTablePlain</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<TableReactctVirtualized />} />
          <Route path="/2" element={<JustTablePlain />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
