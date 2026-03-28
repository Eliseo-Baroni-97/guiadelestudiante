import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Root: React.FC = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<App />} />
      {/* Rutas futuras: guía del ingresante, carreras, horarios, planes de estudio, FAQ */}
    </Routes>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Root />);
