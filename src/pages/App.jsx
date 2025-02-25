import "./App.scss";
import "swiper/css";
import "swiper/css/keyboard";
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import getDeck from "../services/service";
import Card from "../components/Card";

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
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        keyboard={{
          enabled: true,
        }}
        modules={[Keyboard, Pagination]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {cardsDeck?.map((card) => (
          <SwiperSlide key={card.id}>
            <Card
              discipline={card.discipline}
              poleNumber={card.poleNumber}
              poleTitre={card.poleTitre}
              activite={card.activite}
              tache={card.tache}
              titre={card.titre}
              competences={card.competences}
              resultats={card.resultats}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Card
        key={cardsDeck[5]?.id}
        discipline={cardsDeck[5]?.discipline}
        poleNumber={cardsDeck[5]?.poleNumber}
        poleTitre={cardsDeck[5]?.poleTitre}
        activite={cardsDeck[5]?.activite}
        tache={cardsDeck[5]?.tache}
        titre={cardsDeck[5]?.titre}
        competences={cardsDeck[5]?.competences}
        resultats={cardsDeck[5]?.resultats}
      /> */}
    </>
  );
}

export default App;
