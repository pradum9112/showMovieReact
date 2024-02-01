import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowsList from "./components/ShowsList/ShowsList";
import ShowDetails from "./components/ShowDetails/ShowDetails";

function App() {
  return (
    <div className="container mt-5">
      <Routes>
        <Route path="/" element={<ShowsList />} />
        <Route path="/show/:id" element={<ShowDetails />} />
      </Routes>
    </div>
  );
}

export default App;
