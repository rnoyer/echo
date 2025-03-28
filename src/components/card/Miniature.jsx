import "./Miniature.scss";
import quoteDark from "/src/assets/quote-dark.svg";

function Miniature({ title, description, cardColor }) {
  return (
    <div className="card-deck">
      <div
        className="outer-card outer-mini"
        style={{ backgroundColor: cardColor }}
      >
        <div className="card-header">
          <img src={quoteDark} alt="" />
        </div>
        <section className="inner-card inner-mini">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
        </section>
      </div>
    </div>
  );
}

export default Miniature;
