import image from './images/Image.jpg'
import Navbar from './components/Navbar'
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
    <Navbar />
    <div className="container form-center">
      <div className="sign-in-form">
          <div className="sign-in-text">
              <h1>welcome back</h1>
              <p>Enter your email and password to sign in</p>
          </div>
          
          <div className="form-group">
              <p className="label">Email</p>
              <input type="text" className="input" placeholder="Your email address" />
              <p className="label">Password</p>
              <input type="text" className="input" placeholder="Your password" />
              <div className="toggle-container">
                  <img className="toggle-image" src="./Base.jpg" alt="" />
                  <p className="toggle-text">Remember me</p>
              </div>
              <button className="input-btn">sign in</button>
              <p className="sign-up">Do you have an account? <span>Sign up</span> </p>
          </div>
      </div>
      <div className="sign-in-image">
              <img
              src={image}
              className="about-photo"
              alt="awesome beach"
            />
      </div>
  </div>
</div>
  );
}

export default App;
