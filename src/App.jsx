import React, { useState } from "react";
import Card from "./Card"

function App() {
  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
  // Validación del nombre de la mascota PRIMER IMPUT
  const trimmedPetName = petName.trim();
  if (trimmedPetName.length < 3 || /\s/.test(trimmedPetName)) {
    setError("El nombre de la mascota debe tener al menos 3 caracteres y no debe contener espacios.");
    setShowCard(false);
    return;
  }
  
    // Validación del nombre del dueño SEGUNDO IMPUT
    if (ownerName.length < 6) {
      setError("El nombre del dueño debe tener al menos 6 caracteres.");
      setShowCard(false);
      return;
    }
  
    // Si todas las validaciones son correctas
    setError("");
    setShowCard(true);
  };
  

  return (
    <div className="App">
      <h1>Registro de Mascotas</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de la Mascota:</label>
          <input
            type="text"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </div>
        <div>
          <label>Nombre del Dueño:</label>
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {showCard && <Card petName={petName} ownerName={ownerName} />}
    </div>
  );
}

export default App;

import "./App.css";
import "./Card.css"