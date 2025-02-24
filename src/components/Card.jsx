import "./Card.scss";
import Pole from "./PoleTag";
import Wrapper from "./Wrapper";
import PoleSection from "./PoleSection";
import ATSection from "./ATSection";

function Card({
  discipline,
  poleNumber,
  poleTitre,
  activite,
  tache,
  titre,
  competences,
  resultats,
}) {
  return (
    <div className="outer-card">
      <h1>{discipline}</h1>
      <section className="inner-card">
        <PoleSection poleTitre={poleTitre} poleNumber={poleNumber} />
        <ATSection activite={activite} tache={tache} titre={titre} />
        <Wrapper title="Résultats attendus" classCustom='wrapper-resultat'>
          <p>liste</p>
        </Wrapper>
        <Wrapper title="Compétences mobilisées" >
          <p>liste</p>
        </Wrapper>
      </section>
    </div>
  );
}

export default Card;
