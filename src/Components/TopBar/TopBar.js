import "./topBar.css";
import photo from "../../images/face1.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const TopBar = () => {
  const user = true;
  return (
    <div className="topBar">
      <div className="topBarLeft">
        <FacebookIcon className="topBarIcons" />
        <TwitterIcon className="topBarIcons" />
        <PinterestIcon className="topBarIcons" />
        <InstagramIcon className="topBarIcons" />
      </div>
      <div className="topBarCenter">
        <ul className="topList">
          <li className="tobBarListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="tobBarListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="tobBarListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="tobBarListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="tobBarListItem">
            <Link className="link" to="/logout">
            {user && "LOGOUT"}
            </Link>
            </li>
        </ul>
      </div>
      <div className="topBarRight">
        {user ? (
          <img src={photo} alt="gee" className="topRightImg" />
        ) : (
          <ul className="topList">
            <li className="tobBarListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="tobBarListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <SearchIcon className="topSearchIcon" />
      </div>
    </div>
  );
};

export default TopBar;
