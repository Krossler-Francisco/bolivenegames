import "./Footer.css"

function FooterPage() {
  return (
    <footer className="footer_container" >  
      <a data-aos="fade-up" href="/"><img className="footer_logo" src="./img/logo.png" width={220} alt="logo-enterprise" /></a>
      <p data-aos="fade-up">Redefining mobile gaming with accessible and immersive experiences. Where innovation meets entertainment, for players everywhere.</p>
      <div className="social_footer" data-aos="fade-up">
        <a>facebook</a>
        <a>youtube</a>
      </div>
      <strong>Copyright 2024 <a href="#" >Bolivene</a>. All Rights Reserved By <a href="#" >SINAG</a></strong>
    </footer>
  )
}

export default FooterPage