import React from 'react';
import '../HomePage/HomePage.css';
import Footer from '../Footer/Footer';

const HomePage = () => {
    const iconsItems = ['1/2000s', 'f/11', '100', 'Iceland'];

    return (
        <div>
            <div className='home_page_container'>
                <div className='content'>
                    <h3 className='item'>Photographer & Filmmaker</h3>
                    <h1 className='content_item'>Aperture Studios</h1>
                    <h5 className='content_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</h5>
                </div>
            </div>
            <Footer items={iconsItems}/>
      </div>

    );
};

export default HomePage;