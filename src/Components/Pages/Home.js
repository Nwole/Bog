import './home.css';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Posts from '../Posts/Posts';
const Home = () => {
  return (
    <>
        <Header />
        <div className='home'>
          <Posts />
          <SideBar />
        </div>
    </>
  );
};

export default Home;
