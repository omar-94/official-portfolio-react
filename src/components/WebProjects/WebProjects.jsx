import React, { useState } from 'react';
import "./webProjects.scss";

export default function WebProjects() {

  const [currentSlide, setCurrentSlide] = useState(0); //initial state is 0 which defines that no translateX() has occured, which will be multiplied by 100 to get vw translateX() declared in template literal below

  const sliderData = [
    {
      id: '1',
      icon: './assets/mobile.png',
      title: 'Project One',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem earum non laudantium magni suscipit quidem recusandae quo saepe.',
      img: 'https://i.pinimg.com/originals/3f/ea/62/3fea6267c5d6e7b32ca85f83aeb20891.jpg'
    },
    {
      id: '2',
      icon: './assets/mobile.png',
      title: 'Project Two',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem earum non',
      img: 'https://i.pinimg.com/originals/3f/ea/62/3fea6267c5d6e7b32ca85f83aeb20891.jpg'
    },
    {
      id: '3',
      icon: './assets/mobile.png',
      title: 'Project Three',
      desc: 'adipisicing elit. Autem earum non laudantium magni suscipit quidem recusandae quo saepe.',
      img: 'https://i.pinimg.com/originals/3f/ea/62/3fea6267c5d6e7b32ca85f83aeb20891.jpg'
    },
    {
      id: '4',
      icon: './assets/mobile.png',
      title: 'Project Four',
      desc: 'adipisicing elit. Autem earum non laudantium magni suscipit quidem recusandae quo saepe.',
      img: 'https://i.pinimg.com/originals/3f/ea/62/3fea6267c5d6e7b32ca85f83aeb20891.jpg'
    },
    {
      id: '5',
      icon: './assets/mobile.png',
      title: 'Project Five',
      desc: 'adipisicing elit. Autem earum non laudantium magni suscipit quidem recusandae quo saepe.',
      img: 'https://i.pinimg.com/originals/3f/ea/62/3fea6267c5d6e7b32ca85f83aeb20891.jpg'
    },
  ]

  const handleClick = (whichWay) => {                                                 //handleClick function passing parameter 'whichWay'
    whichWay === 'left'                                                               //if 'whichWay' is equal to 'left' , which will be passed through onClick event below
    ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : sliderData.length-1)        //if true.. set setCurrentSlide(asking another question).. do currentSlide-1 if currentSlide is bigger than 0 (subtract to left).. set to last array item if currentSlide is less than 0
    : setCurrentSlide(currentSlide < sliderData.length-1 ? currentSlide+1 : 0)        //if 'left' is not passed through then do currentSlide+1 if currentSlide is less than length of array (adding up to right).. set to 0 or begining if currentSlide is greater than length of array
  }                                                                                   //PRACTICE: change zero to 3 in your head and set sliderData.length to 6 (indices of array above)

  return (
    <div className="webProjects" id='webProjects'>
      <img src='assets/arrow.png' className='arrow left' alt='' onClick={() => handleClick('left')}/>   {/*sets onClick event to function handleClick which is defined above, passing the parameter we set as 'left' since this is the left button*/}
      <img src='assets/arrow.png' className='arrow right' alt='' onClick={() => handleClick()}/> 
      <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)` }}               /*inline styling to transform property using template literal, passing in var from useState() and multiplying by 100 setting the vw */>
        {sliderData.map((sliderDataDetails) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={sliderDataDetails.icon} alt=""/>
                  </div>  
                  <h3>{sliderDataDetails.title}</h3>
                  <p>{sliderDataDetails.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={sliderDataDetails.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>      
    </div>
  )
}
