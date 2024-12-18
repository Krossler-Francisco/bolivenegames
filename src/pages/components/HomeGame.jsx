import RedButton from "./Buttons/RedButton"
import "./HomeGame.css"

function HomeGame({link, img, name, description, group, price }) {
  return (
    <div className="header-link-anchor">
          <a className="" href="#">
            <img className="header-link" src={img} alt="game-link" />
          </a>
          <aside className="header-game-aside">
            <a href={link}><h1>{name}</h1></a>
            <h2>{description}</h2>
              <div className="header-aside-container">
                <section className="header-aside-flex">
                  <div className="aside-props">
                    <h3>4 Groups</h3>
                    <strong>{group} Players</strong>
                  </div>
                  <div className="aside-props">
                    <h3>Prize Pool</h3>
                    <strong>${price}</strong>
                  </div>
                </section>
                <RedButton
                    buttonLink="www.instagram.com"
                    buttonName="Book now"
                  />
              </div>

          </aside>
        </div>
  )
}

export default HomeGame