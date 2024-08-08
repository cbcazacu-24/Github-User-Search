import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {

  }

  return (
    <>
      <div className="contentWrapper">
        <div className="header">
          <span className="appName">devfinder</span>
          <button className="modeBtn" onClick={handleClick}> dark </button>
        </div>

        <div className="searchBar">
          <input className="input" placeholder="Search GitHub username..." />
          <button className="searchBtn">Search</button>
        </div>

        <div className="mainContent">
          <div className="user">
            <span className="imgContainer">
              <img src='https://avatars.githubusercontent.com/u/177167140?s=400&u=8f2e1aaabfb036b33ab6564c9d07f544ca53f95e&v=4' alt='pfp' className='img'/>
            </span>

            <span className="userInfo">
              <span id='name'>Bogdan</span>
              <span id='userName'>@cbcazacu-24</span>
              <span id='joinDate'>Joined 31 Jul 2024</span>
            </span>
          </div>

          <div className="description">
            Career conversion to Front End Development from Radiotherapy and Oncology. It is a challenge but I am looking forward to achieving it.
          </div>

          <div className="stats">
            <span className="stat">
              <span className="label">Repos</span>
              <span className="number">4</span>
            </span>
            <span className="stat">
              <span className="label">Followers</span>
              <span className="number">0</span>
            </span>
            <span className="stat">
              <span className="label">Following</span>
              <span className="number">1</span>
            </span>
          </div>

          <div className="socials">
            <span id='city'>London</span>
            <span id='gHub'>https://github.com/cbcazacu-24</span>
            <span id='twitter'>Twitter</span>
            <span id='work'>https://www.linkedin.com/in/bogdan-cazacu-4a94a2318/</span>
          </div>
        </div>
      </div>
      

      {/* axios import for api request implementation */}
      <script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>
    </>
  );
}

export default App;
