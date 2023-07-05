import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skillContainer">
        <span className="skillsTitle">Skills</span>
        <hr className='horizontal'/>
        <ul className="skillsList">
          <div className="verticalLine">
            <li className="list">HTML 
            <br/>
            <br/> 
            <i className="fa-brands fa-html5 fa-2xl" style={{color: "#d11f1f"}}></i>
            </li>
          </div>
          <div className="verticalLine">
            <li className="list">CSS
            <br/>
            <br/>
            <i className="fa-brands fa-css3-alt fa-2xl" style={{color: "#0995ec"}}></i>
            </li>
          </div>
          <div className="verticalLine">
            <li className="list">C
            <br/>
            <br/>
            <i className="fa-solid fa-c fa-2xl" style={{color: "#075adf"}}></i></li>
          </div>
          <div className="verticalLine">
            <li className="list">ReactJs
            <br/>
            <br/>
            <i className="fa-brands fa-react fa-2xl" style={{color: "#09e8ec"}}></i>
            </li>
          </div>
          <div className="verticalLine">
            <li className="list">Javascript
            <br/>
            <br/>
            <i className="fa-brands fa-js fa-2xl" style={{color: "#f0e80f"}}></i>
            </li>
          </div>
          <div className="verticalLine">
            <li className="list">Python
            <br/>
            <br/>
            <i className="fa-brands fa-python fa-2xl" style={{color: "#054aeb"}}></i>
            </li>
          </div>
        </ul>
    </div>
  )
}

export default Skills
