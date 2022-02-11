import "./singlePost.css";
import postPic from "../../images/flight.jpg";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={postPic} alt="gee" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <EditIcon className="singlePostIcon"/>
            <DeleteIcon className="singlePostIcon"/>
          </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">
                Author: <b>Chidi</b>
            </span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDisc">
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit..." "There is no one who loves pain itself,
        who seeks after it and wants to have it, simply because it is pain..."
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit..." "There is no one who loves pain itself,
        who seeks after it and wants to have it, simply because it is pain..."
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit..." "There is no one who loves pain itself,
        who seeks after it and wants to have it, simply because it is pain..."
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
