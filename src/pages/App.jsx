import "./App.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import getDeck from "../services/service";

function App() {
  const [cardsDeck, setCardsDeck] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const fetchDeckData = async () => {
       try {
           const deckData = await getDeck('/deck-mcc.json')
           setCardsDeck(deckData)
       } catch (error) {
            navigate("/404")
            console.log(error)
       }
    }
    fetchDeckData()
}, [])
console.log(cardsDeck)

  return (
    <>
      <p>home</p>
      {cardsDeck?.map(card => <p>{card.titre}</p>)}
    </>
  );
}

export default App;
