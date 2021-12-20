import React from 'react';
import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        <li className='active'>Featured</li>
        <li>Web Development</li>
        <li>Graphic Design</li>
        <li>Photography</li>
      </ul>
      <div className="container">
        <div className='item'>
          <img src="https://i.ytimg.com/vi/E1GDVMAwdN4/maxresdefault.jpg" alt="web ui" width="300" height="150" />
          <h3>Web Application</h3>
        </div>
        <div className='item'>
          <img src="https://i.ytimg.com/vi/E1GDVMAwdN4/maxresdefault.jpg" alt="web ui" width="300" height="150" />
          <h3>Web Application</h3>
        </div>
        <div className='item'>
          <img src="https://i.ytimg.com/vi/E1GDVMAwdN4/maxresdefault.jpg" alt="web ui" width="300" height="150" />
          <h3>Web Application</h3>
        </div>
        <div className='item'>
          <img src="https://i.ytimg.com/vi/E1GDVMAwdN4/maxresdefault.jpg" alt="web ui" width="300" height="150" />
          <h3>Web Application</h3>
        </div>
      </div>
    </div>
  )
}
