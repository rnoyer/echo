import "./ATSection.scss";

function ATSection({ activite, tache, titre }) {
  return (
    <article className="activite-tache-section">
      <div className="activite">
        <p>{activite}</p>
      </div>
      <div className="tache">
        <p>{tache}</p>
      </div>
      <div className="activite-tache-content">
        <p className="bold-p">{titre}</p>
      </div>
    </article>
  );
}

export default ATSection;
