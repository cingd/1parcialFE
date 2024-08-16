import React from "react";

const Card = ({ petName, ownerName }) => {
  return (
    <div className="card">
      <h2>Información de la Mascota</h2>
      <p><strong>Nombre de la Mascota:</strong> {petName}</p>
      <p><strong>Nombre del Dueño:</strong> {ownerName}</p>
    </div>
  );
};

export default Card;
import "./Card.css";
