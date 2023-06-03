import React from 'react';
import '../Areas/AreasPage.css';
import productImg from '../../assets/img/product.png';
import wildLifeImg from '../../assets/img/wildlife.png';
import droneImg from '../../assets/img/drone.png';
import architectureImg from '../../assets/img/architecture.png';


const AreasPage = () => {

    const areasInfo = {
        img: [productImg, wildLifeImg, droneImg, architectureImg],
        title: ['Product Photography', 'Architecture Photography', 'Drone Photography', 'Wildlife Photography'],
        description: ['Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.', 'Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec.', 'Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis.'],
    }

    return (
        <div className='areas_page_container'>
            <div className='areas_page_content'>
                <div className='areas_page_title'>
                    <p className='areas_title'>What we do.</p>
                    <p className='areas_specialized'>The areas that we're specialized in.</p>
                </div>
                <div className='areas_page_info'>
                    {areasInfo.img.map((item, index) => 
                        <div className='areas_page_photo'>
                            <img className='area_img' src={item} alt={item}/> 
                            <h1 className='area_title'>{areasInfo.title[index]}</h1>
                            <h3 className='area_description'>{areasInfo.description[index]}</h3>
                            <button className='area_btn'>Read more</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
        
    );
};

export default AreasPage;