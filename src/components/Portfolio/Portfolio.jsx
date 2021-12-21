import React, { useState } from 'react';
import "./portfolio.scss";
import PortfolioList from '../PortfolioList/PortfolioList';

export default function Portfolio() {

  const [selected, setSelected] = useState('web-development');
  
  const list = [
    {
      id: 'web-development',
      title: 'Web Development'
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design'
    },
    {
      id: 'photography',
      title: 'Photography'
    },
    {
      id: 'extra',
      title: 'Extra'
    }
  ]
  
  return (
    <div className="portfolio" id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {/* <li className='active'>Featured</li>      //code before it was made into component
        <li>Web Development</li>
        <li>Graphic Design</li>
        <li>Photography</li> */}
        {list.map((item) => (
          <PortfolioList 
          title={item.title} 
          active={selected === item.id} 
          setSelected={setSelected}
          id={item.id}
          />
        ))}
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
