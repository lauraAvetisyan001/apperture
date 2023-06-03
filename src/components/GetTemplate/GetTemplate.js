import React from 'react';
import Popup from '../Contacts/Popup';
import '../GetTemplate/GetTemplate.css';

const GetTemplate = () => {

    function hiddenPopup(){}

    return (
        <div className='template_content'>
            <Popup hiddenPopup={hiddenPopup}/>
        </div>
    );
};
export default GetTemplate;