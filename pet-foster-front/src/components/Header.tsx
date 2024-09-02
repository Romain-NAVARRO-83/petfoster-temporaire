import {  NavLink } from 'react-router-dom';
import { Navbar, Image, Dropdown } from 'react-bulma-components';
function Header() {


    return (
        <header>
        <Navbar role="navigation" aria-label="main navigation">
      {/* <Container> */}
        <Navbar.Brand>
          <Navbar.Item href="/">
            <Image src="/img/vector/petfoster-logo-grad.svg" alt="Logo Pet Foster" size={64} />
          </Navbar.Item>
          <Navbar.Item>
            <Image src="/img/vector/petfoster-title-grad.svg" alt="Titre Pet Foster" />
          </Navbar.Item>
          <Navbar.Burger aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" />
        </Navbar.Brand>

        <Navbar.Menu id="navbarBasicExample">
          <Navbar.Container align="right">
            <Navbar.Item>
              <NavLink to="/trouver-animal" >
                Voir les animaux
              </NavLink>
            </Navbar.Item>
            <Navbar.Item>
              <NavLink to="/mes-demandes" >
                Mes demandes
              </NavLink>
            </Navbar.Item>
            <Navbar.Item>
              <NavLink to="/mes-animaux" >
                Mes animaux
              </NavLink>
            </Navbar.Item>
            <Navbar.Item hoverable>
              <Dropdown hoverable>
                <Dropdown.Item value="more" renderAs="button">
                  More
                </Dropdown.Item>
                <Dropdown.Item value="connexion">
                  Connexion
                </Dropdown.Item>
                <Dropdown.Item value="mon-compte">
                  Mon compte
                </Dropdown.Item>
              </Dropdown>
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      {/* </Container> */}
    </Navbar>
    </header>
    )
  }
  
  export default Header
  