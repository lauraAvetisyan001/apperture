import React from 'react';
import '../Header/Header.css'
import apperture from '../../assets/img/apperture.png';
import { Link } from 'react-router-dom';


const Header = () => {

  const headerInfo = {
    navigationItems: ['Home', 'Business areas', 'Featured images', 'Gear cage', 'Contact'],
    urls: ['/', '/areas', '/images', '/cage', '/contact'],
  }

    return (
    <div className='container'>
        <div className='navigation_container'>
          <img src={apperture} alt='logo' className='logo'/>
          <ul className='navigation_items'>
            {headerInfo.navigationItems.map((item, index) => 
              <Link to={headerInfo.urls[index]} className='navigation_item'>{item}</Link>
            )}
            <Link to='/template' className='template_item'>Get template</Link>
          </ul>
        </div>
        
    </div>
    );
};

export default Header;