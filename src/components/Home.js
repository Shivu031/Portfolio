import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
        <div className="titleContainer">
          <img src="/1.png" alt="" className="image" />
            <p className='para'>
                <span className="welcome">Welcome to my Portfolio</span>
                <br/>
                <span className="intro">Hii,</span>
                <br/>
                <span className="intro">I am Shivanee Patel</span>
                <br/>
                <br/>
                <button className="homeButton">
                  <Link to='/about' style={{textDecoration:'none',color:'black'}}>Tell Me More!</Link>
                </button>
            </p>
        </div>
    </div>
  )
}

export default Home
