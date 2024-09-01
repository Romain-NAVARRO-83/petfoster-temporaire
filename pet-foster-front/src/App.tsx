import Footer from "./components/Footer"
import Header from "./components/Header"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrouverAnimal from "./components/pages/TrouverAnimal";

function App() {


  return (
    <>
    <Router>
    <Header />
    
    <Routes>
        <Route path="/" element={<p>accueil</p>} />
        <Route path="/information" element={<p>information</p>} />
        <Route path="/politique-de-confidentialite" element={<p>Politique de conf</p>} />
        <Route path="/contact" element={<p>contact</p>} />
        <Route path="/mes-animaux" element={<p>mes animaux</p>} />
        <Route path="/mes-demandes" element={<p>mes demandes</p>} />
        <Route path="/trouver-animal" element={<TrouverAnimal />} />
        <Route path="/profil-animal" element={<p>profil animal</p>} />
        <Route path="/connexion" element={<p>connexion / inscription</p>} />
      </Routes>
    </Router>
    
      <Footer />
    </>
  )
}

export default App
