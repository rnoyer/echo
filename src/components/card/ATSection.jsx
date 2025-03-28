import "./ATSection.scss";

function ATSection({ activite, tache, titre }) {
  return (
    <article className="activite-tache-section">
      <div className="activite">
        <h2>{activite}</h2>
      </div>
      <div className="tache">
        <h2>{tache}</h2>
      </div>
      <div className="activite-tache-content">
        <p className="bold-p">{titre}</p>
      </div>
    </article>
  );
}

export default ATSection;
