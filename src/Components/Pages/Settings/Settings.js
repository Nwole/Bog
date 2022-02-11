import SideBar from "../../SideBar/SideBar";
import "./settings.css";
import Pic from "../../../images/blog8.jpg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Update account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={Pic} alt="gee" className="settingsFormImg" />
            <label htmlFor="fileInput">
              <AccountCircleIcon className="settingsPPIcon" />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <labe>Username</labe>
          <input type="text" placeholder="john" />
          <labe>Email</labe>
          <input type="text" placeholder="john@gmail.com" />
          <labe>Password</labe>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Settings;
