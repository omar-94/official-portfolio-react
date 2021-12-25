import React, { useEffect, useState } from 'react';
import "./portfolio.scss";
import PortfolioList from '../PortfolioList/PortfolioList';
import { webDevPorftolio, graphicDesignPortfolio, photographyPortfolio } from '../../portfolioData';

export default function Portfolio() {

  const [selected, setSelected] = useState('web-development');    //useState to set current selection's id of submenu .. default to 'web-development'
  const [data, setData] = useState([])       //useState to hold current data selected to be displayed... set up as empty array as different OBJECTS will be passed
  
  const listMenu = [                //list of different portfolios
    {                           //creates submenu in portfolio page  
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
    }
  ]

  useEffect(() => {
    switch(selected){       //selected depending on below to see which from id list above is selected to match case and data
      case 'web-development':
        setData(webDevPorftolio);   //whichever id is selected... Data is set from portfolioData.js
        break;
      case 'graphic-design':
        setData(graphicDesignPortfolio);
        break;
      case 'photography':
        setData(photographyPortfolio);
        break;   
        default:
          setData(webDevPorftolio)
    }
  }, [selected])        //dependency: when selected is change useEffect fires

  
  return (
    <div className="portfolio" id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {/* <li className='active'>Featured</li>      //code before it was made into component
        <li>Web Development</li>
        <li>Graphic Design</li>
        <li>Photography</li> */}
        {listMenu.map((item) => (
          <PortfolioList 
            title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected}       //setSelected here comes from useState() where selected(above) is updated to equal item.id 
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((dataDetails) => (                  //maps each object of data(from useState) and sets parameter as 'dataDetails'
          <div className='item'>
            <img src={dataDetails.img} alt="" width="300" height="150" />
            <h3>{dataDetails.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

