import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Bouquets from "./pages/Bouquets";
import Fleurs from "./pages/Fleurs";
import MonCompte from "./pages/MonCompte";
import FetchBouquets from "./components/FetchBouquets";

function App() {
  return (
    <Router>
      <Navbar />
      <FetchBouquets />
      <div className="container mt-4">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/bouquets" element={<Bouquets />} />
          <Route path="/fleurs" element={<Fleurs />} />
          <Route path="/moncompte" element={<MonCompte />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
