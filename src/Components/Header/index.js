import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./index.css";
const Header = () => {
  const navigate = useNavigate();
  const logmeout = () => {
    Cookies.remove("jwt");
    navigate("/login");
  };

  const getName = async (req, res) => {
    const data = await fetch();
  };

  return (
    <div className="header-div">
      <h1>Hello user, Welcome !</h1>
      <div>
        <button onClick={logmeout} className="btn btn-danger">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
