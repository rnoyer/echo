import "./Card.scss";
import { Link, useParams } from "react-router";
import Wrapper from "./Wrapper";
import PoleSection from "./PoleSection";
import ATSection from "./ATSection";
import Tile from "./Tile";
import previous from "/src/assets/chevron-left-solid-dark.svg";

function Card({
  discipline,
  poleNumber,
  poleTitre,
  activite,
  tache,
  titre,
  competences,
  resultats,
  cardColor,
}) {
  const { deckId } = useParams();
  return (
    <div className="outer-card" style={{ backgroundColor: cardColor }}>
      <div className="card-header">
        <h1>{discipline}</h1>
        <Link to={`/echo/${deckId}`} className="card-header--menu">
          <img src={previous} alt="" />
        </Link>
      </div>
      <section className="inner-card">
        <PoleSection poleTitre={poleTitre} poleNumber={poleNumber} />
        <ATSection activite={activite} tache={tache} titre={titre} />
        <Wrapper title="Résultats attendus" classCustom="wrapper-resultat">
          {resultats?.map((item) => (
            <Tile
              tileContent={item?.resultat}
              iconBehaviour="top"
              key={item?.resultat}
            />
          ))}
        </Wrapper>
        <Wrapper title="Compétences mobilisées">
          {competences?.map((item) => (
            <Tile
              tileContent={item?.competence}
              sideIcon={item?.id}
              iconBehaviour="stretch"
              key={item?.id}
            />
          ))}
        </Wrapper>
      </section>
    </div>
  );
}

export default Card;
