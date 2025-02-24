import "./App.scss";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import getDeck from "../services/service";
import Card from "../components/Card"

function App() {
  const [cardsDeck, setCardsDeck] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchDeckData = async () => {
      try {
        const deckData = await getDeck("./deck-mcc.json");
        setCardsDeck(deckData);
      } catch (error) {
        console.log(error);
        navigate("/404");
      }
    };
    fetchDeckData();
  }, []);

  return (
    <>
      <Card
        key={cardsDeck[5]?.id}
        discipline={cardsDeck[5]?.discipline}
        poleNumber={cardsDeck[5]?.poleNumber}
        poleTitre={cardsDeck[5]?.poleTitre}
        activite={cardsDeck[5]?.activite}
        tache={cardsDeck[5]?.tache}
        titre={cardsDeck[5]?.titre}
        competences={cardsDeck[5]?.competences}
        resultats={cardsDeck[5]?.resultats}
      />
      {/* {cardsDeck?.map((card) => (<Card titre={card.titre} key={card.id} />))} */}
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={25}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {cardsDeck?.map((card) => (
          <SwiperSlide>
            <Card titre={card.titre} key={card.id} />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </>
  );
}

export default App;
