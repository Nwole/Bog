import './register.css';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className='register'>
        <span className='logintitle'>Register</span>
        <form className='loginform'>
            <label>Username</label>
            <input className='loginInput' type="text" placeholder="Enter your usernam..." />
            <label>Email</label>
            <input className='loginInput' type="text" placeholder="Enter your email..." />
            <label>Password</label>
            <input className='loginInput' type="text" placeholder="Enter your password..." />
            <button className='loginButton'>Register</button>
        </form>
        <button className='loginLoginButton'>
          <Link className="link" to="/login">Login</Link>
          </button>
    </div>
  );
};

export default Register;
