import { useEffect, useState } from "react";
import { myFetch } from "../comm/myFetch";

const Fleurs = () => {
  const [fleurs, setFleurs] = useState([]);

  const loadFleurs = async () => {
    try {
      const data = await myFetch("/fleurs");
      setFleurs(data);
    } catch (err) {
      console.error("Erreur chargement fleurs :", err);
    }
  };

  useEffect(() => {
    loadFleurs();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center text-success mb-4">Nos Fleurs</h2>

      <div className="d-flex flex-wrap justify-content-center">
        {fleurs.map(f => (
          <div
            key={f.id}
            className="card m-2 p-3 shadow"
            style={{ width: "250px" }}
          >
            <h5>{f.nom}</h5>
            <p>{f.description}</p>
            <p className="fw-bold">{f.prix} DA</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fleurs;
