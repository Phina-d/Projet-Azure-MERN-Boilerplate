import React, { useState } from 'react';

function AddShowForm({ onAdd }) {
  // 🎯 États pour chaque champ du formulaire
  const [title, setTitle] = useState("");
  const [seasons, setSeasons] = useState("");
  const [genre, setGenre] = useState("");
  const [error, setError] = useState(null); // ⚠️ Pour afficher un message d'erreur si besoin

  // 🚀 Gère la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // ❌ Empêche le rechargement de la page

    // ✅ Vérifie que tous les champs sont remplis
    if (!title || !seasons || !genre) {
      setError("Tous les champs sont obligatoires.");
      return;
    }

    try {
      setError(null); // 🔁 Réinitialise les erreurs
      await onAdd({ title, seasons: Number(seasons), genre }); // 📤 Envoie les données au parent (App)
      // 🧹 Réinitialise le formulaire après soumission
      setTitle("");
      setSeasons("");
      setGenre("");
    } catch {
      setError("Erreur lors de l’ajout.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={{ marginBottom: "1rem" }}>➕ Ajouter une nouvelle série</h2>

      {/* Champ titre */}
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />

      {/* Champ saisons */}
      <input
        type="number"
        placeholder="Nombre de saisons"
        value={seasons}
        onChange={(e) => setSeasons(e.target.value)}
        style={inputStyle}
      />

      {/* Champ genre */}
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        style={inputStyle}
      />

      {/* Bouton d'envoi */}
      <button type="submit" style={buttonStyle}>Ajouter</button>

      {/* Message d'erreur */}
      {error && <p style={errorStyle}>{error}</p>}
    </form>
  );
}

// 🎨 Styles CSS inline simples (tu peux aussi les mettre dans un fichier CSS séparé)
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // centré horizontalement
  maxWidth: '400px',
  marginBottom: '2rem',
  padding: '1rem',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#947979ff',
};

const inputStyle = {
  marginBottom: '1rem',
  padding: '0.5rem',
  width: '100%',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const buttonStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const errorStyle = {
  color: 'red',
  marginTop: '1rem',
};

export default AddShowForm;
