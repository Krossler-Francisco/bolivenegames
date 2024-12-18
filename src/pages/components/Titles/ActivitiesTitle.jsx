import "./ActivitiesTitle.css"

function ActivitiesTitle({ titleContent }) {
  return (
    <span className="activities-title-content">
        <img src="./img/check.png" alt="check" />
        <p>{titleContent}</p>
    </span>
  )
}

export default ActivitiesTitle