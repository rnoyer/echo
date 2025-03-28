import "./PoleTag.scss";

function PoleTag({ poleNumber }) {
  return (
    <div className="pole-tag-section">
        <h2>Pôle <br /> {poleNumber}</h2>
    </div>
  );
}

export default PoleTag;
