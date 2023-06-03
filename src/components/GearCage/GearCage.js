import React from 'react';
import '../GearCage/GearCage.css';
import square from '../../assets/img/square.png';
import gearCageImg from '../../assets/img/gearcage.png';
import Footer from '../Footer/Footer';


const GearCage = () => {

    const iconsItems = ['0,8"', 'f/5,6', '100', 'Sweden'];
    
    return (
        <div className='gear_cage_container'>
            <div className='gear_cage_content'>
                <img src={square} alt='square'/>
                <img src={gearCageImg} alt='img' className='gear_cage_img'/>
                <Footer items={iconsItems}/>
                <div className='about_gear_cage'>
                    <p className='gear_cage_name'>The Gear cage</p>
                    <p className='gear_cage_title'>The tools that we use.</p>
                    <p className='gear_cage_description'>The say that "no place is boring if you've had a good night's sleep and have a pocket full of unexposed film". While we don't shoot (a lot) of film these days — these are the tools that we actually use everyday to capture the amazing things around us.</p>
                    <button className='gear_cage_btn'>Check it out</button>
                </div>
            </div>
            
        </div>
    );
};

export default GearCage;