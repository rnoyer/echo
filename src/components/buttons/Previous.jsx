import "./Previous.scss";
import chevronLeft from "/src/assets/chevron-left-solid.svg";
import { Link } from "react-router";

function Previous({ path }) {
  return (
    <Link to={path}>
      <div className="previous-link">
        <img src={chevronLeft} alt="" />
      </div>
    </Link>
  );
}

export default Previous;
