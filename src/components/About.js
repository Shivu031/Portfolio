import React from 'react';
import './About.css';

const About = () => {
  const GitUrl = "https://github.com/Shivu031/portfolio";
  const linkedInUrl = "https://www.linkedin.com/in/shivanee-patel-307672253/";
  const ResumeUrl = "https://docs.google.com/document/d/e/2PACX-1vTCmaUtfI_mxUvZQ__RsRXoDtGXbUwuzfvjmPBhcz7gNFLOUIrBhpPthFILeQtIK3ClLxWmsKs8Qqa6/pub";
  return (
    <div className="abContainer">
        <p>
            <h3 className="title">About Me!</h3>
            <br/>
            <br/>
            <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatem, id quidem ut eius mollitia consequatur laboriosam saepe accusamus a, nam vitae ex earum natus eligendi corporis. Aperiam, soluta minima.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio nam porro error doloremque, odit enim sit deserunt beatae facere neque magni quos sapiente dolor, eveniet consectetur reprehenderit iusto veritatis?
                <br/>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, vero reiciendis. Quod illum impedit voluptatem quae enim facere ut officiis obcaecati ipsum dolore delectus, saepe itaque, voluptates est inventore minima.
                <br/>
                <br/>
                <br/>
                <hr className='abHr'/>
                <h3>Education</h3>
                <li className="abItem">10th - UP Board - 89%</li>
                <li className="abItem">12th - CBSE Board - 84.4%</li>
                <li className="abItem">B.Sc - CSJMU - 75%</li>
                <li className="abItem">currently doing MCA</li>
            </p>
        </p>
        <p className="abDetails">
          <a href={`${ResumeUrl}`} className="items">RESUME</a>
            <br/>
            <br/>
            <a href={`${linkedInUrl}`} className="items">LinkedIn</a>
            <br/>
            <br/>
            <a href={`${GitUrl}`} className="items">GitHub</a>
          </p>
    </div>
  )
}

export default About
