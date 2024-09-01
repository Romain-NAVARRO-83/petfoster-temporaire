import {  NavLink } from 'react-router-dom';
function Header() {


    return (
        <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src="/img/vector/petfoster-logo-grad.svg" alt="Logo Pet Foster" height="100" width="100" />
    
                </a>
                <img src="/img/vector/petfoster-title-grad.svg" alt="Titre Pet Foster" width="150" />
    
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
    
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                <NavLink 
              to="/trouver-animal" 
              exact 
              className="navbar-item"
            >
              Voir les animaux
            </NavLink>
            <NavLink 
              to="/mes-demandes" 
              exact 
              className="navbar-item"
            >
              Mes demandes
            </NavLink>
            <NavLink 
              to="/mes-animaux" 
              exact 
              className="navbar-item"
            >
              Mes animaux
            </NavLink>

    
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            More
                        </a>
    
                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                Connexion
                            </a>
                            <a className="navbar-item is-selected">
                                Mon compte
                            </a>
                        </div>
                    </div>
                </div>
    
            </div>
        </nav>
    </header>
    )
  }
  
  export default Header
  