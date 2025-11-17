import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBouquets } from "../store/bouquetSlice";
import { getBouquets } from "../services/bouquetService";

const FetchBouquets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBouquets();
        localStorage.setItem("mesBouquets", JSON.stringify(data));
        dispatch(setBouquets(data));
      } catch (err) {
        console.error("Erreur lors du polling des bouquets :", err);
      }
    };

    fetchData(); // premier fetch au chargement
    const interval = setInterval(fetchData, 1000); // polling toutes 3 secondes

    return () => clearInterval(interval); // nettoyage à la fermeture du composant
  }, [dispatch]);

  return null;
};

export default FetchBouquets;
