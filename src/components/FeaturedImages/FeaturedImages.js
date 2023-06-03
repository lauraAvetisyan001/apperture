import React, {useState} from 'react';
import '../FeaturedImages/FeaturedImages.css';
import starImg from '../../assets/img/starfall.png';
import mountImg from '../../assets/img/mount.png';
import leafsImg from '../../assets/img/leafs.png';
import Footer from '../Footer/Footer';

const FeaturedImages = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const imagesInfo = {
        url: [leafsImg, mountImg, starImg],
        name: ['Monstera Leafs', 'Sunset at Mount Fuji', 'Star fall in the Himalayas'],
        description: ['Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.', 'Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.', 'Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.'],
        iconsItems: [['1/2000s', 'f/3,5', '100', 'Costa Rica'], ['1“', 'f/16', '400', 'Japan'], ['6"', 'f/11', '800', 'Nepal']]
        }

    const images = imagesInfo.url;

    const goToNextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const goToPrevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className='featured_images_container'>
            <div className='slider'>
                <button className='prev_btn' onClick={goToPrevSlide}>Prev</button>
                    <img src={images[activeIndex]} alt='img'/>
                <div className='about_img'>
                    <p className='slider_name'>{imagesInfo.name[activeIndex]}</p>
                    <p className='slider_description'>{imagesInfo.description[activeIndex]}</p>
                </div>
                <button className='next_btn' onClick={goToNextSlide}>Next</button>
            </div>
            <Footer items={imagesInfo.iconsItems[activeIndex]}/>
        </div>
    );
};

export default FeaturedImages;