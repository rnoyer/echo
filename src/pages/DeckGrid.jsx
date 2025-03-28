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
        const url = `${import.meta.env.BASE_URL}data/list-of-deck.json`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const filiereData = await data.find((item) => item.filiere === filiere);
        const formattedData = filiereData.deck;
        setDeckList(formattedData);
      } catch (error) {
        console.error(error);
        // navigate("/404");
      }
    };
    getDeckList();
  }, []);

  return (
    <div className="deck-list-container">
      {deckList?.map((deck) =>
        deck.active ? (
          <Link to={`/echo/${deck.id}`} key={deck.id}>
            <Miniature
              title={deck.name}
              cardColor={deck.cardColor}
              isActive={deck.active}
            />
          </Link>
        ) : (
          <Miniature
            title={deck.name}
            cardColor={deck.cardColor}
            isActive={deck.active}
          />
        )
      )}
    </div>
  );
}

export default DeckGrid;
