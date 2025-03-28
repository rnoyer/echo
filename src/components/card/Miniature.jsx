import "./Miniature.scss";
import quoteDark from "/src/assets/quote-dark.svg";

function Miniature({ name, cardColor }) {
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
          <p>{name}</p>
        </section>
      </div>
    </div>
  );
}

export default Miniature;
