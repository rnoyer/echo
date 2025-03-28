import "./App.scss";
import "swiper/css";
import "swiper/css/keyboard";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination } from "swiper/modules";
import Card from "../components/card/Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function App() {
  const { subDeckId } = useParams();
  const [cards, setCards] = useState();

  useEffect(() => {
    const getCards = async () => {
      try {
        const url = "/deck-mcc.json";
        const response = await fetch(url);
        const data = await response.json();
        const cardsData = await data.find(
          (item) => item.id === parseInt(subDeckId)
        );

        setCards(cardsData);
      } catch (error) {
        console.log(error);
        navigate("/404");
      }
    };
    getCards();
  }, []);

  return (
    <div>
      <Swiper
        className="swiper"
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
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {cards?.cardSet.map((card) => (
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
              cardColor={cards.cardColor}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
