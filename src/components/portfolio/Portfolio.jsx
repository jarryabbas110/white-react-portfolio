import React, { useState } from 'react';
import "./portfolio.css";
import Menu from './Menu';
import ui from "../../assets/ui 1/Chef.jpg"
import ui2 from "../../assets/ui 2/Landing Page.jpg"
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'


const react = [
    {
      id: 60,
      image: IMG1,
      title: 'Testing',
      category: 'React',
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Testing',
      category: 'React',
      github: 'https://github.com',
      demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
    },
    {
        id: 3,
        image: IMG1,
        title: 'Testing',
        category: 'React',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
      },
      {
        id: 4,
        image: IMG2,
        title: 'Testing',
        category: 'React',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
      }
  ]
  
  const design = [
    {
      id: 1,
      image: ui,
      title: 'Blog Site',
      category: 'Design',
      behance: 'https://github.com'
    },
    {
      id: 12,
      image: ui2,
      title: 'Shoes Store',
      category: 'Design',
      behance: 'https://github.com'
    }
  ]

    const Portfolio = () => {
    const[items, setItems] = useState(Menu);
    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categoryItem;
        });
        setItems(updatedItems);
    }

  return (
    <section className="work section" id='portfolio'>
        <h2 className="section__title">Recent Works</h2>
        <span className="section__subtitle">My Portfolio</span>

        {/* <div className="work__filters">
            <span className="work__item" onClick={()=> setItems(Menu) && setItems2(design)}>All</span>
            <span className="work__item" onClick={()=> filterItem("React")}>React</span>
            <span className="work__item" onClick={()=> filterDesign("Design")}>Design</span>
            <span className="work__item" onClick={()=> filterDesign("Wordpress")}>Wordpress</span>

        </div> */}

        <div className="work__container grid">
        {react.map(({id, image, title, category, github, demo}) => {
        return(
                <div className="work__card" key={id}>
                    <div className="work__thumbnail">
                        <img src={image} alt="" className='work__img' />
                        <div className="work__mask"></div>
                    </div>

                    <span className='work__category'>{category}</span>
                    <h3 className='work__title'>{title}</h3>
                    <a href={demo} className="work__button">
                        <i className="uil uil-link-alt work__button-icon"></i>
                    </a>
                    <a href={github} className="work__button2">
                        <i className="uil uil-github work__button-icon"></i>
                    </a>
                </div>
            )
        })}

                {design.map(({id, image, title, category, behance}) => {
                return(
                <div className="work__card" key={id}>
                    <div className="work__thumbnail">
                        <img src={image} alt="" className='work__img' />
                        <div className="work__mask"></div>
                    </div>

                    <span className='work__category'>{category}</span>
                    <h3 className='work__title'>{title}</h3>
                    <a href={behance} className="work__button">
                        <i className="uil uil-link-alt work__button-icon"></i>
                    </a>
                    
                </div>
            )
        })}

        
        </div>
    </section>
  )
}

export default Portfolio