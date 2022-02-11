import './header.css';
import headerPic from '../../images/blog1.jpg'
const Header = () => {
  return (
    <div className='header'>
        <div className='headerTitle'>
            <span className='headerTitlesm'>React & Node</span>
            <span className='headerTitlelg'>Blog</span>
        </div>
        <img src={headerPic} alt='gee' className='headerImg' />
    </div>
  );
};

export default Header;
