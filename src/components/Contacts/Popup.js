import React from 'react';
import '../Contacts/Popup.css';


const Popup = ({hiddenPopup}) => {

    return (
        <div className='contacts_popup'>
            <div className='popup_content'>
                <p className='popup_title'>Fill in and we will call you back!</p>
                <input placeholder='First Name'/>
                <input placeholder='Last Name'/>
                <input placeholder='Number'/>
                <button className='contacts_btn' onClick={hiddenPopup}>Send</button>
            </div>
        </div>
    );
};

export default Popup;