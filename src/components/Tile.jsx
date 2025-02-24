import "./Tile.scss";

function Tile({ tileContent, sideIcon, iconBehaviour }) {
  return (
    <article className="tile">
        <div className={`side-icon ${iconBehaviour}`}>{sideIcon}</div>
        <p>{tileContent}</p>
    </article>
  );
}

export default Tile;
