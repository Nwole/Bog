import './write.css';
import AddIcon from '@mui/icons-material/Add';
import writePic from '../../../images/blog3.jpg'
const Write = () => {
  return (
    <div className='write'>
        <div className='writeForm'>
        <img src={writePic} alt="gee" className="writeImg" />
            <div className='writeFormGroup'>
                <label htmlFor='fileInput'> <AddIcon  className='writeIcon'/></label>
                <input className='writeInput' type="file" id="fileInput" style={{display: 'none'}} />
                <input type="text" placeholder="title"  className='writeInput' autoFocus={true}/>
            </div>
            <div className='writeFormGroup'>
                <textarea placeholder='tell your story...' type="text" className='writeInput writeText'></textarea>
            </div>
        </div>
        <button className='writeSubmit'>Publish</button>
    </div>
  );
};

export default Write;
