import { Section, Heading, Image, Button, Table } from 'react-bulma-components';
function ProfilUtilisateur() {


    return (
       <main>
         
      <div>
        <Heading size={1}>Profil utilisateur</Heading>
      </div>
      <Section>
        <picture>
          <Image src="#" alt="profile picture" size={300} />
        </picture>
        <ul>
          <li>Nom</li>
          <li>Prénom</li>
          <li>Email</li>
          <li>Tél</li>
          <li>Pays</li>
          <li>Code postal</li>
          <li>Ville</li>
          <li>Adresse</li>
        </ul>
        <Heading size={2}>Description</Heading>
        <Section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi recusandae, velit exercitationem corrupti
            expedita laudantium adipisci ea, reprehenderit cupiditate nam aperiam maiores tempore qui ducimus rerum
            molestiae id laboriosam eum.
          </p>
        </Section>
        <Button color="primary" className="js-modal-trigger" data-target="modal-js-example">
          Contacter ou modifier
        </Button>
      </Section>
      <Section>
        <Heading size={2}>Profils d'accueil</Heading>
        <Button color="primary" className="js-modal-trigger" data-target="modal-js-example">
          Ajouter
        </Button>
        <Table>
          <thead>
            <tr>
              <th>Espèce</th>
              <th>Age</th>
              <th>Sexe</th>
              <th>Perimètre</th>
              <th>Suppr.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chat</td>
              <td>-5ans</td>
              <td>Mâle</td>
              <td>30 Km</td>
              <td>
                <Button color="danger" className="is-dark">
                  Suppr
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Section>
        </main>
    )
  }
  
  export default ProfilUtilisateur;