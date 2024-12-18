import { Link } from "react-router-dom";
import "./RedButton.css"

function RedButton({ buttonLink, buttonName }) {
  return (
    <figure className="red-button">
        <Link to={buttonLink} className="">
            <span className="red-button-name">
                {buttonName}
            </span>
            <span className="red-button-transition"></span>
        </Link>
    </figure>
  );
}

export default RedButton;