import {  NavLink } from 'react-router-dom';
import { Navbar, Image, Dropdown } from 'react-bulma-components';
import { User } from 'react-flaticons';

import { useState } from 'react';

function Header() {

    // State to manage the burger menu
    const [isActive, setIsActive] = useState(false);
  
    // Function to toggle the menu
    const handleBurgerClick = () => {
      setIsActive(!isActive);
    };
  

    return (
        <header>
        <Navbar>
        <Navbar.Brand>
          <Navbar.Item href="/">
            <img src="/img/vector/petfoster-logo-grad.svg" alt="Logo" width={100}/>
            <img src="/img/vector/petfoster-title-grad.svg" alt="Pet Foster" width={200}/>
          </Navbar.Item>
          
        </Navbar.Brand>
        <Navbar.Burger
            className={isActive ? 'is-active' : ''}
            onClick={handleBurgerClick}
          />

        <Navbar.Menu className={isActive ? 'is-active' : ''}>
          <Navbar.Container align="right">
            <Navbar.Item href="/trouver-animal">Voir les animaux</Navbar.Item>
            <Navbar.Item href="/mes-demandes">Mes demandes</Navbar.Item>
            <Navbar.Item href="/mes-animaux">Mes animaux</Navbar.Item>
            {/* <Navbar.Item dropdown hoverable>
              <Navbar.Link>More</Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item href="/connexion">Connexion</Navbar.Item>
                <Navbar.Item href="/mon-compte">Mon compte</Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item> */}
            <Navbar.Item href="/connexion">< User size={24} /></Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>

    </Navbar>
    </header>
    )
  }
  
  export default Header
  