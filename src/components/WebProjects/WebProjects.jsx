import React from 'react';
import "./webProjects.scss";

export default function WebProjects() {
  return (
    <div className="webProjects" id='webProjects'>
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/mobile.png" alt=""/>
                </div>  
                <h3>Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem earum non laudantium magni suscipit quidem recusandae quo saepe.
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="https://www.sliderrevolution.com/wp-content/uploads/2020/09/Brave-People.jpg" alt="" />
            </div>
          </div>  
        </div>
      </div>      
    </div>
  )
}
