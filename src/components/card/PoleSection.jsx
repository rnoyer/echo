import "./PoleSection.scss";
import PoleTag from "./PoleTag";

function PoleSection({ poleTitre, poleNumber }) {
  return (
    <header className="pole-section">
      <PoleTag poleNumber={poleNumber} />
      <p className="section-content bold-p">{poleTitre}</p>
    </header>
  );
}

export default PoleSection;
