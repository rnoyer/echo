import './Card.scss'

function Card({ discipline, pole, poleTitre, activite, tache, titre, competences, resultats }) {
  return (
    <section>
        <header>
            <h1>{discipline}</h1>
            <h2>Pôle {pole}</h2>
            <p>{poleTitre}</p>
        </header>
        <article>
            <h3>{activite}-{tache}</h3>
            <p>{titre}</p>
        </article>
            <h3>Compétences mobilisées</h3>
            <p>liste</p>
        <article>
            <h3>Résultats attendus</h3>
            <p>liste</p>
        </article>
    </section>
  )
}

export default Card