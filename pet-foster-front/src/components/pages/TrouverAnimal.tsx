import { Heading, Dropdown, DropdownItem, Icon } from "react-bulma-components";



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
                            <DropdownItem
                            renderAs="a"
                            value="item"
                            >
                            Toutes
                            </DropdownItem>
                            <DropdownItem
                            renderAs="a"
                            value="other"
                            >
                           Chien
                            </DropdownItem>
                            <DropdownItem
                            renderAs="a"
                            value="active"
                            >
                            Chat
                            </DropdownItem>
                            <DropdownItem
                            renderAs="a"
                            value="other 2"
                            >
                            Other Dropdown item
                            </DropdownItem>
                            <DropdownDivider />
                            <DropdownItem
                            renderAs="a"
                            value="divider"
                            >
                            After divider
                            </DropdownItem>
                        </Dropdown>
                     
                    {/* <form action="" className="columns">

                        <div className="column is-one-third">
                            <label htmlFor="species">Espèce</label>
                            <div className="select">

                                <select name="species" id="species">
                                    <option>Toutes</option>
                                    <option>Chien</option>
                                    <option>Chat</option>
                                </select>
                            </div>
                        </div>
                        <div className="column is-one-third">
                            <label htmlFor="age">Age</label>
                            <div className="select">

                                <select name="age" id="age">
                                    <option>Moins d'un an</option>
                                    <option>Entre un et trois ans</option>
                                    <option>Entre trois et 6 ans</option>
                                    <option>Plus de 6 ans</option>
                                </select>
                            </div>
                        </div>
                        <div className="column is-one-third">
                            <label htmlFor="sexe">Sexe</label>
                            <div className="select">

                                <select name="sexe" id="sexe">
                                    <option>Tous</option>
                                    <option>Mâle</option>
                                    <option>Femelle</option>
                                </select>
                            </div>
                        </div>

                    </form> */}
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
                                <button className="button is-link">Voir</button>
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