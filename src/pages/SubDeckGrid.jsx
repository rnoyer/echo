import "./SubDeckGrid.scss";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import Miniature from "../components/card/Miniature";
import Previous from "../components/buttons/Previous";

function SubDeckGrid() {
  const [subDeckList, setSubDeckList] = useState();
  const navigate = useNavigate();
  const { deckId } = useParams();

  useEffect(() => {
    const getSubDeckList = async () => {
      try {
        const url = "/deck-mcc.json";
        const response = await fetch(url);
        const data = await response.json();

        setSubDeckList(data);
      } catch (error) {
        console.log(error);
        navigate("/404");
      }
    };
    getSubDeckList();
  }, []);

  // const isIt = subDeckList?.find((deck) => deck.id === deckId);

  return (
    <>
      <div className="deck-list-container">
        {subDeckList?.map((subDeck) => (
          <Link to={`/${deckId}/${subDeck.id}`} key={subDeck.id}>
            <Miniature
              name={subDeck.subSetName}
              cardColor={subDeck.cardColor}
            />
          </Link>
        ))}
      </div>
      <Previous path="/" />
    </>
  );
}

export default SubDeckGrid;
