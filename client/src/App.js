// App.js
import React from "react";
import axios from 'axios';
import AddShowForm from "./components/AddShowForm";
import Navbar from "./components/Navbar"; // 📌 Navbar import
import Footer from "./components/Footer"; // 📌 Footer import
import "./App.css"; // 🎨 Import global CSS

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bestShows: []
    };
  }

  componentDidMount() {
    axios.get('/api/data')
      .then(res => {
        this.setState({ bestShows: res.data });
      })
      .catch(err => {
        alert("Erreur lors de la récupération des données : " + err.message);
      });
  }

  handleAddShow = (newShow) => {
    this.setState((prevState) => ({
      bestShows: [...prevState.bestShows, newShow]
    }));
  };

  render() {
    const { bestShows } = this.state;

    return (
      <div className="app-container">
        {/* 🧭 Barre de navigation principale */}
        <Navbar />

        {/* 🧾 Zone de contenu principale */}
        <main className="main-content">
          <h1>Ajouter une série</h1>
          <AddShowForm onAdd={this.handleAddShow} />

          {/* 📺 Liste des séries */}
          <ul className="show-list">
            {bestShows.length > 0 ? (
              bestShows.map(show => (
                <li key={show._id}>
                  {show.title} — {show.seasons} saisons — {show.genre}
                </li>
              ))
            ) : (
              <li>Chargement ou pas de données</li>
            )}
          </ul>
        </main>

        {/* 🦶 Pied de page */}
        <Footer />
      </div>
    );
  }
}

export default App;
