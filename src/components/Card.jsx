import "./Card.scss";
import Wrapper from "./Wrapper";
import PoleSection from "./PoleSection";
import ATSection from "./ATSection";
import Tile from "./Tile";

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
          {resultats?.map((item) => <Tile tileContent={item?.resultat} iconBehaviour="top" key={item?.resultat} /> )}
        </Wrapper>
        <Wrapper title="Compétences mobilisées" >
          {competences?.map((item) => <Tile tileContent={item?.competence} sideIcon={item?.id} iconBehaviour="stretch" key={item?.id} /> )}
        </Wrapper>
      </section>
    </div>
  );
}

export default Card;
