import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // ❤️ icônes remplies et vides

const Bouquet = ({ bouquet, toggleLike }) => {
  return (
    <div className="card m-3 shadow-sm" style={{ width: "18rem" }}>
      <img
        src={bouquet.image}
        className="card-img-top"
        alt={bouquet.nom}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{bouquet.nom}</h5>
        <p className="card-text">{bouquet.descr}</p>
        <p className="text-primary fw-bold">{bouquet.prix} DA</p>

        {/* ❤️ Icône de like */}
        <span
          style={{
            cursor: "pointer",
            fontSize: "1.8rem",
            color: bouquet.liked ? "red" : "gray",
          }}
          onClick={() => toggleLike(bouquet.id)}
        >
          {bouquet.liked ? <FaHeart /> : <FaRegHeart />}
        </span>
      </div>
    </div>
  );
};

export default Bouquet;
