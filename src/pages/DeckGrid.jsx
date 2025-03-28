import "./DeckGrid.scss";
import { useEffect, useState } from "react";
import Miniature from "../components/card/Miniature";
import { Link, useNavigate } from "react-router";

function DeckGrid() {
  const filiere = "mcc";
  const [deckList, setDeckList] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getDeckList = async () => {
      try {
        const url = "./list-of-deck.json";
        const response = await fetch(url);
        const data = await response.json();
        const filiereData = await data.find((item) => item.filiere === filiere);
        const formattedData = filiereData.deck;
        setDeckList(formattedData);
      } catch (error) {
        console.log(error);
        navigate("/404");
      }
    };
    getDeckList();
  }, []);

  return (
    <div className="deck-list-container">
      {deckList?.map((deck) => (
        <Link to={`/${deck.id}`} key={deck.id}>
          <Miniature name={deck.name} cardColor={deck.cardColor} />
        </Link>
      ))}
    </div>
  );
}

export default DeckGrid;
