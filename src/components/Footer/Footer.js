import React from 'react';
import timer from '../../assets/img/timer.png';
import circle from '../../assets/img/circle.png';
import iso from '../../assets/img/iso.png';
import marker from '../../assets/img/marker.png';
import '../Footer/Footer.css';


const Footer = ({items}) => {

    const icons = {
    icon: [timer, circle, iso, marker],
    item: items
    }

   
    return (
        <div className='footer_container'>
            <div className='icons'>
                {icons.icon.map((icon, index) => (
                    <ul className='footer_items'>
                        <div key={index} className='iconsss'>
                            <img className="icon" src={icon} alt={icon} />
                            <li className='icon_item'>{icons.item[index]}</li>
                        </div>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default Footer;