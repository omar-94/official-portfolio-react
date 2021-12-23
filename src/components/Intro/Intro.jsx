import React, { useEffect, useRef } from 'react';
import "./intro.scss";
import { init } from 'ityped';

export default function Intro() {

  const textRef = useRef()

  useEffect(()=>{
    console.log(textRef)
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      backSpeed: 60,
      strings: ['Web Developer', 'Graphic Designer', 'Photographer']
    })
  },[])

  return (
    <div className="intro" id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profilePicSmall.jpg" alt='profile' />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there! I'm</h2>
          <h1>Omar Nava</h1>
          <h3>Freelance <span ref={textRef}> </span></h3>
        </div>
        <a href='#portfolio'>
          <img src='assets/arrow.png' alt='down arrow' />
        </a>
      </div>
    </div>
  )
}
