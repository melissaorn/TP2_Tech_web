import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Bouquets from "./pages/Bouquets";
import Fleurs from "./pages/Fleurs";
import MonCompte from "./pages/MonCompte";
import FetchBouquets from "./components/FetchBouquets"; // 🔹 import du nouveau composant

function App() {
  const [mesBouquets, setMesBouquets] = useState([]);

  // Fonction pour liker / unliker un bouquet
  const toggleLike = (id) => {
    const updatedBouquets = mesBouquets.map((bq) =>
      bq.id === id ? { ...bq, liked: !bq.liked } : bq
    );
    setMesBouquets(updatedBouquets);
    localStorage.setItem("mesBouquets", JSON.stringify(updatedBouquets)); // sauvegarde dans localStorage
  };

  return (
    <Router>
      <Navbar />

      {/* 🔹 Ce composant va charger les bouquets depuis le backend ou localStorage */}
      <FetchBouquets setMesBouquets={setMesBouquets} />

      <div className="container mt-4">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/bouquets"
            element={<Bouquets bouquets={mesBouquets} toggleLike={toggleLike} />}
          />
          <Route path="/fleurs" element={<Fleurs />} />
          <Route path="/moncompte" element={<MonCompte />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
