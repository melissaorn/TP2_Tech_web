import { useEffect } from "react";

const FetchBouquets = ({ setMesBouquets }) => {
  useEffect(() => {
    // Vérifier si les bouquets existent déjà dans le localStorage
    const savedBouquets = localStorage.getItem("mesBouquets");

    if (savedBouquets) {
      // Si oui, on les charge depuis localStorage
      setMesBouquets(JSON.parse(savedBouquets));
    } else {
      // Sinon, on les récupère depuis le backend
      fetch("http://localhost:5000/api/bouquets") // ton endpoint backend
        .then((res) => res.json())
        .then((data) => {
          // Enregistrer dans le localStorage
          localStorage.setItem("mesBouquets", JSON.stringify(data));
          // Mettre à jour l'état du frontend
          setMesBouquets(data);
        })
        .catch((error) => {
          console.error("Erreur lors du fetch des bouquets :", error);
        });
    }
  }, [setMesBouquets]);

  return null; // Ce composant n'affiche rien à l'écran
};

export default FetchBouquets;
