// 📦 Importation de MongoClient depuis le module mongodb
const { MongoClient } = require('mongodb');
// 🔐 Chargement des variables d'environnement (notamment MONGODB_URI)
require('dotenv').config();

// 🔗 URL MongoDB (prise depuis le fichier .env)
const url = process.env.MONGODB_URI;

// 🗂️ Nom de ta base de données (remplace bien "<database>" !)
const dbName = "mernapp"; // ✅ Remplace par ta vraie base si besoin

async function insertData() {
  // Création du client MongoDB
  const client = new MongoClient(url);

  try {
    // Connexion à MongoDB
    await client.connect();
    console.log("✅ Connecté à MongoDB");

    // Sélection de la base et de la collection
    const db = client.db(dbName);
    const collection = db.collection("collection1");

    // 📄 Données de test à insérer
    const docs = [
      { title: "Breaking Bad", seasons: 5, genre: "Drama" },
      { title: "Game of Thrones", seasons: 8, genre: "Fantasy" },
      { title: "Stranger Things", seasons: 4, genre: "Sci-Fi" }
    ];

    // 🧪 Insertion des documents
    const result = await collection.insertMany(docs);
    console.log(`✅ ${result.insertedCount} documents insérés dans la collection`);
  } catch (err) {
    console.error("❌ Erreur lors de l'insertion :", err);
  } finally {
    // 🔐 Fermeture de la connexion
    await client.close();
  }
}

// ▶️ Lancer la fonction
insertData();
