import SideBar from "../../SideBar/SideBar";
import SinglePost from "../../SinglePost/SinglePost";
import "./single.css";

const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  );
};

export default Single;
