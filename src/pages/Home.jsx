import "./Home.css";
import gamelist from "./data/gamelist.json";
import HomeGame from "./components/HomeGame";
import { useState, useEffect } from "react";
import InfoTitle from "./components/Titles/InfoTitle";
import ActivitiesTitle from "./components/Titles/ActivitiesTitle";
import RedButton from "./components/Buttons/RedButton";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activitiesList = [
    {
      id: 1,
      title: "Publishing and launching high-quality mobile video games"
    },
    {
      id: 2,
      title: "Modern strategies that ensure smooth experiences for players"
    },
    {
      id: 3,
      title: "Continuous research on trends and user preferences"
    },
    {
      id: 4,
      title: "Developing accessible and entertaining games for a global audience"
    },
    {
      id: 5,
      title: "Launching titles like Patch of Destiny, our flagship RPG"
    },
    {
      id: 6,
      title: "Commitment to innovation and gamer community satisfaction"
    }
  ];
  
  const nextGame = () => {
    if (currentIndex < gamelist.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevGame = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <>
      <div className="header-container">
        <section className="home-game-section">
          <div className="game-slider-container">
            <button
              className="slider-button prev"
              onClick={prevGame}
              disabled={currentIndex === 0}
            >
              <span>&#60;</span>
            </button>
            <div
              className="game-slider"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {gamelist.map((game, index) => {
                let positionClass = '';
                if (index === currentIndex) {
                  positionClass = 'active';
                } else if (index === currentIndex - 1 || (currentIndex === 0 && index === gamelist.length - 1)) {
                  positionClass = 'left';
                } else if (index === currentIndex + 1 || (currentIndex === gamelist.length - 1 && index === 0)) {
                  positionClass = 'right';
                }

                return (
                  <div key={game.id} className={`game-slide ${positionClass}`}>
                    <HomeGame
                      link={game.link}
                      img={game.img}
                      name={game.name}
                      description={game.description}
                      group={game.group}
                      price={game.price}
                    />
                  </div>
                );
              })}
            </div>
            <button
              className="slider-button next"
              onClick={nextGame}
              disabled={currentIndex === gamelist.length - 1}
            >
              <span>&#62;</span>
            </button>
          </div>
        </section>
      </div>
      <section className="enterprise-about-home">
        <header data-aos="fade-up" className="enterprise-about-title">
            <span>BOLIVENE</span>
            <h1 >Games and Interactive Entertainment Industry</h1>
        </header>
        <div className="home-info-div-container">
          <div data-aos="fade-up" className="home-info-div">
              <InfoTitle
              titleName="Our Story" />
              <p>Is a company specializing in the publishing and launch of mobile games, focusing on bringing accessible and entertaining gaming experiences to a broad audience.</p>
          </div>
          <div data-aos="fade-up" className="home-info-div">
          <InfoTitle
              titleName="ACTIVITIES" />
            {activitiesList.map((title) => {
                return (
                  <div className="activities-container">
                      <ActivitiesTitle
                      key={title.id}
                      titleContent={title.title}/>
                  </div>
                )
            })
            }
          </div>
        </div>
      </section>
      <section data-aos="fade-up" className="enterprise-about-home">
        <a target="_blank" className="video-anchor" href="https://www.youtube.com/watch?v=KkOZiZcW7PE">
          <img src="./img/youtube.jpg" alt="YouTube Thumbnail" />
          <div className="play-button"></div>
        </a>
      </section>
      <section data-aos="fade-up"  className="game-about-section">
        <div className="div-game">
          <div className="div-game-content">
            <aside>
              <h1>Our Featured Game:</h1>
              <h2>Path of Destiny</h2>
              <p>Explora territorios mágicos llenos de desafíos emocionantes, forma alianzas épicas con jugadores de todo el mundo, y personaliza tus héroes equipándolos con habilidades únicas para destacar en la batalla. Disponible exclusivamente para dispositivos móviles.</p>
            </aside>
            <RedButton
              buttonLink="https://play.google.com/store/apps/details?id=com.bolivene.pathofdestiny&hl=en&pli=1"
              buttonName="PlayStore"
              />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
