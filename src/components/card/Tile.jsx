import "./Tile.scss";
import thumbUp from "/src/assets/thumbs-up-solid.svg"

function Tile({ tileContent, sideIcon, iconBehaviour ="top" }) {
  return (
    <article className="tile">
        
        <div className={`side-icon bold-p ${iconBehaviour}`}>
          {!!!sideIcon ? <img src={thumbUp} className="thumb-icon"></img> : <p>{sideIcon}</p>}
        </div>
        <p>{tileContent}</p>
    </article>
  );
}

export default Tile;
