import React, {useState} from 'react';
import '../Contacts/Contacts.css';
import Popup from './Popup';

const Contacts = () => {
    const [popupActive, setPopupActive] = useState(false);

    function showPopup(){
        setPopupActive(true)
    }

    function hiddenPopup(){
        setPopupActive(false)
    }

    return (
        <div className='contacts_container'>
            <div className='title_container' style={popupActive ? {opacity: 0.1} : {}}>
                <p className='title'>Need help with photography or videography?</p>
                <p className='title_description'>We're here for you!</p>
                <button className='contacts_btn' onClick={showPopup}>Get in touch</button>
            </div>
            {popupActive ?  
            <Popup hiddenPopup={hiddenPopup}/> : null}
      
        </div>
    );
};

export default Contacts;