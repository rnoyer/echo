import "./App.scss";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import getDeck from "../services/service";
import Card from "../components/card";

function App() {
  const [cardsDeck, setCardsDeck] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchDeckData = async () => {
      try {
        const deckData = await getDeck("/deck-mcc.json");
        setCardsDeck(deckData);
      } catch (error) {
        navigate("/404");
        console.log(error);
      }
    };
    fetchDeckData();
  }, []);

  return (
    <>
      <p>home</p>
      <Card titre={cardsDeck[0]?.titre} key={cardsDeck[0]?.id} />
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
