import "./Tile.scss";
import thumbUp from "../assets/thumbs-up-solid.svg"

function Tile({ tileContent, sideIcon, iconBehaviour ="top" }) {
  return (
    <article className="tile">
        
        <div className={`side-icon bold-p ${iconBehaviour}`}>
          {!!!sideIcon ? <img src={thumbUp} className="thumb-icon"></img> : sideIcon}
        </div>
        <p>{tileContent}</p>
    </article>
  );
}

export default Tile;
