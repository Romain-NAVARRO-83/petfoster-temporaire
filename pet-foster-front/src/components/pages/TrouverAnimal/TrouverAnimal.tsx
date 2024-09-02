import { Heading, Dropdown, Icon, Button } from "react-bulma-components";
// import { "./TrouverAnimal.css" };

function TrouverAnimal() {


    return (
        <main>
            <div>
                <Heading>Trouver un animal</Heading>
            </div>
            <section className="section">
                <div className="container box">
                    <Heading subtitle>Affinez votre recherche</Heading> 
                    <Dropdown
                        closeOnSelect={false}
                        color=""
                        icon={<Icon><i aria-hidden="true" className="fas fa-angle-down"/></Icon>}
                        label="Espèce"
                    >
                        <Dropdown.Item
                        renderAs="a"
                        value="item"
                        >
                        Toutes
                        </Dropdown.Item>
                        <Dropdown.Item
                        renderAs="a"
                        value="other"
                        >
                        Chien
                        </Dropdown.Item>
                        <Dropdown.Item
                        renderAs="a"
                        value="active"
                        >
                        Chat
                        </Dropdown.Item>
                        <Dropdown.Item
                        renderAs="a"
                        value="other 2"
                        >
                        
                        </Dropdown.Item>
                    </Dropdown>


                    <Dropdown
                        closeOnSelect={false}
                        color=""
                        icon={<Icon><i aria-hidden="true" className="fas fa-angle-down"/></Icon>}
                        label="Age"
                    >
                        <Dropdown.Item
                        renderAs="a"
                        value="item"
                        >
                        Moins d'1 an
                        </Dropdown.Item>
                        <Dropdown.Item
                        renderAs="a"
                        value="other"
                        >
                        Entre 1 an et 3 ans
                        </Dropdown.Item>
                        <Dropdown.Item
                        renderAs="a"
                        value="active"
                        >
                        Entre 3 ans et 6 ans
                        </Dropdown.Item>
                        <Dropdown.Item
                        renderAs="a"
                        value="other 2"
                        >
                        Plus de 6 ans
                        </Dropdown.Item>
                        <Dropdown.Item
                        renderAs="a"
                        value="other 2"
                        >
                        </Dropdown.Item>
                    </Dropdown>

                    <Dropdown
                        closeOnSelect={false}
                        color=""
                        icon={<Icon><i aria-hidden="true" className="fas fa-angle-down"/></Icon>}
                        label="Sexe"
                    >
                        <Dropdown.Item
                        renderAs="a"
                        value="item"
                        >
                        Tous
                        </Dropdown.Item>
                        <Dropdown.Item
                        renderAs="a"
                        value="other"
                        >
                        Mâle
                        </Dropdown.Item>
                        <Dropdown.Item
                        renderAs="a"
                        value="active"
                        >
                        Femelle
                        </Dropdown.Item>
                        <Dropdown.Item
                        renderAs="a"
                        value="other 2"
                        >
                        
                        </Dropdown.Item>
                    </Dropdown>                   
                </div>
            </section>
            <section className="section">
                <div className="container columns">

                    <div className="column is-full-mobile is-full-tablet is-half-desktop">

                        <article className="box columns">
                            <picture className="column">
                                
                                <img src="#" alt="image animal" />
                            </picture>
                            <div className="column">
                                <span>Nom animal</span>
                                <span>Espèce</span>
                                <span>Age</span>
                                <span>Sexe</span>
                            </div>
                            <div className="column">                         
                            <Button
                                color="info"
                                renderAs="span"
                            >
                                Voir
                                </Button>  
                            </div>
                        </article>
                    </div>
                    <div id="map" className="column is-full-mobile is-full-tablet is-half-desktop">
                        map
                    </div>
                </div>

            </section>
            <section>

            </section>
        </main>
    )
}

export default TrouverAnimal