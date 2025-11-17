import { useSelector, useDispatch } from "react-redux";
import Bouquet from "../components/Bouquet";
import { toggleLike, setBouquets } from "../store/bouquetSlice";
import { sendLike, getBouquets } from "../services/bouquetService";

const Bouquets = () => {
  const bouquets = useSelector(state => state.bouquets.bouquets);
  const dispatch = useDispatch();

  const handleLike = async (id) => {
    // 1️⃣ Mettre à jour le like localement (Redux + localStorage)
    dispatch(toggleLike(id));
    const updatedBouquets = bouquets.map(b => b.id === id ? { ...b, liked: !b.liked } : b);
    localStorage.setItem("mesBouquets", JSON.stringify(updatedBouquets));

    // 2️⃣ Envoyer le like au backend
    try {
      await sendLike(id);

      // 3️⃣ Recharger les bouquets depuis le backend pour synchroniser tous les onglets
      const data = await getBouquets();
      localStorage.setItem("mesBouquets", JSON.stringify(data));
      dispatch(setBouquets(data));
    } catch (err) {
      console.error("Erreur lors de l'envoi du like :", err);
    }
  };

  return (
    <div className="container">
      <h2 className="mb-4 text-center text-danger">Nos Bouquets</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {bouquets.map(bq => (
          <Bouquet key={bq.id} bouquet={bq} onLike={handleLike} />
        ))}
      </div>
    </div>
  );
};

export default Bouquets;
