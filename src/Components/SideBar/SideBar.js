import "./sideBar.css";
import sideBarPic from "../../images/face2.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT ME</span>
        <img src={sideBarPic} alt="gee" className="sideBarImg" />
        <p className="title">
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..." "There is no one who loves pain
          itself, who seeks after it and wants to have it, simply because it is
          pain..."
        </p>
      </div>
      <div className="sideBarItem">
      <span className="sideBarTitle">CATEGORIES</span>
      <ul className="sideBarList">
          <li className="sideBarListItem">Life</li>
          <li className="sideBarListItem">Music</li>
          <li className="sideBarListItem">Style</li>
          <li className="sideBarListItem">Sport</li>
          <li className="sideBarListItem">Tech</li>
          <li className="sideBarListItem">Cinema</li>
      </ul>
      </div>
      <div className="sideBarItem">
          <span className="sideBarTitle">FOLLOW US</span>
          <div className="sideBarSocial">
          <FacebookIcon className='sideBarIcons' />
            <TwitterIcon className='sideBarIcons'/>
            <PinterestIcon className='sideBarIcons'/>
            <InstagramIcon className='sideBarIcons'/>
          </div>
      </div>
    </div>
  );
};

export default SideBar;
