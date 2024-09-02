function ProfilUtilisateur() {


    return (
       <main>
        <div>
        <h1 className="title">Profil utilisateur</h1>
    </div>
    <section>
        <picture>
            <img src="#" alt="profile picture" width="300" />
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
        <h2>Description</h2>
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi recusandae, velit exercitationem corrupti
                expedita laudantium adipisci ea, reprehenderit cupiditate nam aperiam maiores tempore qui ducimus rerum
                molestiae id laboriosam eum.</p>
        </div>
        <button className="button is-primary js-modal-trigger" data-target="modal-js-example">Contacter ou modifier</button>
    </section>
    <section>
        <h2>Profils d'accueil</h2>
        <button className="button is-primary js-modal-trigger" data-target="modal-js-example">Ajouter</button>
        <table className="table">
            <thead>
                <tr>
                    <th>Espèce</th>
                    <th>Age</th>
                    <th>Sexe</th>
                    <th>Perimètre</th>
                    <th>Suppr.</th>
                </tr>
            <tbody>
                <tr>
                    <td>Chat</td>
                    <td>-5ans</td>
                    <td>Mâle</td>
                    <td>30 Km</td>
                    <td><button className="button is-danger is-dark">Suppr</button></td>
                </tr>
            </tbody>
            </thead>
        </table>
    </section>
        </main>
    )
  }
  
  export default ProfilUtilisateur;