import "./InfoTitle.css"

function InfoTitle({ titleName }) {
  return (
    <div className="title-container">
        <h1>{titleName}</h1>
        <span></span>
    </div>
  )
}

export default InfoTitle