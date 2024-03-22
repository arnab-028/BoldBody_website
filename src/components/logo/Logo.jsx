import { Link } from "react-router-dom";
import logoWhite from "../../images/logo/Home3.png";
import logoBlack from "../../images/logo/logo-footer.svg";

function Logo({ size = "w-40", type = "white" }) {
  return (
    <Link to="/" className="focus inline-block">
      <img
        src={`${type === "black" ? logoBlack : logoWhite}`}
        alt="boldbody logo"
        className={`h-auto ${size} px-4 py-2`}
      />
    </Link>
  );
}

export default Logo;
